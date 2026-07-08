# SQL Mastery

This is the SQL counterpart to the DSA sheets: real, verified, free problems organized by concept into Foundation/Reinforcement/Boss ladders, plus the production-database-engineer concepts (indexing, normalization, transactions, query optimization) that come up as verbal/whiteboard questions, not just queries to write. Sources: LeetCode's Database problem set, HackerRank's SQL domain, StrataScratch, DataLemur, and GeeksforGeeks -- every problem link was checked to make sure it's real, free, and not premium-locked.

This sheet is being built incrementally -- more topics (self-joins, subqueries, window ranking, CTEs, set operations, pivoting, sessionization, views, and more) are actively being added.

## Core Query Fundamentals

### Basic Filtering & Sorting

#### Multi-condition WHERE Filtering

- Invariant: AND/OR predicates in WHERE are evaluated row-by-row before any grouping or sorting happens, so getting the right rows back is a matter of correct boolean composition, not which columns you SELECT.

Foundation:

1. [Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products/)
2. [Find Customer Referee](https://leetcode.com/problems/find-customer-referee/)
3. [Big Countries](https://leetcode.com/problems/big-countries/)

Reinforcement:

1. [Invalid Tweets](https://leetcode.com/problems/invalid-tweets/)

Boss:

1. [Not Boring Movies](https://leetcode.com/problems/not-boring-movies/)

#### ORDER BY, LIMIT & Top-N / Pagination

- Invariant: LIMIT/OFFSET simply chop the already-sorted result set, so safely returning "the Nth highest value" requires collapsing duplicates (DISTINCT) or ranking with a window/subquery -- a naive `LIMIT N-1,1` silently gives the wrong row whenever ties exist.

Foundation:

1. [Second Highest Salary](https://leetcode.com/problems/second-highest-salary/)

Reinforcement:

1. [Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/)
2. [Department Highest Salary](https://leetcode.com/problems/department-highest-salary/)

Boss:

1. [Rank Scores](https://leetcode.com/problems/rank-scores/)

#### DISTINCT & Duplicate Detection

- Invariant: DISTINCT and COUNT(DISTINCT ...) collapse rows down to unique values before you count or list them, so "find the duplicates" or "find the unmatched items" problems hinge on precisely what set membership means for the data, not on filtering individual rows.

Foundation:

1. [Duplicate Emails](https://leetcode.com/problems/duplicate-emails/)

Reinforcement:

1. [Customers Who Never Order](https://leetcode.com/problems/customers-who-never-order/)
2. [Article Views I](https://leetcode.com/problems/article-views-i/)
3. [Number of Unique Subjects Taught by Each Teacher](https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/)

Boss:

1. [Consecutive Numbers](https://leetcode.com/problems/consecutive-numbers/)

### String & Date Functions

#### String Manipulation & Pattern Matching

- Invariant: String functions like SUBSTR/CONCAT/LIKE/REGEXP operate on the literal contents of a column, so a pattern that "looks right" (e.g. `'DIAB1%'`) can silently miss valid matches unless you account for every position the target substring is allowed to appear in.

Foundation:

1. [Fix Names in a Table](https://leetcode.com/problems/fix-names-in-a-table/)
2. [Patients With a Condition](https://leetcode.com/problems/patients-with-a-condition/)

Reinforcement:

1. [Find Users With Valid E-Mails](https://leetcode.com/problems/find-users-with-valid-e-mails/)

Boss:

1. [Calculate Special Bonus](https://leetcode.com/problems/calculate-special-bonus/)

#### Date Arithmetic (Differences, Equality, Elapsed Time)

- Invariant: Date/time arithmetic (DATEDIFF, timestamp subtraction) only compares two values you've already lined up in the same row, so "yesterday vs. today" or "time to complete a process" problems usually need a self-join or window function before any subtraction can happen.

Foundation:

1. [Immediate Food Delivery I](https://leetcode.com/problems/immediate-food-delivery-i/)

Reinforcement:

1. [User Activity for the Past 30 Days I](https://leetcode.com/problems/user-activity-for-the-past-30-days-i/)
2. [Average Time of Process per Machine](https://leetcode.com/problems/average-time-of-process-per-machine/)

Boss:

1. [Rising Temperature](https://leetcode.com/problems/rising-temperature/)

#### Date Truncation, Formatting & Extraction

- Invariant: Truncating a date to a coarser grain (DATE_FORMAT to year-month, pulling out the month) is what lets you GROUP BY or pivot on a period instead of an exact timestamp -- get the truncation expression wrong and every row ends up in its own bucket.

Foundation:

1. [Sales Analysis III](https://leetcode.com/problems/sales-analysis-iii/)

Reinforcement:

1. [Monthly Transactions I](https://leetcode.com/problems/monthly-transactions-i/)
2. [Immediate Food Delivery II](https://leetcode.com/problems/immediate-food-delivery-ii/)

Boss:

1. [Reformat Department Table](https://leetcode.com/problems/reformat-department-table/)

### NULL Handling & Conditional Logic

#### COALESCE/IFNULL for Missing Values & Safe Division

- Invariant: A LEFT JOIN manufactures NULLs for every unmatched row, so any arithmetic, ratio, or display built on the joined column must explicitly convert NULL with COALESCE/IFNULL or the NULL silently propagates and poisons the result.

Foundation:

1. [Combine Two Tables](https://leetcode.com/problems/combine-two-tables/)

Reinforcement:

1. [Replace Employee ID With The Unique Identifier](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/)
2. [Confirmation Rate](https://leetcode.com/problems/confirmation-rate/)

Boss:

1. [Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/)

#### CASE WHEN Bucketing & Derived Categories

- Invariant: CASE WHEN evaluates its branches in order and returns NULL for any row that matches no WHEN and has no ELSE, so a bucketing/categorization query has to be checked for exhaustiveness, not just the correctness of each individual branch.

Foundation:

1. [Triangle Judgement](https://leetcode.com/problems/triangle-judgement/)

Reinforcement:

1. [Count Salary Categories](https://leetcode.com/problems/count-salary-categories/)
2. [Create a Session Bar Chart](https://leetcode.com/problems/create-a-session-bar-chart/)

Boss:

1. [Exchange Seats](https://leetcode.com/problems/exchange-seats/)

#### Three-Valued Logic Gotchas (NULL in WHERE/JOIN/NOT IN)

- Invariant: NULL is neither TRUE nor FALSE -- `column <> NULL` and `NOT IN (subquery containing a NULL)` both quietly evaluate to UNKNOWN/empty instead of erroring, so the safe fix is explicit `IS NULL` checks or `NOT EXISTS` rather than negated equality/IN.

Foundation:

1. [Employees Earning More Than Their Managers](https://leetcode.com/problems/employees-earning-more-than-their-managers/)

Reinforcement:

1. [Employee Bonus](https://leetcode.com/problems/employee-bonus/)
2. [Sales Person](https://leetcode.com/problems/sales-person/)

Boss:

1. [Employees Whose Manager Left the Company](https://leetcode.com/problems/employees-whose-manager-left-the-company/)

### Aggregation & GROUP BY/HAVING

#### Basic Aggregates (COUNT/SUM/AVG/MIN/MAX)

- Invariant: Aggregate functions collapse many rows into one per group, so the choice of MIN/MAX/AVG/SUM determines which underlying row (or blend of rows) the answer actually represents -- the wrong aggregate gives a plausible-looking but incorrect number.

Foundation:

1. [Game Play Analysis I](https://leetcode.com/problems/game-play-analysis-i/)

Reinforcement:

1. [Percentage of Users Attended a Contest](https://leetcode.com/problems/percentage-of-users-attended-a-contest/)
2. [Queries Quality and Percentage](https://leetcode.com/problems/queries-quality-and-percentage/)

Boss:

1. [Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/)

#### GROUP BY Multiple Columns

- Invariant: Grouping by a combination of columns treats each unique tuple as its own bucket, so a `HAVING COUNT(*) >= k` threshold is really asking "how many rows share this whole combination of values," not just one column in isolation.

Foundation:

1. [Actors and Directors Who Cooperated At Least Three Times](https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/)

Reinforcement:

1. [Market Analysis I](https://leetcode.com/problems/market-analysis-i/)
2. [Group Sold Products By The Date](https://leetcode.com/problems/group-sold-products-by-the-date/)

Boss:

1. [Friend Requests II: Who Has the Most Friends](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/)

#### HAVING vs. WHERE

- Invariant: WHERE filters raw rows before aggregation runs, while HAVING filters the already-aggregated groups afterward, so any condition that references an aggregate (COUNT, SUM) has to live in HAVING -- putting it in WHERE either errors or silently filters on the wrong thing.

Foundation:

1. [Classes More Than 5 Students](https://leetcode.com/problems/classes-more-than-5-students/)

Reinforcement:

1. [Managers with at Least 5 Direct Reports](https://leetcode.com/problems/managers-with-at-least-5-direct-reports/)
2. [List the Products Ordered in a Period](https://leetcode.com/problems/list-the-products-ordered-in-a-period/)
3. [Bank Account Summary II](https://leetcode.com/problems/bank-account-summary-ii/)

Boss:

1. [Primary Department for Each Employee](https://leetcode.com/problems/primary-department-for-each-employee/)

## Joins & Relational Composition

### Inner & Outer Joins

#### INNER JOIN -- Combining Matched Rows

- Invariant: INNER JOIN keeps only rows with a matching key on both sides, so any row whose foreign key doesn't exist in the other table silently disappears from the result -- exactly what you want for "complete records only," and exactly the bug when you don't notice the drop.

Foundation:

1. [Product Sales Analysis I](https://leetcode.com/problems/product-sales-analysis-i/)

Reinforcement:

1. [Average Selling Price](https://leetcode.com/problems/average-selling-price/)
2. [The Number of Employees Which Report to Each Employee](https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/)

Boss:

1. [Tree Node](https://leetcode.com/problems/tree-node/)

#### LEFT/RIGHT/FULL OUTER JOIN & Finding Unmatched Rows

- Invariant: A LEFT/RIGHT/FULL OUTER JOIN preserves the non-matching side's rows and fills the other side with NULL, so "find rows with no match" and "count including zeros" both reduce to filtering or aggregating over those NULL-filled rows instead of trying to enumerate absence directly.

Foundation:

1. [Sellers With No Sales](https://leetcode.com/problems/sellers-with-no-sales/)

Reinforcement:

1. [Customer Who Visited but Did Not Make Any Transactions](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/)
2. [Employees With Missing Information](https://leetcode.com/problems/employees-with-missing-information/)

Boss:

1. [Students and Examinations](https://leetcode.com/problems/students-and-examinations/)

## Schema, Performance & Production Concepts

The theory side of SQL interviews -- indexing, normalization, transactions, and query optimization come up constantly as verbal/whiteboard questions, not just coding problems. "Know cold" facts are what should be immediately recallable; "Drill prompts" are scenarios to reason through out loud.

### Indexing

#### B-Tree Mechanics & Clustered vs Non-Clustered

- Invariant: A clustered index defines the physical row order on disk (one per table); every non-clustered index is a separate sorted structure of key + pointer (row locator) back to the clustered key, so non-clustered lookups cost an extra "bookmark" hop unless the index covers the query.

Know cold:

1. A B-tree index keeps keys sorted, so it accelerates equality, range (`<`, `>`, `BETWEEN`), prefix `LIKE 'abc%'`, `ORDER BY`, and `MIN`/`MAX` on the indexed column(s) -- but not leading-wildcard `LIKE '%abc'`.
2. Clustered index leaf nodes ARE the table rows (InnoDB calls this the "clustered index" = the table itself, keyed on the primary key by default); non-clustered/secondary index leaf nodes store the indexed column(s) plus the clustered key (InnoDB) or a direct row pointer (heap tables, e.g. SQL Server heaps).
3. A table can have only one clustered index (or be a heap with none, e.g. SQL Server default without a PK) but many non-clustered indexes.
4. Non-clustered index seeks in InnoDB require a second lookup into the clustered index to fetch columns not in the secondary index -- this is the "bookmark lookup" / "key lookup" cost that covering indexes eliminate.
5. Choosing the clustering key matters: a monotonically increasing key (auto-increment, or time-ordered UUIDv7/ULID) gives sequential inserts at the end of the B-tree; a random key (UUIDv4) causes page splits scattered across the tree, fragmenting it and hurting insert throughput and cache locality.

Drill prompts:

1. Why does looking up a row by a non-clustered index typically cost more than looking up by the clustered/primary key, and under what condition does that extra cost disappear?
2. A table uses a random UUID as its primary key and clustering key. Explain concretely why insert throughput degrades as the table grows, compared to using an auto-increment integer or a time-sortable ID.
3. If a table has no primary key and no explicit clustered index, how does the storage engine locate rows, and what does that cost on every secondary-index lookup?

#### Composite Index Column Order & Covering Indexes

- Invariant: In a composite index on `(A, B, C)`, the index is only useful for filtering/sorting on a *left-prefix* of the columns (`A`, or `A,B`, or `A,B,C`) in that order -- a query that filters on `B` or `C` alone cannot use the index for seeking, and equality columns should generally precede range columns in the key order.

Know cold:

1. Column order rule of thumb: equality-filter columns first, then a single range/sort column, then the rest -- because once the index hits a range predicate, subsequent columns in the key are no longer sorted usefully for further filtering.
2. A "covering index" includes every column the query needs (in the key or as included/non-key columns), letting the engine answer entirely from the index without touching the base table (an "index-only scan" in Postgres, avoiding the heap fetch).
3. Index on `(user_id, created_at)` serves `WHERE user_id = ? ORDER BY created_at` perfectly (equality then range/sort) but does NOT efficiently serve `WHERE created_at > ?` alone, nor `WHERE user_id = ? AND status = ? ORDER BY created_at` if `status` isn't in the key.
4. Postgres supports `INCLUDE` columns (payload-only, not part of the key) to build covering indexes without bloating the sortable key; MySQL/InnoDB achieves it implicitly since secondary indexes always carry the clustering key.
5. Redundant indexes are wasted overhead: an index on `(A, B)` makes a separate index on `(A)` alone almost always redundant.

Drill prompts:

1. You have `INDEX(a, b, c)`. For each of these queries, say whether the index can be used for seeking, and how much of it is used: `WHERE a = 1 AND b = 2`, `WHERE b = 2 AND c = 3`, `WHERE a = 1 AND c = 3`, `WHERE a = 1 ORDER BY b`, `WHERE a > 1 AND b = 2`.
2. Design a composite index for a query that filters `WHERE tenant_id = ? AND status = 'active' ORDER BY created_at DESC LIMIT 20`. Justify the column order and whether it needs to be "covering."
3. A table has `INDEX(email)` and someone adds `INDEX(email, created_at)`. Is the first index now redundant? Under what circumstance would you still keep both?

#### When the Planner Uses vs Ignores an Index

- Invariant: An index only wins when the optimizer's cost estimate says reading the (smaller) index plus row lookups beats a sequential/table scan -- for large result-set fractions, low-cardinality columns, or stale statistics, the planner will correctly (or sometimes incorrectly) prefer a full scan even with an index present.

Know cold:

1. Selectivity threshold: if a query is expected to return a large percentage of the table's rows (rules of thumb range ~5-30% depending on engine/table shape), a full/sequential scan is usually cheaper than millions of random-I/O index lookups.
2. An index is silently ignored when: a function or expression wraps the indexed column (`WHERE YEAR(created_at) = 2024`), there's an implicit type mismatch/coercion, a leading wildcard `LIKE '%foo'` is used, or the column has very low cardinality (e.g. a boolean flag).
3. Stale or missing statistics (histogram out of date after bulk load) can make the optimizer misjudge cardinality and pick the wrong plan -- this is why `ANALYZE` matters after large data changes.
4. Small tables: the optimizer may skip an index entirely and just scan, because the whole table fits in one or a few pages.

Drill prompts:

1. A `WHERE` clause is `WHERE status = 'active'` on a column that's 95% "active" rows, and there's a plain B-tree index on `status`. Will the planner use it? Why or why not, and what would you index instead?
2. Explain exactly why `WHERE DATE(order_date) = '2024-01-01'` fails to use an index on `order_date`, and give two ways to fix the query so the index is used again.
3. After bulk-loading 10M rows in one transaction, a previously-fast query on the new data goes slow. What's the first thing to check, and why?

#### Write Overhead & When NOT to Add an Index

- Invariant: Every index is a second (or third...) data structure that must be kept transactionally consistent with the table, so each `INSERT`/`UPDATE`/`DELETE` pays to update every index touched by the changed columns -- indexes are a read/write tradeoff, not a free lunch.

Know cold:

1. Each additional index adds write amplification: one logical row insert becomes N physical B-tree insertions, plus WAL/redo log volume, plus potential page splits.
2. Indexes cost storage and cache pressure -- more indexes competing for buffer pool memory means more evictions and cold-cache misses.
3. Don't index: columns with very low cardinality alone, columns rarely used in `WHERE`/`JOIN`/`ORDER BY`, small tables that always fit in memory, write-heavy tables where read queries are rare.
4. Partial/filtered indexes (Postgres `WHERE` clause on `CREATE INDEX`) solve the low-cardinality problem cheaply -- e.g. index only `WHERE status = 'pending'` when that's the rare, hot-path value.

Drill prompts:

1. Design an index strategy for a table that's queried by `(user_id, created_at)` but written to constantly (thousands of inserts/sec). What do you add, what do you avoid, and why does write throughput matter here?
2. A table has a `deleted` boolean where 99% of rows are `false` and queries almost always filter `WHERE deleted = false`. Is a plain index on `deleted` useful? What would you build instead?
3. Your team's habit is "query is slow -> add an index." After a year, a hot table has 15 indexes and inserts have gotten measurably slower. Walk through how you'd audit and prune them.

Practice:

1. [262. Trips and Users](https://leetcode.com/problems/trips-and-users/)

### Normalization & Schema Design

#### 1NF -- Eliminating Repeating Groups / Non-Atomic Values

- Invariant: 1NF requires every column to hold a single atomic value (no comma-separated lists, no repeating column groups like `phone1, phone2, phone3`) and every row to be uniquely identifiable -- violating it makes filtering/aggregating on individual values require string-parsing hacks and update anomalies when the "list" changes.

Know cold:

1. Classic 1NF violation: a `PRODUCT` table with a `Suppliers` column storing `"Acme, Globex, Initech"` as one string, or a `Student` table with `Course1, Course2, Course3` columns -- both fixed by extracting a separate child table.
2. The anomaly it fixes: without 1NF you can't cleanly query "all products supplied by Acme," can't add a 4th course without a schema change, and can't enforce uniqueness/foreign keys on individual list items.
3. 1NF also implicitly wants a primary key -- a table with duplicate, indistinguishable rows and no key isn't in 1NF either, by most textbook definitions.

Drill prompts:

1. A `Student` table has columns `student_id, name, course1, course2, course3`. Identify the 1NF violation and redesign it. What breaks if a student takes a 4th course, or drops one?
2. A `Contact` table has an `emails` column storing `"a@x.com;b@y.com"`. What query becomes hard/impossible with this design, and how do you fix the schema?

#### 2NF -- Eliminating Partial Dependencies (Composite Keys)

- Invariant: 2NF requires 1NF plus "no non-key attribute depends on only *part* of a composite primary key" -- this only matters when the PK has 2+ columns, and the fix is to split off attributes that depend on just one part of the key into their own table.

Know cold:

1. Classic example: `OrderItem(order_id, product_id, product_name, quantity)` with PK `(order_id, product_id)`. `product_name` depends only on `product_id`, not on the full composite key -- that's a partial dependency, violating 2NF. Fix: move `product_name` into a `Product(product_id, product_name)` table.
2. The anomaly it fixes: without the split, `product_name` is duplicated on every order line, so renaming a product means updating every historical order row, and you can't record a product's name before it's ever ordered.
3. 2NF is only a meaningful concern for tables with composite primary keys; a table with a single-column surrogate key automatically satisfies 2NF.

Drill prompts:

1. `Enrollment(student_id, course_id, student_name, course_name, grade)` has PK `(student_id, course_id)`. Identify every partial dependency and redesign into 2NF-compliant tables.
2. Why is 2NF irrelevant (automatically satisfied) for a table whose primary key is a single auto-increment `id` column?

Practice:

1. [Database Normalization #3 (HackerRank)](https://www.hackerrank.com/challenges/database-normalization-3/problem)
2. [Database Normalization #4 (HackerRank)](https://www.hackerrank.com/challenges/database-normalization-4/problem)

#### 3NF & BCNF -- Eliminating Transitive Dependencies

- Invariant: 3NF requires 2NF plus "no non-key attribute depends on another non-key attribute" (no transitive dependency through a non-key column); BCNF tightens this further to "every determinant must be a candidate key" -- the gap between them matters when a table has multiple overlapping candidate keys.

Know cold:

1. Classic 3NF violation: `Employee(emp_id, dept_id, dept_manager)` where `dept_manager` depends on `dept_id`, which depends on `emp_id` -- a transitive chain. Fix: split into `Employee(emp_id, dept_id)` and `Department(dept_id, dept_manager)`.
2. The anomaly it fixes: without the split, changing a department's manager requires updating every employee row in that department, and you can't store a new department's manager until it has at least one employee.
3. BCNF can reduce update anomalies further than 3NF but occasionally sacrifices dependency preservation -- which is why 3NF is the common "good enough" target in practice and BCNF is reserved for cases with real anomalies from overlapping keys.
4. 4NF/5NF exist for multivalued dependencies -- rarely tested in interviews beyond "have you heard of it," but worth naming if asked.

Drill prompts:

1. `Order(order_id, customer_id, customer_zip, shipping_cost)` where `shipping_cost` is derived from `customer_zip`. Identify the transitive dependency and normalize to 3NF.
2. Give an example of a relation that is in 3NF but not in BCNF, and explain precisely which determinant fails the "must be a candidate key" test.
3. Why might a team deliberately stop at 3NF instead of pushing to BCNF for a given table? What could be lost?

Practice:

1. [Database Normalization #6 (HackerRank)](https://www.hackerrank.com/challenges/database-normalization-6/problem)
2. [Database Normalization #10 (HackerRank)](https://www.hackerrank.com/challenges/database-normalization-10/problem)

#### Denormalization Tradeoffs & Schema Design in Practice

- Invariant: Denormalization is a deliberate, targeted trade of write-complexity/redundancy for read-performance and query-simplicity -- it's correct when reads vastly outnumber writes, when the duplicated data changes rarely, or when join cost in a query hot path is provably the bottleneck; it's a mistake when applied blindly "for speed" without measuring.

Know cold:

1. Good denormalization candidates: precomputed aggregates, rarely-changing reference data copied onto a hot row (e.g. `price_at_purchase` snapshotted onto an order line -- this one is actually *correct* design, not just optimization), and read-heavy reporting/analytics tables deliberately denormalized apart from the normalized OLTP schema.
2. The cost you're accepting: every denormalized copy is a place a bug can cause data to drift out of sync, extra storage, and either application-level or trigger-level logic to keep copies consistent.
3. Materialized views are the "controlled" form of denormalization: you get a denormalized/aggregated read path but the source of truth stays normalized, and refresh is an explicit, schedulable operation.
4. Rule of thumb interviewers look for: normalize by default for OLTP correctness; denormalize surgically, with a measured reason, and be able to name the write-side mechanism that keeps the copy in sync.

Drill prompts:

1. Design a normalized schema for an e-commerce system supporting orders with multiple items, multiple shipping/billing addresses per customer, and payments that can partially fail/retry. Call out every foreign key and what normal form you're targeting.
2. Your reporting dashboard runs a 6-table join to compute daily revenue by category and it's timing out. Propose a denormalization or materialization strategy, and explain exactly what keeps it from silently going stale.
3. Why is storing `unit_price_at_purchase` on `OrderItem` (instead of joining live to `Product.price`) not really "premature denormalization" but actually a correctness requirement?

### Transactions & ACID

#### Atomicity, Consistency, Isolation, Durability -- Concrete Failure Modes

- Invariant: Each ACID letter guards against one distinct, concretely observable failure -- losing atomicity leaves half-applied writes, losing consistency lets invariants/constraints be violated, losing isolation lets concurrent transactions see each other's in-flight state, and losing durability makes committed data vanish on crash.

Know cold:

1. Atomicity: a bank transfer that debits account A and credits account B must be all-or-nothing. A crash between the two statements leaves money destroyed unless both are wrapped in one transaction.
2. Consistency: the database moves only between states that satisfy its declared constraints -- actually the "output" guaranteed by combining atomicity + isolation + your own constraints, not an independently enforced mechanism.
3. Isolation: concurrent transactions must not observe each other's uncommitted intermediate state -- without it, a "dirty read" lets one transaction act on data that's about to be rolled back.
4. Durability: once a transaction commits, the write survives a crash/power loss -- guaranteed via write-ahead logging flushed to disk before commit returns.
5. Durability has a real tunable tradeoff: some systems let you relax fsync-per-commit (Postgres `synchronous_commit = off`, MySQL `innodb_flush_log_at_trx_commit`) trading a small durability window for throughput.

Drill prompts:

1. Give a concrete scenario where skipping atomicity causes real financial/data loss, and name the mechanism that prevents it.
2. Is "consistency" in ACID the same thing as "consistency" in CAP theorem? Explain the difference precisely -- this is a very common interview trap.
3. A payment service writes a row, returns success to the caller, then the database process crashes before flushing to disk. What ACID property was violated, and what's the fix?

#### Isolation Levels & the Anomalies Each One Prevents

- Invariant: The four standard isolation levels form a strictly increasing guarantee ladder (Read Uncommitted < Read Committed < Repeatable Read < Serializable), each closing off exactly one more class of anomaly (dirty read -> non-repeatable read -> phantom read) at the cost of more locking/blocking or more abort-and-retry under contention.

Know cold:

1. Dirty read: reading another transaction's *uncommitted* write. Prevented starting at Read Committed.
2. Non-repeatable read: re-reading the *same row* within one transaction gives a different value because another transaction committed an update in between. Prevented starting at Repeatable Read.
3. Phantom read: re-running the *same range query* returns a different *set of rows*. Only fully prevented at Serializable in the strict standard, though MVCC engines like Postgres/InnoDB largely prevent phantoms at Repeatable Read too -- a well-known deviation from the ANSI SQL standard worth mentioning.
4. Read Committed is the default in Postgres, Oracle, and SQL Server; Repeatable Read is the default in MySQL/InnoDB -- a common trivia question.
5. MVCC (Postgres/InnoDB/Oracle) lets readers see a consistent snapshot without blocking writers and vice versa -- this is *how* isolation avoids dirty reads without taking read locks.

Drill prompts:

1. Define dirty read, non-repeatable read, and phantom read with a two-transaction timeline for each, and state the minimum isolation level that prevents each one.
2. Why can Postgres's Repeatable Read prevent phantom reads even though the ANSI standard says only Serializable must?
3. Your application runs at Serializable isolation and starts seeing intermittent "could not serialize access due to concurrent update" errors under load. Is this a bug? What should the application do?

#### Optimistic vs Pessimistic Locking

- Invariant: Pessimistic locking assumes conflicts are common and blocks other transactions from touching a row until you're done (`SELECT ... FOR UPDATE`); optimistic locking assumes conflicts are rare and lets everyone proceed, checking at commit time (via a version/timestamp column) whether anyone else modified the row first.

Know cold:

1. Pessimistic: acquire a lock before reading-with-intent-to-write; other transactions wanting the same row block until release. Good for high-contention hot rows.
2. Optimistic: no lock taken; each row carries a `version` column; the update is `UPDATE t SET ..., version = version + 1 WHERE id = ? AND version = ?` -- if 0 rows are affected, someone else committed first.
3. Deadlocks are the concrete pessimistic-locking failure mode: two transactions locking two rows in opposite order both block forever until the deadlock detector kills one. Mitigation: always acquire locks in a consistent, global order.
4. Optimistic locking's failure mode is livelock/starvation under high contention -- this is why pessimistic locking is preferred specifically for known-hot rows.

Drill prompts:

1. You're building a flash-sale "buy the last item in stock" feature. Would you reach for optimistic or pessimistic locking, and why?
2. Implement (describe, in SQL) an optimistic-locking update for an `accounts.balance` column using a `version` column, and explain exactly what the application does when the `UPDATE` affects 0 rows.
3. Describe a deadlock scenario between two transactions each updating two shared rows in opposite order, and explain both the database's detection mechanism and the application-level fix.

### Query Optimization & Execution Plans

#### Reading an EXPLAIN / Execution Plan

- Invariant: An execution plan is a tree of physical operators (scan/seek, join algorithm, sort, aggregate) each carrying an estimated vs. actual row count and cost -- the single most useful debugging signal is a large gap between *estimated* and *actual* rows at some node, which points straight at stale statistics or a misestimated predicate.

Know cold:

1. Read plans bottom-up / inside-out: leaf nodes are how data enters, each level up is an operator consuming its children's output, the root is the final result.
2. Key operators: Seq Scan, Index Scan, Index Only Scan (covering index in action), Bitmap Heap Scan, Nested Loop Join (good for small outer input, indexed inner lookups), Hash Join (good for large unsorted inputs), Merge Join (good when both inputs are already sorted on the join key).
3. `EXPLAIN` shows *planned/estimated* costs; `EXPLAIN ANALYZE` actually runs the query and shows real elapsed time and real row counts -- always prefer `EXPLAIN ANALYZE` when diagnosing.
4. MySQL's `EXPLAIN` `type` column (`const`, `eq_ref`, `ref`, `range`, `index`, `ALL` -- roughly best to worst); watch `Extra` for `Using filesort` and `Using temporary`, both red flags for a missing/insufficient index.

Drill prompts:

1. Given an `EXPLAIN ANALYZE` output where the planner estimated 50 rows from a filter but actually got 500,000, what's the likely root cause and the fix?
2. When would the planner prefer a Hash Join over a Nested Loop Join, and what does that tell you about the size of the two inputs?
3. Explain the difference between an Index Scan and an Index Only Scan in Postgres, and what has to be true about the query and the index for the "Only" variant to apply.

#### Common Causes of a Slow Query

- Invariant: The overwhelming majority of "why is this query slow" interview answers reduce to one of: the planner can't use an otherwise-good index (function-wrapped column, implicit type conversion, leading wildcard), there's no good index at all, or the app is issuing many small queries in a loop (N+1) instead of one set-based query.

Know cold:

1. Function-wrapped/expression column: `WHERE UPPER(email) = 'X@Y.COM'` can't use a plain index on `email` -- fixed by rewriting the predicate to be sargable or building a functional/expression index.
2. Implicit type conversion: comparing a string column to a numeric literal forces the engine to convert every stored value to compare, defeating the index.
3. N+1 query pattern: an ORM/app loop fetches N parent rows, then issues one additional query per row for related children instead of one join or `WHERE id IN (...)` -- kills performance primarily through network round-trip latency multiplication.
4. Other frequent culprits: unbounded `LIMIT`, `SELECT *` forcing extra I/O, non-sargable `LIKE '%x%'`, and large `OFFSET` pagination -- keyset/cursor pagination avoids the last one.

Drill prompts:

1. A query `WHERE LOWER(username) = 'bob'` is slow despite an index on `username`. Give two fixes -- one that changes the query, one that changes the schema.
2. An API endpoint that lists 50 orders and their customer names takes 2 seconds; the ORM logs show 51 SQL queries. Diagnose the pattern and describe the fix at the query level.
3. A paginated admin report using `OFFSET 500000 LIMIT 20` gets slower the deeper you paginate. Why, and what's the standard fix?

Practice:

1. [197. Rising Temperature](https://leetcode.com/problems/rising-temperature/)

#### Sequential Scan vs Index Scan: the Planner's Decision

- Invariant: The planner picks whichever physical plan it estimates will be cheapest given table/index statistics -- an index scan wins when it's expected to touch a small, selective fraction of rows, and a sequential scan wins whenever that's not true, regardless of whether an index "exists."

Know cold:

1. Selectivity is the dominant factor: past a certain fraction of matching rows (commonly cited around 5-30%), linear beats random-access-per-row.
2. Physical correlation matters: Postgres tracks `correlation` between index order and physical table order; a highly correlated index makes index-scan row fetches nearly sequential too.
3. Table/index statistics drive the estimate, not reality at query time -- outdated statistics after a bulk load can make the planner choose badly until refreshed (`ANALYZE`).
4. "The index exists but isn't used" is very often *correct planner behavior*, not a bug -- forcing an index with a hint should be a last resort since it fights the optimizer permanently as data shape changes.

Drill prompts:

1. Table `orders` has 10M rows; an index exists on `status`; the query filters `WHERE status = 'shipped'` matching 40% of rows. Would you expect an index scan or a sequential scan, and why is the planner's choice actually correct here?
2. What does "correlation" mean in a Postgres plan, and why does a high-correlation index change the cost calculus for what would otherwise be a borderline scan-vs-seek decision?
3. When (if ever) is it appropriate to force an index/hint the optimizer rather than let it choose? What's the long-term risk of doing so?

Practice:

1. [262. Trips and Users (Boss)](https://leetcode.com/problems/trips-and-users/)

## Read First: Goldmine Reference Articles

Genuinely excellent, industry-standard reference reading -- not generic "what is a JOIN" tutorial pages. Each one is worth reading before you're deep into that topic's practice ladder above.

### Concept Deep Dives

1. [Use The Index, Luke -- the canonical SQL indexing resource](https://use-the-index-luke.com/)
2. [SQL Performance Explained (full book, free online)](https://use-the-index-luke.com/sql/table-of-contents)
3. [The Internals of PostgreSQL: Join Operations (Nested Loop, Merge, Hash Join)](https://www.interdb.jp/pg/pgsql03/05/)
4. [Explaining the unexplainable: reading real EXPLAIN output (5-part series)](https://www.depesz.com/2013/04/16/explaining-the-unexplainable/)
5. [Uber Engineering: Designing Schemaless -- a real denormalization tradeoff](https://www.uber.com/en-us/blog/schemaless-part-one-mysql-datastore/)
6. [Cockroach Labs: No Dirty Reads -- SQL isolation levels with concrete failure scenarios](https://www.cockroachlabs.com/blog/sql-isolation-levels-explained/)
7. [Cockroach Labs: What write skew looks like](https://www.cockroachlabs.com/blog/what-write-skew-looks-like/)
8. [Martin Kleppmann: Hermitage -- testing the "I" in ACID across databases](https://martin.kleppmann.com/2014/11/25/hermitage-testing-the-i-in-acid.html)
9. [GitLab's real production Query Performance Guidelines](https://docs.gitlab.com/development/database/query_performance/)
10. [Haki Benita: Be Careful With CTE in PostgreSQL (materialization/optimization-fence behavior)](https://hakibenita.com/be-careful-with-cte-in-postgre-sql)
11. [jOOQ: Probably the Coolest SQL Feature -- Window Functions](https://blog.jooq.org/probably-the-coolest-sql-feature-window-functions/)
12. [jOOQ Manual: Window frame clause (ROWS/RANGE/GROUPS) with a cross-database support matrix](https://www.jooq.org/doc/latest/manual/sql-building/column-expressions/window-functions/window-frame/)
