# System Design Concept Repetition Ladders

This document turns system design from "I know the topics" into repeated practice. The goal is to make each concept survive new products, scale changes, failure modes, and interviewer pressure.

Use this together with:

- [FAANG System Design And Technical Interview Failure Map](faang_system_design_researched_interview_failure_map.md)
- [FAANG System Design and Technical Interview Mastery](faang_system_design_technical_mastery.md)

## How To Use This

For each concept:

1. Practice the concept in 3 small systems.
2. Practice it in 3 classic product systems.
3. Practice it in 2 infrastructure systems.
4. Answer the follow-up drills.
5. Write a one-page design note for the concept.

You are done only when you can use the concept without forcing it.

## Concept 1: Requirements Clarification

Skill: turn a vague prompt into a scoped problem before drawing boxes.

Practice prompts:

1. Design URL shortener.
2. Design chat app.
3. Design notification system.
4. Design YouTube.
5. Design Uber.
6. Design payment system.
7. Design search autocomplete.
8. Design Dropbox.

Clarification reps:

1. Identify top 3 functional requirements.
2. Identify 3 non-functional requirements.
3. Declare out-of-scope features.
4. Ask read/write ratio.
5. Ask latency target.
6. Ask consistency requirement.
7. Ask retention and privacy constraints.
8. Ask scale.

Tweak drills:

1. User says "like Twitter" but only wants timeline.
2. User says "real-time" but latency target is 5 seconds.
3. User says "global" but data residency matters.
4. User says "payments" but only wallet balance is in scope.
5. User says "search" but only autocomplete is needed.

## Concept 2: Capacity Estimation

Skill: use rough math to justify architecture choices.

Practice prompts:

1. URL shortener redirects.
2. Chat messages.
3. Video uploads and playback.
4. Feed reads and writes.
5. Notification sends.
6. Payment transactions.
7. Search queries.
8. IoT telemetry ingestion.

Estimation reps:

1. Daily active users.
2. Requests per user per day.
3. Average QPS.
4. Peak QPS.
5. Storage per day.
6. Storage per year.
7. Bandwidth.
8. Cache memory.
9. Number of partitions.
10. Replication overhead.

Tweak drills:

1. Peak is 20x average.
2. Object size is 10 MB instead of 10 KB.
3. 90% reads become 90% writes.
4. Retention changes from 30 days to 7 years.
5. p99 latency target changes from 1 second to 100 ms.

## Concept 3: API Design

Skill: define clean endpoints that expose the right product behavior.

Practice prompts:

1. Send message.
2. Create short URL.
3. Upload video.
4. Create payment.
5. Reserve ticket.
6. Follow user.
7. Search query.
8. Create calendar event.
9. Update feature flag.
10. Schedule notification.

API reps:

1. Define endpoint.
2. Define request body.
3. Define response.
4. Define pagination.
5. Define idempotency.
6. Define auth boundary.
7. Define error codes.
8. Define versioning.

Tweak drills:

1. Make create endpoint idempotent.
2. Make list endpoint cursor-based.
3. Add partial failure.
4. Add batch endpoint.
5. Add client retries.
6. Add backward-compatible field.

## Concept 4: Data Modeling

Skill: model entities around access patterns, not just nouns.

Practice prompts:

1. Chat message schema.
2. Feed item schema.
3. URL mapping schema.
4. Payment ledger schema.
5. File metadata schema.
6. Search document schema.
7. Notification preference schema.
8. Inventory reservation schema.
9. Audit log schema.
10. Feature flag schema.

Data-model reps:

1. Entity list.
2. Primary key.
3. Secondary indexes.
4. Partition key.
5. Query patterns.
6. Write patterns.
7. Retention.
8. Migration plan.

Tweak drills:

1. Query by user and time.
2. Query by status.
3. Query latest N.
4. Query by prefix.
5. Query by geolocation.
6. Query across tenants.
7. Need historical versions.

## Concept 5: SQL And Relational Reasoning

