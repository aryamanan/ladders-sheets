# SQL Mastery

This is the SQL counterpart to the DSA sheets: real, verified, free practice problems organized by concept into Foundation/Reinforcement/Boss ladders. Sources: LeetCode's Database problem set and HackerRank's SQL domain -- every problem link was checked to make sure it's real, free, and not premium-locked.

Pure practice ladders only for now -- the theory side (indexing, normalization, transactions, query optimization, and reading references) will come back as its own separate sheet once there's real source material to build it from properly.

## SQL Basics

### Your First Queries

#### Plain SELECT & WHERE, No Joins

- Invariant: before touching a single join, aggregate, or subquery, you need SELECT/WHERE/ORDER BY to be pure muscle memory on one table -- everything else in this sheet is built on top of this.

Foundation:

1. [SELECT All (HackerRank)](https://www.hackerrank.com/challenges/select-all-sql/problem)
2. [SELECT By ID (HackerRank)](https://www.hackerrank.com/challenges/select-by-id/problem)
3. [Japanese Cities' Attributes (HackerRank)](https://www.hackerrank.com/challenges/japanese-cities-attributes/problem)

Reinforcement:

1. [Weather Observation Station 1 (HackerRank)](https://www.hackerrank.com/challenges/weather-observation-station-1/problem)
2. [Weather Observation Station 3 (HackerRank -- WHERE with a modulo condition)](https://www.hackerrank.com/challenges/weather-observation-station-3/problem)

Boss:

1. [Higher Than 75 Marks (HackerRank -- WHERE + ORDER BY combined)](https://www.hackerrank.com/challenges/more-than-75-marks/problem)

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

### Self Joins & Multi-Table Joins

#### Same-Table Row Comparison

- Invariant: joining a table to itself under two different aliases lets you compare each row against a related row in the same table (a manager, the previous day, a duplicate email) as if they were separate tables.

Foundation:

1. [Delete Duplicate Emails](https://leetcode.com/problems/delete-duplicate-emails/)
2. [Symmetric Pairs (HackerRank)](https://www.hackerrank.com/challenges/symmetric-pairs/problem)

Reinforcement:

1. [Human Traffic of Stadium](https://leetcode.com/problems/human-traffic-of-stadium/)

Boss:

1. [Binary Tree Nodes (HackerRank -- self-referencing parent/child table)](https://www.hackerrank.com/challenges/binary-search-tree-1/problem)

#### Multi-Table Joins (3+ Tables)

- Invariant: chaining several JOINs pulls related facts scattered across normalized tables back into one row, but each additional join can silently multiply row counts if the join keys aren't as unique as assumed.

Foundation:

1. [Rearrange Products Table](https://leetcode.com/problems/rearrange-products-table/)
2. [African Cities (HackerRank)](https://www.hackerrank.com/challenges/african-cities/problem)

Reinforcement:

1. [Interviews (HackerRank -- 4-table join)](https://www.hackerrank.com/challenges/interviews/problem)

Boss:

1. [Restaurant Growth](https://leetcode.com/problems/restaurant-growth/)

### Subqueries (Nested & Correlated)

#### Scalar and Nested Subqueries

- Invariant: a subquery in SELECT or WHERE runs first and collapses to a single value (or a set IN can test against), so the outer query never needs to know how that value was computed.

Foundation:

1. [Article Views II](https://leetcode.com/problems/article-views-ii/)
2. [Weather Observation Station 13 (HackerRank -- scalar subquery inside a range check)](https://www.hackerrank.com/challenges/weather-observation-station-13/problem)

Reinforcement:

1. [The PADS (HackerRank -- subquery-built label per row)](https://www.hackerrank.com/challenges/the-pads/problem)

Boss:

1. [Find the Team Size](https://leetcode.com/problems/find-the-team-size/)

#### Correlated Subqueries

- Invariant: a correlated subquery re-runs once per outer row because it references a column from the outer query, so it's really a per-row lookup in disguise -- correct but potentially slow if the inner query itself isn't cheap.

Foundation:

1. [Top Competitors (HackerRank -- correlated count per contestant)](https://www.hackerrank.com/challenges/full-score/problem)

Reinforcement:

1. [Contest Leaderboard (HackerRank)](https://www.hackerrank.com/challenges/contest-leaderboard/problem)

Boss:

1. [Challenges (HackerRank -- correlated subquery with a tie-breaking rule)](https://www.hackerrank.com/challenges/challenges/problem)

### EXISTS / NOT EXISTS / IN / ANY / ALL

#### EXISTS vs IN for NULL-Safety

- Invariant: `NOT IN` against a subquery that can produce even one NULL silently returns an empty result for the whole query (three-valued logic strikes again), while `NOT EXISTS` is immune because it only ever tests row existence, never compares against the NULL value itself.

Boss:

1. [Find Customers With Positive Revenue this Year](https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/)

#### Anti-Join Patterns (Finding Rows With No Match)

- Invariant: "find rows in A with no match in B" is the same shape whether you write it as `NOT EXISTS`, `LEFT JOIN ... WHERE B.key IS NULL`, or `NOT IN` -- pick based on NULL-safety and the query planner, not because one is "more correct."

Boss:

1. [Placements (HackerRank -- anti-join style filtering across 3 joined tables)](https://www.hackerrank.com/challenges/placements/problem)

## Window Functions & Advanced Patterns

### Window Functions: Ranking

#### ROW_NUMBER, RANK, DENSE_RANK

- Invariant: ROW_NUMBER always breaks ties arbitrarily into distinct integers, RANK leaves gaps after a tie (1,1,3), and DENSE_RANK doesn't (1,1,2) -- picking the wrong one silently changes which row "wins" a tie or how many distinct tiers exist.

Reinforcement:

1. [Rank Teams by Votes](https://leetcode.com/problems/rank-teams-by-votes/)

Boss:

1. [The Most Recent Orders for Each Product](https://leetcode.com/problems/the-most-recent-orders-for-each-product/)

### Window Functions: Running Aggregates & Offsets

#### Running Totals and Moving Aggregates

- Invariant: a window frame like `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` re-aggregates over a growing slice of already-ordered rows per output row -- it's a SUM/AVG that remembers where it's been, without a self-join or subquery per row.

Foundation:

1. [Last Person to Fit in the Bus](https://leetcode.com/problems/last-person-to-fit-in-the-bus/)

Reinforcement:

1. [Weather Observation Station 20 (HackerRank -- ordered aggregate over a full column)](https://www.hackerrank.com/challenges/weather-observation-station-20/problem)

Boss:

1. [Product Sales Analysis III](https://leetcode.com/problems/product-sales-analysis-iii/)

#### LAG/LEAD for Row-to-Row Comparison

- Invariant: LAG/LEAD fetch a value from a different row within the same ordered partition without a self-join -- the offset (default 1) is how many rows away, and a missing neighbor (start/end of partition) returns NULL unless a default is given.

Foundation:

1. [Biggest Window Between Visits](https://leetcode.com/problems/biggest-window-between-visits/)

Boss:

1. [Movie Rating](https://leetcode.com/problems/movie-rating/)

### Deduplication & Gaps-and-Islands

#### Gaps and Islands (Consecutive Groups)

- Invariant: subtracting a row's own rank/row-number from its ordered value collapses every run of consecutive values to the same constant -- that constant becomes a free grouping key for "find each island of consecutive rows."

Foundation:

1. [SQL Project Planning (HackerRank -- the canonical gaps-and-islands problem)](https://www.hackerrank.com/challenges/sql-projects/problem)

Reinforcement:

1. [Team Scores in Football Tournament](https://leetcode.com/problems/team-scores-in-football-tournament/)

Boss:

1. [Number of Transactions per Visit](https://leetcode.com/problems/number-of-transactions-per-visit/)

## CTEs, Set Operations & Reshaping

### Common Table Expressions (CTEs)

#### CTEs for Readable Multi-Step Queries

- Invariant: a CTE is just a named, reusable subquery scoped to one statement -- it doesn't change what's computable, only how readable the multi-step logic is, and it can be referenced more than once without repeating the subquery text.

Foundation:

1. [Advertiser Analysis](https://leetcode.com/problems/advertiser-analysis/)

Reinforcement:

1. [Find Followers Count](https://leetcode.com/problems/find-followers-count/)

Boss:

1. [Monthly Transactions II](https://leetcode.com/problems/monthly-transactions-ii/)

### Set Operations

#### UNION vs UNION ALL & Combining Differently-Shaped Result Sets

- Invariant: UNION implicitly deduplicates its combined result (an expensive sort/hash step) while UNION ALL keeps every row including duplicates; and when the two source tables don't naturally share a shape, you build that shared shape explicitly with literal/placeholder columns before unioning.

Foundation:

1. [User Activity for the Past 30 Days II](https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/)

### Pivoting & Data Reshaping

#### Conditional Aggregation for Pivot-Style Reports

- Invariant: `SUM(CASE WHEN category = 'x' THEN value ELSE 0 END)` turns one row-per-category table into one column-per-category row without a native PIVOT operator -- each CASE branch is a hand-built column.

Foundation:

1. [Occupations](https://leetcode.com/problems/occupations/)
