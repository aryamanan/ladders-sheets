# SQL Mastery

This is the SQL counterpart to the DSA sheets: real, verified, free practice problems organized by concept into Foundation/Reinforcement/Boss ladders. Sources: LeetCode's Database problem set, HackerRank's SQL domain, StrataScratch's free problem set, and DataLemur's free problem set -- every problem link was checked to make sure it's real, free, and not premium-locked.

Neither StrataScratch nor DataLemur tags problems by SQL technique the way this sheet does -- every problem from those two sources was categorized by hand based on what it actually tests, not by a site-provided tag. The goal is full-platform coverage: working through this sheet should leave nothing on either platform's free tier looking unfamiliar.

Pure practice ladders only for now -- the theory side (indexing, normalization, transactions, query optimization, and reading references) will come back as its own separate sheet once there's real source material to build it from properly.

## SQL Basics

### Your First Queries

#### Plain SELECT & WHERE, No Joins

- Invariant: before touching a single join, aggregate, or subquery, you need SELECT/WHERE/ORDER BY to be pure muscle memory on one table -- everything else in this sheet is built on top of this.

Foundation:

1. [SELECT All (HackerRank)](https://www.hackerrank.com/challenges/select-all-sql/problem)
2. [SELECT By ID (HackerRank)](https://www.hackerrank.com/challenges/select-by-id/problem)
3. [Japanese Cities' Attributes (HackerRank)](https://www.hackerrank.com/challenges/japanese-cities-attributes/problem)
4. [Japanese Cities' Names (HackerRank)](https://www.hackerrank.com/challenges/japanese-cities-name/problem)

Reinforcement:

1. [Weather Observation Station 1 (HackerRank)](https://www.hackerrank.com/challenges/weather-observation-station-1/problem)
2. [Weather Observation Station 3 (HackerRank -- WHERE with a modulo condition)](https://www.hackerrank.com/challenges/weather-observation-station-3/problem)
3. [Revising the Select Query I (HackerRank)](https://www.hackerrank.com/challenges/revising-the-select-query/problem)
4. [Revising the Select Query II (HackerRank)](https://www.hackerrank.com/challenges/revising-the-select-query-2/problem)
5. [Salary of Employees (HackerRank)](https://www.hackerrank.com/challenges/salary-of-employees/problem)

Boss:

1. [Higher Than 75 Marks (HackerRank -- WHERE + ORDER BY combined)](https://www.hackerrank.com/challenges/more-than-75-marks/problem)
2. [Name of Employees (HackerRank -- string + ORDER BY)](https://www.hackerrank.com/challenges/name-of-employees/problem)

## Core Query Fundamentals

### Basic Filtering & Sorting

#### Multi-condition WHERE Filtering

- Invariant: AND/OR predicates in WHERE are evaluated row-by-row before any grouping or sorting happens, so getting the right rows back is a matter of correct boolean composition, not which columns you SELECT.

Foundation:

1. [Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products/)
2. [Find Customer Referee](https://leetcode.com/problems/find-customer-referee/)
3. [Big Countries](https://leetcode.com/problems/big-countries/)
4. [Finding Updated Records (StrataScratch)](https://platform.stratascratch.com/coding/10299-finding-updated-records)

Reinforcement:

1. [Invalid Tweets](https://leetcode.com/problems/invalid-tweets/)
2. [Find all athletes who were older than 40 years when they won either Bronze or Silver medals (StrataScratch)](https://platform.stratascratch.com/coding/9937-find-all-athletes-who-were-older-than-40-years-when-they-won-either-bronze-or-silver-medals)
3. [April Admin Employees (StrataScratch)](https://platform.stratascratch.com/coding/9845-find-the-number-of-employees-working-in-the-admin-department)

Boss:

1. [Not Boring Movies](https://leetcode.com/problems/not-boring-movies/)
2. [Risky Projects (StrataScratch)](https://platform.stratascratch.com/coding/10304-risky-projects)

#### ORDER BY, LIMIT & Top-N / Pagination

- Invariant: LIMIT/OFFSET simply chop the already-sorted result set, so safely returning "the Nth highest value" requires collapsing duplicates (DISTINCT) or ranking with a window/subquery -- a naive `LIMIT N-1,1` silently gives the wrong row whenever ties exist.

Foundation:

1. [Second Highest Salary](https://leetcode.com/problems/second-highest-salary/)
2. [Workers With The Highest Salaries (StrataScratch)](https://platform.stratascratch.com/coding/10353-workers-with-the-highest-salaries)
3. [Top Cool Votes (StrataScratch)](https://platform.stratascratch.com/coding/10060-top-cool-votes)
4. [Customer Placing the Largest Number of Orders](https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/)
5. [Top Travellers](https://leetcode.com/problems/top-travellers/)

Reinforcement:

1. [Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/)
2. [Department Highest Salary](https://leetcode.com/problems/department-highest-salary/)
3. [Best Selling Item (StrataScratch)](https://platform.stratascratch.com/coding/10172-best-selling-item)
4. [Top Businesses With Most Reviews (StrataScratch)](https://platform.stratascratch.com/coding/10048-top-businesses-with-most-reviews)

Boss:

1. [Rank Scores](https://leetcode.com/problems/rank-scores/)
2. [Hour Of Highest Gas Expense (StrataScratch)](https://platform.stratascratch.com/coding/10005-hour-of-highest-gas-expense)

#### DISTINCT & Duplicate Detection

- Invariant: DISTINCT and COUNT(DISTINCT ...) collapse rows down to unique values before you count or list them, so "find the duplicates" or "find the unmatched items" problems hinge on precisely what set membership means for the data, not on filtering individual rows.

Foundation:

1. [Duplicate Emails](https://leetcode.com/problems/duplicate-emails/)
2. [Unique Users Per Client Per Month (StrataScratch)](https://platform.stratascratch.com/coding/2024-unique-users-per-client-per-month)

Reinforcement:

1. [Customers Who Never Order](https://leetcode.com/problems/customers-who-never-order/)
2. [Article Views I](https://leetcode.com/problems/article-views-i/)
3. [Number of Unique Subjects Taught by Each Teacher](https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/)
4. [Duplicate Job Listings (DataLemur)](https://datalemur.com/questions/duplicate-job-listings)

Boss:

1. [Consecutive Numbers](https://leetcode.com/problems/consecutive-numbers/)
2. [Employees With the Same Salary (StrataScratch)](https://platform.stratascratch.com/coding/9856-find-employees-with-the-same-salary)

### String & Date Functions

#### String Manipulation & Pattern Matching

- Invariant: String functions like SUBSTR/CONCAT/LIKE/REGEXP operate on the literal contents of a column, so a pattern that "looks right" (e.g. `'DIAB1%'`) can silently miss valid matches unless you account for every position the target substring is allowed to appear in.

Foundation:

1. [Fix Names in a Table](https://leetcode.com/problems/fix-names-in-a-table/)
2. [Patients With a Condition](https://leetcode.com/problems/patients-with-a-condition/)
3. [First Names With Six Letters Ending in 'h' (StrataScratch)](https://platform.stratascratch.com/coding/9842-find-all-workers-whose-first-name-contains-6-letters-and-also-ends-with-the-letter-h)
4. [Find drafts which contains the word 'optimism' (StrataScratch)](https://platform.stratascratch.com/coding/9805-find-drafts-which-contains-the-word-optimism)

Reinforcement:

1. [Find Users With Valid E-Mails](https://leetcode.com/problems/find-users-with-valid-e-mails/)
2. [What Type of Triangle (HackerRank -- string classification via CASE)](https://www.hackerrank.com/challenges/what-type-of-triangle/problem)
3. [Find Valid Emails](https://leetcode.com/problems/find-valid-emails/)
4. [Find Products with Valid Serial Numbers](https://leetcode.com/problems/find-products-with-valid-serial-numbers/)
3. [Count Occurrences Of Words In Drafts (StrataScratch)](https://platform.stratascratch.com/coding/9817-find-the-number-of-times-each-word-appears-in-drafts)

Boss:

1. [Calculate Special Bonus](https://leetcode.com/problems/calculate-special-bonus/)
2. [Counting Instances in Text (StrataScratch -- text/word frequency, hard)](https://platform.stratascratch.com/coding/9814-counting-instances-in-text)

#### Date Arithmetic (Differences, Equality, Elapsed Time)

- Invariant: Date/time arithmetic (DATEDIFF, timestamp subtraction) only compares two values you've already lined up in the same row, so "yesterday vs. today" or "time to complete a process" problems usually need a self-join or window function before any subtraction can happen.

Foundation:

1. [Immediate Food Delivery I](https://leetcode.com/problems/immediate-food-delivery-i/)
2. [Churro Activity Date (StrataScratch)](https://platform.stratascratch.com/coding/9688-churro-activity-date)

Reinforcement:

1. [User Activity for the Past 30 Days I](https://leetcode.com/problems/user-activity-for-the-past-30-days-i/)
2. [Average Time of Process per Machine](https://leetcode.com/problems/average-time-of-process-per-machine/)
3. [Average Post Hiatus Part 1 (DataLemur -- LAG for gap between a user's posts)](https://datalemur.com/questions/sql-average-post-hiatus-1)

Boss:

1. [Rising Temperature](https://leetcode.com/problems/rising-temperature/)

#### Date Truncation, Formatting & Extraction

- Invariant: Truncating a date to a coarser grain (DATE_FORMAT to year-month, pulling out the month) is what lets you GROUP BY or pivot on a period instead of an exact timestamp -- get the truncation expression wrong and every row ends up in its own bucket.

Foundation:

1. [Sales Analysis III](https://leetcode.com/problems/sales-analysis-iii/)
2. [Number of Shipments Per Month (StrataScratch)](https://platform.stratascratch.com/coding/2056-number-of-shipments-per-month)

Reinforcement:

1. [Monthly Transactions I](https://leetcode.com/problems/monthly-transactions-i/)
2. [Immediate Food Delivery II](https://leetcode.com/problems/immediate-food-delivery-ii/)
3. [Average Review Ratings (DataLemur -- monthly bucketing + AVG)](https://datalemur.com/questions/sql-avg-review-ratings)

Boss:

1. [Reformat Department Table](https://leetcode.com/problems/reformat-department-table/)

### NULL Handling & Conditional Logic

#### COALESCE/IFNULL for Missing Values & Safe Division

- Invariant: A LEFT JOIN manufactures NULLs for every unmatched row, so any arithmetic, ratio, or display built on the joined column must explicitly convert NULL with COALESCE/IFNULL or the NULL silently propagates and poisons the result.

Foundation:

1. [Combine Two Tables](https://leetcode.com/problems/combine-two-tables/)
2. [Contact Information Completeness (StrataScratch)](https://platform.stratascratch.com/coding/2169-contact-information-completeness)

Reinforcement:

1. [Replace Employee ID With The Unique Identifier](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/)
2. [Confirmation Rate](https://leetcode.com/problems/confirmation-rate/)
3. [Users Missing Phone Numbers (StrataScratch)](https://platform.stratascratch.com/coding/2168-users-missing-phone-numbers)

Boss:

1. [Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/)

#### CASE WHEN Bucketing & Derived Categories

- Invariant: CASE WHEN evaluates its branches in order and returns NULL for any row that matches no WHEN and has no ELSE, so a bucketing/categorization query has to be checked for exhaustiveness, not just the correctness of each individual branch.

Foundation:

1. [Triangle Judgement](https://leetcode.com/problems/triangle-judgement/)
2. [Calculate Samantha's and Lisa's total sales revenue (StrataScratch)](https://platform.stratascratch.com/coding/10127-calculate-samanthas-and-lisas-total-sales-revenue)
3. [Laptop vs. Mobile Viewership (DataLemur)](https://datalemur.com/questions/laptop-mobile-viewership)
4. [Swap Sex of Employees](https://leetcode.com/problems/swap-sex-of-employees/)

Reinforcement:

1. [Count Salary Categories](https://leetcode.com/problems/count-salary-categories/)
2. [Create a Session Bar Chart](https://leetcode.com/problems/create-a-session-bar-chart/)
3. [Maximum of Two Numbers (StrataScratch)](https://platform.stratascratch.com/coding/2101-maximum-of-two-numbers)
4. [Swapped Food Delivery (DataLemur -- CASE-driven swap logic)](https://datalemur.com/questions/sql-swapped-food-delivery)

Boss:

1. [Exchange Seats](https://leetcode.com/problems/exchange-seats/)
2. [Titanic Survivors and Non-Survivors (StrataScratch -- CASE WHEN pivot into columns)](https://platform.stratascratch.com/coding/9881-make-a-report-showing-the-number-of-survivors-and-non-survivors-by-passenger-class)
3. [Advertiser Status (DataLemur -- multi-condition CASE-derived status)](https://datalemur.com/questions/updated-status)
4. [Capital Gain/Loss](https://leetcode.com/problems/capital-gainloss/)

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
2. [Revising Aggregations - The Count Function (HackerRank)](https://www.hackerrank.com/challenges/revising-aggregations-the-count-function/problem)
3. [Revising Aggregations - Sum (HackerRank)](https://www.hackerrank.com/challenges/revising-aggregations-sum/problem)
4. [Total Cost Of Orders (StrataScratch)](https://platform.stratascratch.com/coding/10183-total-cost-of-orders)
5. [The Latest Login in 2020](https://leetcode.com/problems/the-latest-login-in-2020/)

Reinforcement:

1. [Percentage of Users Attended a Contest](https://leetcode.com/problems/percentage-of-users-attended-a-contest/)
2. [Queries Quality and Percentage](https://leetcode.com/problems/queries-quality-and-percentage/)
3. [Revising Aggregations - The Average Function (HackerRank)](https://www.hackerrank.com/challenges/revising-aggregations-the-average-function/problem)
4. [Average Salaries (StrataScratch)](https://platform.stratascratch.com/coding/9917-average-salaries)
5. [IBM db2 Product Analytics (DataLemur)](https://datalemur.com/questions/sql-ibm-db2-product-analytics)

Boss:

1. [Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/)
2. [The Blunder (HackerRank -- aggregate comparison against a formula-corrupted column)](https://www.hackerrank.com/challenges/the-blunder/problem)
3. [Biggest Single Number](https://leetcode.com/problems/biggest-single-number/)
4. [Investments in 2016](https://leetcode.com/problems/investments-in-2016/)

#### GROUP BY Multiple Columns

- Invariant: Grouping by a combination of columns treats each unique tuple as its own bucket, so a `HAVING COUNT(*) >= k` threshold is really asking "how many rows share this whole combination of values," not just one column in isolation.

Foundation:

1. [Actors and Directors Who Cooperated At Least Three Times](https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/)
2. [Number Of Units Per Nationality (StrataScratch)](https://platform.stratascratch.com/coding/10156-number-of-units-per-nationality)
3. [Daily Leads and Partners](https://leetcode.com/problems/daily-leads-and-partners/)

Reinforcement:

1. [Market Analysis I](https://leetcode.com/problems/market-analysis-i/)
2. [Group Sold Products By The Date](https://leetcode.com/problems/group-sold-products-by-the-date/)
3. [Income By Title and Gender (StrataScratch)](https://platform.stratascratch.com/coding/10077-income-by-title-and-gender)
4. [Find the number of inspections for each risk category by inspection type (StrataScratch)](https://platform.stratascratch.com/coding/10130-find-the-number-of-inspections-for-each-risk-category-by-inspection-type)
5. [Histogram of Users and Purchases (DataLemur)](https://datalemur.com/questions/histogram-users-purchases)

Boss:

1. [Friend Requests II: Who Has the Most Friends](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/)
2. [Department Workforce Analysis (StrataScratch)](https://platform.stratascratch.com/coding/2170-department-workforce-analysis)

#### HAVING vs. WHERE

- Invariant: WHERE filters raw rows before aggregation runs, while HAVING filters the already-aggregated groups afterward, so any condition that references an aggregate (COUNT, SUM) has to live in HAVING -- putting it in WHERE either errors or silently filters on the wrong thing.

Foundation:

1. [Classes More Than 5 Students](https://leetcode.com/problems/classes-more-than-5-students/)
2. [Departments With 5 Employees (StrataScratch)](https://platform.stratascratch.com/coding/9911-departments-with-5-employees)

Reinforcement:

1. [Managers with at Least 5 Direct Reports](https://leetcode.com/problems/managers-with-at-least-5-direct-reports/)
2. [List the Products Ordered in a Period](https://leetcode.com/problems/list-the-products-ordered-in-a-period/)
3. [Bank Account Summary II](https://leetcode.com/problems/bank-account-summary-ii/)
4. [Customers with Large Orders (StrataScratch)](https://platform.stratascratch.com/coding/2172-customers-with-large-orders)
5. [Teams Power Users (DataLemur)](https://datalemur.com/questions/teams-power-users)

Boss:

1. [Primary Department for Each Employee](https://leetcode.com/problems/primary-department-for-each-employee/)

## Joins & Relational Composition

### Inner & Outer Joins

#### INNER JOIN -- Combining Matched Rows

- Invariant: INNER JOIN keeps only rows with a matching key on both sides, so any row whose foreign key doesn't exist in the other table silently disappears from the result -- exactly what you want for "complete records only," and exactly the bug when you don't notice the drop.

Foundation:

1. [Product Sales Analysis I](https://leetcode.com/problems/product-sales-analysis-i/)
2. [Order Details (StrataScratch)](https://platform.stratascratch.com/coding/9913-order-details)
3. [Project Employees I](https://leetcode.com/problems/project-employees-i/)

Reinforcement:

1. [Average Selling Price](https://leetcode.com/problems/average-selling-price/)
2. [The Number of Employees Which Report to Each Employee](https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/)
3. [Cities With Completed Trades (DataLemur)](https://datalemur.com/questions/completed-trades)
4. [Find all Lyft rides which happened on rainy days before noon (StrataScratch)](https://platform.stratascratch.com/coding/10004-find-all-lyft-rides-which-happened-on-rainy-days-before-noon)

Boss:

1. [Tree Node](https://leetcode.com/problems/tree-node/)
2. [High Earners in Support Departments (StrataScratch)](https://platform.stratascratch.com/coding/2167-high-earners-in-support-departments)

#### LEFT/RIGHT/FULL OUTER JOIN & Finding Unmatched Rows

- Invariant: A LEFT/RIGHT/FULL OUTER JOIN preserves the non-matching side's rows and fills the other side with NULL, so "find rows with no match" and "count including zeros" both reduce to filtering or aggregating over those NULL-filled rows instead of trying to enumerate absence directly.

Foundation:

1. [Sellers With No Sales](https://leetcode.com/problems/sellers-with-no-sales/)
2. [Page With No Likes (DataLemur)](https://datalemur.com/questions/sql-page-with-no-likes)

Reinforcement:

1. [Customer Who Visited but Did Not Make Any Transactions](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/)
2. [Employees With Missing Information](https://leetcode.com/problems/employees-with-missing-information/)
3. [Unfinished Parts (DataLemur)](https://datalemur.com/questions/tesla-unfinished-parts)

Boss:

1. [Students and Examinations](https://leetcode.com/problems/students-and-examinations/)

### Self Joins & Multi-Table Joins

#### Same-Table Row Comparison

- Invariant: joining a table to itself under two different aliases lets you compare each row against a related row in the same table (a manager, the previous day, a duplicate email) as if they were separate tables.

Foundation:

1. [Delete Duplicate Emails](https://leetcode.com/problems/delete-duplicate-emails/)
2. [Symmetric Pairs (HackerRank)](https://www.hackerrank.com/challenges/symmetric-pairs/problem)
3. [Well Paid Employees (DataLemur -- self-join to a manager's salary)](https://datalemur.com/questions/sql-well-paid-employees)
4. [Employee and Manager Salaries (StrataScratch)](https://platform.stratascratch.com/coding/9894-employee-and-manager-salaries)

Reinforcement:

1. [Human Traffic of Stadium](https://leetcode.com/problems/human-traffic-of-stadium/)
2. [Matching Similar Hosts and Guests (StrataScratch)](https://platform.stratascratch.com/coding/10078-find-matching-hosts-and-guests-in-a-way-that-they-are-both-of-the-same-gender-and-nationality)
3. [Highest Target Under Manager (StrataScratch)](https://platform.stratascratch.com/coding/9905-highest-target-under-manager)
4. [Cards Issued Difference (DataLemur -- self-join comparing two card versions)](https://datalemur.com/questions/cards-issued-difference)

Boss:

1. [Binary Tree Nodes (HackerRank -- self-referencing parent/child table)](https://www.hackerrank.com/challenges/binary-search-tree-1/problem)
2. [The Company (HackerRank -- 3-level self-referencing hierarchy)](https://www.hackerrank.com/challenges/the-company/problem)
3. [3-Topping Pizzas (DataLemur -- 3-way self-join for combinations)](https://datalemur.com/questions/pizzas-topping-cost)
4. [Repeated Payments (DataLemur -- self-join within a date window)](https://datalemur.com/questions/repeated-payments)

#### Multi-Table Joins (3+ Tables)

- Invariant: chaining several JOINs pulls related facts scattered across normalized tables back into one row, but each additional join can silently multiply row counts if the join keys aren't as unique as assumed.

Foundation:

1. [Rearrange Products Table](https://leetcode.com/problems/rearrange-products-table/)
2. [African Cities (HackerRank)](https://www.hackerrank.com/challenges/african-cities/problem)
3. [Asian Population (HackerRank)](https://www.hackerrank.com/challenges/asian-population/problem)

Reinforcement:

1. [Interviews (HackerRank -- 4-table join)](https://www.hackerrank.com/challenges/interviews/problem)
2. [Average Population of Each Continent (HackerRank)](https://www.hackerrank.com/challenges/average-population-of-each-continent/problem)
3. [Meta/Facebook Matching Users Pairs (StrataScratch)](https://platform.stratascratch.com/coding/10085-facebook-matching-users-pairs)

Boss:

1. [Restaurant Growth](https://leetcode.com/problems/restaurant-growth/)
2. [The Report (HackerRank -- multi-table join with grade-based CASE bucketing)](https://www.hackerrank.com/challenges/the-report/problem)

### Subqueries (Nested & Correlated)

#### Scalar and Nested Subqueries

- Invariant: a subquery in SELECT or WHERE runs first and collapses to a single value (or a set IN can test against), so the outer query never needs to know how that value was computed.

Foundation:

1. [Article Views II](https://leetcode.com/problems/article-views-ii/)
2. [Weather Observation Station 13 (HackerRank -- scalar subquery inside a range check)](https://www.hackerrank.com/challenges/weather-observation-station-13/problem)
3. [Most Profitable Financial Company (StrataScratch)](https://platform.stratascratch.com/coding/9663-find-the-most-profitable-company-in-the-financial-sector-of-the-entire-world-along-with-its-continent)

Reinforcement:

1. [The PADS (HackerRank -- subquery-built label per row)](https://www.hackerrank.com/challenges/the-pads/problem)
2. [Salary Less Than Twice The Average (StrataScratch -- WHERE against an aggregate subquery)](https://platform.stratascratch.com/coding/2110-salary-less-than-twice-the-average)
3. [Finding Purchases (StrataScratch)](https://platform.stratascratch.com/coding/10553-finding-purchases)

Boss:

1. [Find the Team Size](https://leetcode.com/problems/find-the-team-size/)
2. [Harry Potter and Wands (HackerRank -- subquery + multi-condition filtering)](https://www.hackerrank.com/challenges/harry-potter-and-wands/problem)

#### Correlated Subqueries

- Invariant: a correlated subquery re-runs once per outer row because it references a column from the outer query, so it's really a per-row lookup in disguise -- correct but potentially slow if the inner query itself isn't cheap.

Foundation:

1. [Top Competitors (HackerRank -- correlated count per contestant)](https://www.hackerrank.com/challenges/full-score/problem)
2. [Finding User Purchases (StrataScratch)](https://platform.stratascratch.com/coding/10322-finding-user-purchases)

Reinforcement:

1. [Contest Leaderboard (HackerRank)](https://www.hackerrank.com/challenges/contest-leaderboard/problem)
2. [Product Price at a Given Date](https://leetcode.com/problems/product-price-at-a-given-date/)

Boss:

1. [Challenges (HackerRank -- correlated subquery with a tie-breaking rule)](https://www.hackerrank.com/challenges/challenges/problem)

### EXISTS / NOT EXISTS / IN / ANY / ALL

#### Relational Division ("Has ALL Of X")

- Invariant: "find entities that have every item in a set" (all skills, all products) can't be done with a single equality check -- it's a `HAVING COUNT(DISTINCT matched_item) = (total items required)` pattern, or an aggregate-comparison subquery, not a simple WHERE filter.

Foundation:

1. [Data Science Skills (DataLemur -- candidates who have every required skill)](https://datalemur.com/questions/matching-skills)
2. [Customers Who Bought All Products](https://leetcode.com/problems/customers-who-bought-all-products/)

Boss:

1. [Supercloud Customer (DataLemur -- customer who purchased every product)](https://datalemur.com/questions/supercloud-customer)

#### EXISTS vs IN for NULL-Safety

- Invariant: `NOT IN` against a subquery that can produce even one NULL silently returns an empty result for the whole query (three-valued logic strikes again), while `NOT EXISTS` is immune because it only ever tests row existence, never compares against the NULL value itself.

Foundation:

1. [Find all posts which were reacted to with a heart (StrataScratch)](https://platform.stratascratch.com/coding/10087-find-all-posts-which-were-reacted-to-with-a-heart)

Boss:

1. [Find Customers With Positive Revenue this Year](https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/)

#### Anti-Join Patterns (Finding Rows With No Match)

- Invariant: "find rows in A with no match in B" is the same shape whether you write it as `NOT EXISTS`, `LEFT JOIN ... WHERE B.key IS NULL`, or `NOT IN` -- pick based on NULL-safety and the query planner, not because one is "more correct."

Foundation:

1. [Number of violations (StrataScratch)](https://platform.stratascratch.com/coding/9728-inspections-that-resulted-in-violations)
2. [Find Books with No Available Copies](https://leetcode.com/problems/find-books-with-no-available-copies/)

Boss:

1. [Placements (HackerRank -- anti-join style filtering across 3 joined tables)](https://www.hackerrank.com/challenges/placements/problem)

## Window Functions & Advanced Patterns

### Window Functions: Ranking

#### ROW_NUMBER, RANK, DENSE_RANK

- Invariant: ROW_NUMBER always breaks ties arbitrarily into distinct integers, RANK leaves gaps after a tie (1,1,3), and DENSE_RANK doesn't (1,1,2) -- picking the wrong one silently changes which row "wins" a tie or how many distinct tiers exist.

Foundation:

1. [Second Highest Salary (StrataScratch -- solve with DENSE_RANK instead of LIMIT/OFFSET)](https://platform.stratascratch.com/coding/9892-second-highest-salary)
2. [Second Highest Salary (DataLemur)](https://datalemur.com/questions/sql-second-highest-salary)

Reinforcement:

1. [Rank Teams by Votes](https://leetcode.com/problems/rank-teams-by-votes/)
2. [Rank Variance Per Country (StrataScratch)](https://platform.stratascratch.com/coding/2007-rank-variance-per-country)
3. [Top Ranked Songs (StrataScratch)](https://platform.stratascratch.com/coding/9991-top-ranked-songs)
4. [User's Third Transaction (DataLemur -- ROW_NUMBER = 3 per user)](https://datalemur.com/questions/sql-third-transaction)

Boss:

1. [The Most Recent Orders for Each Product](https://leetcode.com/problems/the-most-recent-orders-for-each-product/)
2. [Highest Salary In Department (StrataScratch -- top-N per group via window ranking)](https://platform.stratascratch.com/coding/9897-highest-salary-in-department)
3. [Top Three Salaries (DataLemur)](https://datalemur.com/questions/sql-top-three-salaries)
4. [Highest-Grossing Items (DataLemur -- rank <= 2 per category)](https://datalemur.com/questions/sql-highest-grossing)

### Window Functions: Running Aggregates & Offsets

#### Running Totals and Moving Aggregates

- Invariant: a window frame like `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` re-aggregates over a growing slice of already-ordered rows per output row -- it's a SUM/AVG that remembers where it's been, without a self-join or subquery per row.

Foundation:

1. [Last Person to Fit in the Bus](https://leetcode.com/problems/last-person-to-fit-in-the-bus/)

Reinforcement:

1. [Weather Observation Station 20 (HackerRank -- ordered aggregate over a full column)](https://www.hackerrank.com/challenges/weather-observation-station-20/problem)
2. [Tweets' Rolling Averages (DataLemur -- moving average over a date-ordered window)](https://datalemur.com/questions/rolling-average-tweets)

Boss:

1. [Product Sales Analysis III](https://leetcode.com/problems/product-sales-analysis-iii/)
2. [FAANG Stock Min-Max Part 1 (DataLemur)](https://datalemur.com/questions/sql-bloomberg-stock-min-max-1)

#### LAG/LEAD for Row-to-Row Comparison

- Invariant: LAG/LEAD fetch a value from a different row within the same ordered partition without a self-join -- the offset (default 1) is how many rows away, and a missing neighbor (start/end of partition) returns NULL unless a default is given.

Foundation:

1. [Biggest Window Between Visits](https://leetcode.com/problems/biggest-window-between-visits/)
2. [Monthly Percentage Difference (StrataScratch -- LAG for month-over-month change)](https://platform.stratascratch.com/coding/10319-monthly-percentage-difference)

Reinforcement:

1. [Y-on-Y Growth Rate (DataLemur)](https://datalemur.com/questions/yoy-growth-rate)

Boss:

1. [Movie Rating](https://leetcode.com/problems/movie-rating/)

### Deduplication & Gaps-and-Islands

#### Gaps and Islands (Consecutive Groups)

- Invariant: subtracting a row's own rank/row-number from its ordered value collapses every run of consecutive values to the same constant -- that constant becomes a free grouping key for "find each island of consecutive rows."

Foundation:

1. [SQL Project Planning (HackerRank -- the canonical gaps-and-islands problem)](https://www.hackerrank.com/challenges/sql-projects/problem)
2. [Consecutive Days (StrataScratch)](https://platform.stratascratch.com/coding/2054-consecutive-days)

Reinforcement:

1. [Team Scores in Football Tournament](https://leetcode.com/problems/team-scores-in-football-tournament/)
2. [User Shopping Sprees (DataLemur -- consecutive-day purchase streaks)](https://datalemur.com/questions/amazon-shopping-spree)
3. [15 Days of Learning SQL (HackerRank -- consecutive-day submission streak)](https://www.hackerrank.com/challenges/15-days-of-learning-sql/problem)

Boss:

1. [Number of Transactions per Visit](https://leetcode.com/problems/number-of-transactions-per-visit/)
2. [Consecutive Filing Years (DataLemur)](https://datalemur.com/questions/consecutive-filing-years)
3. [Marketing Touch Streak (DataLemur)](https://datalemur.com/questions/marketing-touch-streak)

### Percentiles & Statistical Aggregates

#### Median and Mode Without a Native Function

- Invariant: without a native `MEDIAN()`, the median is "sort the values, then average the one or two values sitting at the middle rank" -- built from ROW_NUMBER/PERCENTILE_CONT plus a COUNT to locate the middle, not a single built-in call in most engines that matter for interviews.

Foundation:

1. [Compressed Mean (DataLemur -- weighted average from a bucketed representation)](https://datalemur.com/questions/alibaba-compressed-mean)

Boss:

1. [Median Google Search Frequency (DataLemur)](https://datalemur.com/questions/median-search-freq)
2. [Compressed Mode (DataLemur -- statistical mode via GROUP BY + ORDER BY + LIMIT)](https://datalemur.com/questions/alibaba-compressed-mode)

## CTEs, Set Operations & Reshaping

### Common Table Expressions (CTEs)

#### CTEs for Readable Multi-Step Queries

- Invariant: a CTE is just a named, reusable subquery scoped to one statement -- it doesn't change what's computable, only how readable the multi-step logic is, and it can be referenced more than once without repeating the subquery text.

Foundation:

1. [Advertiser Analysis](https://leetcode.com/problems/advertiser-analysis/)

Reinforcement:

1. [Find Followers Count](https://leetcode.com/problems/find-followers-count/)
2. [Spotify Streaming History (DataLemur -- multi-step CTE chain)](https://datalemur.com/questions/spotify-streaming-history)

Boss:

1. [Monthly Transactions II](https://leetcode.com/problems/monthly-transactions-ii/)
2. [Senior Managers (DataLemur -- CTE + self-join over a reporting hierarchy)](https://datalemur.com/questions/senior-managers-reportees)

### Set Operations

#### UNION vs UNION ALL & Combining Differently-Shaped Result Sets

- Invariant: UNION implicitly deduplicates its combined result (an expensive sort/hash step) while UNION ALL keeps every row including duplicates; and when the two source tables don't naturally share a shape, you build that shared shape explicitly with literal/placeholder columns before unioning.

Foundation:

1. [User Activity for the Past 30 Days II](https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/)
2. [Duplicate HR Department Employees (StrataScratch -- UNION ALL to intentionally duplicate rows)](https://platform.stratascratch.com/coding/9858-find-employees-in-the-hr-department-and-output-the-result-with-one-duplicate)

Reinforcement:

1. [Make the friends network symmetric (StrataScratch -- UNION to mirror a relationship both directions)](https://platform.stratascratch.com/coding/9813-make-the-friends-network-symmetric)
2. [Find all possible varieties which occur in either of the winemag datasets (StrataScratch)](https://platform.stratascratch.com/coding/10025-find-all-possible-varieties-which-occur-in-either-of-the-winemag-datasets)

### Pivoting & Data Reshaping

#### Conditional Aggregation for Pivot-Style Reports

- Invariant: `SUM(CASE WHEN category = 'x' THEN value ELSE 0 END)` turns one row-per-category table into one column-per-category row without a native PIVOT operator -- each CASE branch is a hand-built column.

Foundation:

1. [Occupations](https://leetcode.com/problems/occupations/)
2. [Occupations (HackerRank -- same pivot concept, different engine/dataset)](https://www.hackerrank.com/challenges/occupations/problem)

Boss:

1. [Odd and Even Measurements (DataLemur -- pivot with a per-day aggregation twist)](https://datalemur.com/questions/odd-even-measurements)

## Cohort, Retention & Growth Analysis

The classic product-analytics question shape: not "what happened" but "who came back," "what fraction converted," and "how did that trend over time." These lean on the self-join, LAG, and conditional-aggregation tools from earlier sections, applied to the specific business questions that come up constantly in data-analyst-flavored SQL interviews.

### Retention, Reactivation & Activation

#### Did the Same User Come Back?

- Invariant: "retention" and "reactivation" questions are a self-join (or LAG) of a user's activity in period N against their activity in period N-1 or their very first period -- there's no single-row answer, the comparison IS the query.

Foundation:

1. [Second Day Confirmation (DataLemur -- did the user act again exactly one day later)](https://datalemur.com/questions/second-day-confirmation)

Reinforcement:

1. [Signup Activation Rate (DataLemur)](https://datalemur.com/questions/signup-confirmation-rate)

Boss:

1. [Active User Retention (DataLemur)](https://datalemur.com/questions/user-retention)
2. [Reactivated Users (DataLemur -- came back after a long gap)](https://datalemur.com/questions/reactivated-users)

### Ratios, Percentages & Rate Calculations

#### Turning Two Counts Into a Rate

- Invariant: every "percentage" or "rate" question is two aggregates (a numerator COUNT/SUM and a denominator COUNT/SUM) divided against each other, almost always with an explicit numeric CAST to avoid integer division silently truncating to 0.

Foundation:

1. [App Click-through Rate (CTR) (DataLemur)](https://datalemur.com/questions/click-through-rate)
2. [Find the percentage of shipable orders (StrataScratch)](https://platform.stratascratch.com/coding/10090-find-the-percentage-of-shipable-orders)

Reinforcement:

1. [International Call Percentage (DataLemur)](https://datalemur.com/questions/international-call-percentage)
2. [Processed Ticket Rate By Type (StrataScratch)](https://platform.stratascratch.com/coding/9781-find-the-rate-of-processed-tickets-for-each-type)
3. [Acceptance Rate By Date (StrataScratch)](https://platform.stratascratch.com/coding/10285-acceptance-rate-by-date)

Boss:

1. [Share of Active Users (StrataScratch)](https://platform.stratascratch.com/coding/2005-share-of-active-users)
2. [Card Launch Success (DataLemur -- rate calculation gated by a time window)](https://datalemur.com/questions/card-launch-success)
3. [Trips and Users (the classic multi-join banned-users ratio problem)](https://leetcode.com/problems/trips-and-users/)