Skill: use relational modeling and queries when exactness matters.

Practice schemas:

1. Employees and departments.
2. Users and sessions.
3. Orders and payments.
4. Products and inventory.
5. Messages and conversations.
6. Experiments and assignments.
7. Events and metrics.
8. Accounts and ledger entries.

Query reps:

1. Second highest salary.
2. Top 3 per group.
3. Rolling 7-day active users.
4. Monthly retention.
5. Consecutive login streak.
6. Conversion by experiment.
7. p95 latency by endpoint.
8. Duplicate emails.
9. Overlapping reservations.
10. Account balance from ledger.
11. Most recent message per conversation.
12. Inventory remaining after reservations.

Tweak drills:

1. Use window function.
2. Use CTE.
3. Use anti-join.
4. Handle NULL.
5. Add index recommendation.
6. Explain query plan risk.

## Concept 6: SQL Vs NoSQL Choice

Skill: choose storage from access patterns and consistency requirements.

Practice prompts:

1. Payments.
2. Chat.
3. Feed.
4. Product catalog.
5. Search index.
6. User profile.
7. Time-series metrics.
8. Audit logs.
9. File metadata.
10. Inventory.

Decision reps:

1. Need transactions?
2. Need joins?
3. Need flexible schema?
4. Need high write throughput?
5. Need range queries?
6. Need global distribution?
7. Need secondary indexes?
8. Need full-text search?

Tweak drills:

1. Add strong consistency.
2. Add multi-region writes.
3. Add ad-hoc analytics.
4. Add schema evolution.
5. Add hot partition.

## Concept 7: Indexing

Skill: explain how indexes support queries and harm writes.

Practice prompts:

1. Search orders by user and date.
2. Search messages by conversation and timestamp.
3. Search products by category and price.
4. Search reservations by room and time.
5. Search payments by idempotency key.
6. Search audit logs by actor and time.

Index reps:

1. Primary index.
2. Secondary index.
3. Composite index.
4. Covering index.
5. Partial index.
6. TTL index.
7. Inverted index.
8. Geospatial index.

Tweak drills:

1. Query filters reverse order.
2. Add ORDER BY.
3. Add high-cardinality column.
4. Add low-cardinality column.
5. Explain write amplification.
6. Explain stale secondary index.

## Concept 8: Sharding And Partitioning

Skill: choose partition keys that avoid hot spots and support queries.

Practice prompts:

1. Chat messages by conversation.
2. Feed storage by user.
3. URL mappings by short code.
4. Payments by merchant.
5. Metrics by timestamp.
6. Logs by service.
7. Search index by term.
8. Location data by geohash.

Sharding reps:

1. Hash partition.
2. Range partition.
3. Time partition.
4. Tenant partition.
5. Composite partition.
6. Consistent hashing.
7. Rebalancing.
8. Hot shard mitigation.

Tweak drills:

1. Celebrity user creates hot partition.
2. Single merchant has 40% traffic.
3. Time-based writes all hit current partition.
4. Need cross-shard query.
5. Need shard migration without downtime.

## Concept 9: Replication And Consistency

Skill: explain read/write behavior across replicas and regions.

Practice prompts:

1. User profile.
2. Chat messages.
3. Feed timeline.
4. Payment ledger.
5. Inventory reservation.
6. Distributed cache.
7. Key-value store.
8. File metadata.

Consistency reps:

1. Leader-follower.
2. Multi-leader.
3. Quorum.
4. Read-your-writes.
5. Monotonic reads.
6. Eventual consistency.
7. Strong consistency.
8. Conflict resolution.

Tweak drills:

1. User reads immediately after writing.
2. Two regions accept writes.
3. Network partition occurs.
4. Replica lag is 10 seconds.
5. Payment must not double spend.

## Concept 10: Caching

Skill: know exactly what is cached, how it is invalidated, and what happens when it fails.

Practice prompts:

