# FAANG System Design And Technical Interview Failure Map

This is the corrected system-design document. The earlier version included useful material, but the source hierarchy was muddy. For interview prep, the core should be interview-specific system design practice. SRE and cloud architecture frameworks are relevant, but only as deep-dive support for reliability, observability, resilience, cost, and operational follow-ups.

## Research Basis

Core interview-prep sources:

- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Tech Interview Handbook system design](https://www.techinterviewhandbook.org/system-design/)
- [Hello Interview system design](https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction)
- [Educative system design interview guide](https://www.educative.io/blog/system-design-interview)

Deep technical sources:

- [Designing Data-Intensive Applications](https://dataintensive.net/) for storage, replication, partitioning, consistency, batch/stream processing.
- [Google SRE Book](https://sre.google/sre-book/table-of-contents/) for SLOs, error budgets, alerting, toil, capacity planning, and incident thinking.
- [Google SRE Workbook](https://sre.google/workbook/table-of-contents/) for practical reliability exercises.
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/) for operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability tradeoffs.
- [Amazon Builders' Library](https://aws.amazon.com/builders-library/) for production engineering patterns like retries, timeouts, backoff, overload control, and distributed systems tradeoffs.

## Are SRE And AWS Well-Architected Relevant?

Yes, but not as the main system-design curriculum.

They are relevant for:

- reliability follow-ups,
- SLO and SLA discussion,
- multi-region failover,
- monitoring and alerting,
- capacity planning,
- disaster recovery,
- graceful degradation,
- retries, timeouts, and backpressure,
- cost and performance tradeoffs,
- production-readiness reasoning.

They are not enough for:

- drawing the initial architecture,
- selecting feed generation strategy,
- designing chat presence,
- choosing database schemas,
- building a rate limiter,
- designing a notification pipeline,
- API design,
- LLD class modeling.

Use interview sources for the main round. Use SRE/AWS as the difference between "I drew boxes" and "I can run this in production."

## What Actually Defeats Candidates

| Failure Mode | What It Looks Like | Fix |
|---|---|---|
| Jumps into boxes too fast | Draws API, cache, DB before clarifying | First ask functional/non-functional requirements |
| No scale math | Says "use Kafka" without QPS/storage estimate | Estimate reads, writes, storage, bandwidth, peak |
| Weak data model | Architecture exists but entities and indexes are vague | Define schema and access patterns before scaling |
| Cache handwaving | "Add Redis" with no invalidation strategy | State cache key, TTL, eviction, stampede, hot key plan |
| Queue handwaving | "Use Kafka" for every async path | Explain ordering, retries, duplicates, DLQ, replay |
| Wrong consistency | Uses eventual consistency for money/inventory | Classify strong vs eventual paths |
| No failure modes | Only happy path architecture | Discuss region, DB, queue, cache, service failure |
| No idempotency | Retries create duplicate payment/order/message | Add idempotency keys and dedupe store |
| No deep dive | Stays at shallow component level | Pick the hardest subsystem and drill down |
| No observability | Cannot say how to know it is broken | Define metrics, logs, traces, alerts |
| Over-engineering | Adds every technology | Justify each component from a requirement |
| Cannot answer 10x | Architecture collapses under scale follow-up | Discuss sharding, partitioning, async, caching, backpressure |

## The Interview-First HLD Template

### Step 1: Requirements

Ask:

1. What are the top 3 features?
2. Who are the users?
3. Is the system read-heavy or write-heavy?
4. What latency target matters?
5. What consistency is required?
6. What scale should we design for?
7. What is out of scope?
8. Any security, privacy, or compliance requirements?

### Step 2: API

Define:

1. Main endpoints.
2. Request and response shape.
3. Pagination and cursor strategy.
4. Idempotency key if mutation can be retried.
5. Authentication/authorization boundary.
6. Error cases.

Example:

```text
POST /v1/messages
Headers: Idempotency-Key
Body: {conversation_id, sender_id, client_message_id, text, attachments}
Response: {message_id, server_timestamp, status}
```

### Step 3: Data Model

Define:

1. Entities.
2. Tables or collections.
3. Primary keys.
4. Secondary indexes.
5. Partition keys.
6. Read/write paths.
7. Retention policy.

### Step 4: Baseline Architecture

Draw:

1. Client.
2. Edge/CDN/load balancer.
3. API service.
4. Core domain service.
5. Database.
6. Cache if justified.
7. Queue/stream if async work exists.
8. Blob storage for media/files.
9. Search index if query-heavy.
10. Analytics pipeline if events matter.

### Step 5: Deep Dive

Pick the hardest subsystem:

- feed fanout,
- chat ordering,
- payment idempotency,
- search indexing,
- matching,
- file sync,
- video transcoding,
- rate limiting,
- distributed cache,
- queue semantics,
- multi-region failover.

### Step 6: Production Hardening

Cover:

1. Failure modes.
2. Bottlenecks.
3. Backpressure.
4. Retries and timeouts.
5. Idempotency.
6. Monitoring.
7. Alerts.
8. Rollback.
9. Security.
10. Cost.

## High-Frequency HLD Prompt Families

### 1. Identity, Short Links, And Simple Read-Heavy Systems

Prompts:

1. Design URL shortener.
2. Design pastebin.
3. Design QR-code service.
4. Design file metadata service.

Core concepts:

- unique ID generation,
- base62 encoding,
- collision handling,
- redirect latency,
- cache-aside,
- hot links,
- abuse prevention,
- expiration,
- analytics pipeline.

Killer follow-ups:

- custom aliases,
- billions of redirects per day,
- malicious link detection,
- short code collision,
- regional redirects,
- analytics without slowing redirects.

### 2. Social Graph And Feeds

Prompts:

1. Design Twitter/X.
2. Design Facebook news feed.
3. Design Instagram feed.
4. Design Reddit ranking.
5. Design LinkedIn feed.

Core concepts:

- follow graph,
- fanout-on-write,
- fanout-on-read,
- hybrid fanout,
- celebrity users,
- ranking,
- pagination,
- feed freshness,
- deduplication,
- cache warming.

Killer follow-ups:

- user follows 1 million accounts,
- celebrity posts to 100 million followers,
- ranked feed with freshness,
- delete post from all cached feeds,
- low-latency home timeline,
- duplicate suppression across sources.

### 3. Chat And Real-Time Communication

Prompts:

1. Design WhatsApp.
2. Design Slack.
3. Design Discord text chat.
4. Design group messaging.
5. Design live comments.

Core concepts:

- WebSocket gateways,
- connection state,
- presence,
- message persistence,
- per-conversation ordering,
- offline delivery,
- push notifications,
- delivery/read receipts,
- multi-device sync,
- media upload.

Killer follow-ups:

- reconnect storms,
- message exactly-once UX,
- offline delivery ordering,
- multi-device read state,
- group with 100,000 members,
- encrypted messages and search tradeoff.

### 4. Notifications

Prompts:

1. Design notification system.
2. Design email/SMS/push pipeline.
3. Design alerting system.
4. Design reminder service.

Core concepts:

- preference store,
- templating,
- queue fanout,
- provider integration,
- retries,
- dead-letter queues,
- rate limiting,
- dedupe,
- quiet hours,
- priority.

Killer follow-ups:

- do not send duplicates,
- provider outage,
- per-user throttling,
- delayed scheduled sends,
- time zones,
- transactional vs promotional priority.

### 5. Media Systems

Prompts:

1. Design YouTube.
2. Design Netflix.
3. Design TikTok.
4. Design Instagram media upload.
5. Design photo storage.

Core concepts:

- object storage,
- upload sessions,
- multipart upload,
- transcoding,
- thumbnails,
- CDN,
- adaptive bitrate,
- metadata DB,
- recommendation feed,
- moderation.

Killer follow-ups:

- viral video hot object,
- upload resume after failure,
- copyright scan,
- p99 playback latency,
- region-specific content rights,
- storage cost reduction.

### 6. Search And Discovery

Prompts:

1. Design search engine.
2. Design autocomplete.
3. Design typeahead.
4. Design people search.
5. Design product search.

Core concepts:

- inverted index,
- tokenization,
- ranking,
- freshness,
- indexing pipeline,
- query service,
- caching,
- spelling correction,
- personalization,
- pagination.

Killer follow-ups:

- prefix search at low latency,
- index backfill,
- stale results,
- typo tolerance,
- multilingual search,
- ranking abuse.

### 7. Geospatial And Matching

Prompts:

1. Design Uber.
2. Design DoorDash.
3. Design nearby restaurants.
4. Design location sharing.
5. Design geofencing.

Core concepts:

- location ingestion,
- geohash/S2/H3 style partitioning,
- nearby search,
- matching,
- ETA,
- trip state machine,
- map updates,
- driver availability,
- surge pricing,
- stale location handling.

Killer follow-ups:

- hotspot city center,
- driver location every few seconds,
- matching fairness,
- rider cancellation,
- location privacy,
- cross-region trips.

### 8. Payments, Orders, Inventory

Prompts:

1. Design payment processing.
2. Design Stripe-like API.
3. Design checkout.
4. Design ticket booking.
5. Design inventory reservation.
6. Design wallet/ledger.

Core concepts:

- idempotency keys,
- double-entry ledger,
- order state machine,
- reservation timeout,
- external processor,
- reconciliation,
- fraud checks,
- audit logs,
- strong consistency path,
- retry safety.

Killer follow-ups:

- duplicate charge,
- payment succeeds but service times out,
- inventory race,
- ledger correction,
- external provider outage,
- exactly-once business semantics.

### 9. File Storage And Collaboration

Prompts:

1. Design Dropbox.
2. Design Google Drive.
3. Design Google Docs.
4. Design collaborative editor.
5. Design versioned file system.

Core concepts:

- chunking,
- deduplication,
- sync protocol,
- conflict resolution,
- metadata DB,
- object storage,
- permissions,
- sharing links,
- version history,
- operational transform or CRDT discussion.

Killer follow-ups:

- two users edit offline,
- large file upload resume,
- permission revocation,
- file deleted on one device,
- document cursor presence,
- real-time conflict resolution.

### 10. Infra Systems

Prompts:

1. Design rate limiter.
2. Design distributed cache.
3. Design distributed key-value store.
4. Design Kafka-like queue.
5. Design CDN.
6. Design API gateway.
7. Design feature flag service.
8. Design service discovery.
9. Design distributed lock.
10. Design cron scheduler.
11. Design metrics pipeline.
12. Design logging pipeline.
13. Design tracing system.
14. Design web crawler.
15. Design online code judge.

Core concepts:

- partitioning,
- replication,
- consistency,
- leader election,
- leases,
- TTL,
- backpressure,
- ordering,
- replay,
- consumer groups,
- shard rebalancing,
- health checks.

Killer follow-ups:

- hot partition,
- exactly-once myth,
- consumer lag,
- clock skew,
- split brain,
- cache stampede,
- thundering herd,
- shard migration,
- poison messages,
- partial failure.

## The 40 Most Important HLD Mocks

Do these in order. They are chosen by pattern coverage, not random popularity. Each links to a
real, verified reference case study — the actual company engineering post/paper for that
system, or the best free in-depth breakdown where no primary source survives. Solve it
yourself first, then compare against the link.

1. [URL shortener](https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly) (Hello Interview)
2. [Pastebin](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md) (system-design-primer)
3. [Rate limiter](https://stripe.com/blog/rate-limiters) (Stripe Engineering)
4. [Notification system](https://medium.com/pinterest-engineering/nep-notification-system-and-relevance-a7fff21986c7) (Pinterest Engineering)
5. [Chat app](https://discord.com/blog/how-discord-stores-trillions-of-messages) (Discord Engineering)
6. [News feed](https://engineering.fb.com/2021/01/26/ml-applications/news-feed-ranking/) (Meta Engineering)
7. [Twitter/X](https://blog.x.com/engineering/en_us/topics/infrastructure/2017/the-infrastructure-behind-twitter-scale) (Twitter/X Engineering)
8. [Instagram](https://engineering.fb.com/2025/05/21/production-engineering/journey-to-1000-models-scaling-instagrams-recommendation-system/) (Meta Engineering)
9. [YouTube](https://blog.youtube/inside-youtube/new-era-video-infrastructure/) (Official YouTube Blog)
10. [TikTok](https://arxiv.org/abs/2209.07663) (ByteDance, "Monolith" paper)
11. [Search autocomplete](https://engineering.fb.com/2010/05/17/web/the-life-of-a-typeahead-query/) (Meta Engineering)
12. [Product search](https://www.amazon.science/publications/amazon-search-the-joy-of-ranking-products) (Amazon Science)
13. [Web crawler](https://developers.google.com/search/blog/2026/03/crawler-blog-post) (Google Search Central)
14. [Distributed cache](https://engineering.fb.com/2013/04/15/core-infra/scaling-memcache-at-facebook/) (Meta Engineering)
15. [Distributed key-value store](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) (Amazon Dynamo paper, SOSP 2007)
16. [Kafka-like queue](https://www.linkedin.com/blog/engineering/open-source/apache-kafka-trillion-messages) (LinkedIn Engineering)
17. [Metrics pipeline](https://www.uber.com/us/en/blog/m3/) (Uber Engineering)
18. [Logging pipeline](https://netflixtechblog.com/scalable-logging-and-tracking-882bde0ddca2) (Netflix TechBlog)
19. [API gateway](https://netflixtechblog.com/announcing-zuul-edge-service-in-the-cloud-ab3af5be08ee) (Netflix TechBlog, Zuul)
20. [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) (Cloudflare)
21. [Dropbox](https://dropbox.tech/infrastructure/inside-the-magic-pocket) (Dropbox Tech Blog)
22. [Google Drive](https://cloud.google.com/blog/products/storage-data-transfer/a-peek-behind-colossus-googles-file-system) (Google Cloud Blog, Colossus)
23. [Collaborative docs](https://drive.googleblog.com/2010/09/whats-different-about-new-google-docs.html) (Official Google Drive Blog)
24. [Calendar](https://www.hellointerview.com/community/questions/calendar-free-busy/cm8c1h59t005n8pgzdq4ynqjo) (Hello Interview)
25. [Uber](https://www.uber.com/en-CA/blog/engineering-routing-engine/) (Uber Engineering)
26. [DoorDash](https://doordash.engineering/2014/09/12/designing-an-on-demand-logistics-system/) (DoorDash Engineering)
27. [Nearby friends](https://www.uber.com/us/en/blog/h3/) (Uber Engineering, H3 geospatial index)
28. [Payment system](https://stripe.com/blog/idempotency) (Stripe Engineering)
29. [Ticket booking](https://www.hellointerview.com/learn/system-design/answer-keys/ticketmaster) (Hello Interview)
30. [Inventory reservation](https://shopify.engineering/scaling-inventory-reservations) (Shopify Engineering)
31. [Stock trading order book](https://lmax-exchange.github.io/disruptor/disruptor.html) (LMAX Exchange)
32. [Fraud detection pipeline](https://stripe.dev/blog/how-we-built-it-stripe-radar) (Stripe Engineering, Radar)
33. [A/B testing platform](https://netflixtechblog.com/its-all-a-bout-testing-the-netflix-experimentation-platform-4e1ca458c15) (Netflix TechBlog)
34. [Recommendation system](https://netflixtechblog.com/system-architectures-for-personalization-and-recommendation-e081aa94b5d8) (Netflix TechBlog)
35. [Real-time leaderboard](https://www.hellointerview.com/community/questions/realtime-game-leaderboard/cm4t0qbr9004988ilmum8jm06) (Hello Interview)
36. [Multiplayer game state sync](https://www.riotgames.com/en/news/valorants-128-tick-servers) (Riot Games Technology Blog)
37. [IoT telemetry ingestion](https://aws.amazon.com/blogs/iot/7-patterns-for-iot-data-ingestion-and-visualization-how-to-decide-what-works-best-for-your-use-case/) (AWS IoT Blog)
38. [Feature flag platform](https://launchdarkly.com/docs/tutorials/ld-arch-deep-dive) (LaunchDarkly official docs)
39. [Distributed scheduler](https://medium.com/airbnb-engineering/chronos-a-replacement-for-cron-f05d7d986a9d) (Airbnb Engineering, Chronos)
40. [Online code judge](https://github.com/judge0/judge0) (Judge0, open-source reference implementation)

## The 20 Hardest Follow-Up Themes

Apply these to your mocks:

1. Multi-region active-active.
2. Cross-region failover under 60 seconds.
3. Hot key or hot celebrity.
4. Cache stampede.
5. Duplicate external side effects.
6. Exactly-once business semantics.
7. Per-user strict ordering.
8. Reconnect storm.
9. Consumer lag.
10. Poison messages.
11. Backfill without taking system down.
12. Schema migration without downtime.
13. GDPR-style deletion.
14. Abuse and rate-limit evasion.
15. Cost reduction by 50%.
16. p99 latency under 100 ms.
17. Regional data residency.
18. Search index freshness.
19. Offline sync conflict.
20. Disaster recovery after data corruption.

## Component Deep Dives

### Cache Deep Dive

You should explain:

1. Why cache is needed.
2. What key is cached.
3. Value size.
4. TTL.
5. Eviction policy.
6. Invalidation path.
7. Cache-aside vs write-through.
8. Stampede prevention.
9. Hot key mitigation.
10. What happens if cache is down.

### Queue / Stream Deep Dive

You should explain:

1. Queue vs log.
2. Partition key.
3. Ordering guarantee.
4. Delivery semantics.
5. Duplicate handling.
6. Retry policy.
7. Dead-letter queue.
8. Consumer groups.
9. Replay.
10. Backpressure.

### Database Deep Dive

You should explain:

1. SQL vs NoSQL choice.
2. Primary key.
3. Secondary indexes.
4. Partition key.
5. Read/write patterns.
6. Replication.
7. Transactions.
8. Isolation level if relevant.
9. Migration strategy.
10. Backup and restore.

### Consistency Deep Dive

You should explain:

1. Strong consistency path.
2. Eventual consistency path.
3. Read-your-writes.
4. Idempotency.
5. Deduplication.
6. Conflict resolution.
7. Ordering.
8. Quorum if relevant.
9. Saga if multi-step business flow.
10. Compensation.

### Reliability Deep Dive

You should explain:

1. SLI.
2. SLO.
3. Error budget.
4. Failure modes.
5. Timeouts.
6. Retries.
7. Exponential backoff.
8. Circuit breakers.
9. Bulkheads.
10. Load shedding.
11. Graceful degradation.
12. Monitoring and alerting.

This is where Google SRE and AWS Well-Architected become useful. They teach the vocabulary and tradeoff thinking interviewers reward in senior-level follow-ups.

## Low-Level Design / Object-Oriented Design

LLD tests whether you can turn requirements into maintainable code-level structure.

### LLD Failure Modes

| Failure Mode | What It Looks Like | Fix |
|---|---|---|
| Class dump | Dozens of classes without behavior | Start from use cases |
| No state machine | Booking/payment/order states vague | Draw states and transitions |
| No extensibility | One giant class | Use interfaces only where change is expected |
| Pattern spam | Factory/observer everywhere | Use patterns only when they simplify |
| No concurrency discussion | Shared state unsafe | Mention locks, transactions, optimistic concurrency |
| No API surface | Classes exist but cannot be used | Define public methods |
| No tests | Cannot validate behavior | Give test cases |

### LLD Prompt Bank

1. Parking lot.
2. Elevator system.
3. Vending machine.
4. ATM.
5. Library management.
6. Movie ticket booking.
7. Restaurant reservation.
8. Hotel booking.
9. Chess.
10. Tic-tac-toe.
11. Snake and ladder.
12. Blackjack.
13. Splitwise.
14. Food delivery.
15. Ride-sharing dispatch.
16. Notification service.
17. Logging framework.
18. Rate limiter.
19. LRU cache.
20. LFU cache.
21. In-memory file system.
22. Unix find.
23. Autocomplete.
24. Pub/sub.
25. Task scheduler.
26. Calendar.
27. Meeting scheduler.
28. Auction.
29. Stock exchange order book.
30. Browser history.
31. Text editor undo/redo.
32. Spreadsheet.
33. File sync client.
34. Metrics aggregator.
35. Rule engine.

### LLD Patterns To Know

1. Strategy.
2. State.
3. Observer.
4. Command.
5. Factory.
6. Builder.
7. Adapter.
8. Decorator.
9. Repository.
10. Dependency injection.

Use them only when justified by changing requirements.

## Databases And SQL

### Must-Know Concepts

1. Primary key.
2. Foreign key.
3. Index.
4. Composite index.
5. Covering index.
6. Query plan.
7. Join types.
8. Aggregation.
9. Window functions.
10. Transactions.
11. ACID.
12. Isolation levels.
13. Deadlocks.
14. Optimistic locking.
15. Pessimistic locking.
16. Normalization.
17. Denormalization.
18. Partitioning.
19. Replication.
20. Materialized views.

### SQL Prompts

1. Second highest salary.
2. Top 3 salaries per department.
3. Rolling 7-day active users.
4. Monthly retention.
5. Consecutive login streak.
6. Duplicate emails.
7. Median salary per department.
8. Conversion rate by experiment group.
9. Overlapping reservations.
10. Account balance from ledger rows.
11. Abandoned carts.
12. p95 latency per endpoint per hour.
13. Deduplicate event stream rows.
14. Users who purchased in 3 consecutive months.
15. Fraudulent transactions by velocity rule.
16. Inventory left after reservations.
17. Most recent message per conversation.
18. Search query click-through rate.
19. Daily active users by country.
20. Churned customers by cohort.

### Schema Design Prompts

1. Chat messages.
2. Comments with replies.
3. Payments ledger.
4. Versioned documents.
5. Follow graph.
6. Recurring calendar events.
7. Inventory reservations.
8. Product search filters.
9. Audit logs.
10. Notification preferences.
11. Feature flags.
12. Experiment assignments.
13. File metadata.
14. Delivery orders.
15. Stock trades.

## Operating Systems And Concurrency

These appear in technical deep dives, infra roles, backend rounds, and senior interviews.

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
16. Race condition.
17. Thread pool.
18. Event loop.
19. Async I/O.
20. Backpressure.

Practice:

1. Implement bounded blocking queue.
2. Implement thread-safe LRU.
3. Explain deadlock prevention.
4. Explain event loop.
5. Explain why multithreading can be slower.
6. Debug a race condition.
7. Explain false sharing.
8. Explain priority inversion.
9. Explain producer-consumer.
10. Explain read-heavy synchronization.

## Networking And Web

Know:

1. DNS.
2. TCP handshake.
3. TLS.
4. HTTP methods.
5. HTTP status codes.
6. Cookies.
7. Sessions.
8. CORS.
9. CDN.
10. Proxies.
11. Load balancers.
12. WebSockets.
13. Long polling.
14. Server-sent events.
15. Idempotency.
16. Rate limiting.
17. Connection pooling.
18. Timeouts.

Practice:

1. Explain what happens after entering a URL.
2. Explain HTTPS handshake at a high level.
3. Explain REST vs gRPC.
4. Explain WebSocket scaling.
5. Explain CORS.
6. Explain load balancer health checks.
7. Explain sticky sessions.
8. Explain retries and idempotency.
9. Explain DNS TTL impact on migration.
10. Explain mobile network constraints.

## Debugging / Incident Rounds

Use this process:

1. Clarify symptom.
2. Determine blast radius.
3. Check recent changes.
4. Check metrics.
5. Check logs.
6. Check traces.
7. Form hypotheses.
8. Mitigate if user impact is high.
9. Isolate root cause.
10. Prevent recurrence.

Practice scenarios:

1. p99 latency doubled.
2. DB CPU at 95%.
3. Cache hit rate collapsed.
4. Duplicate payments.
5. Kafka consumer lag growing.
6. One shard overloaded.
7. WebSocket reconnect storm.
8. Search results stale.
9. Email delay.
10. Region outage.
11. Memory leak.
12. Background job reprocessed old data.
13. New index slowed writes.
14. Rate limiter blocks legitimate users.
15. CDN serves stale private content.

## Resume Project Deep Dive

For every project, prepare:

1. Problem.
2. Constraints.
3. Architecture.
4. Your exact contribution.
5. Hardest technical decision.
6. Tradeoffs.
7. Failure or bug.
8. Metrics.
9. What you would redesign.
10. What you learned.

The interviewer is looking for ownership, not a polished story.

## 8-Week System Design And Technical Plan

### Week 1: HLD Basics

1. URL shortener.
2. Rate limiter.
3. Notification system.
4. Chat.
5. Learn API/data model/scale template.

### Week 2: Feeds And Media

1. Twitter/X.
2. Instagram.
3. YouTube.
4. TikTok.
5. Deep dive fanout, CDN, object storage, transcoding.

### Week 3: Search, Storage, Data

1. Autocomplete.
2. Search engine.
3. Dropbox.
4. Google Drive.
5. Deep dive indexing, metadata, file sync.

### Week 4: Infra Systems

1. Distributed cache.
2. Distributed key-value store.
3. Kafka-like queue.
4. Metrics/logging pipeline.
5. Deep dive partitioning, replication, ordering, replay.

### Week 5: Hard Product Systems

1. Uber.
2. DoorDash.
3. Payments.
4. Ticket booking.
5. Deep dive geospatial, matching, idempotency, inventory.

### Week 6: LLD

1. Parking lot.
2. Elevator.
3. Vending machine.
4. Movie booking.
5. Stock exchange order book.
6. In-memory file system.

### Week 7: Other Technical Rounds

1. 20 SQL prompts.
2. 10 OS/concurrency questions.
3. 10 networking questions.
4. 5 debugging scenarios.
5. 3 resume project deep dives.

### Week 8: Mock Loop

1. 4 full HLD mocks.
2. 2 full LLD mocks.
3. 2 SQL rounds.
4. 2 debugging rounds.
5. 2 project deep dives.
6. Redo every weak area.

## Scorecard

| Dimension | Passing Signal |
|---|---|
| Requirements | You narrow scope quickly and correctly |
| API | You define usable endpoints and idempotency |
| Data model | Tables/indexes match access patterns |
| Scale | Estimates drive architecture decisions |
| Architecture | Components are justified by requirements |
| Deep dive | You can drill into the hard part |
| Consistency | You know which paths need strong guarantees |
| Reliability | You handle failure, retries, backpressure |
| Observability | You define metrics, logs, traces, alerts |
| Tradeoffs | You state what you optimized and sacrificed |

## Final Boss

You are ready when you can do all of this without notes:

1. Design URL shortener, chat, feed, video, search, Dropbox, Uber, payments, distributed cache, and Kafka.
2. For each, answer a 10x scale follow-up.
3. For each, explain data model, cache, queue, consistency, failure modes, and metrics.
4. Complete 10 LLD prompts with classes and APIs.
5. Solve 20 SQL prompts.
6. Explain OS, networking, concurrency, and database fundamentals clearly.
7. Walk through 3 resume projects with concrete tradeoffs.
8. Debug 5 incident scenarios out loud.

If you can do that, you are not just memorizing system design diagrams. You can reason like someone who has to own the system after launch.
