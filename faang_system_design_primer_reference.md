# System Design Primer Reference

A dense reference doc, not a checklist — this is the substance of [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) (CC BY 4.0), re-derived from a full read of the repo and condensed to cut everything that wasn't educational content: the Anki-deck pitch, the contributing guide, the five-times-repeated "Additional talking points" footer glued onto every case study, the 40-row company-blog link dump, translations, and diagrams that don't render as prose. What's left is the actual model of how the pieces fit together, plus every code example the repo ships, so you can read this top to bottom the way you'd read a textbook chapter instead of clicking through a wiki.

Two parts: **Part 1** is the vocabulary — the tradeoffs and components every system design answer draws on. **Part 2** is eight worked case studies and six object-oriented design solutions that show the vocabulary applied, with the actual reference code inline.

For the ladder-style practice sheet (drills, scorecards, the 45-minute template), see `faang_system_design_technical_mastery.md` in the repo root. This file is what you read to build the mental model; that file is what you drill against it.

---

## Part 1: The Vocabulary

### How to approach the interview

The system design interview is an open-ended conversation you're expected to lead.

1. **Outline use cases, constraints, and assumptions.** Who's using it, how many users, what's the read/write ratio, what's explicitly out of scope. Don't skip this — everything downstream is a response to numbers established here.
2. **Create a high-level design.** Sketch the main components and connections, justify each one before adding the next.
3. **Design core components.** For each core piece — say, generating and storing a shortened URL — go deep: data structures, algorithms, the actual schema, the actual API.
4. **Scale the design.** Identify bottlenecks given the constraints from step 1, and address them: load balancer, horizontal scaling, caching, sharding. Everything is a trade-off — state the trade-off, don't just name-drop the component.

**Back-of-the-envelope calculations.** You'll often be asked to estimate by hand — how long to generate 100 thumbnails, how much memory a structure needs. Two references make this fast: the powers-of-two table and the latency numbers table, both in the Appendix below. Internalize them; recomputing them live burns interview time.

### Performance vs. scalability

A service is **scalable** if performance increases proportionally to resources added.

- Performance problem: your system is slow for a single user.
- Scalability problem: your system is fast for a single user but slow under heavy load.

### Latency vs. throughput

**Latency** is the time to perform one action. **Throughput** is the number of actions per unit time. Aim for maximal throughput with *acceptable* latency — not minimal latency at all costs.

### Availability vs. consistency (CAP theorem)

In a distributed system you can only support two of three guarantees:

- **Consistency** — every read receives the most recent write or an error.
- **Availability** — every request receives a response, with no guarantee it's the latest data.
- **Partition tolerance** — the system keeps operating despite arbitrary network partitioning.

Networks aren't reliable, so partition tolerance isn't optional — the real choice is CP vs. AP.

- **CP (consistency + partition tolerance):** a partitioned node times out rather than returning stale data. Good when you need atomic reads/writes.
- **AP (availability + partition tolerance):** every node returns the most readily available version, which might not be latest; writes propagate once the partition heals. Good when the business can tolerate eventual consistency, or the system must stay up despite failures.

### Consistency patterns

- **Weak consistency** — after a write, reads may or may not see it (best-effort). Seen in memcached; fine for VoIP, video chat, realtime multiplayer, where losing a few seconds of state is invisible.
- **Eventual consistency** — after a write, reads *eventually* see it, typically within milliseconds, via async replication. Seen in DNS and email; works well for highly-available systems.
- **Strong consistency** — after a write, reads see it immediately via synchronous replication. Seen in filesystems and RDBMSes; needed wherever you need transactions.

### Availability patterns

**Fail-over:**
- *Active-passive* — heartbeats between active and standby; if the heartbeat drops, the passive server takes over the active's IP. Downtime depends on hot vs. cold standby. Also called master-slave failover.
- *Active-active* — both servers handle traffic, load spread between them. DNS (public-facing) or app logic (internal-facing) needs to know both IPs. Also called master-master failover.
- Disadvantages: more hardware and complexity; potential data loss if the active fails before replicating newly-written data to the passive.

**Replication** — see Database section below for master-slave/master-master mechanics.

**Availability in numbers** — availability is usually quantified as uptime/downtime percentage, described by its count of 9s:

| Duration | 99.9% (three 9s) | 99.99% (four 9s) |
|---|---|---|
| Downtime per year | 8h 45min 57s | 52min 35.7s |
| Downtime per month | 43m 49.7s | 4m 23s |
| Downtime per week | 10m 4.8s | 1m 5s |
| Downtime per day | 1m 26.4s | 8.6s |

Components **in sequence** multiply availabilities down (two 99.9% components in series = 99.8% combined, via `A(Total) = A(Foo) * A(Bar)`); components **in parallel** multiply unavailability down instead (two 99.9% components in parallel = 99.9999% combined, via `A(Total) = 1 - (1-A(Foo))(1-A(Bar))`).

### Domain name system (DNS)

Translates a domain name to an IP address. Hierarchical: your router/ISP knows which DNS servers to hit first; lower-level servers cache mappings (subject to propagation delay and TTL-bounded browser/OS caching).

- **NS record** — the DNS servers for your domain.
- **MX record** — the mail servers.
- **A record** — name → IP address.
- **CNAME** — name → another name or A record.

Managed DNS (Route 53, Cloudflare) can route via weighted round robin, latency-based, or geolocation-based policies. Downsides: adds a lookup delay (mitigated by caching), DNS management complexity, and DNS itself is a DDoS target.

### Content delivery network (CDN)

A globally distributed network of proxy servers serving content from locations near the user. Improves performance two ways: users hit a nearby data center, and your origin servers don't have to serve requests the CDN absorbs.

- **Push CDN** — you upload content directly and rewrite URLs to point at it; you control expiry/update timing. Good for low-traffic sites or rarely-changing content, since content is placed once instead of re-pulled.
- **Pull CDN** — the CDN grabs content from your server on first request, cached until TTL expires. Good for high-traffic sites; traffic spreads evenly and only recently-requested content stays cached. First request after expiry is slower.
- Downsides: cost at scale, staleness before TTL expiry, and URLs must be rewritten to point at the CDN.

### Load balancer

Distributes incoming requests across application servers/databases, returning each response to the right client. Effective at: keeping requests off unhealthy servers, preventing resource overload, eliminating a single point of failure. Implementable in hardware (expensive) or software (HAProxy, NGINX).

Additional benefits: **SSL termination** (decrypt/encrypt at the LB so backends skip the cost, and certs live in one place) and **session persistence** (route a client's requests to the same backend instance via cookies, for apps that don't externalize session state).

Routing metrics: random, least-loaded, session/cookie, round robin, or by OSI layer:

- **Layer 4** — routes on transport-layer info (source/dest IP, port), not packet contents; performs NAT. Cheaper.
- **Layer 7** — routes on application-layer info (headers, message, cookies); terminates the connection, reads the message, then opens a new connection to the chosen server. More flexible (e.g., route video traffic differently from billing traffic), costs more compute.

**Horizontal scaling** via the load balancer is more cost-efficient and more available than vertical scaling a single expensive box, and it's easier to hire for commodity hardware. Cost: servers must become stateless (sessions live in a shared DB or cache, not on the instance), and downstream caches/DBs need to handle more simultaneous connections as you add upstream servers. The load balancer itself becomes a new single point of failure unless you run multiple (active-active or active-passive), which adds its own complexity.

### Reverse proxy (web server)

Centralizes internal services behind one public interface — forwards client requests to a backend, returns the backend's response to the client. Useful even with a single backend server, unlike a load balancer.