1. URL shortener.
2. Product page.
3. User profile.
4. Feed timeline.
5. Search autocomplete.
6. Video metadata.
7. Rate limiter counters.
8. Session storage.
9. Feature flags.
10. CDN media.

Cache reps:

1. Cache key.
2. Value shape.
3. TTL.
4. Eviction policy.
5. Cache-aside.
6. Write-through.
7. Write-back.
8. Negative caching.
9. Stampede protection.
10. Hot key mitigation.

Tweak drills:

1. Redis is down.
2. Hot celebrity key.
3. Stale profile after update.
4. Cache stampede after expiration.
5. Personalized data cannot be CDN cached.
6. Need cache warming.

## Concept 11: CDN And Edge

Skill: move static or cacheable content close to users.

Practice prompts:

1. Video streaming.
2. Image hosting.
3. Static website.
4. Product images.
5. Software downloads.
6. News article pages.
7. Public profile pages.

CDN reps:

1. Cache key.
2. TTL.
3. Purge/invalidation.
4. Signed URLs.
5. Regional edge.
6. Origin shield.
7. Range requests.
8. Compression.

Tweak drills:

1. Private file accidentally cached.
2. Viral video.
3. Need region-specific rights.
4. User updates profile image.
5. CDN miss overloads origin.

## Concept 12: Queues

Skill: decouple slow work and handle retries safely.

Practice prompts:

1. Image processing.
2. Video transcoding.
3. Email sending.
4. Push notifications.
5. Payment webhook processing.
6. Search indexing.
7. Analytics ingestion.
8. Order fulfillment.

Queue reps:

1. Producer.
2. Consumer.
3. Retry policy.
4. Dead-letter queue.
5. Visibility timeout.
6. Idempotent consumer.
7. Backpressure.
8. Poison message handling.

Tweak drills:

1. Consumer crashes after side effect.
2. Message duplicated.
3. Provider outage.
4. Queue grows for 2 hours.
5. Need priority queue.
6. Need delayed delivery.

## Concept 13: Streams And Logs

Skill: use append-only logs for ordered, replayable event processing.

Practice prompts:

1. Kafka-like queue.
2. Metrics pipeline.
3. Clickstream analytics.
4. Fraud detection.
5. Search indexing.
6. Recommendation features.
7. Audit logs.
8. CDC pipeline.

Stream reps:

1. Topic.
2. Partition key.
3. Consumer group.
4. Offset.
5. Replay.
6. Retention.
7. Ordering.
8. Exactly-once discussion.

Tweak drills:

1. Preserve order per user.
2. Reprocess last 24 hours.
3. Consumer lag grows.
4. One partition is hot.
5. Schema changes.
6. Need idempotent sink.

## Concept 14: Idempotency

Skill: make retries safe.

Practice prompts:

1. Create payment.
2. Place order.
3. Reserve ticket.
4. Send notification.
5. Upload file chunk.
6. Create short URL.
7. Submit trade order.
8. Process webhook.

Idempotency reps:

1. Client-generated key.
2. Server dedupe table.
3. Request fingerprint.
4. Response replay.
5. TTL for keys.
6. Conflict if same key has different payload.
7. External side effect handling.

Tweak drills:

1. Client times out after success.
2. Same request sent twice.
3. Same key different payload.
4. Retry after 24 hours.
5. Downstream provider is not idempotent.

## Concept 15: Rate Limiting

Skill: enforce fairness and protect systems.

Practice prompts:

1. API gateway rate limiter.
2. Login abuse prevention.
3. Notification throttle.
4. Search query limiter.
5. Payment API limiter.
6. Web crawler politeness.
7. Per-tenant SaaS limiter.

Rate-limit reps:

1. Fixed window.
2. Sliding window log.
3. Sliding window counter.
4. Token bucket.
5. Leaky bucket.
6. Distributed counters.
7. Redis implementation.
8. Local fallback.

Tweak drills:

1. Per-user plus per-IP.
2. Burst allowed.
3. Multi-region.
4. Redis down.
5. Clock skew.
6. False positives block real users.

