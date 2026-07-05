# FAANG System Design and Technical Interview Mastery

This is a practice document for system design, low-level design, and the non-DSA technical material that large tech companies commonly test. No honest prep plan can guarantee a 100% pass rate, but this is designed to make passing highly likely if you can execute the drills under interview conditions.

Core references for calibration:

- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Google SRE Book](https://sre.google/sre-book/table-of-contents/)
- [Google SRE Workbook](https://sre.google/workbook/table-of-contents/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [Amazon Builders' Library](https://aws.amazon.com/builders-library/)
- [Designing Data-Intensive Applications](https://dataintensive.net/)
- [Martin Fowler Architecture Guide](https://martinfowler.com/architecture/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Kafka Documentation](https://kafka.apache.org/documentation/)
- [Redis Documentation](https://redis.io/docs/latest/)
- [MDN HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)

## What They Test

Technical interview loops can include:

1. DSA coding.
2. High-level system design.
3. Low-level design / object-oriented design.
4. API design.
5. Database modeling and SQL.
6. Operating systems and concurrency.
7. Networking and web fundamentals.
8. Distributed systems.
9. Debugging and incident analysis.
10. Code review and maintainability.
11. Past project deep dive.
12. Behavioral signals mixed into technical rounds.

## Passing Bar

You are ready when you can:

1. Clarify vague requirements without sounding lost.
2. Produce a reasonable architecture in 10 to 15 minutes.
3. Estimate scale and choose storage, cache, queues, and compute deliberately.
4. Explain bottlenecks, failure modes, and tradeoffs.
5. Drive the interview without waiting for hints.
6. Defend consistency, availability, latency, cost, security, and observability choices.
7. Deep dive into one component until the interviewer is satisfied.
8. Recover cleanly when challenged.

## The 45-Minute HLD Template

Use this every time until it becomes automatic.

### Minute 0-5: Clarify

Ask:

1. Who are the users?
2. What are the top 3 functional requirements?
3. What are explicitly out of scope?
4. Read-heavy, write-heavy, or balanced?
5. Expected QPS, DAU/MAU, data size, latency target?
6. Consistency requirements?
7. Availability and durability requirements?
8. Security, privacy, compliance constraints?

### Minute 5-10: API and Data Model

Define:

1. Core entities.
2. Main APIs.
3. Request/response shape.
4. Idempotency requirements.
5. Data access patterns.
6. Primary indexes.

### Minute 10-20: Baseline Architecture

Draw:

1. Clients.
2. DNS/CDN/load balancer.
3. API gateway or edge service.
4. Stateless application services.
5. Primary datastore.
6. Cache.
7. Queue/stream if async work exists.
8. Blob storage if media exists.
9. Search/indexing if query-heavy.

### Minute 20-35: Scale and Deep Dive

Pick one or two:

1. Sharding strategy.
2. Cache strategy.
3. Feed generation.
4. Search indexing.
5. Stream processing.
6. Fanout.
7. Rate limiting.
8. Consistency model.
9. Ranking.
10. Real-time delivery.
11. Disaster recovery.

### Minute 35-42: Reliability

Cover:

1. Failure modes.
2. Backpressure.
3. Retries and idempotency.
4. Circuit breakers.
5. Timeouts.
6. Monitoring and alerting.
7. Data backup and recovery.
8. Graceful degradation.

### Minute 42-45: Tradeoff Summary

End with:

1. What is optimized?
2. What is weaker?
3. What would you change at 10x scale?
4. What metrics prove the system works?

## Methodology

How the primary sources themselves say to study this material — no video courses; reading,
practicing, and solving only. Every line below is a real citation, not paraphrase.

### Why practice beats passive consumption

- ["Great systems design is based on practice, not watching videos."](https://blog.pragmaticengineer.com/preparing-for-the-systems-design-and-coding-interviews/) — Gergely Orosz, The Pragmatic Engineer
- "Books are the best price-for-value preparation resource: the information is much more dense than with video courses, while the price of books is lower than any course subscriptions." — same source
- "Take notes, go one step at a time, jump between pages, and take your time to learn the concepts they teach." — same source
- "Mock systems design interviews make an incredible difference." — same source
- ["Aim to draw out how you would design the system before reading how the author tackled the problem."](https://blog.pragmaticengineer.com/system-design-interview-an-insiders-guide-review/) — Gergely Orosz, reviewing Alex Xu's book, The Pragmatic Engineer

### Alex Xu's own stated method (verified against the actual Volume 1 book text)

- "The objective of this book is to provide a reliable strategy to approach the system design questions... With constant practice, you will be well-equipped to tackle system design interview questions." — Alex Xu, *System Design Interview* (Vol. 1), Forward
- "DON'T be like Jimmy... In a system design interview, giving out an answer quickly without thinking gives you no bonus points... Slow down. Think deeply and ask questions to clarify requirements and assumptions." — Alex Xu, *System Design Interview* (Vol. 1), Chapter 3
- "If you are going to interview with a company, it is a great idea to read their engineering blogs and get familiar with technologies and systems adopted and implemented there." — Alex Xu, *System Design Interview* (Vol. 1), Chapter 16 / Afterword

### Building intuition rather than memorizing technologies

- "Although the landscape of technologies for processing and storing data is diverse and fast-changing, the underlying principles endure. If you understand those principles, you're in a position to see where each tool fits in." — Martin Kleppmann, [*Designing Data-Intensive Applications*, Preface](https://newsletter.pragmaticengineer.com/p/designing-data-intensive-applications-book-excerpt)

### Foundation-then-drill sequencing

- ["Passively consuming content is good, but you'll retain 10x more information by actually doing."](https://www.hellointerview.com/learn/system-design/in-a-hurry/how-to-prepare) — Hello Interview
- "Only after you have tried to answer the question, read the answer key to see how your answer compares." — Hello Interview
- "A common failure mode for candidates is to have consumed a lot of material but stumble when it comes time to actually apply it." — Hello Interview, ["System Design in a Hurry — Introduction"](https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction)

### The four-step loop to run on every practice problem

- ["Outline use cases, constraints, and assumptions" — gather requirements, scope the problem](https://github.com/donnemartin/system-design-primer#how-to-approach-a-system-design-interview-question)
- "Create a high level design" — sketch main components, justify ideas
- "Design core components" — go deep on each major element
- "Scale the design" — identify bottlenecks, address them

## Core System Design Concepts

Each concept below is grounded in a direct, verified quote — from Alex Xu's *System Design
Interview* (Vol. 1, checked against the actual book text), Martin Kleppmann's *Designing
Data-Intensive Applications*, the Google SRE Book, original papers (Raft, consistent hashing,
CAP/PACELC), and primary engineering sources — plus one free article per concept.

### 1. Requirements clarification

- "DON'T be like Jimmy... Answering without a thorough understanding of the requirements is a huge red flag as the interview is not a trivia contest... Slow down. Think deeply and ask questions to clarify requirements and assumptions." — Alex Xu, *System Design Interview* (Vol. 1), Ch. 3, Step 1
- [System Design Primer — "How to approach a system design interview question"](https://github.com/donnemartin/system-design-primer#how-to-approach-a-system-design-interview-question)

### 2. Back-of-envelope capacity estimation

- "Back-of-the-envelope estimation is all about the process. Solving the problem is more important than obtaining results... Practice makes perfect." — Alex Xu, *System Design Interview* (Vol. 1), Ch. 2
- [Latency Numbers Every Programmer Should Know (interactive)](https://colin-scott.github.io/personal_website/research/interactive_latency.html)

### 3. API design and idempotency

- "Idempotency means that they can be called any number of times while guaranteeing that side effects only occur once... a client... can continue to retry until it verifiably succeeds." — Stripe Engineering, ["Designing robust and predictable APIs with idempotency"](https://stripe.com/blog/idempotency)
- [AWS Builders' Library — "Making retries safe with idempotent APIs"](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)

### 4. Data modeling and access patterns

- "Data models are perhaps the most important part of developing software, because they have such a profound effect: not only on how the software is written, but also on how we think about the problem that we are solving." — Martin Kleppmann, [*Designing Data-Intensive Applications*, Ch. 2](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/ch06.html)
- [AWS Prescriptive Guidance — "Step 3. Identify your data access patterns"](https://docs.aws.amazon.com/prescriptive-guidance/latest/dynamodb-data-modeling/step3.html)

### 5. Caching strategies

- "After receiving a request, a web server first checks if the cache has the available response... This caching strategy is called a read-through cache... Least-recently-used (LRU) is the most popular cache eviction policy." — Alex Xu, *System Design Interview* (Vol. 1), Ch. 1
- [System Design Primer — "Cache" section](https://github.com/donnemartin/system-design-primer#cache)

### 6. CDN and edge caching

- "A CDN is a network of geographically dispersed servers used to deliver static content... The origin returns image.png to the CDN server, which includes optional HTTP header Time-to-Live (TTL)." — Alex Xu, *System Design Interview* (Vol. 1), Ch. 1
- [MDN Web Docs Glossary: CDN](https://developer.mozilla.org/en-US/docs/Glossary/CDN)

### 7. Load balancing (L4 vs L7)

- "A load balancer evenly distributes incoming traffic among web servers that are defined in a load-balanced set... For better security, private IPs are used for communication between servers." — Alex Xu, *System Design Interview* (Vol. 1), Ch. 1
- ["Layer 4 load balancers look at info at the transport layer... Layer 7 load balancers look at the application layer... contents of the header, message, and cookies."](https://github.com/donnemartin/system-design-primer#load-balancer) — System Design Primer

### 8. Database sharding / partitioning

- "For very large datasets, or very high query throughput, [replication alone] is not sufficient: we need to break the data up into partitions, also known as sharding... The main reason for wanting to partition data is scalability." — Martin Kleppmann, [*Designing Data-Intensive Applications*, Ch. 6](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/ch06.html)

### 9. Database replication and consistency models

- ["Weak Consistency: After a write, reads may or may not see it... Eventual Consistency: After a write, reads will eventually see it (typically within milliseconds)... Strong Consistency: After a write, reads will see it. Data is replicated synchronously."](https://github.com/donnemartin/system-design-primer#consistency-patterns) — System Design Primer
- "Database replication can be used in many database management systems, usually with a master/slave relationship between the original (master) and the copies (slaves)." — Alex Xu, *System Design Interview* (Vol. 1), Ch. 1

### 10. Consistent hashing

- "Consistent hashing is a special kind of hashing such that when a hash table is re-sized... only k/n keys need to be remapped on average... In contrast, in most traditional hash tables, a change in the number of array slots causes nearly all keys to be remapped." — Alex Xu, *System Design Interview* (Vol. 1), Ch. 5
- ["Our caching protocols are based on a special kind of hashing that we call consistent hashing... A consistent hash function is one which changes minimally as the range of the function changes."](https://courses.cs.duke.edu/fall25/compsci512/internal/readings/ConsistentHashing.pdf) — Karger et al., original 1997 paper

### 11. Message queues and stream processing

- ["Event streaming is the practice of capturing data in real-time from event sources... storing these event streams durably for later retrieval; manipulating, processing, and reacting to the event streams in real-time as well as retrospectively; and routing the event streams to different destination technologies as needed."](https://kafka.apache.org/intro) — Apache Kafka Documentation

### 12. Rate limiting algorithms

- "A rate limiter is used to control the rate of traffic sent by a client or a service... If the API request count exceeds the threshold defined by the rate limiter, all the excess calls are blocked." — Alex Xu, *System Design Interview* (Vol. 1), Ch. 4
- [Kong Engineering — "How to Design a Scalable Rate Limiting Algorithm"](https://konghq.com/blog/engineering/how-to-design-a-scalable-rate-limiting-algorithm)

### 13. Search indexing / inverted index

- "We keep a dictionary of terms... Then for each term, we have a list that records which documents the term occurs in... The list is then called a postings list (or inverted list)." — Manning, Raghavan, Schütze, [*Introduction to Information Retrieval*, Ch. 1](https://nlp.stanford.edu/IR-book/pdf/01bool.pdf)
- [Elastic Blog — "Elasticsearch from the Bottom Up, Part 1"](https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up)

### 14. Feed generation / fanout

- "Fanout is the process of delivering a post to all friends... fanout on write (push model) and fanout on read (pull model)... We adopt a hybrid approach... we use a push model for the majority of users. For celebrities... we let followers pull news content on-demand." — Alex Xu, *System Design Interview* (Vol. 1), Ch. 11
- [HdM Stuttgart — "How to Scale: Real-time Tweet Delivery Architecture at Twitter"](https://blog.mi.hdm-stuttgart.de/index.php/2021/03/10/how-to-scale-real-time-tweet-delivery-architecture-at-twitter/)

### 15. Distributed consensus basics

- "Consensus algorithms allow a collection of machines to work as a coherent group that can survive the failures of some of its members." — Ongaro & Ousterhout, [Raft paper](https://raft.github.io/raft.pdf)
- [The Raft Consensus Algorithm — official site with interactive visualization](https://raft.github.io/)

### 16. Observability: metrics, logs, traces, SLOs

- "Latency... Traffic... Errors... Saturation — the Four Golden Signals. Monitoring and alerting enables a system to tell us when it's broken, or perhaps to tell us what's about to break." — Google, [*Site Reliability Engineering*, Ch. 6](https://sre.google/sre-book/monitoring-distributed-systems/)
- ["An SLI is a service level indicator... An SLO is a service level objective... SLAs are service level agreements."](https://sre.google/sre-book/service-level-objectives/) — Google SRE Book, Ch. 4

### 17. Failure handling: retries, timeouts, circuit breakers

- "To build resilient systems, we employ three essential tools: timeouts, retries, and backoff... a best practice is designing APIs to be idempotent... To avoid [synchronized retries], we employ jitter." — Marc Brooker, [AWS Builders' Library, "Timeouts, retries, and backoff with jitter"](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/)
- "A cascading failure is a failure that grows over time as a result of positive feedback." — Google, [*Site Reliability Engineering*, Ch. 22](https://sre.google/sre-book/addressing-cascading-failures/)

### 18. CAP theorem / PACELC

- ["Any networked shared-data system can have at most two of three desirable properties: consistency (C)... high availability (A)... and tolerance to network partitions (P)."](https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/) — Eric Brewer, "CAP Twelve Years Later"
- ["If there is a partition (P), how does the system tradeoff between availability and consistency; else (E), how does the system tradeoff between latency (L) and consistency (C)?"](http://dbmsmusings.blogspot.com/2010/04/problems-with-cap-and-yahoos-little.html) — Daniel Abadi, original PACELC post

### Networking and Edge

Know:

1. DNS resolution and TTL.
2. TCP vs UDP.
3. TLS termination.
4. HTTP/1.1 vs HTTP/2 vs HTTP/3 conceptually.
5. REST vs GraphQL vs gRPC.
6. CDN caching and invalidation.
7. Load balancing: L4 vs L7.
8. Sticky sessions.
9. Reverse proxies.
10. API gateways.
11. WebSockets, long polling, server-sent events.
12. Mobile client constraints.

Questions to practice:

1. What happens when you type a URL and press enter?
2. Why use a CDN?
3. How do you cache personalized content?
4. How do you handle WebSocket reconnect storms?
5. When would you choose gRPC over REST?

### Storage

Know:

1. SQL vs NoSQL.
2. B-tree indexes.
3. LSM-tree intuition.
4. Primary index vs secondary index.
5. Composite indexes.
6. Covering indexes.
7. Normalization vs denormalization.
8. Transactions.
9. ACID.
10. Isolation levels.
11. Optimistic vs pessimistic locking.
12. Sharding.
13. Replication.
14. Read replicas.
15. Multi-region storage.
16. Eventual consistency.
17. Write-ahead logs.
18. Materialized views.
19. Schema migrations.
20. Hot partitions.

Questions to practice:

1. Why is an index not always good?
2. How do you choose a shard key?
3. How do you migrate a billion-row table?
4. What causes a hot partition?
5. How do you implement exactly-once money transfer semantics?

### Caching

Know:

1. Local cache.
2. Distributed cache.
3. CDN cache.
4. Cache aside.
5. Write-through.
6. Write-back.
7. Write-around.
8. TTL.
9. Eviction policies.
10. Cache stampede.
11. Negative caching.
12. Cache invalidation.
13. Consistent hashing.
14. Hot key mitigation.

Questions to practice:

1. Where would you place cache in a URL shortener?
2. How do you avoid cache stampede?
3. How do you handle hot celebrity profiles?
4. What happens if Redis goes down?
5. What data should never be cached?

### Queues and Streams

Know:

1. Queue vs log.
2. Kafka-style partitioned log.
3. SQS/PubSub-style queue.
4. Consumer groups.
5. Ordering guarantees.
6. At-least-once delivery.
7. At-most-once delivery.
8. Exactly-once as an end-to-end property.
9. Idempotent consumers.
10. Dead-letter queues.
11. Backpressure.
12. Replay.
13. Event sourcing.
14. Outbox pattern.

Questions to practice:

1. Why put a queue between upload and processing?
2. How do you preserve order per user?
3. How do you handle duplicate events?
4. How do you replay a day of events?
5. When is Kafka the wrong choice?

### Distributed Systems

Know:

1. CAP theorem in practical terms.
2. Consistency models.
3. Consensus basics: Raft/Paxos intuition.
4. Leader election.
5. Quorums.
6. Vector clocks conceptually.
7. Clock skew.
8. Idempotency keys.
9. Distributed locks.
10. Sagas.
11. Two-phase commit limitations.
12. Split brain.
13. Retry storms.
14. Circuit breakers.
15. Bulkheads.
16. Graceful degradation.

Questions to practice:

1. How do you design a distributed lock?
2. What can go wrong with retries?
3. What does "read your writes" mean?
4. How do you handle cross-region writes?
5. Why is global total ordering expensive?

### Reliability and Observability

Know:

1. SLIs.
2. SLOs.
3. Error budgets.
4. Logs.
5. Metrics.
6. Traces.
7. RED metrics: rate, errors, duration.
8. USE metrics: utilization, saturation, errors.
9. Alert fatigue.
10. Canary deploys.
11. Blue-green deploys.
12. Rollbacks.
13. Disaster recovery.
14. RPO and RTO.
15. Load shedding.
16. Chaos testing.

Questions to practice:

1. What alerts would you create for a chat system?
2. What dashboard would you build for a payment system?
3. How do you debug high p99 latency?
4. What is your rollback plan?
5. What is acceptable degradation during an outage?

### Security and Privacy

Know:

1. Authentication vs authorization.
2. OAuth basics.
3. JWT tradeoffs.
4. Session storage.
5. TLS.
6. Rate limiting.
7. Abuse prevention.
8. Encryption at rest.
9. Secrets management.
10. PII handling.
11. Audit logs.
12. Principle of least privilege.
13. SQL injection.
14. XSS.
15. CSRF.

Questions to practice:

1. How do you secure a public API?
2. How do you prevent credential stuffing?
3. How do you store passwords?
4. How do you audit admin actions?
5. How do you handle GDPR-style deletion?

## High-Level System Design Problem Bank

For every prompt, practice requirements, APIs, schema, architecture, scaling, bottlenecks, failure modes, and monitoring.

Each prompt below links to a real, verified reference case study — the actual company
engineering blog/paper describing that system (or the closest available free, in-depth
breakdown where no primary source survives). Solve it yourself first, then compare.

### Classic Product Systems

1. [Design a URL shortener](https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly) (Hello Interview breakdown — no dedicated Bitly engineering post exists)
2. [Design Twitter/X timeline](https://blog.x.com/engineering/en_us/topics/infrastructure/2017/the-infrastructure-behind-twitter-scale) (Twitter/X Engineering)
3. [Design Instagram](https://engineering.fb.com/2025/05/21/production-engineering/journey-to-1000-models-scaling-instagrams-recommendation-system/) (Meta Engineering)
4. [Design Facebook News Feed](https://engineering.fb.com/2021/01/26/ml-applications/news-feed-ranking/) (Meta Engineering)
5. Design Reddit ranking (see News Feed case study above — same ranking-aggregator problem shape)
6. [Design YouTube](https://blog.youtube/inside-youtube/new-era-video-infrastructure/) (Official YouTube Blog)
7. Design Netflix (see Recommendation System case study below — Netflix's own architecture post)
8. [Design TikTok short-video feed](https://arxiv.org/abs/2209.07663) (ByteDance, "Monolith" paper, ACM RecSys 2022)
9. [Design WhatsApp](https://discord.com/blog/how-discord-stores-trillions-of-messages) (closest verified primary source: Discord Engineering on message storage at trillion-message scale)
10. Design Slack (see WhatsApp/Discord case study above — same chat-storage problem shape)
11. Design Discord voice/text (see WhatsApp/Discord case study above — this is the exact Discord post)
12. Design Gmail (no primary-source engineering post found — solve from first principles)
13. [Design Google Calendar](https://www.hellointerview.com/community/questions/calendar-free-busy/cm8c1h59t005n8pgzdq4ynqjo) (Hello Interview — no primary Google Calendar backend post found)
14. [Design Google Drive](https://cloud.google.com/blog/products/storage-data-transfer/a-peek-behind-colossus-googles-file-system) (Google Cloud Blog on Colossus, which explicitly underpins Drive)
15. [Design Dropbox](https://dropbox.tech/infrastructure/inside-the-magic-pocket) (Dropbox Tech Blog, "Inside the Magic Pocket")
16. [Design Google Docs collaborative editing](https://drive.googleblog.com/2010/09/whats-different-about-new-google-docs.html) (Official Google Drive Blog, on the OT engine behind Docs)
17. Design Google Photos (no primary-source engineering post found — solve from first principles)
18. Design Spotify (no primary-source engineering post found — solve from first principles)
19. [Design Uber](https://www.uber.com/en-CA/blog/engineering-routing-engine/) (Uber Engineering, routing/ETA feeding dispatch)
20. [Design DoorDash](https://doordash.engineering/2014/09/12/designing-an-on-demand-logistics-system/) (DoorDash Engineering)
21. Design Airbnb (no primary-source engineering post found — solve from first principles)
22. [Design Ticketmaster](https://www.hellointerview.com/learn/system-design/answer-keys/ticketmaster) (Hello Interview — seat-locking, virtual queues, overselling prevention)
23. [Design Amazon product page / search](https://www.amazon.science/publications/amazon-search-the-joy-of-ranking-products) (Amazon Science, on Amazon Search's ranking)
24. Design Amazon cart and checkout (no primary-source engineering post found — solve from first principles; see Payment System case study below for the checkout/idempotency half)
25. [Design payment processing](https://stripe.com/blog/idempotency) (Stripe Engineering, canonical idempotency-key post)
26. Design a Stripe-like payment API (see payment processing case study above — this is the exact Stripe post)
27. [Design a stock trading platform](https://lmax-exchange.github.io/disruptor/disruptor.html) (LMAX Exchange, lock-free matching-engine architecture)
28. Design Robinhood watchlist and quotes (see stock trading platform case study above — same matching-engine/quotes problem family)
29. Design LinkedIn people search (no primary-source engineering post found — solve from first principles)
30. Design job matching (no primary-source engineering post found — solve from first principles)

### Infra and Backend Systems

1. [Design a rate limiter](https://stripe.com/blog/rate-limiters) (Stripe Engineering, 4 production rate-limiter types)
2. [Design an API gateway](https://netflixtechblog.com/announcing-zuul-edge-service-in-the-cloud-ab3af5be08ee) (Netflix TechBlog, Zuul)
3. [Design a CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) (Cloudflare Learning Center)
4. [Design a distributed cache](https://engineering.fb.com/2013/04/15/core-infra/scaling-memcache-at-facebook/) (Meta Engineering, Memcache at Facebook)
5. [Design a distributed key-value store](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) (Amazon, original Dynamo SOSP 2007 paper)
6. [Design a distributed queue](https://www.linkedin.com/blog/engineering/open-source/apache-kafka-trillion-messages) (LinkedIn Engineering, Kafka at trillion-message/day scale)
7. Design Kafka (see distributed queue case study above — this is the exact Kafka-at-LinkedIn post)
8. [Design a notification system](https://medium.com/pinterest-engineering/nep-notification-system-and-relevance-a7fff21986c7) (Pinterest Engineering)
9. [Design a logging pipeline](https://netflixtechblog.com/scalable-logging-and-tracking-882bde0ddca2) (Netflix TechBlog)
10. [Design metrics and monitoring](https://www.uber.com/us/en/blog/m3/) (Uber Engineering, M3/M3DB)
11. Design a tracing system (no primary-source engineering post found — solve from first principles; the Google SRE Book's monitoring chapter in Core Concepts above is directly relevant)
12. [Design a feature flag system](https://launchdarkly.com/docs/tutorials/ld-arch-deep-dive) (LaunchDarkly official docs)
13. Design a configuration service (no primary-source engineering post found — solve from first principles)
14. Design a service discovery system (no primary-source engineering post found — solve from first principles)
15. Design a distributed lock service (no primary-source engineering post found — solve from first principles)
16. [Design a cron scheduler](https://medium.com/airbnb-engineering/chronos-a-replacement-for-cron-f05d7d986a9d) (Airbnb Engineering, Chronos)
17. Design a task queue (see cron scheduler case study above — same distributed-scheduling problem family)
18. [Design an online code judge](https://github.com/judge0/judge0) (Judge0, real open-source reference implementation used by production judges)
19. [Design a web crawler](https://developers.google.com/search/blog/2026/03/crawler-blog-post) (Google Search Central Blog, inside Googlebot)
20. Design a search engine (no primary-source engineering post found at this scope — solve from first principles; see Search Indexing citation in Core Concepts above)
21. [Design autocomplete](https://engineering.fb.com/2010/05/17/web/the-life-of-a-typeahead-query/) (Meta Engineering, "The Life of a Typeahead Query")
22. [Design a recommendation system](https://netflixtechblog.com/system-architectures-for-personalization-and-recommendation-e081aa94b5d8) (Netflix TechBlog)
23. Design ads click tracking (no primary-source engineering post found — solve from first principles)
24. [Design A/B testing platform](https://netflixtechblog.com/its-all-a-bout-testing-the-netflix-experimentation-platform-4e1ca458c15) (Netflix TechBlog, ABlaze)
25. [Design fraud detection pipeline](https://stripe.dev/blog/how-we-built-it-stripe-radar) (Stripe Engineering, Radar)
26. Design data lake ingestion (no primary-source engineering post found — solve from first principles; see IoT telemetry case study below for a related high-volume ingestion pattern)
27. Design real-time analytics dashboard (no primary-source engineering post found — solve from first principles; see metrics/monitoring case study above)
28. [Design online leaderboard](https://www.hellointerview.com/community/questions/realtime-game-leaderboard/cm4t0qbr9004988ilmum8jm06) (Hello Interview — Redis sorted sets at 500M DAU scale)
29. [Design multiplayer game state sync](https://www.riotgames.com/en/news/valorants-128-tick-servers) (Riot Games Technology Blog, VALORANT's tick-rate architecture)
30. [Design IoT telemetry ingestion](https://aws.amazon.com/blogs/iot/7-patterns-for-iot-data-ingestion-and-visualization-how-to-decide-what-works-best-for-your-use-case/) (AWS IoT Blog)

### Hard Follow-Up Variants

Apply these to any HLD prompt:

1. Multi-region active-active.
2. Strictly ordered events per user.
3. Exactly-once external side effects.
4. GDPR deletion.
5. 10 million QPS hot key.
6. Cross-region failover in under 60 seconds.
7. Users in low-bandwidth mobile networks.
8. p99 latency under 100 ms.
9. Strong consistency on one write path.
10. Offline sync.
11. Partial outages.
12. Abuse prevention.
13. Schema migration with zero downtime.
14. Backfill old data safely.
15. Cost must be cut by 50%.

## Deep-Dive Playbooks

### URL Shortener

Must cover:

1. Generate short codes: random, base62 counter, Snowflake-style IDs.
2. Collision handling.
3. Redirect latency.
4. Read-heavy caching.
5. Analytics pipeline.
6. Abuse and spam.
7. Custom aliases.
8. Expiration.
9. Hot URLs.
10. Database schema and indexes.

### News Feed

Must cover:

1. Fanout-on-write.
2. Fanout-on-read.
3. Hybrid strategy.
4. Celebrity users.
5. Ranking.
6. Feed freshness.
7. Deduplication.
8. Pagination and cursors.
9. Follow graph storage.
10. Cache invalidation.

### Chat

Must cover:

1. WebSocket gateway.
2. Connection state.
3. Message persistence.
4. Delivery receipts.
5. Offline delivery.
6. Ordering per conversation.
7. Push notifications.
8. Media attachments.
9. End-to-end encryption discussion.
10. Multi-device sync.

### Video Streaming

Must cover:

1. Upload service.
2. Object storage.
3. Transcoding queue.
4. Multiple bitrates.
5. CDN.
6. Metadata DB.
7. Recommendation feed.
8. Comments and likes.
9. Copyright/moderation pipeline.
10. Analytics.

### Ride Sharing

Must cover:

1. Driver location ingestion.
2. Geospatial indexing.
3. Matching.
4. ETA estimation.
5. Trip state machine.
6. Pricing.
7. Payments.
8. Notifications.
9. Fraud.
10. Surge pricing.

### Payment System

Must cover:

1. Idempotency keys.
2. Ledger design.
3. Double-entry accounting.
4. External processor integration.
5. Retries.
6. Reconciliation.
7. Fraud checks.
8. Audit logs.
9. PCI boundaries.
10. Exactly-once business semantics.

## Low-Level Design / OOD

### LLD Interview Template

1. Clarify features and actors.
2. Define core entities.
3. Define relationships.
4. Identify state transitions.
5. Define public APIs.
6. Pick patterns only when they help.
7. Explain extensibility.
8. Discuss concurrency if relevant.
9. Discuss persistence if relevant.
10. Write clean class skeletons.

### LLD Problem Bank

Implement each one for real in a free, no-signup online compiler
([OneCompiler](https://onecompiler.com/java) or
[Programiz](https://www.programiz.com/java-programming/online-compiler/)), then check your
design against the reference write-up(s) linked below it. Where a genuine free LeetCode
equivalent exists it's given as the primary link (verified not premium-locked); several
"obvious"-looking LeetCode matches turned out to be Premium/paywalled or a different problem
wearing the same name, and are called out as bonus-only for that reason.

### 1. Parking Lot

- Reference: [awesome-low-level-design: Parking Lot](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/parking-lot.md), [grokking-the-object-oriented-design-interview: Parking Lot](https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-a-parking-lot.md)
- Bonus (free, partial match — tracks slot counts only, not a full OOD): [Design Parking System](https://leetcode.com/problems/design-parking-system/)

### 2. Elevator System

- Reference: [awesome-low-level-design: Elevator System](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/elevator-system.md), [kousiknath/LowLevelDesign: elevator](https://github.com/kousiknath/LowLevelDesign/tree/master/src/com/lld/elevator)

### 3. Vending Machine

- Reference: [awesome-low-level-design: Vending Machine](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/vending-machine.md)

### 4. ATM

- Solve (free, verified not premium): [Design an ATM Machine](https://leetcode.com/problems/design-an-atm-machine/)
- Reference (fuller OOD with accounts/cards): [awesome-low-level-design: ATM](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/atm.md), [grokking-the-object-oriented-design-interview: ATM](https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-an-atm.md)

### 5. Library Management System

- Reference: [awesome-low-level-design: Library Management System](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/library-management-system.md), [grokking-the-object-oriented-design-interview: Library Management System](https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-a-library-management-system.md)

### 6. Movie Ticket Booking

- Reference: [awesome-low-level-design: Movie Ticket Booking System](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/movie-ticket-booking-system.md), [grokking-the-object-oriented-design-interview: Movie Ticket Booking System](https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-a-movie-ticket-booking-system.md), [kousiknath/LowLevelDesign: BookMyShow](https://github.com/kousiknath/LowLevelDesign/tree/master/src/com/lld/bookmyshow)
- Bonus (free, different domain — movie rental, not cinema seat booking): [Design Movie Rental System](https://leetcode.com/problems/design-movie-rental-system/)

### 7. Restaurant Reservation

- Reference: [awesome-low-level-design: Restaurant Management System](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/restaurant-management-system.md), [grokking-the-object-oriented-design-interview: Restaurant Management System](https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-a-restaurant-management-system.md)

### 8. Hotel Booking

- Reference: [awesome-low-level-design: Hotel Management System](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/hotel-management-system.md), [grokking-the-object-oriented-design-interview: Hotel Management System](https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-a-hotel-management-system.md)

### 9. Chess

- Reference: [awesome-low-level-design: Chess Game](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/chess-game.md), [grokking-the-object-oriented-design-interview: Chess](https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-chess.md)

### 10. Tic-Tac-Toe

- Reference: [awesome-low-level-design: Tic-Tac-Toe](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/tic-tac-toe.md), [kousiknath/LowLevelDesign: tictactoe](https://github.com/kousiknath/LowLevelDesign/tree/master/src/com/lld/tictactoe)
- Bonus (free, different problem shape — find winner from a moves array, not from-scratch class design): [Find Winner on a Tic Tac Toe Game](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/)
- LeetCode's exact-name match, [Design Tic-Tac-Toe](https://leetcode.com/problems/design-tic-tac-toe/) (#348), is confirmed Premium/paywalled — not usable as a free primary link.

### 11. Snake and Ladder

- Reference: [awesome-low-level-design: Snake and Ladder](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/snake-and-ladder.md), [kousiknath/LowLevelDesign: snakeandladder](https://github.com/kousiknath/LowLevelDesign/tree/master/src/com/lld/snakeandladder)
- Bonus (free, pure BFS algorithm, no Player/Board/Dice classes to design): [Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/)

### 12. Blackjack

- Reference: [grokking-the-object-oriented-design-interview: Blackjack and a Deck of Cards](https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-blackjack-and-a-deck-of-cards.md), [Superkakayong/Blackjack_Java_Object-oriented](https://github.com/Superkakayong/Blackjack_Java_Object-oriented)

### 13. Splitwise (expense splitting)

- Reference: [awesome-low-level-design: Splitwise](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/splitwise.md)

### 14. Food Delivery

- Reference: [awesome-low-level-design: Food Delivery Service](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/food-delivery-service.md)

### 15. Ride-Sharing Dispatch

- Reference: [awesome-low-level-design: Ride Sharing Service](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/ride-sharing-service.md), [kousiknath/LowLevelDesign: uberdriverdispatch](https://github.com/kousiknath/LowLevelDesign/tree/master/src/com/lld/uberdriverdispatch), [grokking-the-object-oriented-design-interview: Design Uber](https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-uber.md)

### 16. Notification Service

- Reference: [kousiknath/LowLevelDesign: notificationsystem](https://github.com/kousiknath/LowLevelDesign/tree/master/src/com/lld/notificationsystem)

### 17. Logging Framework

- Reference: [awesome-low-level-design: Logging Framework](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/logging-framework.md)
- LeetCode's exact-name match, [Design Log Storage System](https://leetcode.com/problems/design-log-storage-system/) (#635), is confirmed Premium/paywalled.

### 18. Rate Limiter

- Reference: [coding-parrot/Low-Level-Design: rate-limiter](https://github.com/coding-parrot/Low-Level-Design/tree/master/rate-limiter), [InterviewReady/Low-Level-Design: rate-limiter](https://github.com/InterviewReady/Low-Level-Design)
- LeetCode's closest match, [Design Hit Counter](https://leetcode.com/problems/design-hit-counter/) (#362), is confirmed Premium/paywalled, and is a sliding-window counter rather than a full policy-based rate limiter even when free.

### 19. LRU Cache

- Solve (free, verified not premium): [LRU Cache](https://leetcode.com/problems/lru-cache/)

### 20. LFU Cache

- Solve (free, verified not premium): [LFU Cache](https://leetcode.com/problems/lfu-cache/)

### 21. In-Memory File System

- Reference: [Hello Interview: file system design (covers this exact problem)](https://www.hellointerview.com/community/questions/file-system-design/cm5eguhab02gq838obxubceit), [kousiknath/LowLevelDesign: filesystem](https://github.com/kousiknath/LowLevelDesign/tree/master/src/com/lld/filesystem)
- LeetCode's exact-name match, [Design In-Memory File System](https://leetcode.com/problems/design-in-memory-file-system/) (#588), is confirmed Premium/paywalled.

### 22. Unix Find command

- Reference: [dlowrey/find](https://github.com/dlowrey/find), [context: the original Amazon onsite interview thread](https://leetcode.com/discuss/interview-question/369272/Amazon-or-Onsite-or-Linux-Find-Command)

### 23. Search Autocomplete

- Reference: [Hello Interview: Design Search Autocomplete System (covers this exact problem)](https://www.hellointerview.com/community/questions/design-search-autocomplete-system/67257ab0-683b-481d-bfd2-f7e63258056e), [vivekn/autocomplete (Trie-based)](https://github.com/vivekn/autocomplete)
- LeetCode's exact-name match, [Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/) (#642), is confirmed Premium/paywalled.

### 24. Pub/Sub system

- Reference: [awesome-low-level-design: Pub-Sub System](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/pub-sub-system.md)

### 25. Task Scheduler

- Reference: [awesome-low-level-design: Task Management System](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/task-management-system.md), [kousiknath/LowLevelDesign: delayedscheduler](https://github.com/kousiknath/LowLevelDesign/tree/master/src/com/lld/delayedscheduler)
- Bonus (free, different problem shape — CPU cooldown scheduling, not an OOD Task/Scheduler class design): [Task Scheduler](https://leetcode.com/problems/task-scheduler/)

### 26. Calendar

- Solve (free, verified not premium — progressive series, double- to triple- to max-k-booking): [My Calendar I](https://leetcode.com/problems/my-calendar-i/), [My Calendar II](https://leetcode.com/problems/my-calendar-ii/), [My Calendar III](https://leetcode.com/problems/my-calendar-iii/)

### 27. Meeting Scheduler

- Reference: [kousiknath/LowLevelDesign: meetingroomscheduler](https://github.com/kousiknath/LowLevelDesign/tree/master/src/com/lld/meetingroomscheduler)
- LeetCode's exact-name match, [Meeting Scheduler](https://leetcode.com/problems/meeting-scheduler/) (#1229), is confirmed Premium/paywalled.

### 28. Online Auction

- Reference: [awesome-low-level-design: Online Auction System](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/online-auction-system.md)

### 29. Stock Exchange Order Book

- Reference: [awesome-low-level-design: Online Stock Brokerage System](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/online-stock-brokerage-system.md), [kousiknath/LowLevelDesign: stockbroker](https://github.com/kousiknath/LowLevelDesign/tree/master/src/com/lld/stockbroker)
- Bonus (free, different focus — tracks price high/low/latest only, no order matching): [Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/)

### 30. Browser History

- Solve (free, verified not premium): [Design Browser History](https://leetcode.com/problems/design-browser-history/)

### 31. Text Editor Undo/Redo

- Reference: [vritb/command-pattern-undo-redo](https://github.com/vritb/command-pattern-undo-redo), [write-up: building a text editor with the Command pattern](https://medium.com/@yashodhara.chowkar/building-a-text-editor-with-the-command-design-pattern-955979e77b57)
- Bonus (free, missing undo/redo — only add/delete/cursor-move): [Design a Text Editor](https://leetcode.com/problems/design-a-text-editor/)

### 32. Spreadsheet

- Solve (free, verified not premium — cell values + `=X+Y` formula evaluation): [Design Spreadsheet](https://leetcode.com/problems/design-spreadsheet/)
- The more famous namesake, [Design Excel Sum Formula](https://leetcode.com/problems/design-excel-sum-formula/) (#631), is a better conceptual match but confirmed Premium/paywalled.

### 33. File Sync Client

- Reference (HLD-flavored — you still need to turn the components into classes yourself): [Design Dropbox (Watcher/Chunker/Indexer breakdown)](https://astikanand.github.io/techblogs/high-level-system-design/design-dropbox), [System-Design-Case-Studies: dropbox](https://github.com/sjuvekar/System-Design-Case-Studies/blob/master/studies/dropbox.md)

### 34. URL Shortener (OOD version)

- Solve (free, verified not premium — the classic encode/decode class version, not the HLD/sharded-datastore version): [Encode and Decode TinyURL](https://leetcode.com/problems/encode-and-decode-tinyurl/)

### 35. Metrics Aggregator

- Reference: [Hello Interview: Design a Metrics Aggregator (exact match)](https://www.hellointerview.com/community/questions/metrics-aggregator/cm78h7tyk02kgl7b16admv2nz)

## Design Patterns In LLD

Use a pattern only when it makes the design simpler — do not pattern-dump. Reference pages
below are from [refactoring.guru](https://refactoring.guru/design-patterns), verified live;
GoF = *Design Patterns: Elements of Reusable Object-Oriented Software* (Gamma, Helm, Johnson,
Vlissides, 1994).

### Strategy

- Reference: [Strategy (refactoring.guru)](https://refactoring.guru/design-patterns/strategy)
- GoF citation: Chapter 5, "Behavioral Patterns" — Strategy.

### Factory

- Reference: [Factory Method (refactoring.guru)](https://refactoring.guru/design-patterns/factory-method)
- GoF citation: Chapter 3, "Creational Patterns" — Factory Method.

### Observer

- Reference: [Observer (refactoring.guru)](https://refactoring.guru/design-patterns/observer)
- GoF citation: Chapter 5, "Behavioral Patterns" — Observer.

### Decorator

- Reference: [Decorator (refactoring.guru)](https://refactoring.guru/design-patterns/decorator)
- GoF citation: Chapter 4, "Structural Patterns" — Decorator.

### Adapter

- Reference: [Adapter (refactoring.guru)](https://refactoring.guru/design-patterns/adapter)
- GoF citation: Chapter 4, "Structural Patterns" — Adapter.

### Command

- Reference: [Command (refactoring.guru)](https://refactoring.guru/design-patterns/command)
- GoF citation: Chapter 5, "Behavioral Patterns" — Command.

### State

- Reference: [State (refactoring.guru)](https://refactoring.guru/design-patterns/state)
- GoF citation: Chapter 5, "Behavioral Patterns" — State.

### Repository

- Reference: [Repository (martinfowler.com/eaaCatalog)](https://martinfowler.com/eaaCatalog/repository.html)
- Not a GoF pattern. Originates from Martin Fowler's "Patterns of Enterprise Application Architecture" (2002); also central to Eric Evans' "Domain-Driven Design" (2003).

### Builder

- Reference: [Builder (refactoring.guru)](https://refactoring.guru/design-patterns/builder)
- GoF citation: Chapter 3, "Creational Patterns" — Builder.

### Singleton

- Reference: [Singleton (refactoring.guru)](https://refactoring.guru/design-patterns/singleton)
- GoF citation: Chapter 3, "Creational Patterns" — Singleton. Discuss thread-safety and testability caveats.

### Dependency Injection

- Reference: [Inversion of Control Containers and the Dependency Injection pattern (Martin Fowler, 2004)](https://martinfowler.com/articles/injection.html)
- Not a GoF pattern. The term was coined in the Fowler article above; the underlying idea (Inversion of Control) predates GoF and isn't one of the 23 GoF patterns.

### Immutable Value Objects

- Reference: [Value Object (Martin Fowler's bliki)](https://martinfowler.com/bliki/ValueObject.html)
- Not a GoF pattern. Best cited to Eric Evans' "Domain-Driven Design" (2003) for "Value Object," or Joshua Bloch's "Effective Java" Item 17, "Minimize mutability."

## Database and SQL Interview Prep

### Must-Know SQL

1. SELECT, WHERE, GROUP BY, HAVING.
2. INNER JOIN, LEFT JOIN, anti-join.
3. Window functions.
4. CTEs.
5. Recursive CTE basics.
6. Ranking functions.
7. Aggregations.
8. NULL behavior.
9. Index selection.
10. Query plans.
11. Transactions.
12. Deadlocks.
13. Isolation levels.

### SQL Practice Prompts

1. Find second highest salary.
2. Find employees earning more than their manager.
3. Find rolling 7-day active users.
4. Find monthly retention.
5. Find users who purchased in 3 consecutive months.
6. Find duplicate emails.
7. Find median salary per department.
8. Find top 3 products per category.
9. Find conversion rate by experiment group.
10. Find each user's longest login streak.
11. Detect overlapping reservations.
12. Compute account balances from ledger rows.
13. Find abandoned carts.
14. Find p95 latency per endpoint per hour.
15. Deduplicate event stream records.

### Database Design Prompts

1. Schema for chat messages.
2. Schema for comments with replies.
3. Schema for payments ledger.
4. Schema for versioned documents.
5. Schema for social follow graph.
6. Schema for recurring calendar events.
7. Schema for inventory reservations.
8. Schema for product search filters.
9. Schema for audit logs.
10. Schema for notification preferences.

## Operating Systems and Concurrency

Know:

1. Process vs thread.
2. Context switching.
3. Stack vs heap.
4. Virtual memory.
5. Paging.
6. File descriptors.
7. System calls.
8. Mutex.
9. Semaphore.
10. Condition variable.
11. Read-write lock.
12. Atomic operations.
13. Deadlock.
14. Livelock.
15. Starvation.
16. Race conditions.
17. Thread pools.
18. Event loops.
19. Async I/O.
20. Backpressure.

Questions:

1. Explain a deadlock and how to prevent it.
2. What is the difference between mutex and semaphore?
3. How does an event loop work?
4. Why can multithreading make a program slower?
5. What happens when memory is paged out?
6. How would you implement a thread-safe queue?
7. How do you debug a race condition?
8. What is false sharing?
9. What is priority inversion?
10. How do you design a bounded blocking queue?

## Networking and Web Technical Questions

Know:

1. TCP handshake.
2. TCP congestion control intuition.
3. UDP use cases.
4. HTTP methods.
5. HTTP status codes.
6. Cookies.
7. Sessions.
8. CORS.
9. TLS.
10. DNS.
11. Load balancers.
12. Proxies.
13. WebSockets.
14. Idempotency.
15. Rate limiting.

Questions:

1. What happens from browser to server for an HTTPS request?
2. Why is POST not idempotent by default?
3. How does DNS caching affect deploys?
4. Why use connection pooling?
5. What causes head-of-line blocking?
6. How do you handle request retries safely?
7. What is CORS and why does it exist?
8. How does TLS prevent man-in-the-middle attacks?
9. How do load balancers detect unhealthy nodes?
10. Why do mobile clients need special handling?

## Language and Runtime Deep Dives

Prepare for your primary interview language.

### Java

1. JVM memory model.
2. Garbage collection basics.
3. HashMap internals.
4. ConcurrentHashMap.
5. equals and hashCode.
6. Generics.
7. Streams tradeoffs.
8. synchronized vs Lock.
9. volatile.
10. CompletableFuture.

### Python

1. dict/set internals.
2. list resizing.
3. GIL.
4. generators.
5. iterators.
6. decorators.
7. context managers.
8. async/await.
9. multiprocessing vs threading.
10. memory model basics.

### JavaScript / TypeScript

1. Event loop.
2. Promises.
3. async/await.
4. Closures.
5. Prototype chain.
6. this binding.
7. TypeScript type narrowing.
8. Node.js streams.
9. Backpressure.
10. Worker threads.

### C++

1. RAII.
2. Move semantics.
3. Smart pointers.
4. References vs pointers.
5. Undefined behavior.
6. STL containers.
7. Iterator invalidation.
8. const correctness.
9. Memory allocation.
10. Threading primitives.

## Debugging and Incident Rounds

Interviewers may give a broken service scenario. Use this flow:

1. Confirm symptoms.
2. Identify blast radius.
3. Check recent changes.
4. Check metrics.
5. Check logs and traces.
6. Form hypotheses.
7. Isolate one variable at a time.
8. Mitigate before root cause if needed.
9. Explain rollback or traffic shift.
10. Document postmortem actions.

Practice scenarios:

1. API p99 latency doubled after deploy.
2. Database CPU is at 95%.
3. Cache hit rate dropped from 90% to 40%.
4. Users see duplicate payments.
5. Kafka consumer lag is growing.
6. One shard is overloaded.
7. Mobile clients keep reconnecting.
8. Search results are stale.
9. Emails are delayed.
10. A region went down.
11. Memory usage grows until process crashes.
12. A background job processed old data twice.
13. A new index made writes too slow.
14. Rate limiter blocks legitimate users.
15. CDN serves stale private content.

## Code Review and Maintainability Rounds

Know how to discuss:

1. Correctness.
2. Edge cases.
3. Complexity.
4. Readability.
5. Naming.
6. Testability.
7. Separation of concerns.
8. Error handling.
9. Observability.
10. Security.
11. Concurrency safety.
12. Backward compatibility.

Practice reviewing code for:

1. Race conditions.
2. N+1 queries.
3. Missing indexes.
4. Retry without idempotency.
5. Unbounded memory growth.
6. Unbounded queues.
7. Missing timeouts.
8. Logging sensitive data.
9. Swallowed exceptions.
10. Poor API contracts.

## Project Deep Dive Prep

For every project on your resume, prepare:

1. What problem did it solve?
2. What was your exact contribution?
3. What was the architecture?
4. What tradeoffs did you make?
5. What was the hardest bug?
6. What did you improve?
7. What would you redesign now?
8. How did you measure success?
9. How did it fail?
10. How did you work with others?

Use this structure:

1. Context.
2. Constraints.
3. Options considered.
4. Decision.
5. Implementation.
6. Result.
7. Lessons.

## 12-Week Practice Plan

### Weeks 1-2: Fundamentals

1. Study networking, databases, caching, queues, and consistency.
2. Do 4 HLD mocks: URL shortener, chat, feed, video.
3. Do 4 LLD mocks: parking lot, elevator, rate limiter, file system.
4. Write 20 SQL queries.

### Weeks 3-4: Classic Systems

1. Do 6 HLD mocks: Dropbox, YouTube, Uber, notifications, search, rate limiter.
2. Deep dive storage and cache tradeoffs.
3. Practice capacity estimation daily.
4. Record yourself explaining designs.

### Weeks 5-6: Distributed Systems

1. Study replication, sharding, consensus, queues, exactly-once semantics.
2. Do Kafka, distributed cache, distributed lock, and analytics pipeline.
3. Practice failure-mode questioning.
4. Review SRE concepts.

### Weeks 7-8: LLD and Coding Adjacent

1. Do 10 LLD prompts.
2. Implement 4 designs in code: LRU, rate limiter, in-memory file system, pub/sub.
3. Practice concurrency questions.
4. Practice code review scenarios.

### Weeks 9-10: Hard Product Designs

1. Payment system.
2. Collaborative docs.
3. Stock exchange order book.
4. Ticket booking.
5. Real-time leaderboard.
6. Multi-region notification system.

### Weeks 11-12: Interview Simulation

1. 8 full HLD mocks.
2. 4 full LLD mocks.
3. 4 database/SQL rounds.
4. 4 debugging rounds.
5. 4 project deep dives.
6. Redo every weak mock.

## Capacity Estimation Cheat Sheet

Use rough numbers. Interviewers care about reasoning, not perfect arithmetic.

1. 1 million daily active users.
2. 10 actions per user per day means 10 million writes/day.
3. 10 million/day is about 116 writes/sec average.
4. Peak can be 5x to 20x average.
5. 1 KB per record times 1 billion records is about 1 TB raw.
6. Replication and indexes can multiply storage by 3x to 10x.
7. Cache hit rate changes database load dramatically.
8. p99 latency usually matters more than average.

Always estimate:

1. Read QPS.
2. Write QPS.
3. Storage per day.
4. Bandwidth.
5. Cache size.
6. Number of partitions.
7. Peak traffic multiplier.

## System Design Scorecard

Score yourself from 0 to 3.

| Dimension | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Requirements | No clarity | Some assumptions | Good scope | Sharp and efficient |
| APIs | Missing | Vague | Usable | Clean, idempotent, versionable |
| Data model | Missing | Basic | Indexed | Matches access patterns |
| Architecture | Random boxes | Basic | Scalable | Clear, defensible tradeoffs |
| Deep dive | Avoided | Shallow | Solid | Handles pressure |
| Reliability | Missing | Mentions retries | Covers failures | SLO-driven |
| Scale | No estimates | Rough only | Reasonable | Drives design choices |
| Communication | Disorganized | Understandable | Structured | Leads interviewer |

Passing target: average 2.3 or higher, no category below 2.

## Full Mock Loop

Do this weekly:

1. One HLD mock.
2. One LLD mock.
3. One SQL/database round.
4. One debugging scenario.
5. One project deep dive.
6. One concurrency/networking drill.

After each round, write:

1. What did I clarify well?
2. Where did I overbuild?
3. Where was I vague?
4. What tradeoff did I fail to explain?
5. Which concept needs study?
6. What would I say next time?

## Final Boss

You are strong enough for system design and technical rounds if you can do all of this without notes:

1. Design URL shortener, chat, feed, video, payment, search, and distributed cache.
2. For each, handle a 10x scale follow-up.
3. For each, explain data model, cache, queue, failure modes, and metrics.
4. Solve 20 SQL prompts.
5. Complete 10 LLD prompts.
6. Explain OS, networking, database, and concurrency fundamentals clearly.
7. Walk through 3 resume projects with tradeoffs and failure stories.
8. Debug 5 incident scenarios out loud.

If you can do that, the interview becomes a conversation instead of a guessing game.
