# System Design Content Zone

Curriculum-first system design index across ByteByteGo, Hello Interview, the System Design Primer, roadmap.sh, Educative's Grokking course, Design Gurus, and AlgoMaster. Where the same concept is covered by multiple sources, the top checkbox carries the highest-priority link (ByteByteGo > Hello Interview > Primer > roadmap.sh > Grokking > Design Gurus > AlgoMaster) and the other sources nest underneath it as their own checkable rows. `(yet to be linked)` marks real gaps.

## Part 1: Foundations & Interview Approach

1. What Is System Design (yet to be linked)
2. How to Approach a System Design Interview (yet to be linked)
3. [Types of System Design Questions](https://algomaster.io/learn/system-design-interviews/question-types) {AlgoMaster}
4. [Expectations by Level/YoE](https://algomaster.io/learn/system-design-interviews/expectations-by-level) {AlgoMaster}
5. [A Framework For System Design Interviews](https://bytebytego.com/courses/system-design-interview/a-framework-for-system-design-interviews) {ByteByteGo}
   - [Delivery Framework](https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery) {Hello Interview}
   - [Core Concepts (In a Hurry)](https://www.hellointerview.com/learn/system-design/in-a-hurry/core-concepts) {Hello Interview}
6. Performance vs. Scalability (yet to be linked) {roadmap.sh}
7. [Latency vs. Throughput](https://cs.fyi/guide/latency-vs-throughput/) {roadmap.sh}
8. [Back-of-the-envelope Estimation](https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation) {ByteByteGo}
   - [Numbers Every Engineer Should Know](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know) {System Design Primer}
   - [Powers of Two Table](https://github.com/donnemartin/system-design-primer#powers-of-two-table) {System Design Primer}
9. Diagramming Tips (yet to be linked) {Hello Interview}
10. [Scaling to Millions of Users on AWS](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/scaling_aws/README.md) {System Design Primer}

## Part 2: Networking & Communication

1. [Domain Name System (DNS)](https://github.com/donnemartin/system-design-primer#domain-name-system) {System Design Primer}
   - [Introduction to Domain Name System (DNS)](https://www.educative.io/courses/grokking-the-system-design-interview/introduction-to-domain-name-system-dns) {Grokking}
   - [How the Domain Name System Works](https://www.educative.io/courses/grokking-the-system-design-interview/how-the-domain-name-system-works) {Grokking}
2. [HTTP / HTTPS](https://github.com/donnemartin/system-design-primer#hypertext-transfer-protocol-http) {System Design Primer}
   - [Everything You Need to Know About HTTP](https://cs.fyi/guide/http-in-depth) {roadmap.sh}
3. [TCP vs. UDP](https://github.com/donnemartin/system-design-primer#transmission-control-protocol-tcp) {System Design Primer}
   - [Networking for Game Programming (UDP vs TCP)](http://gafferongames.com/networking-for-game-programmers/udp-vs-tcp/) {roadmap.sh}
4. [REST vs. RPC](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest) {System Design Primer}
5. [GraphQL](https://www.howtographql.com/basics/3-big-picture/) {roadmap.sh}
6. [gRPC](https://www.wallarm.com/what/the-concept-of-grpc) {roadmap.sh}
7. [API Design](https://www.hellointerview.com/learn/system-design/core-concepts/api-design) {Hello Interview}
8. [API Gateway](https://www.hellointerview.com/learn/system-design/deep-dives/api-gateway) {Hello Interview}
9. [Networking Essentials](https://www.hellointerview.com/learn/system-design/core-concepts/networking-essentials) {Hello Interview}
10. WebSockets / Long Polling / Server-Sent Events for Realtime (yet to be linked) {roadmap.sh}

## Part 3: Scaling the Compute Layer

1. Vertical vs. Horizontal Scaling (yet to be linked) {roadmap.sh}
2. Load Balancers -- Layer 4 [f5.com](https://www.f5.com/glossary/layer-4-load-balancing) {roadmap.sh}
3. [Load Balancers -- Layer 7](https://github.com/donnemartin/system-design-primer#layer-7-load-balancing) {System Design Primer}
4. [Load Balancing Algorithms](https://www.cloudflare.com/learning/performance/types-of-load-balancing-algorithms/) {roadmap.sh}
5. [Design Load Balancer](https://algomaster.io/learn/system-design-interviews/design-load-balancer) {AlgoMaster}
6. [Load Balancer vs. Reverse Proxy](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/) {roadmap.sh}
7. [Content Delivery Network -- Push vs. Pull CDNs](https://github.com/donnemartin/system-design-primer#content-delivery-network) {System Design Primer}
8. Microservices & Application Layer [aws.amazon.com](https://aws.amazon.com/microservices/) {roadmap.sh}
9. [Service Discovery](https://github.com/donnemartin/system-design-primer#service-discovery) {System Design Primer}

## Part 4: Data Storage

1. [Introduction to Databases](https://www.educative.io/courses/grokking-the-system-design-interview/introduction-to-databases) {Grokking}
2. [Types of Databases](https://www.educative.io/courses/grokking-the-system-design-interview/types-of-databases) {Grokking}
3. [Relational Databases & ACID](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms) {System Design Primer}
4. [Data Modeling](https://www.hellointerview.com/learn/system-design/core-concepts/data-modeling) {Hello Interview}
5. [Master-Slave / Master-Master Replication](https://github.com/donnemartin/system-design-primer#master-slave-replication) {System Design Primer}
   - [Data Replication](https://www.educative.io/courses/grokking-the-system-design-interview/data-replication) {Grokking}
6. Key-Value Store [Wikipedia](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) {roadmap.sh}
7. Document Store [Wikipedia](https://en.wikipedia.org/wiki/Document-oriented_database) {roadmap.sh}
8. Wide-Column Store [Bigtable architecture](https://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf) {roadmap.sh}
9. Graph Database [Wikipedia](https://en.wikipedia.org/wiki/Graph_database) {roadmap.sh}
10. [SQL vs. NoSQL: The Differences](https://www.sitepoint.com/sql-vs-nosql-differences/) {roadmap.sh}
11. Database Indexing (yet to be linked) {Hello Interview}
12. [Introduction to SQL Tuning (Oracle)](https://docs.oracle.com/en/database/oracle/oracle-database/23/tgsql/introduction-to-sql-tuning.html) {roadmap.sh}
13. [Sharding](https://www.hellointerview.com/learn/system-design/core-concepts/sharding) {Hello Interview}
14. [Federation](https://github.com/donnemartin/system-design-primer#federation) {System Design Primer}
15. [Denormalization](https://en.wikipedia.org/wiki/Denormalization) {roadmap.sh}
16. Choosing the Right Database (yet to be linked) {Hello Interview}
17. Object Storage (S3-like) (yet to be linked) {Design Gurus / ByteByteGo}

## Part 5: Caching

1. [Caching](https://www.hellointerview.com/learn/system-design/core-concepts/caching) {Hello Interview}
2. [Cache Placement -- Client, CDN, Web Server, Database, Application](https://github.com/donnemartin/system-design-primer#cache) {System Design Primer}
3. [Cache-Aside Pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside) {roadmap.sh}
4. [Write-Through](https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside) {roadmap.sh}
5. [Write-Behind](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/) {roadmap.sh}
6. [Refresh-Ahead](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast) {roadmap.sh}
7. [Design a Distributed Cache (like Redis)](https://www.designgurus.io/course-play/system-design-interview-crash-course/doc/design-a-distributed-cache-like-redis) {Design Gurus}
8. [Redis](https://www.hellointerview.com/learn/system-design/deep-dives/redis) {Hello Interview}
9. Memcached (yet to be linked) {Hello Interview}

## Part 6: Consistency, Availability & Distributed Systems Theory

1. [CAP Theorem](https://www.hellointerview.com/learn/system-design/core-concepts/cap-theorem) {Hello Interview}
   - [CAP FAQ](https://github.com/henryr/cap-faq) {roadmap.sh}
2. [Availability vs. Consistency](https://github.com/donnemartin/system-design-primer#availability-vs-consistency) {System Design Primer}
3. [Consistency Patterns -- Weak, Eventual, Strong](https://cs.fyi/guide/consistency-patterns-week-strong-eventual/) {roadmap.sh}
4. [Availability Patterns -- Fail-over, Replication, 9s](https://github.com/donnemartin/system-design-primer#availability-patterns) {System Design Primer}
   - [High Availability in System Design -- 15 Strategies](https://www.designgurus.io/blog/high-availability-system-design-basics) {Design Gurus}
5. [Consistent Hashing](https://www.hellointerview.com/learn/system-design/core-concepts/consistent-hashing) {Hello Interview}
   - [Design Consistent Hashing](https://bytebytego.com/courses/system-design-interview/design-consistent-hashing) {ByteByteGo}
6. Distributed Transactions (yet to be linked) {Hello Interview}
7. Leader Election (yet to be linked) {Hello Interview}
8. Quorum & Consensus (Paxos/Raft) (yet to be linked) {roadmap.sh}

## Part 7: Asynchronous Processing & Messaging

1. [Message Queues](https://redis.io/) {roadmap.sh}
2. [Task Queues](https://github.com/donnemartin/system-design-primer#task-queues) {System Design Primer}
3. [Back Pressure](https://github.com/donnemartin/system-design-primer#back-pressure) {System Design Primer}
4. [Publisher/Subscriber Pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber) {roadmap.sh}
5. [Event-Driven Architecture](https://learn.microsoft.com/en-us/azure/architecture/best-practices/background-jobs#event-driven-triggers) {roadmap.sh}
6. [Kafka](https://www.hellointerview.com/learn/system-design/deep-dives/kafka) {Hello Interview}
7. RabbitMQ (yet to be linked) {Hello Interview}
8. Amazon SQS (yet to be linked) {Hello Interview}

## Part 8: Resilience & Distributed System Patterns

1. [Circuit Breaker](https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern) {roadmap.sh}
2. [Retry Pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry) {roadmap.sh}
3. Retry Storm (yet to be linked) {roadmap.sh}
4. [Throttling](https://learn.microsoft.com/en-us/azure/architecture/patterns/throttling) {roadmap.sh}
5. [Bulkhead](https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead) {roadmap.sh}
6. [CQRS](https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs) {roadmap.sh}
7. [Event Sourcing](https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing) {roadmap.sh}
8. Saga / [Choreography Pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/choreography) {roadmap.sh}
9. [Idempotent Operations](https://stackoverflow.com/questions/1077412/what-is-an-idempotent-operation) {roadmap.sh}
10. Removing Single Points of Failure (yet to be linked) {Hello Interview}
11. Handling Failures / Failure Detection (yet to be linked) {Hello Interview}

## Part 9: Key Technologies (Deep Dives)

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

1. [Design a Rate Limiter](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter) {ByteByteGo}
   - [Distributed Rate Limiter](https://www.hellointerview.com/learn/system-design/problem-breakdowns/distributed-rate-limiter) {Hello Interview}
   - [Design a Distributed Rate Limiter](https://www.designgurus.io/course-play/system-design-interview-crash-course/doc/design-a-distributed-rate-limiter) {Design Gurus}
2. [Design a Key-Value Store](https://bytebytego.com/courses/system-design-interview/design-a-key-value-store) {ByteByteGo}
   - [Design a Key-Value Store for a Search Engine (LRU query cache)](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/query_cache/README.md) {System Design Primer}
   - [System Design: The Key-Value Store](https://www.educative.io/courses/grokking-the-system-design-interview/system-design-the-key-value-store) {Grokking}
   - [Design of a Key-Value Store](https://www.educative.io/courses/grokking-the-system-design-interview/design-of-a-key-value-store) {Grokking}
   - [Ensure Scalability and Replication](https://www.educative.io/courses/grokking-the-system-design-interview/ensure-scalability-and-replication) {Grokking}
   - [Versioning Data and Achieving Configurability](https://www.educative.io/courses/grokking-the-system-design-interview/versioning-data-and-achieving-configurability) {Grokking}
3. [Design a URL Shortener](https://bytebytego.com/courses/system-design-interview/design-a-url-shortener) {ByteByteGo}
   - [Bitly](https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly) {Hello Interview}
   - [Design Pastebin.com (or Bit.ly)](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md) {System Design Primer}
4. Design a Unique ID Generator in Distributed Systems (yet to be linked) {ByteByteGo}
5. Design an API Gateway (yet to be linked) {Design Gurus}
6. Design a Distributed Lock Manager (like Chubby) (yet to be linked) {Design Gurus}
7. Design a Distributed Job Scheduler (like Cron) (yet to be linked) {Design Gurus}
8. [Design Search Autocomplete System](https://algomaster.io/learn/system-design-interviews/design-search-autocomplete-system) {AlgoMaster}
9. [Design a Notification System / Service](https://algomaster.io/learn/system-design-interviews/design-notification-service) {AlgoMaster}

## Part 12: Case Studies -- Social & Content Feeds

1. [Design a News Feed System](https://bytebytego.com/courses/system-design-interview/design-a-news-feed-system) {ByteByteGo}
   - [FB News Feed](https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-news-feed) {Hello Interview}
2. [Design the Twitter Timeline and Search](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md) {System Design Primer}
   - Design Twitter Timeline (yet to be linked) {Design Gurus}
3. [Design Instagram](https://algomaster.io/learn/system-design-interviews/design-instagram) {AlgoMaster}
4. [Tinder](https://www.hellointerview.com/learn/system-design/problem-breakdowns/tinder) {Hello Interview}
5. Design TikTok (yet to be linked) {AlgoMaster}
6. Design Reddit (yet to be linked) {AlgoMaster}
7. [Design the Data Structures for a Social Network](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/social_graph/README.md) {System Design Primer}
8. Design Facebook "People You May Know" (yet to be linked) {Design Gurus}
9. Design LinkedIn Connections (yet to be linked) {Design Gurus}

## Part 13: Case Studies -- Messaging & Real-Time Communication

1. [Design a Chat System](https://bytebytego.com/courses/system-design-interview/design-a-chat-system) {ByteByteGo}
   - [WhatsApp](https://www.hellointerview.com/learn/system-design/problem-breakdowns/whatsapp) {Hello Interview}
   - [Design WhatsApp](https://www.designgurus.io/course-play/system-design-interview-crash-course/doc/design-whatsapp) {Design Gurus}
   - [Design WhatsApp](https://algomaster.io/learn/system-design-interviews/design-whatsapp) {AlgoMaster}
2. [FB Live Comments](https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-live-comments) {Hello Interview}
   - Design Live Comment Streaming Service (Twitch Chat) (yet to be linked) {Design Gurus}
3. Design Slack (yet to be linked) {AlgoMaster}
4. Design Google Docs (yet to be linked) {Design Gurus / AlgoMaster}
5. Design a Collaborative Whiteboard (Miro) (yet to be linked) {Design Gurus}
6. Design Zoom (yet to be linked) {AlgoMaster}
7. Design Discord (yet to be linked) {Design Gurus}
8. [Design an Online Chat Server](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/online_chat/online_chat.py) {System Design Primer}

## Part 14: Case Studies -- Media, Storage & Streaming

1. [Design YouTube](https://bytebytego.com/courses/system-design-interview/design-youtube) {ByteByteGo}
   - [YouTube](https://www.hellointerview.com/learn/system-design/problem-breakdowns/youtube) {Hello Interview}
   - [Design YouTube](https://www.designgurus.io/course-play/system-design-interview-crash-course/doc/design-youtube) {Design Gurus}
2. [Design Spotify](https://algomaster.io/learn/system-design-interviews/design-spotify) {AlgoMaster}
3. [Dropbox](https://www.hellointerview.com/learn/system-design/problem-breakdowns/dropbox) {Hello Interview}
4. Design Netflix (yet to be linked) {Design Gurus}
5. Design Google Drive (yet to be linked) {AlgoMaster}
6. Design Gmail (yet to be linked) {AlgoMaster}
7. Design Twitch (yet to be linked) {AlgoMaster}
8. Design Amazon S3 / S3-like Object Storage (yet to be linked) {ByteByteGo / Design Gurus}

## Part 15: Case Studies -- Location-Based Services

1. [Design Airbnb](https://www.designgurus.io/course-play/system-design-interview-crash-course/doc/design-airbnb) {Design Gurus}
2. [Uber](https://www.hellointerview.com/learn/system-design/problem-breakdowns/uber) {Hello Interview}
   - Design Uber/Lyft (yet to be linked) {Design Gurus}
3. [Local Delivery Service (Gopuff)](https://www.hellointerview.com/learn/system-design/problem-breakdowns/gopuff) {Hello Interview}
4. Design Food Delivery Service (yet to be linked) {AlgoMaster}
5. Design Google Maps (yet to be linked) {AlgoMaster}
6. Design Nearby Friends (yet to be linked) {ByteByteGo}
7. [Proximity Search](https://www.hellointerview.com/learn/system-design/deep-dives/proximity-search) {Hello Interview}

## Part 16: Case Studies -- Search & Aggregation

1. [Design a Web Crawler](https://bytebytego.com/courses/system-design-interview/design-a-web-crawler) {ByteByteGo}
   - [Web Crawler](https://www.hellointerview.com/learn/system-design/problem-breakdowns/web-crawler) {Hello Interview}
   - [Design a Web Crawler (full worked solution)](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/web_crawler/README.md) {System Design Primer}
2. Design Google Search (yet to be linked) {Design Gurus}
3. [Ad Click Aggregator](https://www.hellointerview.com/learn/system-design/problem-breakdowns/ad-click-aggregator) {Hello Interview}
   - Design Ad Click Event Aggregation (yet to be linked) {ByteByteGo}
4. [FB Post Search](https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-post-search) {Hello Interview}
5. Design News Aggregator (yet to be linked) {AlgoMaster}

## Part 17: Case Studies -- E-Commerce, Ticketing & Booking

1. [Hotel Reservation System](https://bytebytego.com/courses/system-design-interview/hotel-reservation-system) {ByteByteGo}
2. [Ticketmaster](https://www.hellointerview.com/learn/system-design/problem-breakdowns/ticketmaster) {Hello Interview}
3. [Design Amazon's Sales Ranking by Category](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/sales_rank/README.md) {System Design Primer}
   - Design Amazon (yet to be linked) {AlgoMaster}
4. Design Amazon Shopping Cart (yet to be linked) {Design Gurus}
5. Design Shopify (yet to be linked) {AlgoMaster}
6. Design Flash Sale (yet to be linked) {AlgoMaster}
7. Design Online Auction System (yet to be linked) {AlgoMaster}
8. Design Movie Booking System (yet to be linked) {AlgoMaster}

## Part 18: Case Studies -- Payments & Financial Systems

1. [Design Mint.com](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/mint/README.md) {System Design Primer}
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
   - Design LeetCode (yet to be linked) {AlgoMaster}
2. Design Calendar System (yet to be linked) {AlgoMaster}
3. Design Online Chess (yet to be linked) {AlgoMaster}
4. Design ChatGPT (yet to be linked) {Design Gurus}
5. Design Google Ads (yet to be linked) {Design Gurus}
6. Design Amazon Lambda (yet to be linked) {Design Gurus}
7. Design Typeahead/Autocomplete (yet to be linked) {Design Gurus}

## Part 21: Object-Oriented / Low-Level Design

1. [Design a Hash Map](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/hash_table/hash_map.py) {System Design Primer}
2. [Design a Least Recently Used Cache](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/lru_cache/lru_cache.py) {System Design Primer}
3. [Design a Call Center](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/call_center/call_center.py) {System Design Primer}
4. [Design a Deck of Cards](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/deck_of_cards/deck_of_cards.py) {System Design Primer}
5. [Design a Parking Lot](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/parking_lot/parking_lot.py) {System Design Primer}

## General References

- [Grokking the System Design Interview -- course landing page](https://www.educative.io/courses/grokking-the-system-design-interview) {Grokking}
- [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) {Karan Pratap Singh}
- [roadmap.sh -- System Design](https://roadmap.sh/system-design) {roadmap.sh}