## Concept 16: Feed Generation

Skill: choose fanout strategy based on read/write ratio and celebrity users.

Practice prompts:

1. Twitter/X feed.
2. Instagram home feed.
3. Facebook news feed.
4. LinkedIn feed.
5. Reddit feed.
6. Activity feed.

Feed reps:

1. Fanout-on-write.
2. Fanout-on-read.
3. Hybrid fanout.
4. Follow graph.
5. Ranking.
6. Pagination.
7. Cache.
8. Delete propagation.

Tweak drills:

1. Celebrity with 100M followers.
2. User follows 1M accounts.
3. Ranked feed.
4. Chronological feed.
5. Delete or hide post.
6. Need freshness under 5 seconds.

## Concept 17: Chat And Realtime Delivery

Skill: handle connections, ordering, persistence, and offline users.

Practice prompts:

1. 1:1 chat.
2. Group chat.
3. Slack channels.
4. Discord text.
5. Live comments.
6. Customer support chat.

Realtime reps:

1. WebSocket gateway.
2. Connection registry.
3. Message persistence.
4. Per-conversation ordering.
5. Delivery receipts.
6. Read receipts.
7. Push notifications.
8. Offline sync.

Tweak drills:

1. User has 5 devices.
2. Group has 100K members.
3. Reconnect storm.
4. Message duplicate.
5. Need end-to-end encryption.
6. Need search over messages.

## Concept 18: Notifications

Skill: deliver messages reliably without spamming users.

Practice prompts:

1. Push notification system.
2. Email system.
3. SMS alerts.
4. Calendar reminders.
5. Fraud alerts.
6. Marketing campaigns.
7. Incident alerting.

Notification reps:

1. Preference store.
2. Template rendering.
3. Queue fanout.
4. Provider integration.
5. Retry.
6. Dedupe.
7. Quiet hours.
8. Rate limiting.
9. Priority.
10. Dead-letter queue.

Tweak drills:

1. Provider outage.
2. User opts out.
3. Duplicate sends.
4. Time-zone scheduling.
5. Transactional beats promotional.

## Concept 19: Search And Autocomplete

Skill: separate indexing from serving.

Practice prompts:

1. Autocomplete.
2. Product search.
3. People search.
4. Document search.
5. Web search.
6. Location search.
7. Log search.

Search reps:

1. Tokenization.
2. Inverted index.
3. Prefix index.
4. Ranking.
5. Freshness.
6. Query cache.
7. Indexing pipeline.
8. Reindex/backfill.

Tweak drills:

1. Typo tolerance.
2. Multilingual search.
3. Personalized ranking.
4. Stale results.
5. Delete document from index.
6. Prefix query p99 under 50 ms.

## Concept 20: Media Upload And Streaming

Skill: separate upload, processing, storage, and delivery.

Practice prompts:

1. YouTube.
2. Netflix.
3. TikTok.
4. Instagram media.
5. Photo backup.
6. Podcast hosting.

Media reps:

1. Multipart upload.
2. Object storage.
3. Metadata DB.
4. Transcoding queue.
5. Thumbnail generation.
6. CDN.
7. Adaptive bitrate.
8. Moderation pipeline.

Tweak drills:

1. Upload interrupted.
2. Viral video.
3. Region-specific rights.
4. Copyright detection.
5. Low-bandwidth mobile client.
6. Reduce storage cost.

## Concept 21: Geospatial Systems

Skill: index and query nearby moving objects.

Practice prompts:

1. Uber.
2. DoorDash.
3. Nearby friends.
4. Restaurant search.
5. Geofencing.
6. Delivery tracking.

Geo reps:

1. Geohash/S2/H3 concept.
2. Location update ingestion.
3. Nearby search.
4. Driver matching.
5. Stale location.
6. ETA.
7. Hot region.
8. Privacy.

Tweak drills:

1. Dense city center.
2. Driver moves every 3 seconds.
3. Cross-cell search.
4. Match fairness.
5. Location spoofing.
6. User requests deletion.

