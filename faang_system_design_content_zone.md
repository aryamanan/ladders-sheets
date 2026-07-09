# System Design Content Zone

A curriculum-first system design index -- structured the way a proper course would be (fundamentals, then building blocks, then patterns, then case studies grouped by domain), not just a dump of whatever links happened to be free. Every linked title points to a verified free page (compiled by hand from ByteByteGo, Design Gurus, Educative's Grokking course, Hello Interview, AlgoMaster, the System Design Primer, and roadmap.sh). Topics without a link yet are marked `(yet to be linked)` -- there are a lot of them by design; getting the curriculum shape right came first, links get filled in as they're found.

Style matches the Extreme Mastery sheets: broad topic buckets, no Foundation/Reinforcement/Boss ladders, `{Platform}` tag per item.

## Part 1: Foundations & Interview Approach

- Invariant: before any specific system, you need the process -- how to scope a question, estimate scale by hand, and reason about performance vs. scalability.

1. What Is System Design (yet to be linked)
2. How to Approach a System Design Interview (yet to be linked)
3. [A Framework For System Design Interviews](https://bytebytego.com/courses/system-design-interview/a-framework-for-system-design-interviews) {ByteByteGo}
4. [Types of System Design Questions](https://algomaster.io/learn/system-design-interviews/question-types) {AlgoMaster}
5. [Expectations by Level/YoE](https://algomaster.io/learn/system-design-interviews/expectations-by-level) {AlgoMaster}
6. Performance vs. Scalability (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#performance-vs-scalability)) {System Design Primer}
7. Latency vs. Throughput (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#latency-vs-throughput)) {System Design Primer}
8. [Back-of-the-envelope Estimation](https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation) {ByteByteGo}
9. Numbers Every Engineer Should Know (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know)) {System Design Primer}
10. Powers of Two Table (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#powers-of-two-table)) {System Design Primer}
11. Answering Framework (yet to be linked) {Hello Interview}
12. Estimation Cheatsheet (yet to be linked) {Hello Interview}
13. Diagramming Tips (yet to be linked) {Hello Interview}
14. Delivery Framework (yet to be linked) {Hello Interview}

## Part 2: Networking & Communication

- Invariant: how machines actually talk to each other -- the layer every higher-level design decision (REST vs. gRPC, sync vs. async) sits on top of.

1. Domain Name System (DNS) (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#domain-name-system)) {System Design Primer}
2. HTTP / HTTPS (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#hypertext-transfer-protocol-http)) {System Design Primer}
3. TCP vs. UDP (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#transmission-control-protocol-tcp)) {System Design Primer}
4. REST vs. RPC (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest)) {System Design Primer}
5. GraphQL (yet to be linked) {roadmap.sh}
6. gRPC (yet to be linked) {roadmap.sh}
7. [API Design](https://www.hellointerview.com/learn/system-design/core-concepts/api-design) {Hello Interview}
8. [API Gateway](https://www.hellointerview.com/learn/system-design/deep-dives/api-gateway) {Hello Interview}
9. [Networking Essentials](https://www.hellointerview.com/learn/system-design/core-concepts/networking-essentials) {Hello Interview}
10. WebSockets / Long Polling / Server-Sent Events for Realtime (yet to be linked) {roadmap.sh}

## Part 3: Scaling the Compute Layer

- Invariant: once a single box can't handle the load, this is the layer that decides how you spread it out.

1. Vertical vs. Horizontal Scaling (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#horizontal-scaling)) {System Design Primer}
2. Load Balancers -- Layer 4 vs. Layer 7 (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#load-balancer)) {System Design Primer}
3. [Design Load Balancer](https://algomaster.io/learn/system-design-interviews/design-load-balancer) {AlgoMaster}
4. Load Balancing Algorithms (yet to be linked) {roadmap.sh}
5. Load Balancer vs. Reverse Proxy (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server)) {System Design Primer}
6. Content Delivery Network -- Push vs. Pull CDNs (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#content-delivery-network)) {System Design Primer}
7. Microservices & Application Layer (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#application-layer)) {System Design Primer}
8. Service Discovery (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#service-discovery)) {System Design Primer}

## Part 4: Data Storage

- Invariant: where the data actually lives, and the tradeoffs that decision locks you into once you're at scale.

1. [Introduction to Databases](https://www.educative.io/courses/grokking-the-system-design-interview/introduction-to-databases) {Educative}
2. [Types of Databases](https://www.educative.io/courses/grokking-the-system-design-interview/types-of-databases) {Educative}
3. Relational Databases & ACID (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms)) {System Design Primer}
4. [Data Modeling](https://www.hellointerview.com/learn/system-design/core-concepts/data-modeling) {Hello Interview}
5. [Data Replication](https://www.educative.io/courses/grokking-the-system-design-interview/data-replication) {Educative}
6. Master-Slave / Master-Master Replication (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#master-slave-replication)) {System Design Primer}
7. NoSQL: Key-Value, Document, Wide-Column, Graph (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#nosql)) {System Design Primer}
8. SQL vs. NoSQL (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#sql-or-nosql)) {System Design Primer}
9. Database Indexing (yet to be linked) {Hello Interview}
10. SQL Tuning (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#sql-tuning)) {System Design Primer}
11. [Sharding](https://www.hellointerview.com/learn/system-design/core-concepts/sharding) {Hello Interview}
12. Federation (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#federation)) {System Design Primer}
13. Denormalization (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#denormalization)) {System Design Primer}
14. Choosing the Right Database (yet to be linked) {Hello Interview}
15. Object Storage (S3-like) (yet to be linked) {Design Gurus / ByteByteGo}

## Part 5: Caching

- Invariant: the single highest-leverage lever for read-heavy systems -- where to put a cache and when to invalidate it.

1. [Caching](https://www.hellointerview.com/learn/system-design/core-concepts/caching) {Hello Interview}
2. Cache Placement -- Client, CDN, Web Server, Database, Application (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#cache)) {System Design Primer}
3. Cache-Aside (yet to be linked) {roadmap.sh}
4. Write-Through / Write-Behind / Refresh-Ahead (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#when-to-update-the-cache)) {System Design Primer}
5. [Design a Distributed Cache (like Redis)](https://www.designgurus.io/course-play/system-design-interview-crash-course/doc/design-a-distributed-cache-like-redis) {Design Gurus}
6. [Redis](https://www.hellointerview.com/learn/system-design/deep-dives/redis) {Hello Interview}
7. Memcached (yet to be linked) {Hello Interview}

## Part 6: Consistency, Availability & Distributed Systems Theory

- Invariant: the tradeoffs that make distributed systems hard -- you can't have perfect consistency and perfect availability during a partition, full stop.

1. [CAP Theorem](https://www.hellointerview.com/learn/system-design/core-concepts/cap-theorem) {Hello Interview}
2. Availability vs. Consistency (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#availability-vs-consistency)) {System Design Primer}
3. Consistency Patterns -- Weak, Eventual, Strong (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#consistency-patterns)) {System Design Primer}
4. Availability Patterns -- Fail-over, Replication, 9s (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#availability-patterns)) {System Design Primer}
5. [Consistent Hashing](https://www.hellointerview.com/learn/system-design/core-concepts/consistent-hashing) {Hello Interview}
6. [Design Consistent Hashing](https://bytebytego.com/courses/system-design-interview/design-consistent-hashing) {ByteByteGo}
7. Distributed Transactions (yet to be linked) {Hello Interview}
8. Leader Election (yet to be linked) {Hello Interview}
9. Quorum & Consensus (Paxos/Raft) (yet to be linked) {roadmap.sh}

## Part 7: Asynchronous Processing & Messaging

- Invariant: taking work off the request path -- queues turn "do this now, slowly" into "acknowledge now, do it soon."

1. Message Queues vs. Task Queues (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#asynchronism)) {System Design Primer}
2. Back Pressure (yet to be linked -- also see [System Design Primer](https://github.com/donnemartin/system-design-primer#back-pressure)) {System Design Primer}
3. Publisher/Subscriber (yet to be linked) {roadmap.sh}
4. Event-Driven Architecture (yet to be linked) {roadmap.sh}
5. [Kafka](https://www.hellointerview.com/learn/system-design/deep-dives/kafka) {Hello Interview}
6. RabbitMQ (yet to be linked) {Hello Interview}
7. Amazon SQS (yet to be linked) {Hello Interview}

## Part 8: Resilience & Distributed System Patterns

- Invariant: the reusable failure-handling patterns that show up once a system has enough moving parts that something is always failing somewhere.

1. Circuit Breaker (yet to be linked) {roadmap.sh}
2. Retry & Retry Storm (yet to be linked) {roadmap.sh}
3. Throttling (yet to be linked) {roadmap.sh}
4. Bulkhead (yet to be linked) {roadmap.sh}
5. CQRS (yet to be linked) {roadmap.sh}
6. Event Sourcing (yet to be linked) {roadmap.sh}
7. Saga / Choreography (yet to be linked) {roadmap.sh}
8. Idempotent Operations (yet to be linked) {roadmap.sh}
9. Removing Single Points of Failure (yet to be linked) {Hello Interview}
10. Handling Failures / Failure Detection (yet to be linked) {Hello Interview}

## Part 9: Key Technologies (Deep Dives)

- Invariant: the actual systems interviewers expect you to reason about internally, not just name-drop.

1. [Elasticsearch](https://www.hellointerview.com/learn/system-design/deep-dives/elasticsearch) {Hello Interview}
2. [Cassandra](https://www.hellointerview.com/learn/system-design/deep-dives/cassandra) {Hello Interview}
3. [DynamoDB](https://www.hellointerview.com/learn/system-design/deep-dives/dynamodb) {Hello Interview}
4. [PostgreSQL](https://algomaster.io/learn/system-design-interviews/postgresql) {AlgoMaster}
5. [MySQL](https://algomaster.io/learn/system-design-interviews/mysql) {AlgoMaster}
6. [MongoDB](https://algomaster.io/learn/system-design-interviews/mongodb) {AlgoMaster}
7. [Time Series Databases](https://www.hellointerview.com/learn/system-design/deep-dives/time-series-databases) {Hello Interview}
8. Vector Databases (yet to be linked) {Hello Interview}
9. Zookeeper (yet to be linked) {Hello Interview}
10. Flink (yet to be linked) {Hello Interview}
11. Spark (yet to be linked) {Hello Interview}
12. Amazon S3 (yet to be linked) {Hello Interview}
13. AWS Lambda (yet to be linked) {Hello Interview}
14. Nginx (yet to be linked) {Hello Interview}
15. Docker (yet to be linked) {Hello Interview}
16. Kubernetes (yet to be linked) {Hello Interview}
17. Prometheus (yet to be linked) {Hello Interview}

## Part 10: Common Interview-Solving Patterns

- Invariant: the reusable shapes that show up across dozens of different case studies -- fanout, hot keys, scaling reads -- worth drilling as patterns, not per-problem trivia.

1. Fanout Pattern -- Push vs. Pull (yet to be linked) {Hello Interview}
2. [Realtime Updates](https://algomaster.io/learn/system-design-interviews/realtime-updates) {AlgoMaster}
3. Scaling Reads (yet to be linked) {Hello Interview}
4. Scaling Writes (yet to be linked) {Hello Interview}
5. Handling Hot Keys (yet to be linked) {Hello Interview}
6. Handling Traffic Spikes (yet to be linked) {Hello Interview}
7. Handling Large Files / Blobs (yet to be linked) {Hello Interview}
8. Handling Location Data (yet to be linked) {Hello Interview}
9. Generating Unique IDs (yet to be linked) {Hello Interview}
10. Distributed Counting (yet to be linked) {Hello Interview}
11. Deduplicating Data (yet to be linked) {Hello Interview}
12. Multi-Region Architecture (yet to be linked) {Hello Interview}
13. Multi-Tenancy (yet to be linked) {Hello Interview}
14. Multi-Step Processes (yet to be linked) {Hello Interview}
15. Managing Long-Running Tasks (yet to be linked) {Hello Interview}
16. Media Streaming (yet to be linked) {Hello Interview}

## Part 11: Foundational Building-Block Systems

- Invariant: the generic sub-systems that get reused as components inside almost every larger case study below -- worth designing once, in isolation, before combining them.

1. [Design a Rate Limiter](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter) {ByteByteGo}
2. [Design a Distributed Rate Limiter](https://www.designgurus.io/course-play/system-design-interview-crash-course/doc/design-a-distributed-rate-limiter) {Design Gurus}
3. [Distributed Rate Limiter](https://www.hellointerview.com/learn/system-design/problem-breakdowns/distributed-rate-limiter) {Hello Interview}
4. [Design a Key-Value Store](https://bytebytego.com/courses/system-design-interview/design-a-key-value-store) {ByteByteGo}
5. [System Design: The Key-Value Store](https://www.educative.io/courses/grokking-the-system-design-interview/system-design-the-key-value-store) {Educative}
6. [Design of a Key-Value Store](https://www.educative.io/courses/grokking-the-system-design-interview/design-of-a-key-value-store) {Educative}
7. [Ensure Scalability and Replication](https://www.educative.io/courses/grokking-the-system-design-interview/ensure-scalability-and-replication) {Educative}
8. [Versioning Data and Achieving Configurability](https://www.educative.io/courses/grokking-the-system-design-interview/versioning-data-and-achieving-configurability) {Educative}
9. Design a Key-Value Store for a Search Engine (LRU query cache) [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/query_cache/README.md) {System Design Primer}
10. [Design a URL Shortener](https://bytebytego.com/courses/system-design-interview/design-a-url-shortener) {ByteByteGo}
11. Design Pastebin.com (or Bit.ly) -- full worked solution with schema and code [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md) {System Design Primer}
12. [Bitly](https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly) {Hello Interview}
13. Design a Unique ID Generator in Distributed Systems (yet to be linked) {ByteByteGo}
14. Design an API Gateway (yet to be linked) {Design Gurus}
15. Design a Distributed Lock Manager (like Chubby) (yet to be linked) {Design Gurus}
16. Design a Distributed Job Scheduler (like Cron) (yet to be linked) {Design Gurus}
17. [Design Search Autocomplete System](https://algomaster.io/learn/system-design-interviews/design-search-autocomplete-system) {AlgoMaster}
18. [Design a Notification System / Service](https://algomaster.io/learn/system-design-interviews/design-notification-service) {AlgoMaster}

## Part 12: Case Studies -- Social & Content Feeds

1. [Design a News Feed System](https://bytebytego.com/courses/system-design-interview/design-a-news-feed-system) {ByteByteGo}
2. [FB News Feed](https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-news-feed) {Hello Interview}
3. Design the Twitter Timeline and Search -- full worked solution with fanout design [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md) {System Design Primer}
4. Design Twitter Timeline (yet to be linked) {Design Gurus}
5. [Design Instagram](https://algomaster.io/learn/system-design-interviews/design-instagram) {AlgoMaster}
6. [Tinder](https://www.hellointerview.com/learn/system-design/problem-breakdowns/tinder) {Hello Interview}
7. Design TikTok (yet to be linked) {AlgoMaster}
8. Design Reddit (yet to be linked) {AlgoMaster}
9. Design the Data Structures for a Social Network (BFS shortest-path over a sharded graph) [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/social_graph/README.md) {System Design Primer}
10. Design Facebook "People You May Know" (yet to be linked) {Design Gurus}
11. Design LinkedIn Connections (yet to be linked) {Design Gurus}

## Part 13: Case Studies -- Messaging & Real-Time Communication

1. [Design a Chat System](https://bytebytego.com/courses/system-design-interview/design-a-chat-system) {ByteByteGo}
2. [Design WhatsApp](https://www.designgurus.io/course-play/system-design-interview-crash-course/doc/design-whatsapp) {Design Gurus}
3. [WhatsApp](https://www.hellointerview.com/learn/system-design/problem-breakdowns/whatsapp) {Hello Interview}
4. [Design WhatsApp](https://algomaster.io/learn/system-design-interviews/design-whatsapp) {AlgoMaster}
5. [FB Live Comments](https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-live-comments) {Hello Interview}
6. Design Live Comment Streaming Service (Twitch Chat) (yet to be linked) {Design Gurus}
7. Design Slack (yet to be linked) {AlgoMaster}
8. Design Google Docs (yet to be linked) {Design Gurus / AlgoMaster}
9. Design a Collaborative Whiteboard (Miro) (yet to be linked) {Design Gurus}
10. Design Zoom (yet to be linked) {AlgoMaster}
11. Design Discord (yet to be linked) {Design Gurus}
12. Design an Online Chat Server -- OOD reference solution [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/online_chat/online_chat.py) {System Design Primer}

## Part 14: Case Studies -- Media, Storage & Streaming

1. [Design YouTube](https://bytebytego.com/courses/system-design-interview/design-youtube) {ByteByteGo}
2. [Design YouTube](https://www.designgurus.io/course-play/system-design-interview-crash-course/doc/design-youtube) {Design Gurus}
3. [YouTube](https://www.hellointerview.com/learn/system-design/problem-breakdowns/youtube) {Hello Interview}
4. [Design Spotify](https://algomaster.io/learn/system-design-interviews/design-spotify) {AlgoMaster}
5. [Dropbox](https://www.hellointerview.com/learn/system-design/problem-breakdowns/dropbox) {Hello Interview}
6. Design Netflix (yet to be linked) {Design Gurus}
7. Design Google Drive (yet to be linked) {AlgoMaster}
8. Design Gmail (yet to be linked) {AlgoMaster}
9. Design Twitch (yet to be linked) {AlgoMaster}
10. Design Amazon S3 / S3-like Object Storage (yet to be linked) {ByteByteGo / Design Gurus}

## Part 15: Case Studies -- Location-Based Services

1. [Design Airbnb](https://www.designgurus.io/course-play/system-design-interview-crash-course/doc/design-airbnb) {Design Gurus}
2. [Uber](https://www.hellointerview.com/learn/system-design/problem-breakdowns/uber) {Hello Interview}
3. Design Uber/Lyft (yet to be linked) {Design Gurus}
4. [Local Delivery Service (Gopuff)](https://www.hellointerview.com/learn/system-design/problem-breakdowns/gopuff) {Hello Interview}
5. Design Food Delivery Service (yet to be linked) {AlgoMaster}
6. Design Google Maps (yet to be linked) {AlgoMaster}
7. Design Nearby Friends (yet to be linked) {ByteByteGo}
8. Design Proximity Service (yet to be linked) {ByteByteGo}
9. [Proximity Search](https://www.hellointerview.com/learn/system-design/deep-dives/proximity-search) {Hello Interview}

## Part 16: Case Studies -- Search & Aggregation

1. [Design a Web Crawler](https://bytebytego.com/courses/system-design-interview/design-a-web-crawler) {ByteByteGo}
2. [Web Crawler](https://www.hellointerview.com/learn/system-design/problem-breakdowns/web-crawler) {Hello Interview}
3. Design a Web Crawler -- full worked solution with crawl-loop and dedup code [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/web_crawler/README.md) {System Design Primer}
4. Design Google Search (yet to be linked) {Design Gurus}
5. [Ad Click Aggregator](https://www.hellointerview.com/learn/system-design/problem-breakdowns/ad-click-aggregator) {Hello Interview}
6. Design Ad Click Event Aggregation (yet to be linked) {ByteByteGo}
7. [FB Post Search](https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-post-search) {Hello Interview}
8. Design News Aggregator (yet to be linked) {AlgoMaster}

## Part 17: Case Studies -- E-Commerce, Ticketing & Booking

1. [Hotel Reservation System](https://bytebytego.com/courses/system-design-interview/hotel-reservation-system) {ByteByteGo}
2. [Ticketmaster](https://www.hellointerview.com/learn/system-design/problem-breakdowns/ticketmaster) {Hello Interview}
3. Design Amazon's Sales Ranking by Category (multi-step MapReduce) [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/sales_rank/README.md) {System Design Primer}
4. Design Amazon (yet to be linked) {AlgoMaster}
5. Design Amazon Shopping Cart (yet to be linked) {Design Gurus}
6. Design Shopify (yet to be linked) {AlgoMaster}
7. Design Flash Sale (yet to be linked) {AlgoMaster}
8. Design Online Auction System (yet to be linked) {AlgoMaster}
9. Design Movie Booking System (yet to be linked) {AlgoMaster}

## Part 18: Case Studies -- Payments & Financial Systems

1. Design Mint.com -- full worked solution with categorization/budget code [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/mint/README.md) {System Design Primer}
2. Design Payment System (yet to be linked) {AlgoMaster}
3. Design Stripe Payment Gateway (yet to be linked) {Design Gurus}
4. Design Digital Wallet (yet to be linked) {Design Gurus}
5. Design Stock Exchange (yet to be linked) {Design Gurus}

## Part 19: Case Studies -- Infrastructure-as-a-Product & Counting Systems

1. Design a Distributed Message Queue (yet to be linked) {ByteByteGo}
2. Design a Metrics & Monitoring System (like Datadog/Prometheus) (yet to be linked) {Design Gurus / ByteByteGo}
3. Design a Distributed Email Service (yet to be linked) {ByteByteGo}
4. Design a Notification System (full case study, not just the building block) (yet to be linked) {ByteByteGo}
5. Design a Job Scheduler (yet to be linked) {AlgoMaster}
6. Design a CI/CD Pipeline / Code Deployment System (yet to be linked) {AlgoMaster / Design Gurus}
7. [Real-time Gaming Leaderboard](https://bytebytego.com/courses/system-design-interview/real-time-gaming-leaderboard) {ByteByteGo}
8. [YouTube Top K](https://www.hellointerview.com/learn/system-design/problem-breakdowns/top-k) {Hello Interview}
9. Design Likes Counting System (yet to be linked) {AlgoMaster}

## Part 20: Case Studies -- Specialized Systems

1. [LeetCode](https://www.hellointerview.com/learn/system-design/problem-breakdowns/leetcode) {Hello Interview}
2. Design LeetCode (yet to be linked) {AlgoMaster}
3. Design Calendar System (yet to be linked) {AlgoMaster}
4. Design Online Chess (yet to be linked) {AlgoMaster}
5. Design ChatGPT (yet to be linked) {Design Gurus}
6. Design Google Ads (yet to be linked) {Design Gurus}
7. Design Amazon Lambda (yet to be linked) {Design Gurus}
8. Design Typeahead/Autocomplete (yet to be linked) {Design Gurus}

## Part 21: Object-Oriented / Low-Level Design

- Invariant: six small reference solutions from the System Design Primer, each demonstrating one OOD principle through class structure -- full code, not case studies.

1. Design a Hash Map [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/hash_table/hash_map.py) {System Design Primer}
2. Design a Least Recently Used Cache [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/lru_cache/lru_cache.py) {System Design Primer}
3. Design a Call Center [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/call_center/call_center.py) {System Design Primer}
4. Design a Deck of Cards [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/deck_of_cards/deck_of_cards.py) {System Design Primer}
5. Design a Parking Lot [System Design Primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/parking_lot/parking_lot.py) {System Design Primer}

## General References (Not Topic-Mapped)

- [Grokking the System Design Interview -- course landing page](https://www.educative.io/courses/grokking-the-system-design-interview) {Educative}
- [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) {Karan Pratap Singh -- general reference, own license, not CC-licensed like the Primer}
- [roadmap.sh -- System Design](https://roadmap.sh/system-design) {roadmap.sh}