Benefits: hides backend topology and blacklists IPs (**security**); clients only see the proxy's IP so you can reconfigure backends freely (**scalability/flexibility**); **SSL termination**; **compression**; **caching**; serving **static content** directly. NGINX and HAProxy can do both reverse-proxying and load balancing. Downside: another single point of failure unless you run multiple.

### Application layer

Separating the web layer from the application/platform layer lets you scale and configure each independently — a new API means adding app servers, not necessarily web servers. This is the single-responsibility principle applied at the service level; small autonomous services let small teams plan for rapid, independent growth. Workers in this layer also enable asynchronism.

**Microservices** — independently deployable, small, modular services, each its own process, communicating over a lightweight mechanism toward one business goal. (Pinterest, for example: user profile, follower, feed, search, photo-upload as separate services.)

**Service discovery** — Consul, Etcd, Zookeeper track registered names/addresses/ports so services can find each other, usually verified via HTTP health checks. Consul and Etcd also ship a built-in key-value store useful for shared config.

Downsides: an architecture of loosely-coupled services demands a different ops/deployment model than a monolith, and microservices add real deployment/operational complexity.

### Database

**RDBMS.** A relational database is a collection of tables. **ACID** describes its transaction guarantees: **A**tomicity (all-or-nothing), **C**onsistency (valid state → valid state), **I**solation (concurrent transactions behave as if serial), **D**urability (a committed transaction stays committed).

Scaling techniques:

- **Master-slave replication** — master serves reads+writes, replicates to slaves that serve reads only; slaves can chain to further slaves. If the master dies, the system degrades to read-only until a slave is promoted. Downside: needs promotion logic, plus the general replication downsides below.
- **Master-master replication** — both masters serve reads+writes and coordinate on writes; either can die without taking down writes. Downside: needs a load balancer or app-level write routing; usually either loosely consistent (violating ACID) or pays higher write latency for synchronization; conflict resolution gets harder as write nodes increase.
- **Replication downsides (both):** potential data loss if the master dies before replicating a write; read replicas replaying writes have less capacity left for reads; more read slaves means more replication lag; replication is more hardware and complexity.
- **Federation (functional partitioning)** — split one monolithic DB into several by function (forums / users / products), cutting read+write traffic and replication lag per DB, improving cache locality from smaller working sets, and allowing parallel writes since there's no single serializing master. Downside: doesn't help if one function's table is itself huge; app logic must route to the right DB; cross-database joins need a server link; more hardware and complexity.
- **Sharding** — distribute rows of *the same table* across databases by some shard key (e.g. last-name initial, geography), so each shard holds a subset. Same benefits as federation (less traffic, less replication, more cache hits, smaller indexes, faster queries) plus parallel writes; if one shard dies the others stay up (add replication per-shard to avoid loss). Downside: app logic must target the right shard (more complex SQL); load can go lopsided if a shard collects power users (consistent hashing helps rebalancing); cross-shard joins are harder; more hardware and complexity.
- **Denormalization** — trade write performance for read performance by writing redundant copies across tables to avoid expensive joins (some RDBMSes offer materialized views to manage this automatically). Worth it once reads outnumber writes 100:1 or 1000:1 and a join is expensive; becomes necessary once federation/sharding make cross-node joins costly. Downside: duplicated data, constraints to keep copies in sync, and a denormalized schema can underperform its normalized counterpart under heavy write load.
- **SQL tuning** — benchmark (simulate load, e.g. with `ab`) and profile (e.g. slow query log) before optimizing blindly. Concrete levers: `CHAR` over `VARCHAR` for fixed-length fields (fast random access vs. needing to find the string's end first); `TEXT` for large blocks; `INT` up to 2^32; `DECIMAL` for currency (avoids float rounding errors); avoid storing BLOBs, store a pointer instead; `NOT NULL` where applicable (nulls slow search); good indices on every `SELECT`/`GROUP BY`/`ORDER BY`/`JOIN` column (self-balancing B-trees, logarithmic search/insert/delete, but more write cost to keep updated and more memory to hold in RAM — consider disabling during bulk loads and rebuilding after); denormalize to avoid expensive joins; partition hot rows into a separate table to keep them in memory; watch for query-cache-induced pathologies.

**NoSQL** — data as key-value, document, wide-column, or graph; denormalized, joins pushed to app code, most stores trade ACID for eventual consistency (see Consistency patterns above). **BASE** (Basically Available, Soft state, Eventual consistency) is the NoSQL analogue of ACID, choosing availability over consistency in CAP terms.

- **Key-value store** (abstraction: hash table) — O(1) reads/writes, memory- or SSD-backed, keys often kept in lexicographic order for range scans. High performance, simple data model, good for rapidly-changing data (in-memory cache layer). Complexity shifts to the app layer since the operation set is limited. Basis for more complex stores (document, sometimes graph).
- **Document store** (abstraction: key-value store with documents as values) — organizes self-describing documents (XML/JSON/binary) by collection/tag/metadata/directory; documents in the same collection can have different fields. MongoDB/CouchDB add SQL-like query languages; DynamoDB supports both key-value and document access. High flexibility, good for occasionally-changing data.
- **Wide column store** (abstraction: `ColumnFamily<RowKey, Columns<ColKey, Value, Timestamp>>`) — basic unit is a column (name/value pair), grouped into column families (≈ SQL tables), accessed by row key; each value carries a timestamp for versioning/conflict resolution. Bigtable (Google) → HBase (open source, Hadoop ecosystem) and Cassandra (Facebook) are the lineage. High availability and scalability, suited to very large datasets.
- **Graph database** (abstraction: graph) — each node is a record, each arc a relationship. Optimized for complex, many-to-many relationships (social networks). Newer, smaller ecosystem, often REST-API-only access.

**SQL vs. NoSQL** — pick SQL when: structured data, strict schema, relational data, complex joins, transactions, clear established scaling patterns, fast index lookups. Pick NoSQL when: semi-structured or dynamic-schema data, non-relational, no complex joins needed, TB/PB scale, very data-intensive or very high-IOPS workloads. NoSQL fits well: clickstream/log ingest, leaderboards, shopping-cart-style temporary data, frequently-accessed "hot" tables, metadata/lookup tables.

### Cache

Caching improves load times and reduces load on servers/DBs by checking for a previously-computed result before doing the work again. Databases benefit from evenly-distributed reads/writes; popular items skew that distribution and a cache absorbs the resulting spikes.

Where to cache: client (OS/browser), CDN, web server (reverse proxy), database (default tuning, but tunable further), or application (in-memory Memcached/Redis between app and storage — much faster than disk-backed DBs since RAM-resident, but RAM is scarcer so an eviction policy like LRU matters). Redis adds persistence and richer built-in structures (sorted sets, lists) on top of plain key-value.

What to cache — **query-level** (hash the query as the key; hard to invalidate precisely, since one changed cell can invalidate many cached queries) vs. **object-level** (cache the assembled application object, invalidate when its underlying data changes; enables async assembly by workers). Good object candidates: user sessions, fully-rendered pages, activity streams, user graph data. Avoid file-based caching — it fights cloning and autoscaling.

**When to update the cache:**

- **Cache-aside** (lazy loading) — app checks cache, on miss loads from DB and populates cache, returns. Only requested data ever gets cached. Used by Memcached.

  ```python
  def get_user(self, user_id):
      user = cache.get("user.{0}", user_id)
      if user is None:
          user = db.query("SELECT * FROM users WHERE user_id = {0}", user_id)
          if user is not None:
              key = "user.{0}".format(user_id)
              cache.set(key, json.dumps(user))
      return user
  ```

  Downsides: each miss costs three trips (cache, DB, cache-write); data can go stale until TTL or a write-through forces refresh; a failed node comes back empty and adds latency until repopulated.

- **Write-through** — app writes to the cache; the cache is synchronously responsible for persisting to the DB.

  ```python
  # application code
  set_user(12345, {"foo": "bar"})

  # cache code
  def set_user(user_id, values):
      user = db.query("UPDATE Users WHERE id = {0}", user_id, values)
      cache.set(user_id, user)
  ```

  Slower writes, but subsequent reads of just-written data are fast and never stale. Users tolerate write latency better than read latency. Downside: a new node from failover/scaling won't have entries cached until each is next written (mitigate by pairing with cache-aside); most written data may never be read (mitigate with TTL).

- **Write-behind (write-back)** — update the cache, then asynchronously persist to the DB. Faster writes, but risks data loss if the cache dies before flushing, and is more complex to implement than the two above.

- **Refresh-ahead** — proactively refresh a recently-accessed entry before its TTL expires. Can beat cache-aside's latency if the access-prediction is accurate; hurts otherwise.

General cache downsides: invalidation is a genuinely hard problem, correctness now depends on staying in sync with the source of truth, and it's an extra moving part in the architecture.

### Asynchronism

Async workflows keep expensive work off the request's critical path, and let you front-load work that can happen ahead of time (periodic aggregation, etc).

**Message queues** — receive, hold, and deliver messages. Flow: the app publishes a job and tells the user its status; a worker pulls the job, processes it, signals completion. The user isn't blocked (post a tweet: it appears on your own timeline instantly even though delivery to followers takes longer). Redis works as a simple broker but can lose messages; RabbitMQ is popular but ties you to AMQP and self-managed nodes; SQS is hosted but higher-latency and can double-deliver.

**Task queues** — receive tasks + data, run them, return results; support scheduling, good for background compute-heavy jobs. Celery is the common Python choice.

**Back pressure** — if a queue grows past memory, you get cache misses, disk reads, and cascading slowdown. Cap the queue size and return 503/"server busy" once full, with clients retrying via exponential backoff, rather than letting the queue balloon.

Downside: inexpensive, realtime operations are often a worse fit for async — the queue adds delay and complexity for no payoff.

### Communication

**HTTP** — request/response protocol between client and server; self-contained so requests/responses can pass through load balancers, caches, and encryption/compression layers along the way.

| Verb | Description | Idempotent | Safe | Cacheable |
|---|---|---|---|---|
| GET | Reads a resource | Yes | Yes | Yes |
| POST | Creates a resource, or triggers a data-handling process | No | No | If response has freshness info |
| PUT | Creates or replaces a resource | Yes | No | No |
| PATCH | Partially updates a resource | No | No | If response has freshness info |
| DELETE | Deletes a resource | Yes | No | No |

HTTP is an application-layer protocol riding on TCP or UDP.

**TCP** — connection-oriented, handshake-established; guarantees in-order, uncorrupted delivery via sequence numbers/checksums and ack+retransmit. Implements flow and congestion control. These guarantees cost efficiency relative to UDP. Web servers keeping many open TCP connections costs memory; connection pooling helps. Use TCP when you need every byte intact and want the OS's best-effort throughput estimate — web servers, DB traffic, SMTP, FTP, SSH.

**UDP** — connectionless; only datagram-level delivery is guaranteed (no ordering, no guaranteed arrival, no congestion control), which is exactly what makes it more efficient than TCP. Supports broadcast (useful for DHCP before a client has an IP). Use UDP when you need the lowest latency, late data is worse than lost data, or you'll implement your own error correction — VoIP, video chat, streaming, realtime multiplayer.

**RPC** — client calls a procedure that actually executes on a remote address space, coded to look like a local call. Popular frameworks: Protobuf, Thrift, Avro. Flow: client stub marshals the call into a request message → OS ships it → server stub unmarshals and dispatches → response repeats the steps in reverse. RPC exposes *behaviors*, and is common for internal communication where you can hand-craft calls to fit your use case tightly. Downsides: tight coupling between client and service implementation; a new API per new operation; harder to debug than local calls; existing HTTP tooling (e.g. caching proxies like Squid) may need extra work to cooperate with RPC.

**REST** — architectural style enforcing a client/server model where the client acts on server-managed resources; all communication is stateless and cacheable. Four qualities: identify resources via URI regardless of operation; change state via HTTP verbs/headers/body; self-descriptive errors via status codes; HATEOAS (the API should be browsable). REST exposes *data*, minimizes client/server coupling, and is the default for public HTTP APIs — stateless-by-design makes it a natural fit for horizontal scaling and partitioning. Downsides: awkward when resources aren't naturally hierarchical (e.g. "all records updated in the last hour matching event X" doesn't map cleanly to a path); the five verbs don't always fit the operation (archiving expired documents isn't obviously any of them); nested resources need multiple round trips to assemble one view (costly on flaky mobile networks); response payloads tend to grow over time as fields accumulate, and old clients pay the bloat even for fields they never asked for.