## Concept 22: Payments And Ledger

Skill: protect money flows with idempotency, state machines, and auditability.

Practice prompts:

1. Stripe-like API.
2. Checkout.
3. Wallet.
4. Ticket booking payment.
5. Refunds.
6. Subscription billing.
7. Marketplace payouts.

Payment reps:

1. Idempotency key.
2. Payment state machine.
3. Double-entry ledger.
4. External processor.
5. Webhook handling.
6. Reconciliation.
7. Fraud checks.
8. Audit log.

Tweak drills:

1. Processor times out after charging.
2. Duplicate webhook.
3. Refund after settlement.
4. Partial capture.
5. Chargeback.
6. Ledger correction.

## Concept 23: Inventory And Reservation

Skill: prevent oversell while keeping user experience fast.

Practice prompts:

1. Ticketmaster.
2. Hotel booking.
3. Flight booking.
4. E-commerce inventory.
5. Restaurant reservation.
6. Appointment booking.

Inventory reps:

1. Reservation state.
2. Expiry timer.
3. Strong consistency path.
4. Payment coupling.
5. Waitlist.
6. Seat selection.
7. Locking strategy.
8. Compensation.

Tweak drills:

1. 10K users click same seat.
2. Payment succeeds after reservation expires.
3. User abandons checkout.
4. Need hold for 10 minutes.
5. Need group seats together.

## Concept 24: File Sync And Collaboration

Skill: synchronize state across devices and users.

Practice prompts:

1. Dropbox.
2. Google Drive.
3. Google Docs.
4. Collaborative whiteboard.
5. Versioned notes app.
6. File backup client.

Sync reps:

1. Chunking.
2. Deduplication.
3. Metadata service.
4. Conflict detection.
5. Version history.
6. Permission model.
7. Offline sync.
8. Change feed.

Tweak drills:

1. Two devices edit offline.
2. Large upload resumes.
3. Permission revoked.
4. File renamed on two devices.
5. Real-time cursor presence.
6. CRDT vs OT discussion.

## Concept 25: Distributed Key-Value Store

Skill: design storage with partitioning, replication, and consistency tradeoffs.

Practice prompts:

1. Redis-like cache.
2. Dynamo-like KV store.
3. Session store.
4. Feature flag store.
5. Config service.
6. Metadata store.

KV reps:

1. Partitioning.
2. Replication.
3. Coordinator node.
4. Quorum.
5. Hinted handoff.
6. Read repair.
7. Conflict resolution.
8. Rebalancing.

Tweak drills:

1. Node fails.
2. Network partition.
3. Hot key.
4. Add new node.
5. Strong reads for one key.
6. Multi-region writes.

## Concept 26: Distributed Scheduler

Skill: execute delayed or recurring work reliably.

Practice prompts:

1. Cron service.
2. Reminder service.
3. Delayed notification.
4. Retry scheduler.
5. Data pipeline scheduler.
6. Recurring billing.

Scheduler reps:

1. Job table.
2. Due-time index.
3. Worker leasing.
4. Idempotent execution.
5. Retry.
6. Misfire handling.
7. Time zones.
8. Recurrence expansion.

Tweak drills:

1. Worker dies after claiming job.
2. Clock skew.
3. Exactly once is required by business.
4. Million jobs due at same minute.
5. User edits recurring event.

## Concept 27: Observability

Skill: prove the system is working and diagnose it when it is not.

Practice prompts:

1. Chat.
2. Payments.
3. Search.
4. Video.
5. Kafka pipeline.
6. API gateway.
7. Notification system.
8. Database service.

Observability reps:

1. SLIs.
2. SLOs.
3. Logs.
4. Metrics.
5. Traces.
6. Dashboards.
7. Alerts.
8. Runbooks.

Tweak drills:

1. p99 latency spike.
2. Error rate spike.
3. Consumer lag.
4. Partial region outage.
5. Silent data loss.
6. Alert fatigue.

