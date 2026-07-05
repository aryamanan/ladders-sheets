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

## Core System Design Concepts

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

### Classic Product Systems

1. Design a URL shortener.
2. Design Twitter/X timeline.
3. Design Instagram.
4. Design Facebook News Feed.
5. Design Reddit.
6. Design YouTube.
7. Design Netflix.
8. Design TikTok short-video feed.
9. Design WhatsApp.
10. Design Slack.
11. Design Discord voice/text.
12. Design Gmail.
13. Design Google Calendar.
14. Design Google Drive.
15. Design Dropbox.
16. Design Google Docs collaborative editing.
17. Design Google Photos.
18. Design Spotify.
19. Design Uber.
20. Design DoorDash.
21. Design Airbnb.
22. Design Ticketmaster.
23. Design Amazon product page.
24. Design Amazon cart and checkout.
25. Design payment processing.
26. Design Stripe-like payment API.
27. Design stock trading platform.
28. Design Robinhood watchlist and quotes.
29. Design LinkedIn people search.
30. Design job matching.

### Infra and Backend Systems

1. Design a rate limiter.
2. Design an API gateway.
3. Design a CDN.
4. Design a distributed cache.
5. Design a distributed key-value store.
6. Design a distributed queue.
7. Design Kafka.
8. Design a notification system.
9. Design a logging pipeline.
10. Design metrics and monitoring.
11. Design a tracing system.
12. Design a feature flag system.
13. Design a configuration service.
14. Design a service discovery system.
15. Design a distributed lock service.
16. Design a cron scheduler.
17. Design a task queue.
18. Design an online code judge.
19. Design a web crawler.
20. Design a search engine.
21. Design autocomplete.
22. Design a recommendation system.
23. Design ads click tracking.
24. Design A/B testing platform.
25. Design fraud detection pipeline.
26. Design data lake ingestion.
27. Design real-time analytics dashboard.
28. Design online leaderboard.
29. Design multiplayer game state sync.
30. Design IoT telemetry ingestion.

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

Practice each as classes, interfaces, APIs, and data structures.

1. Design Parking Lot.
2. Design Elevator System.
3. Design Vending Machine.
4. Design ATM.
5. Design Library Management System.
6. Design Movie Ticket Booking.
7. Design Restaurant Reservation.
8. Design Hotel Booking.
9. Design Chess.
10. Design Tic-Tac-Toe.
11. Design Snake and Ladder.
12. Design Blackjack.
13. Design Splitwise.
14. Design Food Delivery.
15. Design Ride-Sharing Dispatch.
16. Design Notification Service.
17. Design Logging Framework.
18. Design Rate Limiter.
19. Design LRU Cache.
20. Design LFU Cache.
21. Design In-Memory File System.
22. Design Unix Find command.
23. Design Search Autocomplete.
24. Design Pub/Sub.
25. Design Task Scheduler.
26. Design Calendar.
27. Design Meeting Scheduler.
28. Design Online Auction.
29. Design Stock Exchange Order Book.
30. Design Browser History.
31. Design Text Editor Undo/Redo.
32. Design Spreadsheet.
33. Design File Sync Client.
34. Design URL Shortener classes.
35. Design Metrics Aggregator.

### Patterns to Know

1. Strategy.
2. Factory.
3. Observer.
4. Decorator.
5. Adapter.
6. Command.
7. State.
8. Repository.
9. Builder.
10. Singleton, with caveats.
11. Dependency injection.
12. Immutable value objects.

Do not pattern-dump. Use a pattern only when it makes the design simpler.

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