| Operation | RPC | REST |
|---|---|---|
| Signup | `POST /signup` | `POST /persons` |
| Resign | `POST /resign {"personid":"1234"}` | `DELETE /persons/1234` |
| Read a person | `GET /readPerson?personid=1234` | `GET /persons/1234` |
| Read a person's items | `GET /readUsersItemsList?personid=1234` | `GET /persons/1234/items` |
| Add an item | `POST /addItemToUsersItemsList {...}` | `POST /persons/1234/items {...}` |
| Update an item | `POST /modifyItem {...}` | `PUT /items/456 {...}` |
| Delete an item | `POST /removeItem {"itemid":"456"}` | `DELETE /items/456` |

### Security (the basics)

Unless the role specifically needs security depth: encrypt in transit and at rest; sanitize all user input and any input exposed to a user to prevent XSS and SQL injection; use parameterized queries (never string-concatenate SQL); apply the principle of least privilege everywhere.

### Appendix

**Powers of two:**

```
Power           Exact Value         Approx Value        Bytes
---------------------------------------------------------------
7                             128
8                             256
10                           1024   1 thousand           1 KB
16                         65,536                       64 KB
20                      1,048,576   1 million            1 MB
30                  1,073,741,824   1 billion            1 GB
32                  4,294,967,296                        4 GB
40              1,099,511,627,776   1 trillion           1 TB
```

**Latency numbers every programmer should know:**

```
L1 cache reference                           0.5 ns
Branch mispredict                            5   ns
L2 cache reference                           7   ns                      14x L1 cache
Mutex lock/unlock                           25   ns
Main memory reference                      100   ns                      20x L2 cache, 200x L1 cache
Compress 1K bytes with Zippy            10,000   ns       10 us
Send 1 KB bytes over 1 Gbps network     10,000   ns       10 us
Read 4 KB randomly from SSD*           150,000   ns      150 us          ~1GB/sec SSD
Read 1 MB sequentially from memory     250,000   ns      250 us
Round trip within same datacenter      500,000   ns      500 us
Read 1 MB sequentially from SSD*     1,000,000   ns    1,000 us    1 ms  ~1GB/sec SSD, 4X memory
HDD seek                            10,000,000   ns   10,000 us   10 ms  20x datacenter roundtrip
Read 1 MB sequentially from 1 Gbps  10,000,000   ns   10,000 us   10 ms  40x memory, 10X SSD
Read 1 MB sequentially from HDD     30,000,000   ns   30,000 us   30 ms 120x memory, 30X SSD
Send packet CA->Netherlands->CA    150,000,000   ns  150,000 us  150 ms
```