## Concept 28: Reliability And Failure Modes

Skill: design for partial failure.

Practice prompts:

1. Payment system.
2. Chat.
3. Feed.
4. Search.
5. Distributed cache.
6. Notification system.
7. Video processing.
8. Ride matching.

Reliability reps:

1. Timeouts.
2. Retries.
3. Exponential backoff.
4. Circuit breaker.
5. Bulkhead.
6. Load shedding.
7. Graceful degradation.
8. Disaster recovery.
9. RPO/RTO.
10. Fallback path.

Tweak drills:

1. Cache down.
2. DB primary down.
3. Queue unavailable.
4. Region down.
5. Third-party provider down.
6. Retry storm.

## Concept 29: Security And Abuse

Skill: protect users and systems without wrecking UX.

Practice prompts:

1. Login.
2. Public API.
3. Payment API.
4. File sharing.
5. Admin dashboard.
6. URL shortener.
7. Messaging.
8. Search.

Security reps:

1. Authentication.
2. Authorization.
3. OAuth.
4. Sessions.
5. JWT tradeoffs.
6. Password hashing.
7. Rate limiting.
8. Audit logs.
9. Encryption at rest.
10. Secrets management.

Tweak drills:

1. Credential stuffing.
2. Admin action audit.
3. Public link leak.
4. SQL injection.
5. XSS.
6. GDPR deletion.

## Concept 30: Cost And Performance Tradeoffs

Skill: justify architecture under real constraints.

Practice prompts:

1. Video streaming.
2. Search.
3. Feed.
4. Chat.
5. Logging pipeline.
6. Metrics.
7. CDN.
8. Recommendation system.

Tradeoff reps:

1. Storage cost.
2. Compute cost.
3. Network egress.
4. Cache memory.
5. Index size.
6. Replication factor.
7. Batch vs realtime.
8. Compression.

Tweak drills:

1. Cut cost by 50%.
2. p99 latency must drop by 50%.
3. Storage grows 10x.
4. Egress dominates bill.
5. Realtime can become near-real-time.

## Concept 31: Low-Level Design Classes And APIs

Skill: turn requirements into maintainable objects and behavior.

Practice prompts:

1. Parking lot.
2. Elevator.
3. Vending machine.
4. ATM.
5. Movie booking.
6. Hotel booking.
7. Splitwise.
8. Chess.
9. In-memory file system.
10. Text editor undo/redo.

LLD reps:

1. Actors.
2. Entities.
3. State machine.
4. Public methods.
5. Interfaces.
6. Persistence boundary.
7. Concurrency boundary.
8. Tests.

Tweak drills:

1. Add new vehicle type.
2. Add pricing strategy.
3. Add cancellation.
4. Add concurrency.
5. Add persistence.
6. Add notification.

## Concept 32: Design Patterns In LLD

Skill: apply patterns only when they reduce complexity.

Practice prompts:

1. Notification service.
2. Payment processors.
3. Parking lot pricing.
4. Vending machine states.
5. Text editor commands.
6. Logging framework.
7. File filters.
8. Rule engine.

Pattern reps:

1. Strategy.
2. State.
3. Observer.
4. Command.
5. Factory.
6. Adapter.
7. Decorator.
8. Repository.
9. Dependency injection.

Tweak drills:

1. Add new payment provider.
2. Add new notification channel.
3. Add undo/redo.
4. Add state transition rule.
5. Add plugin behavior.

## Concept 33: Concurrency

Skill: reason about shared mutable state.

Practice prompts:

1. Thread-safe queue.
2. Thread-safe LRU.
3. Rate limiter.
4. Producer-consumer.
5. Connection pool.
6. Bounded blocking queue.
7. Read-heavy cache.
8. Order book.

Concurrency reps:

1. Mutex.
2. Semaphore.
3. Condition variable.
4. Read-write lock.
5. Atomic counter.
6. Deadlock.
7. Starvation.
8. Race condition.