Handy derived metrics: HDD ≈ 30 MB/s sequential; 1 Gbps Ethernet ≈ 100 MB/s sequential; SSD ≈ 1 GB/s sequential; main memory ≈ 4 GB/s sequential; ~6-7 world-wide round trips per second; ~2,000 round trips per second within a datacenter.

**Other common interview questions**, beyond the eight worked in Part 2 — worth recognizing the shape of, even without a full worked solution here: a file sync service (Dropbox), a search engine (Google), a scalable web crawler (Google), a collaborative doc editor (Google Docs), a key-value store (Redis), a cache system (Memcached), a recommendation system (Amazon), a chat app (WhatsApp), a picture-sharing system (Instagram), the Facebook news feed, the Facebook timeline, the Facebook chat function, a graph-search function (Facebook), a CDN (CloudFlare), a trending-topics system (Twitter), a random ID generation system (Twitter Snowflake), "return the top K requests during a time interval," a system serving data from multiple data centers, an online multiplayer card game, a garbage collector, an API rate limiter, and a stock exchange (NASDAQ/Binance-style matching engine).

---

## Part 2: Case Studies

Each case study below follows the same shape: use cases + constraints → high-level design → core-component deep dive with real code → the specific bottlenecks that design hits and how to address them. The generic "which cache eviction policy, which CDN, which REST verb" discussion isn't repeated per case study — that's all in Part 1. What's kept here is what's *specific* to each problem: the schema, the estimate, the code, the bottleneck that's unique to this system.

### Design Pastebin.com (or Bit.ly)

*Design Bit.ly is the same question, except Pastebin stores the paste contents rather than an original unshortened URL.*

**Use cases in scope:** user submits text and gets a random link back (optionally with expiration); user visits a link and sees the content; anonymous only; service tracks monthly view analytics; service deletes expired pastes.

**Constraints:** 10M users, 10M paste writes/month, 100M paste reads/month (10:1 read:write). ~1.27 KB per paste (1 KB content + `shortlink`/`expiration_length_in_minutes`/`created_at`/`paste_path` metadata) → ~12.7 GB new content/month, ~450 GB over 3 years, 360M shortlinks over 3 years. Averages to 4 writes/sec, 40 reads/sec.

**Core design.** A relational `pastes` table acts as a big hash table from shortlink to a path/object-store location:

```sql
shortlink char(7) NOT NULL
expiration_length_in_minutes int NOT NULL
created_at datetime NOT NULL
paste_path varchar(255) NOT NULL
PRIMARY KEY(shortlink)
```

`shortlink` as primary key gives you a uniqueness-enforcing index for free; add an index on `created_at` for fast, memory-resident lookups.