Tweak drills:

1. Two writers update same key.
2. Reader sees partial update.
3. Deadlock due to lock order.
4. Queue is full.
5. High read, low write workload.

## Concept 34: Networking

Skill: explain request flow and transport tradeoffs.

Practice prompts:

1. Browser to website.
2. WebSocket chat.
3. API gateway.
4. CDN.
5. Mobile upload.
6. gRPC service mesh.
7. Load-balanced backend.

Networking reps:

1. DNS.
2. TCP handshake.
3. TLS.
4. HTTP methods.
5. Status codes.
6. Cookies.
7. CORS.
8. Connection pooling.
9. Load balancing.
10. WebSockets.

Tweak drills:

1. DNS migration.
2. TLS termination at edge.
3. Sticky sessions.
4. Mobile network drops.
5. WebSocket reconnect storm.

## Concept 35: Debugging And Incidents

Skill: diagnose under uncertainty.

Practice scenarios:

1. p99 latency doubled.
2. DB CPU at 95%.
3. Cache hit rate collapsed.
4. Duplicate payments.
5. Consumer lag grows.
6. One shard overloaded.
7. Region outage.
8. Memory leak.
9. Stale search results.
10. Notification delays.

Debug reps:

1. Symptom.
2. Blast radius.
3. Recent change.
4. Metrics.
5. Logs.
6. Traces.
7. Hypothesis.
8. Mitigation.
9. Root cause.
10. Prevention.

Tweak drills:

1. Need rollback.
2. Need traffic shift.
3. Need disable feature flag.
4. Need throttle load.
5. Need repair corrupted data.

## Concept 36: Resume Deep Dive

Skill: prove you actually owned technical work.

Practice projects:

1. Most complex backend project.
2. Highest-scale project.
3. Project with a hard bug.
4. Project with a tradeoff.
5. Project with a failure.
6. Project involving teamwork.

Deep-dive reps:

1. Problem.
2. Constraints.
3. Architecture.
4. Your contribution.
5. Tradeoffs.
6. Failure modes.
7. Metrics.
8. What you would change.

Tweak drills:

1. Explain to staff engineer.
2. Explain to product manager.
3. Explain failure story.
4. Explain scaling bottleneck.
5. Explain design alternative you rejected.

## System Design Repetition Schedule

### Round Type A: Single-Concept Reps

Do 3 prompts using one concept:

1. Cache in URL shortener.
2. Cache in product page.
3. Cache in feed.

Then write what changed.

### Round Type B: Product Full Design

Do 45 minutes:

1. Requirements.
2. API.
3. Data model.
4. Architecture.
5. Deep dive.
6. Failure modes.
7. Metrics.

### Round Type C: Follow-Up Attack

Take one design and apply:

1. 10x traffic.
2. Region outage.
3. Hot key.
4. Duplicate request.
5. Provider outage.
6. Cost reduction.
7. Data deletion.

### Round Type D: Deep Technical Drill

Pick one:

1. Explain Redis failure handling.
2. Explain Kafka partition ordering.
3. Explain payment idempotency.
4. Explain feed fanout.
5. Explain WebSocket reconnect handling.
6. Explain database sharding.
7. Explain cache invalidation.
8. Explain p99 debugging.

## The 120-Design Rep Rule

To actually lock system design in:

1. 40 full HLD mocks.
2. 20 LLD mocks.
3. 20 SQL/database drills.
4. 15 reliability/debugging drills.
5. 10 networking/concurrency drills.
6. 10 resume deep dives.
7. 5 brutal mixed interviews.

That sounds like a lot because real confidence is a lot. After this, diagrams stop feeling memorized and start feeling derived.

## Signs You Understand A System Design Concept

You understand it when:

1. You can use it in multiple products.
2. You can explain why not to use it.
3. You can state failure modes.
4. You can estimate its cost.
5. You can monitor it.
6. You can scale it.
7. You can simplify it.
8. You can defend tradeoffs under pressure.