To generate the shortlink: MD5-hash (IP + timestamp, or random data), Base62-encode the hash (`[a-zA-Z0-9]` needs no URL escaping, unlike Base64's `+`/`/`), take the first 7 characters — `62^7` possible values comfortably covers 360M shortlinks over 3 years.

```python
def base_encode(num, base=62):
    digits = []
    while num > 0:
        remainder = modulo(num, base)
        digits.push(remainder)
        num = divide(num, base)
    digits = digits.reverse

url = base_encode(md5(ip_address + timestamp))[:URL_LENGTH]
```

Write path: client → web server (reverse proxy) → Write API, which generates a unique url (retry on collision), saves the `pastes` row, saves paste content to an object store, returns the url. Read path: client → web server → Read API, which looks up the SQL row, then fetches content from the object store.

```
$ curl -X POST --data '{ "expiration_length_in_minutes": "60", "paste_contents": "Hello World!" }' https://pastebin.com/api/v1/paste
→ { "shortlink": "foobar" }

$ curl https://pastebin.com/api/v1/paste?shortlink=foobar
→ { "paste_contents": "Hello World", "created_at": "...", "expiration_length_in_minutes": "60" }
```

Analytics aren't realtime, so MapReduce the web server logs for hit counts instead of tracking them inline:

```python
class HitCounts(MRJob):

    def mapper(self, _, line):
        """(2016-01, url0), 1 / (2016-01, url0), 1 / (2016-01, url1), 1"""
        url = self.extract_url(line)
        period = self.extract_year_month(line)
        yield (period, url), 1

    def reducer(self, key, values):
        """(2016-01, url0), 2 / (2016-01, url1), 1"""
        yield key, sum(values)
```

Expiration: periodically scan `pastes` for rows past their expiration timestamp and delete (or mark expired).

**The bottleneck that's specific to this system:** at only 4 writes/sec and 40 reads/sec, a single SQL write-master with read replicas and a memory cache in front handles this comfortably — this design doesn't need sharding at the given scale. If growth changes that, federation/sharding/denormalization become the next lever (see Database, Part 1). The object store (S3-style) trivially absorbs 12.7 GB/month of paste content.

### Design the Twitter timeline and search (or Facebook feed and search)

*Design the Facebook feed and Design Facebook search are the same shape.*

**Use cases in scope:** post a tweet (fans out to followers, push/email); view own timeline; view home timeline (people you follow); search keywords.

**Constraints:** 100M active users, 500M tweets/day (15B/month), each tweet fans out to ~10 followers on average → 5B fanout-deliveries/day, 150B/month. 250B read requests/month, 10B searches/month. Tweet ≈ 10 KB average (140-byte text dwarfed by 10 KB average media) → 150 TB new content/month, 5.4 PB over 3 years. Derived rates: 100K reads/sec, 6,000 tweets/sec, **60,000 fanout-deliveries/sec**, 4,000 searches/sec.

**Core design — the fanout is the whole problem.** A relational DB is fine for a user's *own* timeline, but fanning a tweet out to every follower's home timeline at 60K deliveries/sec would overwhelm a traditional RDBMS — this needs a fast-write store (NoSQL or memory cache), not a stronger RDBMS.

Write path: client → web server → Write API stores the tweet in the author's own SQL timeline, then hands off to a **Fan Out Service**, which: looks up the author's followers (User Graph Service, cached in memory), writes the tweet into each follower's home-timeline cache — an O(n) operation (1,000 followers = 1,000 cache lookups+inserts) — indexes it for search, stores media in the object store, and queues push notifications asynchronously.

A Redis list is a natural fit for the per-user home timeline:

```
           tweet n+2                   tweet n+1                   tweet n
| 8 bytes   8 bytes  1 byte | 8 bytes   8 bytes  1 byte | 8 bytes   8 bytes  1 byte |
| tweet_id  user_id  meta   | tweet_id  user_id  meta   | tweet_id  user_id  meta   |
```

Read path (home timeline): Timeline Service reads tweet/user ids out of the memory cache in O(1), then does a multiget against Tweet Info and User Info services (O(n) each) to hydrate them.

```
$ curl -X POST --data '{ "user_id": "123", "auth_token": "ABC123", "status": "hello world!", "media_ids": "ABC987" }' https://twitter.com/api/v1/tweet
$ curl https://twitter.com/api/v1/home_timeline?user_id=123
```

Search: parse/tokenize the query (strip markup, break into terms, fix typos, normalize case, convert to boolean ops), scatter-gather it across the search cluster (Lucene-style), merge/rank/sort.

**The bottleneck that's specific to this system:** users with millions of followers can take minutes to fully fan out, which is long enough to create real @-reply race conditions (mitigate by re-ordering at serve time). The standard fix is to *stop* fanning out tweets from highly-followed accounts at write time — instead, search for their tweets at read time and merge into the home timeline on the fly. Further trims: keep only a few hundred tweets per home timeline in the cache; only cache active users' timelines (rebuild inactive users' timelines from SQL on demand by re-querying their follow graph); keep only ~a month of tweets in the Tweet Info service; keep the search cluster's index in memory to hold latency down.

### Design a web crawler

**Use cases in scope:** crawl a list of URLs, build a reverse index and static title/snippet per page; user searches and gets ranked results with titles/snippets (sketch only, no depth needed here).

**Constraints:** must not loop forever on a graph cycle. 1B links, refreshed roughly weekly (more often for popular sites) → 4B links crawled/month, 500 KB average stored page → 2 PB stored content/month, 72 PB over 3 years. 1,600 writes/sec, 40,000 search requests/sec. (Exercise says: build this from primitives, don't just say "use Solr/Nutch.")

**Core design.** `links_to_crawl` and `crawled_links` live in a key-value NoSQL store; `links_to_crawl` as a Redis sorted set gives you a ranked queue for free.

```python
class PagesDataStore(object):
    def __init__(self, db): self.db = db
    def add_link_to_crawl(self, url): ...
    def remove_link_to_crawl(self, url): ...
    def reduce_priority_link_to_crawl(self, url): ...   # avoids cycles
    def extract_max_priority_page(self): ...
    def insert_crawled_link(self, url, signature): ...
    def crawled_similar(self, signature): ...            # dedup by content signature


class Page(object):
    def __init__(self, url, contents, child_urls, signature):
        self.url, self.contents, self.child_urls, self.signature = \
            url, contents, child_urls, signature


class Crawler(object):
    def __init__(self, data_store, reverse_index_queue, doc_index_queue):
        self.data_store = data_store
        self.reverse_index_queue = reverse_index_queue
        self.doc_index_queue = doc_index_queue

    def crawl_page(self, page):
        for url in page.child_urls:
            self.data_store.add_link_to_crawl(url)
        page.signature = self.create_signature(page)
        self.data_store.remove_link_to_crawl(page.url)
        self.data_store.insert_crawled_link(page.url, page.signature)

    def crawl(self):
        while True:
            page = self.data_store.extract_max_priority_page()
            if page is None:
                break
            if self.data_store.crawled_similar(page.signature):
                self.data_store.reduce_priority_link_to_crawl(page.url)  # breaks the cycle
            else:
                self.crawl_page(page)
```

**The cycle problem is the core of this design.** The loop doesn't check "have I seen this exact URL" — it checks "have I seen a page whose *content signature* matches" (via Jaccard index or cosine similarity over page contents), which is what actually catches mirrors/redirect loops that a URL-only check would miss. Simple URL dedup at 1B-link scale is itself a MapReduce (`sort | unique` doesn't fit in memory at this size):

```python
class RemoveDuplicateUrls(MRJob):
    def mapper(self, _, line):
        yield line, 1

    def reducer(self, key, values):
        if sum(values) == 1:
            yield key, 1
```

Refresh policy: a `timestamp` field per crawled page; default refresh weekly, shorter for popular/frequently-updated sites (mine the update-frequency distribution from crawl history); optionally respect `robots.txt`.

**The bottleneck that's specific to this system:** popular queries get a memory cache in front of Reverse Index/Document services (uneven query popularity is the whole traffic-shape story here). DNS lookups are a per-crawl bottleneck — the crawler should keep its own periodically-refreshed DNS cache rather than paying a lookup per link. Connection pooling (and possibly UDP where it fits) helps the crawler hold many concurrent connections cheaply; bandwidth, not CPU, is usually the actual ceiling.

### Design Mint.com

**Use cases in scope:** connect a financial account; extract+categorize transactions daily (user can manually override category, no auto-recategorization); compute monthly spending by category; recommend and track a budget with threshold notifications.

**Constraints:** 10M users, 10 budget categories each (100M budget items *if* fully materialized — the design below avoids this), 50,000 sellers for category mapping, 30M linked accounts, 5B transactions/month, 500M reads/month, 10:1 write:read (this system is unusually write-heavy — users transact daily but visit rarely). Transaction ≈ 50 bytes → 250 GB new content/month, 9 TB over 3 years. ~2,000 writes/sec, ~200 reads/sec average.

**Core design.** `accounts` table:

```sql
id int NOT NULL AUTO_INCREMENT
created_at datetime NOT NULL
last_update datetime NOT NULL
account_url varchar(255) NOT NULL
account_login varchar(32) NOT NULL
account_password_hash char(64) NOT NULL
user_id int NOT NULL
PRIMARY KEY(id)
FOREIGN KEY(user_id) REFERENCES users(id)
```

Extraction happens on three triggers: first link, manual refresh, or the daily job for users active in the last 30 days. Extraction is slow enough to belong on a queue: Accounts API enqueues a job (SQS/RabbitMQ) → Transaction Extraction Service pulls it, extracts transactions to raw logs in the object store, categorizes each via the Category Service, rolls up monthly spend via the Budget Service (which fires notifications through the Notification Service), and writes both `transactions` and `monthly_spending` rows.

**Categorization — the specific trick here is avoiding per-user storage for a global mapping.** Seed a `seller → category` dictionary for the top sellers (50,000 sellers × <255 bytes ≈ 12 MB — trivially in-memory); for unseeded sellers, crowdsource from users' manual overrides using a heap to find the top override per seller in O(1):

```python
class Categorizer(object):
    def __init__(self, seller_category_map, seller_category_crowd_overrides_map):
        self.seller_category_map = seller_category_map
        self.seller_category_crowd_overrides_map = seller_category_crowd_overrides_map

    def categorize(self, transaction):
        if transaction.seller in self.seller_category_map:
            return self.seller_category_map[transaction.seller]
        elif transaction.seller in self.seller_category_crowd_overrides_map:
            self.seller_category_map[transaction.seller] = \
                self.seller_category_crowd_overrides_map[transaction.seller].peek_min()
            return self.seller_category_map[transaction.seller]
        return None
```

**Budgets — same trick, avoid materializing what you can compute from a template.** Instead of storing 100M budget-category rows, derive a default budget from income tier and store *only overrides*:

```python
class Budget(object):
    def __init__(self, income):
        self.income = income
        self.categories_to_budget_map = self.create_budget_template()

    def create_budget_template(self):
        return {
            DefaultCategories.HOUSING: self.income * .4,
            DefaultCategories.FOOD: self.income * .2,
            DefaultCategories.GAS: self.income * .1,
            DefaultCategories.SHOPPING: self.income * .2,
        }

    def override_category_budget(self, category, amount):
        self.categories_to_budget_map[category] = amount
```

Monthly aggregation can run as SQL over `transactions`, or — better at this write volume — as MapReduce over the raw log files, which keeps the aggregation load off the live database entirely:

```python
class SpendingByCategory(MRJob):
    def mapper(self, _, line):
        """(user_id, 2016-01, shopping), 25 / (user_id, 2016-01, shopping), 100 / (user_id, 2016-01, gas), 50"""
        user_id, timestamp, seller, amount = line.split('\t')
        category = self.categorizer.categorize(seller)
        period = self.extract_year_month(timestamp)
        if period == self.current_year_month:
            yield (user_id, period, category), amount

    def reducer(self, key, values):
        """(user_id, 2016-01, shopping), 125 / (user_id, 2016-01, gas), 50"""
        yield key, sum(values)
```

**The bottleneck that's specific to this system:** it's write-heavy (10:1) in a domain most systems treat as read-heavy, so the usual "throw a read cache in front" instinct only addresses the smaller half of the load. At 2,000 average writes/sec (higher at peak), a single SQL write-master is genuinely tight — this is where federation/sharding/denormalization stop being optional hardening and start being load-bearing from day one. Keep only ~a month of raw `transactions` in the live DB; push the rest to a warehouse (Redshift/BigQuery) or object store.

### Design the data structures for a social network

**Use cases in scope:** user searches for someone and sees the shortest path to them (degrees of separation). (Exercise says: solve this with general graph algorithms, not a graph database or GraphQL.)

**Constraints:** 100M users, 50 friends/user average → 5B friend edges, unweighted. 1B searches/month → 400 searches/sec. Graph doesn't fit on one machine.

**Core design — this is BFS, sharded.** Without the scale constraint it's textbook unweighted-shortest-path BFS:

```python
class Graph(Graph):
    def shortest_path(self, source, dest):
        if source is None or dest is None:
            return None
        if source is dest:
            return [source.key]
        prev_node_keys = self._shortest_path(source, dest)
        if prev_node_keys is None:
            return None
        path_ids = [dest.key]
        prev_node_key = prev_node_keys[dest.key]
        while prev_node_key is not None:
            path_ids.append(prev_node_key)
            prev_node_key = prev_node_keys[prev_node_key]
        return path_ids[::-1]

    def _shortest_path(self, source, dest):
        queue = deque([source])
        prev_node_keys = {source.key: None}
        source.visit_state = State.visited
        while queue:
            node = queue.popleft()
            if node is dest:
                return prev_node_keys
            for adj_node in node.adj_nodes.values():
                if adj_node.visit_state == State.unvisited:
                    queue.append(adj_node)
                    prev_node_keys[adj_node.key] = node.key
                    adj_node.visit_state = State.visited
        return None
```

At 100M users the graph doesn't fit on one machine, so users get sharded across **Person Servers**, located via a **Lookup Service** — and BFS now means a network hop *per adjacent-node lookup*, not an in-memory pointer traversal:

```python
class LookupService(object):
    def __init__(self):
        self.lookup = self._init_lookup()  # key: person_id, value: person_server

    def lookup_person_server(self, person_id):
        return self.lookup[person_id]


class PersonServer(object):
    def __init__(self):
        self.people = {}  # key: person_id, value: person

    def people(self, ids):
        results = []
        for id in ids:
            if id in self.people:
                results.append(self.people[id])
        return results


class Person(object):
    def __init__(self, id, name, friend_ids):
        self.id = id
        self.name = name
        self.friend_ids = friend_ids


class UserGraphService(object):
    def __init__(self, lookup_service):
        self.lookup_service = lookup_service

    def person(self, person_id):
        person_server = self.lookup_service.lookup_person_server(person_id)
        return person_server.people([person_id])

    def _shortest_path(self, source_key, dest_key, path):
        source = self.person(source_key)
        queue = deque([source])
        prev_node_keys = {source_key: None}
        visited_ids = {source.id}
        while queue:
            node = queue.popleft()
            if node.key is dest_key:
                return prev_node_keys
            for friend_id in node.friend_ids:
                if friend_id not in visited_ids:
                    friend_node = self.person(friend_id)   # <- a network call, not a pointer deref
                    queue.append(friend_node)
                    prev_node_keys[friend_id] = node.key
                    visited_ids.add(friend_id)
        return None
```

**The bottleneck that's specific to this system:** every "adjacent node" in a sharded-BFS is a Lookup Service round trip, so the entire performance story is about cutting cross-machine hops, not about the BFS algorithm itself. Concrete levers: shard Person Servers geographically (friends tend to be geographically close, so this improves locality); batch friend lookups that land on the same Person Server into one call; cache complete or partial BFS traversals (online in the memory cache, or precomputed offline into a NoSQL store) since repeated searches between the same or nearby people are common; run BFS from *both* endpoints simultaneously and meet in the middle; start from high-degree nodes first, since they collapse the search space fastest; cap the search by time/hop-count and prompt the user rather than searching indefinitely.

### Design a key-value store for a search engine (query cache)

**Use cases in scope:** a search request that hits the cache; a search request that misses.

**Constraints:** 10M users, 10B queries/month → 4,000 requests/sec. Cache entry ≈ 270 bytes (50-byte query + 20-byte title + 200-byte snippet) → 2.7 TB/month if every query were unique and fully retained — which the memory constraint rules out, hence the eviction policy below is not optional.

**Core design — LRU cache from primitives.** A hash table for O(1) lookup, backed by a doubly-linked list for O(1) recency tracking: new entries go to the head, evictions come from the tail.

```python
class Node(object):
    def __init__(self, query, results):
        self.query, self.results = query, results


class Cache(object):
    def __init__(self, MAX_SIZE):
        self.MAX_SIZE = MAX_SIZE
        self.size = 0
        self.lookup = {}          # key: query, value: node
        self.linked_list = LinkedList()

    def get(self, query):
        """Accessing an entry moves it to the front of the LRU list."""
        node = self.lookup.get(query)
        if node is None:
            return None
        self.linked_list.move_to_front(node)
        return node.results

    def set(self, results, query):
        node = self.lookup.get(query)
        if node is not None:
            node.results = results
            self.linked_list.move_to_front(node)
        else:
            if self.size == self.MAX_SIZE:
                self.lookup.pop(self.linked_list.tail.query, None)
                self.linked_list.remove_from_tail()
            else:
                self.size += 1
            new_node = Node(query, results)
            self.linked_list.append_to_front(new_node)
            self.lookup[query] = new_node
```

Request flow on a miss: Query API parses the query (strip markup, tokenize, fix typos, normalize case, convert to boolean ops) → checks the cache → on miss, queries Reverse Index + Document services, then populates the cache at the front of the LRU list. This is cache-aside (Part 1) applied specifically to query results. Update triggers: page contents change, page added/removed, or page rank changes — simplest correct answer is just a TTL.

**The bottleneck that's specific to this system:** a single-machine cache can't hold the working set, so the real design question is how the cache itself gets distributed: *per-machine independent caches* (simple, low hit rate since each machine only sees a fraction of traffic), *fully replicated caches* (simple, wastes memory holding the same entries N times), or *sharded via* `machine = hash(query)` (most complex, but the only one that's both memory-efficient and gives every query a single canonical cache location — worth pairing with consistent hashing so a machine joining/leaving the cluster doesn't reshuffle the entire keyspace).

### Design Amazon's sales rank by category feature

**Use cases in scope:** compute the past week's best-sellers per category (hourly refresh, e-commerce site itself out of scope); user views the ranking.

**Constraints:** 10M products, 1,000 categories, products don't change category, no subcategories, 1B transactions/month, 100B reads/month (100:1 read:write). Transaction ≈ 40 bytes → 40 GB new content/month, 1.44 TB over 3 years. 400 writes/sec, 40,000 reads/sec.

**Core design — this is a sort problem at scale, so it's MapReduce, not a live aggregate query.** Raw logs land in the object store, tab-delimited (`timestamp product_id category_id qty total_price seller_id buyer_id`). Two-step MapReduce: first collapse to `(category, product_id) → sum(quantity)`, then re-key for a **distributed sort** so the shuffle phase does the ranking for you instead of a separate sort pass:

```python
class SalesRanker(MRJob):
    def mapper(self, _, line):
        """(category1, product1), 2 / (category2, product1), 2 / (category2, product1), 1 ..."""
        timestamp, product_id, category_id, quantity, total_price, seller_id, buyer_id = line.split('\t')
        if self.within_past_week(timestamp):
            yield (category_id, product_id), quantity

    def reducer(self, key, values):
        """(category1, product1), 2 / (category2, product1), 3 ..."""
        yield key, sum(values)

    def mapper_sort(self, key, value):
        """Re-key as (category, qty) -> product so the MapReduce shuffle/sort
        does the ranking: (category1, 1), product4 / (category1, 2), product1 / ..."""
        category_id, product_id = key
        yield (category_id, value), product_id

    def steps(self):
        return [
            self.mr(mapper=self.mapper, reducer=self.reducer),
            self.mr(mapper=self.mapper_sort, reducer=self.reducer_identity),
        ]
```

Result lands in a `sales_rank` table:

```sql
id int NOT NULL AUTO_INCREMENT
category_id int NOT NULL
total_sold int NOT NULL
product_id int NOT NULL
PRIMARY KEY(id)
FOREIGN KEY(category_id) REFERENCES Categories(id)
FOREIGN KEY(product_id) REFERENCES Products(id)
```

Read path is a plain indexed SQL read: `GET /api/v1/popular?category_id=1234`.

**The bottleneck that's specific to this system:** the 100:1 read:write ratio makes this almost entirely a read-scaling problem — 40,000 reads/sec is heavy enough that read replicas alone likely can't absorb the cache-miss traffic, so this is one of the clearer cases for pairing a memory cache with federation/sharding rather than treating them as separate escalation tiers. The write side (400/sec) is comfortably within a single master's range; don't over-engineer that half.

### Design a system that scales to millions of users on AWS

This one is explicitly about the *iteration*, not a single end-state diagram: **benchmark → profile → fix the actual bottleneck → repeat.** Skipping straight to the final architecture is the mistake this case study exists to prevent.

**Users+ (single box):** one EC2 instance running the web server and MySQL. Vertical-scale ("bigger box") as needed, monitored via CloudWatch/top/nagios/statsd. Cheap to reason about, gets expensive fast, and has zero redundancy. Add an Elastic IP (survives reboot) and Route 53 DNS pointed at it; lock the security group down to 80/443/22-from-whitelist, no outbound-initiated connections.

**Users++ (split static content and the DB off the box):** move static assets (user files, JS, CSS, images, video) to an object store (S3-style — highly durable, server-side encryption); move MySQL to a managed instance (RDS-style — easier admin/scaling, multi-AZ, encryption at rest). This is a genuine complexity increase (the web server now needs credentials/config to reach two new external components, both need their own security hardening) in exchange for independent scaling of compute vs. storage vs. database.

**Users+++ (the web tier bottlenecks):** horizontal-scale the web tier behind a load balancer (ELB-style, or self-managed active-active/active-passive across availability zones, SSL terminated at the LB to unload backend compute and centralize cert management); separate web servers (reverse proxy) from application servers (can now scale Read-API and Write-API capacity independently); add MySQL master-slave failover across AZs for redundancy; push static (and some dynamic) content to a CDN.

**Users++++ (the database bottlenecks — you're read-heavy, 100:1):** move frequently-accessed MySQL content *and* web-server session state into a memory cache (Elasticache-style) — moving sessions out of the web tier is what makes the web tier stateless and therefore autoscalable, which is easy to miss if you only think of the cache as a read-latency optimization. Add MySQL read replicas, with app-level read/write routing and a load balancer in front of the replica pool.

**Users+++++ (traffic is spiky, not just large):** add autoscaling groups (min/max instance counts, scale on CloudWatch triggers — either a fixed schedule for predictable load, or CPU/latency/network/custom metrics for unpredictable load) and automate the ops (Chef/Puppet/Ansible) so scaling events don't require a human. Layer in host-level (per-instance metrics), aggregate-level (load-balancer stats), log analysis (CloudWatch, CloudTrail, Loggly, Splunk, Sumo), external site performance (Pingdom, New Relic), incident paging (PagerDuty), and error reporting (Sentry).

**Users++++++ (the final bottlenecks, addressed in the same order as every other case study here):** age out old MySQL data into a warehouse (Redshift-style) once the live DB gets too large; federation/sharding/denormalization/SQL tuning once read replicas alone can't absorb cache misses; move appropriate data to NoSQL (DynamoDB-style) if the read/write profile calls for it; push non-realtime batch work (e.g. thumbnail generation after a photo upload) onto a queue + worker pool instead of the request path.

**What this case study is actually testing:** not whether you know AWS product names, but whether you scale in response to a *measured* bottleneck instead of pattern-matching to "big systems have a CDN and a cache and sharding, so I'll add all three up front." Every tier above exists because the *previous* tier's specific bottleneck (single point of failure → web tier saturation → DB read saturation → spiky load → DB size/read-scaling ceiling) demanded it, not because it's generically a good idea.

---

## Part 3: Object-Oriented Design Case Studies

Six OOD reference solutions. Each demonstrates a specific OOD principle through its class structure — that's what to look at, not just "does the code work" (several of these are intentionally left as stubs with `pass`/`...` bodies, matching the original repo — they're structure references, not complete implementations).

### Design a hash map

The reference implementation for the abstraction every key-value store in Part 1 is built on: separate chaining for collision resolution — each bucket holds a list of `Item`s, and a collision just means a bucket with more than one item, walked linearly to find the matching key.

```python
class Item(object):
    def __init__(self, key, value):
        self.key = key
        self.value = value


class HashTable(object):
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(self.size)]

    def _hash_function(self, key):
        return key % self.size

    def set(self, key, value):
        hash_index = self._hash_function(key)
        for item in self.table[hash_index]:
            if item.key == key:
                item.value = value
                return
        self.table[hash_index].append(Item(key, value))

    def get(self, key):
        hash_index = self._hash_function(key)
        for item in self.table[hash_index]:
            if item.key == key:
                return item.value
        raise KeyError('Key not found')

    def remove(self, key):
        hash_index = self._hash_function(key)
        for index, item in enumerate(self.table[hash_index]):
            if item.key == key:
                del self.table[hash_index][index]
                return
        raise KeyError('Key not found')
```

### Design a least-recently-used cache

The same LRU structure used in the query-cache case study above (hash table + doubly-linked list, O(1) get/set/evict), presented as its own OOD exercise:

```python
class Node(object):
    def __init__(self, results):
        self.results = results
        self.next = next


class Cache(object):
    def __init__(self, MAX_SIZE):
        self.MAX_SIZE = MAX_SIZE
        self.size = 0
        self.lookup = {}  # key: query, value: node
        self.linked_list = LinkedList()

    def get(self, query):
        node = self.lookup.get(query)
        if node is None:
            return None
        self.linked_list.move_to_front(node)
        return node.results

    def set(self, results, query):
        node = self.lookup.get(query)
        if node is not None:
            node.results = results
            self.linked_list.move_to_front(node)
        else:
            if self.size == self.MAX_SIZE:
                self.lookup.pop(self.linked_list.tail.query, None)
                self.linked_list.remove_from_tail()
            else:
                self.size += 1
            new_node = Node(results)
            self.linked_list.append_to_front(new_node)
            self.lookup[query] = new_node
```

### Design a call center

Demonstrates the **template method / escalation chain** pattern: an abstract `Employee` owns the shared `take_call`/`complete_call`/`_escalate_call` behavior, and each rank subclass only supplies where an escalated call goes next — `Operator.escalate_call` bumps to `Rank.SUPERVISOR`, `Supervisor.escalate_call` bumps to `Rank.DIRECTOR`, `Director.escalate_call` has nowhere left to go and raises. `CallCenter.dispatch_call` tries operators first, falls through to supervisors, then directors, and queues the call if everyone's busy.

```python
class Employee(metaclass=ABCMeta):
    def __init__(self, employee_id, name, rank, call_center):
        self.employee_id, self.name, self.rank = employee_id, name, rank
        self.call = None
        self.call_center = call_center

    def take_call(self, call):
        self.call = call
        self.call.employee = self
        self.call.state = CallState.IN_PROGRESS

    def complete_call(self):
        self.call.state = CallState.COMPLETE
        self.call_center.notify_call_completed(self.call)

    @abstractmethod
    def escalate_call(self):
        pass

    def _escalate_call(self):
        self.call.state = CallState.READY
        call = self.call
        self.call = None
        self.call_center.notify_call_escalated(call)


class Operator(Employee):
    def escalate_call(self):
        self.call.level = Rank.SUPERVISOR
        self._escalate_call()


class CallCenter(object):
    def __init__(self, operators, supervisors, directors):
        self.operators, self.supervisors, self.directors = operators, supervisors, directors
        self.queued_calls = deque()

    def dispatch_call(self, call):
        employee = None
        if call.rank == Rank.OPERATOR:
            employee = self._dispatch_call(call, self.operators)
        if call.rank == Rank.SUPERVISOR or employee is None:
            employee = self._dispatch_call(call, self.supervisors)
        if call.rank == Rank.DIRECTOR or employee is None:
            employee = self._dispatch_call(call, self.directors)
        if employee is None:
            self.queued_calls.append(call)

    def _dispatch_call(self, call, employees):
        for employee in employees:
            if employee.call is None:
                employee.take_call(call)
                return employee
        return None
```

### Design a deck of cards

Demonstrates **abstract base class + property-based computed state**: `Card` is abstract (subclassed per game variant — here `BlackJackCard`), and `BlackJackCard.value` is a *property*, not a stored field — it derives Ace-as-1, face-cards-as-10 from the underlying `_value` on every access rather than caching a possibly-stale answer. `BlackJackHand.score` layers game-specific scoring rules (soft/hard totals) on top of the generic `Hand.score`.

```python
class BlackJackCard(Card):
    def is_ace(self):
        return self._value == 1

    def is_face_card(self):
        """Jack = 11, Queen = 12, King = 13"""
        return 10 < self._value <= 13

    @property
    def value(self):
        if self.is_ace():
            return 1
        elif self.is_face_card():
            return 10
        return self._value

    @value.setter
    def value(self, new_value):
        if 1 <= new_value <= 13:
            self._value = new_value
        else:
            raise ValueError('Invalid card value: {}'.format(new_value))


class BlackJackHand(Hand):
    BLACKJACK = 21

    def score(self):
        min_over = sys.MAXSIZE
        max_under = -sys.MAXSIZE
        for score in self.possible_scores():   # accounts for Aces being 1 or 11
            if self.BLACKJACK < score < min_over:
                min_over = score
            elif max_under < score <= self.BLACKJACK:
                max_under = score
        return max_under if max_under != -sys.MAXSIZE else min_over


class Deck(object):
    def __init__(self, cards):
        self.cards = cards
        self.deal_index = 0

    def deal_card(self):
        try:
            card = self.cards[self.deal_index]
            card.is_available = False
            self.deal_index += 1
        except IndexError:
            return None
        return card
```

### Design an online chat server

Demonstrates **composition over a shared abstract base**: `Chat` is the abstract shell (a `chat_id`, a `users` list, a `messages` list); `PrivateChat` and `GroupChat` both compose it but diverge in membership rules — a private chat is exactly two users fixed at construction, a group chat supports `add_user`/`remove_user`. `User` itself composes multiple relationship maps (friends, pending sent/received requests, private chats keyed by friend id, group chats keyed by chat id) rather than modeling them as separate services, which keeps a user's full social state in one place.

```python
class User(object):
    def __init__(self, user_id, name, pass_hash):
        self.user_id, self.name, self.pass_hash = user_id, name, pass_hash
        self.friends_by_id = {}
        self.friend_ids_to_private_chats = {}
        self.group_chats_by_id = {}
        self.received_friend_requests_by_friend_id = {}
        self.sent_friend_requests_by_friend_id = {}

    def message_user(self, friend_id, message): ...
    def message_group(self, group_id, message): ...
    def send_friend_request(self, friend_id): ...
    def approve_friend_request(self, friend_id): ...


class Chat(metaclass=ABCMeta):
    def __init__(self, chat_id):
        self.chat_id = chat_id
        self.users = []
        self.messages = []


class PrivateChat(Chat):
    def __init__(self, first_user, second_user):
        super(PrivateChat, self).__init__()
        self.users.append(first_user)
        self.users.append(second_user)


class GroupChat(Chat):
    def add_user(self, user): ...
    def remove_user(self, user): ...


class AddRequest(object):
    def __init__(self, from_user_id, to_user_id, request_status, timestamp):
        self.from_user_id, self.to_user_id = from_user_id, to_user_id
        self.request_status, self.timestamp = request_status, timestamp
```

### Design a parking lot

Demonstrates **double-dispatch-flavored fit-checking**: rather than `ParkingSpot` knowing every vehicle type's sizing rules (or vice versa), each `Vehicle` subclass implements `can_fit_in_spot(spot)` for itself — a `Motorcycle` fits anywhere, a `Car` needs `COMPACT` or `LARGE`, a `Bus` needs `LARGE` and reports a `spot_size` of 5 (it spans multiple spots). `ParkingSpot.can_fit_vehicle` delegates back to the vehicle's own logic rather than duplicating it, so adding a new vehicle type never requires touching `ParkingSpot`.

```python
class Vehicle(metaclass=ABCMeta):
    def __init__(self, vehicle_size, license_plate, spot_size):
        self.vehicle_size, self.license_plate, self.spot_size = vehicle_size, license_plate, spot_size
        self.spots_taken = []

    def take_spot(self, spot):
        self.spots_taken.append(spot)

    @abstractmethod
    def can_fit_in_spot(self, spot):
        pass


class Car(Vehicle):
    def __init__(self, license_plate):
        super(Car, self).__init__(VehicleSize.COMPACT, license_plate, spot_size=1)

    def can_fit_in_spot(self, spot):
        return spot.size in (VehicleSize.LARGE, VehicleSize.COMPACT)


class Bus(Vehicle):
    def __init__(self, license_plate):
        super(Bus, self).__init__(VehicleSize.LARGE, license_plate, spot_size=5)

    def can_fit_in_spot(self, spot):
        return spot.size == VehicleSize.LARGE


class ParkingLot(object):
    def __init__(self, num_levels):
        self.num_levels = num_levels
        self.levels = []  # List of Levels

    def park_vehicle(self, vehicle):
        for level in self.levels:
            if level.park_vehicle(vehicle):
                return True
        return False


class Level(object):
    def __init__(self, floor, total_spots):
        self.floor = floor
        self.num_spots = total_spots
        self.available_spots = 0
        self.spots = []  # List of ParkingSpots

    def park_vehicle(self, vehicle):
        spot = self._find_available_spot(vehicle)
        if spot is None:
            return None
        spot.park_vehicle(vehicle)   # ParkingLot -> Level -> ParkingSpot, one hop per layer
        return spot


class ParkingSpot(object):
    def can_fit_vehicle(self, vehicle):
        if self.vehicle is not None:
            return False
        return vehicle.can_fit_in_spot(self)   # delegates to the vehicle, not duplicated here
```
