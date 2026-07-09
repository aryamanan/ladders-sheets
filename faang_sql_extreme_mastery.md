# SQL Extreme Mastery

This is the exhaustive companion to the SQL Gauntlet: every remaining problem across LeetCode's Database category, HackerRank's SQL domain, DataLemur, and StrataScratch's full Analytical question bank -- including premium/locked ones, not just the free tier the Gauntlet sticks to.

On premium content specifically: StrataScratch lets you write and run a query against every problem's real dataset for free, you just don't get its own pass/fail judge without a subscription -- since it still returns real output, you can eyeball it against the problem statement yourself (or paste your query + output into an LLM to sanity-check correctness) instead of skipping the problem entirely. LeetCode Premium problems are included the same way: real problems, worth attempting even without unlocking the official checker.

No Foundation/Reinforcement/Boss ladders here -- this sheet is organized into broad topic buckets by an automated pass over each problem's title (StrataScratch and DataLemur don't expose a technique tag, and most of these titles can't be read in full without paying, so this is best-effort classification, not a hand-verified read-through like the Gauntlet). Difficulty, source platform, and company (where known) are tagged on each item.

## Recursive & Hierarchical Data

- Invariant: Org charts, reporting chains, category trees -- anything where a row's parent is another row in the same table, potentially several levels deep.

1. [All People Report to the Given Manager](https://leetcode.com/problems/all-people-report-to-the-given-manager/) {LeetCode Premium · Med}
2. [CEO Subordinate Hierarchy](https://leetcode.com/problems/ceo-subordinate-hierarchy/) {LeetCode Premium · Hard}
3. [Analyze Organization Hierarchy](https://leetcode.com/problems/analyze-organization-hierarchy/) {LeetCode · Hard}

## Retention, Reactivation & Cohort Analysis

- Invariant: Did the same user/entity come back in a later period -- retention, churn, reactivation, and signup-to-activation questions.

1. [Product Engagement Momentum Shifts](https://platform.stratascratch.com/coding/10564-product-engagement-momentum-shifts) {StrataScratch PRO · Hard · Visa}
2. [Most Active Users On Messenger](https://platform.stratascratch.com/coding/10295-most-active-users-on-messenger) {StrataScratch PRO · Medium · Meta}
3. [Churn Rate Of Lyft Drivers](https://platform.stratascratch.com/coding/10016-churn-rate-of-lyft-drivers) {StrataScratch PRO · Medium · Lyft}
4. [First Day Retention Rate](https://platform.stratascratch.com/coding/2090-first-day-retention-rate) {StrataScratch PRO · Hard · Amazon}
5. [Monthly Churn Rate](https://platform.stratascratch.com/coding/2074-monthly-churn-rate) {StrataScratch PRO · Medium · Natera}
6. [Active Users Per Platform](https://platform.stratascratch.com/coding/2072-active-users-per-platform) {StrataScratch PRO · Easy · Google+1}
7. [Retention Rate](https://platform.stratascratch.com/coding/2053-retention-rate) {StrataScratch PRO · Hard · Meta+1}
8. [Monthly Active Users](https://platform.stratascratch.com/coding/2051-monthly-active-users) {StrataScratch PRO · Easy · Asana+1}
9. [Daily Active Users](https://platform.stratascratch.com/coding/2050-daily-active-users) {StrataScratch PRO · Medium · Workday+1}
10. [Active Users](https://leetcode.com/problems/active-users/) {LeetCode Premium · Med}
11. [Find Active Users](https://leetcode.com/problems/find-active-users/) {LeetCode Premium · Med}
12. [Second Day Verification](https://leetcode.com/problems/second-day-verification/) {LeetCode Premium · Easy}

## Ratios, Percentages & Rate Calculations

- Invariant: Two aggregates divided against each other -- conversion rates, click-through rates, shares, and percentage breakdowns.

1. [Search Click Success Rate by User Segment](https://platform.stratascratch.com/coding/10566-search-click-success-rate-by-user-segment) {StrataScratch PRO · Hard · Microsoft}
2. [Daily Post Removal Ratio](https://platform.stratascratch.com/coding/10562-daily-post-removal-ratio) {StrataScratch PRO · Medium · Meta}
3. [Popularity Percentage](https://platform.stratascratch.com/coding/10284-popularity-percentage) {StrataScratch PRO · Hard · Meta}
4. [Requests Acceptance Rate](https://platform.stratascratch.com/coding/10133-requests-acceptance-rate) {StrataScratch PRO · Medium · Airbnb}
5. [Highest Crime Rate](https://platform.stratascratch.com/coding/10132-highest-crime-rate) {StrataScratch PRO · Easy · City of San Francisco}
6. [Find the fraction of rides for each weather and the hour](https://platform.stratascratch.com/coding/10019-find-the-probability-of-ordering-a-ride-based-on-the-weather-and-the-hour) {StrataScratch PRO · Hard · Lyft}
7. [Find the top 3 jobs with the highest overtime pay rate](https://platform.stratascratch.com/coding/9988-find-the-top-3-jobs-with-the-highest-overtime-pay-rate) {StrataScratch PRO · Easy · City of San Francisco}
8. [Olympics Gender Ratio](https://platform.stratascratch.com/coding/9953-find-the-gender-ratio-between-the-number-of-men-and-women-who-participated-in-each-olympics) {StrataScratch PRO · Hard · ESPN}
9. [Find the profit to sales ratio of Royal Dutch Shell](https://platform.stratascratch.com/coding/9679-find-the-profit-to-sales-ratio-of-royal-dutch-shell) {StrataScratch PRO · Easy · Forbes}
10. [Accommodates-To-Bed Ratio](https://platform.stratascratch.com/coding/9624-accommodates-to-bed-ratio) {StrataScratch PRO · Medium · Airbnb}
11. [Sales Percentage Week's Beginning and End](https://platform.stratascratch.com/coding/2165-sales-percentage-weeks-beginning-and-end) {StrataScratch PRO · Hard · Meta}
12. [User Growth Rate](https://platform.stratascratch.com/coding/2052-user-growth-rate) {StrataScratch PRO · Easy · Asana+1}
13. [Percentage Of Revenue Loss](https://platform.stratascratch.com/coding/2048-percentage-of-revenue-loss) {StrataScratch PRO · Medium · Uber}
14. [Share of Loan Balance](https://platform.stratascratch.com/coding/2001-share-of-loan-balance) {StrataScratch PRO · Medium · Credit Acceptance+1}
15. [Get Highest Answer Rate Question](https://leetcode.com/problems/get-highest-answer-rate-question/) {LeetCode Premium · Med}
16. [Friend Requests I: Overall Acceptance Rate](https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/) {LeetCode Premium · Easy}
17. [Compute the Rank as a Percentage](https://leetcode.com/problems/compute-the-rank-as-a-percentage/) {LeetCode Premium · Med}
18. [Popularity Percentage](https://leetcode.com/problems/popularity-percentage/) {LeetCode Premium · Hard}
19. [Year on Year Growth Rate](https://leetcode.com/problems/year-on-year-growth-rate/) {LeetCode Premium · Hard}
20. [Analyze Subscription Conversion](https://leetcode.com/problems/analyze-subscription-conversion/) {LeetCode · Med}

## Gaps, Islands & Streaks

- Invariant: Consecutive-day/consecutive-value questions -- streaks, runs, and finding where a sequence breaks.

1. [Player with Longest Streak](https://platform.stratascratch.com/coding/2059-player-with-longest-streak) {StrataScratch PRO · Hard · Google+1}
2. [Olympic Team Switchers](https://platform.stratascratch.com/coding/10560-olympic-team-switchers) {StrataScratch PRO · Easy · ESPN}
3. [Trips in Consecutive Months](https://platform.stratascratch.com/coding/2076-trips-in-consecutive-months) {StrataScratch PRO · Hard · Uber}
4. [Consecutive Available Seats](https://leetcode.com/problems/consecutive-available-seats/) {LeetCode Premium · Easy}
5. [Longest Winning Streak](https://leetcode.com/problems/longest-winning-streak/) {LeetCode Premium · Hard}
6. [Products With Three or More Orders in Two Consecutive Years](https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/) {LeetCode Premium · Med}
7. [Consecutive Transactions with Increasing Amounts](https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/) {LeetCode Premium · Hard}
8. [Customers with Maximum Number of Transactions on Consecutive Days](https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/) {LeetCode Premium · Hard}
9. [Consecutive Available Seats II](https://leetcode.com/problems/consecutive-available-seats-ii/) {LeetCode Premium · Med}
10. [Longest Team Pass Streak](https://leetcode.com/problems/longest-team-pass-streak/) {LeetCode Premium · Hard}
11. [Find Products with Three Consecutive Digits](https://leetcode.com/problems/find-products-with-three-consecutive-digits/) {LeetCode Premium · Easy}

## Window Functions: Ranking & Top-N Per Group

- Invariant: Highest/lowest/top-N, with or without a PARTITION BY -- the single most common real-world SQL interview shape.

1. [Highest Cost Orders](https://platform.stratascratch.com/coding/9915-highest-cost-orders) {StrataScratch PRO · Medium · Shopify+1}
2. [Find the genre of the person with the most number of oscar winnings](https://platform.stratascratch.com/coding/10171-find-the-genre-of-the-person-with-the-most-number-of-oscar-winnings) {StrataScratch PRO · Hard · Netflix}
3. [Top Actor Ratings by Genre](https://platform.stratascratch.com/coding/10548-top-actor-ratings-by-genre) {StrataScratch PRO · Hard · Google+1}
4. [Cities With The Most Expensive Homes](https://platform.stratascratch.com/coding/10315-cities-with-the-most-expensive-homes) {StrataScratch PRO · Medium · Zillow}
5. [Reviewed flags of top videos](https://platform.stratascratch.com/coding/2103-reviewed-flags-of-top-videos) {StrataScratch PRO · Hard · Google}
6. [Activity Rank](https://platform.stratascratch.com/coding/10351-activity-rank) {StrataScratch PRO · Medium · Google}
7. [Top Books by Checkout Duration](https://platform.stratascratch.com/coding/10567-top-books-by-checkout-duration) {StrataScratch PRO · Medium · Meta+2}
8. [Minimum CPUs for Task Scheduling](https://platform.stratascratch.com/coding/10557-minimum-cpus-for-task-scheduling) {StrataScratch PRO · Hard · Nvidia}
9. [Top 2 Highest-Selling Items](https://platform.stratascratch.com/coding/10555-top-2-highest-selling-items) {StrataScratch PRO · Medium · Google}
10. [Top-Rated Support Employees](https://platform.stratascratch.com/coding/10554-top-rated-support-employees) {StrataScratch PRO · Medium · Amazon}
11. [Top Sunny Locations By Hours](https://platform.stratascratch.com/coding/10551-top-sunny-locations-by-hours) {StrataScratch PRO · Medium · Capital One}
12. [Top Customers With Dense Ranking](https://platform.stratascratch.com/coding/10549-top-customers-with-dense-ranking) {StrataScratch PRO · Easy · IBM}
13. [Second Highest Salary](https://platform.stratascratch.com/coding/10543-second-highest-salary) {StrataScratch PRO · Medium · KPMG}
14. [Top Posts Per Channel](https://platform.stratascratch.com/coding/10538-top-posts-per-channel) {StrataScratch PRO · Medium · Meta}
15. [Top Monthly Sellers](https://platform.stratascratch.com/coding/10362-top-monthly-sellers) {StrataScratch PRO · Easy · Amazon}
16. [Top Percentile Fraud](https://platform.stratascratch.com/coding/10303-top-percentile-fraud) {StrataScratch PRO · Hard · Google+1}
17. [Find the top-ranked songs for the past 20 years.](https://platform.stratascratch.com/coding/10283-find-the-top-ranked-songs-for-the-past-30-years) {StrataScratch PRO · Easy · Spotify}
18. [Find the lowest score for each facility in Hollywood Boulevard](https://platform.stratascratch.com/coding/10180-find-the-lowest-score-for-each-facility-in-hollywood-boulevard) {StrataScratch PRO · Medium · City of San Francisco+2}
19. [Gender With Most Doctor Appointments](https://platform.stratascratch.com/coding/10170-gender-with-most-doctor-appointments) {StrataScratch PRO · Easy · Natera+1}
20. [Highest Total Miles](https://platform.stratascratch.com/coding/10169-highest-total-miles) {StrataScratch PRO · Medium · Uber}
21. [Ranking Hosts By Beds](https://platform.stratascratch.com/coding/10161-ranking-hosts-by-beds) {StrataScratch PRO · Medium · Airbnb}
22. [Rank guests based on their ages](https://platform.stratascratch.com/coding/10160-rank-guests-based-on-their-ages) {StrataScratch PRO · Easy · Airbnb}
23. [Ranking Most Active Guests](https://platform.stratascratch.com/coding/10159-ranking-most-active-guests) {StrataScratch · Medium · Airbnb}
24. [Workers With The Highest And Lowest Salaries](https://platform.stratascratch.com/coding/10152-workers-with-the-highest-and-lowest-salaries) {StrataScratch PRO · Medium · Siemens+1}
25. [Find the top 5 cities with the most 5 star businesses](https://platform.stratascratch.com/coding/10148-find-the-top-5-cities-with-the-most-5-star-businesses) {StrataScratch PRO · Medium · Yelp}
26. [Highest Payment](https://platform.stratascratch.com/coding/10145-make-a-pivot-table-to-find-the-highest-payment-in-each-year-for-each-employee) {StrataScratch PRO · Hard · City of San Francisco}
27. [Start Dates Of Top Drivers](https://platform.stratascratch.com/coding/10083-start-dates-of-top-drivers) {StrataScratch PRO · Medium · Lyft}
28. [Most Checkins](https://platform.stratascratch.com/coding/10053-most-checkins) {StrataScratch PRO · Medium · Yelp}
29. [Top 5 States With 5 Star Businesses](https://platform.stratascratch.com/coding/10046-top-5-states-with-5-star-businesses) {StrataScratch PRO · Hard · Yelp}
30. [Highest Priced Wine In The US](https://platform.stratascratch.com/coding/10044-highest-priced-wine-in-the-us) {StrataScratch PRO · Medium · Wine Magazine}
31. [Top 3 Wineries In The World](https://platform.stratascratch.com/coding/10042-top-3-wineries-in-the-world) {StrataScratch PRO · Hard · Wine Magazine}
32. [Most Expensive And Cheapest Wine](https://platform.stratascratch.com/coding/10041-most-expensive-and-cheapest-wine) {StrataScratch PRO · Hard · Wine Magazine}
33. [Find all wines from the winemag_p2 dataset which are produced in countries that have the highest sum of points in the winemag_p1 dataset](https://platform.stratascratch.com/coding/10040-find-all-wines-from-the-winemag_p2-dataset-which-are-produced-in-countries-that-have-the-highest-sum-of-points-in-the-winemag_p1-dataset) {StrataScratch PRO · Hard · Wine Magazine}
34. [Best Wines By Points-To-Price](https://platform.stratascratch.com/coding/10032-best-wines-by-points-to-price) {StrataScratch PRO · Medium · Wine Magazine}
35. [Find all top-rated wineries based on points](https://platform.stratascratch.com/coding/10021-find-all-top-rated-wineries-based-on-points) {StrataScratch PRO · Easy · Wine Magazine}
36. [Find songs that are ranked between 8-10](https://platform.stratascratch.com/coding/9999-find-songs-that-are-ranked-between-8-10) {StrataScratch PRO · Easy · Spotify}
37. [Top 100 Ranked Songs](https://platform.stratascratch.com/coding/9997-top-100-ranked-songs) {StrataScratch PRO · Easy · Spotify}
38. [Top 10 Ranked Songs](https://platform.stratascratch.com/coding/9995-top-10-ranked-songs) {StrataScratch PRO · Easy · Spotify}
39. [Find artists with the highest number of top 10 ranked songs over the years](https://platform.stratascratch.com/coding/9993-find-artists-with-the-highest-number-of-top-10-ranked-songs-over-the-years) {StrataScratch PRO · Medium · Spotify}
40. [Highest Paid City Employees](https://platform.stratascratch.com/coding/9989-highest-paid-city-employees) {StrataScratch PRO · Hard · City of San Francisco}
41. [Find the top 5 least paid employees for each job title](https://platform.stratascratch.com/coding/9986-find-the-top-5-least-paid-employees-for-each-job-title) {StrataScratch PRO · Hard · City of San Francisco}
42. [Above Average But Not At The Top](https://platform.stratascratch.com/coding/9985-above-average-but-not-at-the-top) {StrataScratch PRO · Hard · City of San Francisco}
43. [Highest And Lowest Paying Jobs](https://platform.stratascratch.com/coding/9984-highest-and-lowest-paying-jobs) {StrataScratch PRO · Medium · City of San Francisco}
44. [Employee With Lowest Pay](https://platform.stratascratch.com/coding/9980-employee-with-lowest-pay) {StrataScratch PRO · Medium · City of San Francisco}
45. [Find the top 5 highest paid and top 5 least paid employees in 2012](https://platform.stratascratch.com/coding/9979-find-the-top-5-highest-paid-and-top-5-least-paid-employees-in-2012) {StrataScratch PRO · Hard · City of San Francisco}
46. [Find employees who earned the highest and the lowest total pay without any benefits](https://platform.stratascratch.com/coding/9978-find-employees-who-earned-the-highest-and-the-lowest-total-pay-without-any-benefits) {StrataScratch PRO · Medium · City of San Francisco}
47. [QBs With Most Attempts](https://platform.stratascratch.com/coding/9970-qbs-with-most-attempts) {StrataScratch PRO · Medium · ESPN}
48. [QBs With Most Interceptions](https://platform.stratascratch.com/coding/9969-qbs-with-most-interceptions) {StrataScratch PRO · Easy · ESPN}
49. [Find quarterbacks that played the most games in 2016](https://platform.stratascratch.com/coding/9968-find-how-many-games-quarterbacks-played-in-2016) {StrataScratch PRO · Medium · ESPN}
50. [QB With Highest TDs](https://platform.stratascratch.com/coding/9967-qb-with-highest-tds) {StrataScratch PRO · Medium · ESPN}
51. [Top 10 QBs](https://platform.stratascratch.com/coding/9963-top-10-qbs) {StrataScratch PRO · Easy · ESPN+1}
52. [Quarterback Top Ratings](https://platform.stratascratch.com/coding/9962-top-10-qbs) {StrataScratch PRO · Easy · ESPN}
53. [Find the Olympic game which had the highest number of participants that didn't earn a medal](https://platform.stratascratch.com/coding/9948-find-the-olympic-game-which-had-the-highest-number-of-participants-that-didnt-earn-a-medal) {StrataScratch PRO · Easy · ESPN}
54. [Largest Olympics](https://platform.stratascratch.com/coding/9942-largest-olympics) {StrataScratch PRO · Medium · ESPN}
55. [Find libraries with the highest number of total renewals](https://platform.stratascratch.com/coding/9930-find-libraries-with-the-highest-number-of-total-renewals) {StrataScratch PRO · Easy · City of San Francisco}
56. [Find months with the highest number of checkouts for main libraries in 2013](https://platform.stratascratch.com/coding/9928-find-months-with-the-highest-number-of-checkouts-for-main-libraries-in-2013) {StrataScratch PRO · Medium · City of San Francisco}
57. [Libraries With Highest Checkouts](https://platform.stratascratch.com/coding/9927-libraries-with-highest-checkouts) {StrataScratch PRO · Medium · City of San Francisco}
58. [Find library types with the highest total checkouts made by adults registered in 2010](https://platform.stratascratch.com/coding/9926-find-library-types-with-the-highest-total-checkouts-made-by-adults-registered-in-2010) {StrataScratch PRO · Medium · City of San Francisco}
59. [Highest Checkouts](https://platform.stratascratch.com/coding/9922-highest-checkouts) {StrataScratch PRO · Easy · City of San Francisco}
60. [Unique Highest Salary](https://platform.stratascratch.com/coding/9919-unique-highest-salary) {StrataScratch PRO · Hard · LinkedIn+1}
61. [Lowest Priced Orders](https://platform.stratascratch.com/coding/9912-lowest-priced-orders) {StrataScratch PRO · Easy · Shopify+1}
62. [Highest Number Of Orders](https://platform.stratascratch.com/coding/9909-highest-number-of-orders) {StrataScratch PRO · Medium · Walmart+1}
63. [Highest Target](https://platform.stratascratch.com/coding/9904-highest-target) {StrataScratch PRO · Medium · Sears+1}
64. [Find the countries with the most positive reviews](https://platform.stratascratch.com/coding/9879-find-the-countries-with-the-most-positive-reviews) {StrataScratch PRO · Medium · Airbnb}
65. [Countries With Most Negative Reviews](https://platform.stratascratch.com/coding/9878-countries-with-most-negative-reviews) {StrataScratch PRO · Medium · Google+1}
66. [Find the top two hotels with the most negative reviews](https://platform.stratascratch.com/coding/9876-find-the-top-ten-hotels-with-the-most-negative-reviews-in-summer-june-aug) {StrataScratch PRO · Medium · Tripadvisor+2}
67. [Find the 10 lowest rated hotels.](https://platform.stratascratch.com/coding/9875-find-the-ten-hotels-with-the-lowest-ratings) {StrataScratch PRO · Medium · Google+1}
68. [Find the top ten hotels with the highest ratings](https://platform.stratascratch.com/coding/9874-find-the-top-ten-hotels-with-the-highest-ratings) {StrataScratch PRO · Medium · Google+2}
69. [Highest Salary](https://platform.stratascratch.com/coding/9870-highest-salary) {StrataScratch PRO · Medium · Siemens+1}
70. [Five Highest Distinct Salaries](https://platform.stratascratch.com/coding/9868-find-the-five-highest-salaries) {StrataScratch PRO · Easy · Siemens+1}
71. [Three Lowest Distinct Salaries](https://platform.stratascratch.com/coding/9867-find-the-three-lowest-salaries) {StrataScratch PRO · Easy · Revolut+2}
72. [Highest Salary & Full Name](https://platform.stratascratch.com/coding/9866-highest-salary-and-full-name) {StrataScratch PRO · Easy · Visa+1}
73. [Highest Salaried Employees By Department](https://platform.stratascratch.com/coding/9865-highest-salaried-employees) {StrataScratch PRO · Medium · Visa+1}
74. [Second Highest Salary Without ORDER BY](https://platform.stratascratch.com/coding/9857-find-the-second-highest-salary-without-using-order-by) {StrataScratch PRO · Medium · Instacart+1}
75. [Fifth Highest Salary Without TOP or LIMIT](https://platform.stratascratch.com/coding/9855-find-the-5th-highest-salary-without-using-top-or-limit) {StrataScratch PRO · Medium · Asana+1}
76. [Top 10 Salaries](https://platform.stratascratch.com/coding/9853-find-the-top-5-highest-salaries) {StrataScratch PRO · Medium · Asana+1}
77. [Find the continent with the highest number of companies](https://platform.stratascratch.com/coding/9804-find-continents-that-have-the-highest-number-of-companies) {StrataScratch PRO · Medium · Forbes}
78. [Top 3 US Sectors](https://platform.stratascratch.com/coding/9802-top-3-us-sectors) {StrataScratch PRO · Medium · Forbes}
79. [Find industries with the highest market value in Asia](https://platform.stratascratch.com/coding/9799-find-industries-with-the-highest-market-value-in-asia) {StrataScratch PRO · Medium · Forbes}
80. [Find industries with the highest number of companies](https://platform.stratascratch.com/coding/9797-find-industries-with-the-highest-number-of-companies) {StrataScratch PRO · Medium · Forbes}
81. [Find the most popular sector in the Forbes list](https://platform.stratascratch.com/coding/9796-find-the-most-popular-sector-in-the-forbes-list) {StrataScratch PRO · Medium · Forbes}
82. [Find the country that has the most companies listed on Forbes](https://platform.stratascratch.com/coding/9795-find-the-country-that-has-the-most-companies-listed-on-forbes) {StrataScratch PRO · Medium · Forbes}
83. [Find the maximum step reached for every feature](https://platform.stratascratch.com/coding/9774-find-the-maximum-step-reached-for-every-feature) {StrataScratch PRO · Easy · Meta}
84. [Most Popular Room Types](https://platform.stratascratch.com/coding/9763-most-popular-room-types) {StrataScratch PRO · Hard · Airbnb}
85. [Find the day of the week that most people check in](https://platform.stratascratch.com/coding/9762-find-the-day-of-the-week-that-most-people-check-in) {StrataScratch PRO · Medium · Airbnb}
86. [Find the best publishers based on total sales](https://platform.stratascratch.com/coding/9758-find-the-best-publishers-based-on-total-sales) {StrataScratch PRO · Easy · Audible+1}
87. [Find the genres that yielded the highest sales](https://platform.stratascratch.com/coding/9757-find-the-genres-that-yielded-the-highest-sales) {StrataScratch PRO · Easy · Audible+1}
88. [Best Actors/Actresses Of All Time](https://platform.stratascratch.com/coding/9754-best-actorsactresses-of-all-time) {StrataScratch PRO · Medium · Netflix}
89. [Find movies that had the most nominated actors/actresses](https://platform.stratascratch.com/coding/9753-find-movies-that-had-the-most-nominated-actorsactresses) {StrataScratch PRO · Medium · BuzzFeed+1}
90. [Find the nominee who has won the most Oscars](https://platform.stratascratch.com/coding/9750-find-the-nominee-who-has-won-the-most-oscars) {StrataScratch PRO · Medium · Spotify+1}
91. [Find the most dangerous places in SF](https://platform.stratascratch.com/coding/9749-find-the-most-dangerous-place-in-sf) {StrataScratch PRO · Easy · City of San Francisco}
92. [Find districts with the most crime incidents](https://platform.stratascratch.com/coding/9748-find-districts-with-the-most-crime-incidents) {StrataScratch PRO · Medium · City of San Francisco}
93. [Find top crime categories in 2014 based on the number of occurrences](https://platform.stratascratch.com/coding/9746-find-top-crime-categories-in-2014-based-on-the-number-of-occurrences) {StrataScratch PRO · Medium · City of San Francisco}
94. [Find the best artists in the last 20 years](https://platform.stratascratch.com/coding/9745-find-the-best-artists-in-the-last-50-years) {StrataScratch PRO · Medium · Spotify}
95. [The Best Artist](https://platform.stratascratch.com/coding/9744-artist-of-the-decade) {StrataScratch PRO · Medium · Spotify}
96. [Top 10 Songs](https://platform.stratascratch.com/coding/9743-top-10-songs) {StrataScratch PRO · Medium · Spotify}
97. [Worst Businesses](https://platform.stratascratch.com/coding/9739-worst-businesses) {StrataScratch PRO · Hard · City of San Francisco}
98. [Highest Number Of High-risk Violations](https://platform.stratascratch.com/coding/9736-highest-number-of-high-risk-violations) {StrataScratch PRO · Hard · City of San Francisco}
99. [Find all businesses whose lowest and highest inspection scores are different](https://platform.stratascratch.com/coding/9731-find-all-businesses-whose-lowest-and-highest-inspection-scores-are-different) {StrataScratch PRO · Medium · City of San Francisco}
100. [Find the postal code which has the highest average inspection score](https://platform.stratascratch.com/coding/9724-find-the-postal-code-which-has-the-highest-average-inspection-score) {StrataScratch PRO · Medium · City of San Francisco}
101. [Find the first and last times the maximum score was awarded](https://platform.stratascratch.com/coding/9712-find-the-first-and-last-times-the-maximum-score-was-awarded) {StrataScratch PRO · Medium · City of Los Angeles}
102. [Find the month which had the lowest number of inspections across all years](https://platform.stratascratch.com/coding/9706-find-the-month-which-had-the-lowest-number-of-inspections-for-fish-markets-across-all-years) {StrataScratch PRO · Medium · City of Los Angeles}
103. [Find the most common grade earned by bakeries](https://platform.stratascratch.com/coding/9703-find-the-most-common-grade-earned-by-bakeries) {StrataScratch PRO · Easy · City of Los Angeles}
104. [3rd Most Reported Health Issues](https://platform.stratascratch.com/coding/9701-3rd-most-reported-health-issues) {StrataScratch PRO · Hard · City of Los Angeles}
105. [Highest Market Value Per Sector](https://platform.stratascratch.com/coding/9681-highest-market-value-per-sector) {StrataScratch PRO · Easy · Forbes}
106. [Find the top 5 longest US flights by distance](https://platform.stratascratch.com/coding/9674-find-the-top-5-longest-us-flights-by-distance) {StrataScratch PRO · Easy · American Airlines+2}
107. [Find the industry which has the lowest average sales compared to all industries](https://platform.stratascratch.com/coding/9666-find-the-industry-which-has-the-lowest-sales-compared-to-all-industries) {StrataScratch PRO · Easy · Forbes}
108. [Highest Market Value For Each Sector](https://platform.stratascratch.com/coding/9664-highest-market-value-for-each-sector) {StrataScratch PRO · Easy · Forbes}
109. [Find the student with the highest efficiency for mathematics](https://platform.stratascratch.com/coding/9661-find-the-student-with-the-highest-efficiency-for-mathematics) {StrataScratch PRO · Medium · General Assembly+2}
110. [Find the year which had the highest number of players](https://platform.stratascratch.com/coding/9657-find-the-year-which-had-the-highest-number-of-players) {StrataScratch PRO · Medium · ESPN}
111. [Top 10 Songs 2010](https://platform.stratascratch.com/coding/9650-find-the-top-10-ranked-songs-in-2010) {StrataScratch · Medium · Spotify}
112. [3 Bed Minimum](https://platform.stratascratch.com/coding/9627-3-bed-minimum) {StrataScratch PRO · Easy · Airbnb}
113. [Find the date with the highest opening stock price](https://platform.stratascratch.com/coding/9613-find-the-date-with-the-highest-opening-stock-price) {StrataScratch PRO · Easy · Apple+1}
114. [The Most Expensive Products Per Category](https://platform.stratascratch.com/coding/9607-the-most-expensive-products-per-category) {StrataScratch PRO · Medium · Amazon}
115. [Find The Best Day For Trading AAPL Stock](https://platform.stratascratch.com/coding/9601-find-the-best-day-for-trading-aapl-stock) {StrataScratch PRO · Medium · Forbes}
116. [Top 3 Year Month Sales](https://platform.stratascratch.com/coding/2162-top-3-year-month-sales) {StrataScratch PRO · Medium · Deloitte}
117. [Least Popular Video](https://platform.stratascratch.com/coding/2161-least-popular-video) {StrataScratch PRO · Medium · Tiktok}
118. [Top 2 Sales Time Combinations](https://platform.stratascratch.com/coding/2154-top-2-busiest-sales-days) {StrataScratch PRO · Medium · Tesla}
119. [Most Expensive And Cheapest Wine With Ties](https://platform.stratascratch.com/coding/2147-most-expensive-and-cheapest-wine-with-ties) {StrataScratch PRO · Hard · Wine Magazine}
120. [Date of Highest User Activity](https://platform.stratascratch.com/coding/2145-date-of-highest-user-activity) {StrataScratch PRO · Medium · Tiktok}
121. [Most Recent Employee Login Details](https://platform.stratascratch.com/coding/2141-most-recent-employee-login-details) {StrataScratch PRO · Easy · Amazon}
122. [Third Highest Total Transaction](https://platform.stratascratch.com/coding/2140-third-highest-total-transaction) {StrataScratch PRO · Medium · American Express}
123. [Top 2 Restaurants of 2022](https://platform.stratascratch.com/coding/2138-top-3-restaurants-of-2022) {StrataScratch PRO · Medium · DoorDash}
124. [Most Profitable City of 2021](https://platform.stratascratch.com/coding/2137-most-profitable-city-of-2021) {StrataScratch PRO · Medium · Lyft}
125. [First Three Most Watched Videos](https://platform.stratascratch.com/coding/2133-first-three-most-watched-videos) {StrataScratch PRO · Medium · Netflix+1}
126. [Top Two Media Types](https://platform.stratascratch.com/coding/2124-top-two-media-types) {StrataScratch PRO · Medium · Meta}
127. [Highest Sales with Promotions](https://platform.stratascratch.com/coding/2121-highest-sales-with-promotions) {StrataScratch PRO · Medium · Meta}
128. [Most Lucrative Products](https://platform.stratascratch.com/coding/2119-most-lucrative-products) {StrataScratch PRO · Medium · Meta}
129. [Most Sold in Germany](https://platform.stratascratch.com/coding/2118-most-sold-in-germany) {StrataScratch PRO · Medium · Shopify}
130. [Employee with Most Orders](https://platform.stratascratch.com/coding/2117-employee-with-most-orders) {StrataScratch PRO · Medium · Shopify}
131. [Responsible for Most Customers](https://platform.stratascratch.com/coding/2108-responsible-for-most-customers) {StrataScratch PRO · Medium · Asana+2}
132. [User with Most Approved Flags](https://platform.stratascratch.com/coding/2104-user-with-most-approved-flags) {StrataScratch PRO · Medium · Google}
133. [Highest Earning Merchants](https://platform.stratascratch.com/coding/2094-highest-earning-merchants) {StrataScratch PRO · Hard · DoorDash}
134. [Daily Top Merchants](https://platform.stratascratch.com/coding/2092-daily-top-merchants) {StrataScratch PRO · Medium · DoorDash}
135. [Minimum Number of Platforms](https://platform.stratascratch.com/coding/2082-minimum-number-of-platforms) {StrataScratch PRO · Hard · Deloitte+1}
136. [City with Most Customers](https://platform.stratascratch.com/coding/2079-city-with-most-customers) {StrataScratch PRO · Medium · Lyft}
137. [Top Three Classes](https://platform.stratascratch.com/coding/2070-top-three-classes) {StrataScratch PRO · Medium · Meta}
138. [Manager of the Largest Department](https://platform.stratascratch.com/coding/2060-manager-of-the-largest-department) {StrataScratch PRO · Medium · Ebay+2}
139. [Maximum Number of Employees Reached](https://platform.stratascratch.com/coding/2046-maximum-number-of-employees-reached) {StrataScratch PRO · Hard · Uber}
140. [Most Senior & Junior Employee](https://platform.stratascratch.com/coding/2044-most-senior-junior-employee) {StrataScratch PRO · Hard · Uber}
141. [Lowest Revenue Generated Restaurants](https://platform.stratascratch.com/coding/2036-lowest-revenue-generated-restaurants) {StrataScratch PRO · Hard · DoorDash}
142. [Find The Most Profitable Location](https://platform.stratascratch.com/coding/2033-find-the-most-profitable-location) {StrataScratch PRO · Hard · Uber+1}
143. [Most Popular Client For  Calls](https://platform.stratascratch.com/coding/2029-the-most-popular-client_id-among-users-using-video-and-voice-calls) {StrataScratch PRO · Hard · Apple+1}
144. [Company With Most Desktop Users](https://platform.stratascratch.com/coding/2027-top-company-where-users-use-desktop-only) {StrataScratch PRO · Medium · Linux+1}
145. [Top 2 Users With Most Calls](https://platform.stratascratch.com/coding/2019-top-2-users-with-most-calls) {StrataScratch PRO · Medium · Ring Central}
146. [City With The Highest and Lowest Income Variance](https://platform.stratascratch.com/coding/2015-city-with-the-highest-and-lowest-income-variance) {StrataScratch PRO · Medium · Postmates}
147. [Hour With The Highest Order Volume](https://platform.stratascratch.com/coding/2014-hour-with-the-highest-order-volume) {StrataScratch PRO · Medium · Postmates}
148. [Top Streamers](https://platform.stratascratch.com/coding/2010-top-streamers) {StrataScratch PRO · Medium · Twitch}
149. [City With Most Amenities](https://platform.stratascratch.com/coding/10572-city-with-most-amenities) {StrataScratch PRO · Hard}
150. [Best-Selling Product](https://datalemur.com/questions/best-selling-products) {DataLemur · Medium · Amazon}
151. [Classes With at Least 5 Students](https://leetcode.com/problems/classes-with-at-least-5-students/) {LeetCode · Easy}
152. [Highest Grade For Each Student](https://leetcode.com/problems/highest-grade-for-each-student/) {LeetCode Premium · Med}
153. [Get the Second Most Recent Activity](https://leetcode.com/problems/get-the-second-most-recent-activity/) {LeetCode Premium · Hard}
154. [The Most Recent Three Orders](https://leetcode.com/problems/the-most-recent-three-orders/) {LeetCode Premium · Med}
155. [The Most Frequently Ordered Products for Each Customer](https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/) {LeetCode Premium · Med}
156. [Maximum Transaction Each Day](https://leetcode.com/problems/maximum-transaction-each-day/) {LeetCode Premium · Med}
157. [Orders With Maximum Quantity Above Average](https://leetcode.com/problems/orders-with-maximum-quantity-above-average/) {LeetCode Premium · Med}
158. [All the Pairs With the Maximum Number of Common Followers](https://leetcode.com/problems/all-the-pairs-with-the-maximum-number-of-common-followers/) {LeetCode Premium · Med}
159. [The Airport With the Most Traffic](https://leetcode.com/problems/the-airport-with-the-most-traffic/) {LeetCode Premium · Med}
160. [The First Day of the Maximum Recorded Degree in Each City](https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/) {LeetCode Premium · Med}
161. [Count Artist Occurrences On Spotify Ranking List](https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/) {LeetCode Premium · Easy}
162. [Highest Salaries Difference](https://leetcode.com/problems/highest-salaries-difference/) {LeetCode Premium · Easy}
163. [Manager of the Largest Department](https://leetcode.com/problems/manager-of-the-largest-department/) {LeetCode Premium · Med}
164. [Top Three Wineries](https://leetcode.com/problems/top-three-wineries/) {LeetCode Premium · Hard}
165. [Top Percentile Fraud](https://leetcode.com/problems/top-percentile-fraud/) {LeetCode Premium · Med}
166. [Find Top Scoring Students](https://leetcode.com/problems/find-top-scoring-students/) {LeetCode Premium · Med}
167. [Find Top Scoring Students II](https://leetcode.com/problems/find-top-scoring-students-ii/) {LeetCode Premium · Hard}
168. [Premier League Table Ranking](https://leetcode.com/problems/premier-league-table-ranking/) {LeetCode Premium · Easy}
169. [Premier League Table Ranking II](https://leetcode.com/problems/premier-league-table-ranking-ii/) {LeetCode Premium · Med}
170. [Find Top Performing Driver](https://leetcode.com/problems/find-top-performing-driver/) {LeetCode Premium · Med}
171. [Premier League Table Ranking III](https://leetcode.com/problems/premier-league-table-ranking-iii/) {LeetCode Premium · Med}
172. [Second Highest Salary II](https://leetcode.com/problems/second-highest-salary-ii/) {LeetCode Premium · Med}

## Running Totals, Moving Averages & Row Offsets

- Invariant: Cumulative sums, moving averages, period-over-period differences and growth rates -- LAG/LEAD and window-frame territory.

1. [Actor Rating Difference Analysis](https://platform.stratascratch.com/coding/10547-actor-rating-difference-analysis) {StrataScratch PRO · Hard · Google+1}
2. [Five-Year Sales Growth Regions](https://platform.stratascratch.com/coding/10550-five-year-sales-growth-regions) {StrataScratch PRO · Hard · Visa}
3. [Naive Forecasting](https://platform.stratascratch.com/coding/10313-naive-forecasting) {StrataScratch PRO · Hard · Uber}
4. [Growth of Airbnb](https://platform.stratascratch.com/coding/9637-growth-of-airbnb) {StrataScratch PRO · Hard · Airbnb}
5. [Find the average difference between booking and check-in dates](https://platform.stratascratch.com/coding/9614-find-the-average-difference-between-booking-and-check-in-dates) {StrataScratch PRO · Medium · Airbnb}
6. [Monthly Sales Rolling Average](https://platform.stratascratch.com/coding/2148-monthly-sales-rolling-average) {StrataScratch PRO · Medium · Amazon}
7. [Sales Growth per Territory](https://platform.stratascratch.com/coding/2111-sales-growth-per-territory) {StrataScratch PRO · Hard · Shopify+1}
8. [Difference Between Times](https://platform.stratascratch.com/coding/2064-difference-between-times) {StrataScratch PRO · Medium · EY+2}
9. [Change of Currency Exchange Rates](https://platform.stratascratch.com/coding/2063-change-of-currency-exchange-rates) {StrataScratch PRO · Easy · Goldman Sachs+1}
10. [Population Density Difference](https://www.hackerrank.com/challenges/population-density-difference/problem) {HackerRank}
11. [Find Cumulative Salary of an Employee](https://leetcode.com/problems/find-cumulative-salary-of-an-employee/) {LeetCode Premium · Hard}
12. [Running Total for Different Genders](https://leetcode.com/problems/running-total-for-different-genders/) {LeetCode Premium · Med}
13. [The Change in Global Rankings](https://leetcode.com/problems/the-change-in-global-rankings/) {LeetCode Premium · Med}
14. [Change Null Values in a Table to the Previous Value](https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/) {LeetCode Premium · Med}
15. [Rolling Average Steps](https://leetcode.com/problems/rolling-average-steps/) {LeetCode Premium · Med}

## Percentiles, Median & Statistical Aggregates

- Invariant: Median, mode, percentiles, variance, weighted averages, and distribution/histogram-shaped questions.

1. [Comments Distribution](https://platform.stratascratch.com/coding/10297-comments-distribution) {StrataScratch PRO · Hard · Meta}
2. [Median Price Of Wines](https://platform.stratascratch.com/coding/10043-median-price-of-wines) {StrataScratch PRO · Hard · Wine Magazine}
3. [Median Job Salaries](https://platform.stratascratch.com/coding/9983-median-job-salaries) {StrataScratch PRO · Hard · City of San Francisco}
4. [Median Age Of Gold Medal Winners](https://platform.stratascratch.com/coding/9958-median-age-of-gold-medal-winners) {StrataScratch PRO · Medium · ESPN}
5. [Median Salary](https://platform.stratascratch.com/coding/9900-median-salary) {StrataScratch PRO · Hard · Walmart+2}
6. [Find the variance and the standard deviation of scores that have grade A
](https://platform.stratascratch.com/coding/9708-find-the-variance-and-the-standard-deviation-of-scores-that-have-grade-a) {StrataScratch PRO · Hard · City of Los Angeles}
7. [Find the 80th percentile of hours studied](https://platform.stratascratch.com/coding/9611-find-the-80th-percentile-of-hours-studied) {StrataScratch PRO · Medium · General Assembly+2}
8. [Find Students At Median Writing](https://platform.stratascratch.com/coding/9610-find-students-with-a-median-writing-score) {StrataScratch PRO · Medium · General Assembly+2}
9. [Histogram of Tweets](https://datalemur.com/questions/sql-histogram-tweets) {DataLemur · Easy · Twitter}
10. [Median Employee Salary](https://leetcode.com/problems/median-employee-salary/) {LeetCode Premium · Hard}
11. [Find Median Given Frequency of Numbers](https://leetcode.com/problems/find-median-given-frequency-of-numbers/) {LeetCode Premium · Hard}

## Self-Joins & Same-Entity Comparisons

- Invariant: Comparing a row to another row in the same table -- managers, matched pairs, friends-of-friends.

1. [Available Seat Pairs](https://platform.stratascratch.com/coding/10559-available-seat-pairs) {StrataScratch PRO · Easy · Robinhood}
2. [Common Friends Script](https://platform.stratascratch.com/coding/10365-common-friends-script) {StrataScratch PRO · Medium · Google}
3. [Find Pairs with Product Over 11](https://platform.stratascratch.com/coding/10011-find-all-number-pairs-whose-first-number-is-smaller-than-the-second-one-and-the-product-of-two-numbers-is-larger-than-11) {StrataScratch PRO · Medium · Delta Airlines+1}
4. [Find the average number of friends a user has](https://platform.stratascratch.com/coding/9822-find-the-average-number-of-friends-a-user-has) {StrataScratch PRO · Hard · Google}
5. [Common Friends Friend](https://platform.stratascratch.com/coding/9821-common-friends-friend) {StrataScratch PRO · Hard · Google}
6. [Find all users that have more than 3 friends](https://platform.stratascratch.com/coding/9810-find-all-uses-that-have-more-than-3-friends) {StrataScratch PRO · Medium · Google}
7. [Find the overall friend acceptance count for a given date](https://platform.stratascratch.com/coding/9780-find-the-overall-friend-acceptance-count-for-a-given-date) {StrataScratch PRO · Easy · Meta}
8. [Department Manager and Employee Salary Comparison](https://platform.stratascratch.com/coding/2146-department-manager-and-employee-salary-comparison) {StrataScratch PRO · Hard · Oracle}
9. [Warehouse Manager](https://leetcode.com/problems/warehouse-manager/) {LeetCode Premium · Easy}
10. [Group Employees of the Same Salary](https://leetcode.com/problems/group-employees-of-the-same-salary/) {LeetCode Premium · Med}
11. [Leetcodify Friends Recommendations](https://leetcode.com/problems/leetcodify-friends-recommendations/) {LeetCode Premium · Hard}
12. [Leetcodify Similar Friends](https://leetcode.com/problems/leetcodify-similar-friends/) {LeetCode Premium · Hard}
13. [Symmetric Coordinates](https://leetcode.com/problems/symmetric-coordinates/) {LeetCode Premium · Med}
14. [Friends With No Mutual Friends](https://leetcode.com/problems/friends-with-no-mutual-friends/) {LeetCode Premium · Med}
15. [Find Product Recommendation Pairs](https://leetcode.com/problems/find-product-recommendation-pairs/) {LeetCode · Med}
16. [Find Category Recommendation Pairs](https://leetcode.com/problems/find-category-recommendation-pairs/) {LeetCode · Hard}

## Multi-Table Joins & Relational Composition

- Invariant: Pulling facts scattered across 2+ normalized tables back into one row -- geography, org structure, multi-entity reports.

1. [Population Density](https://platform.stratascratch.com/coding/10368-population-density) {StrataScratch PRO · Medium · Deloitte}
2. [Meta/Facebook Accounts](https://platform.stratascratch.com/coding/10296-facebook-accounts) {StrataScratch PRO · Medium · Meta}
3. [Order all countries by the year they first participated in the Olympics](https://platform.stratascratch.com/coding/10184-order-all-countries-by-the-year-they-first-participated-in-the-olympics) {StrataScratch PRO · Easy · ESPN}
4. [Find countries that are in winemag_p1 dataset but not in winemag_p2](https://platform.stratascratch.com/coding/10147-find-countries-that-are-in-winemag_p1-dataset-but-not-in-winemag_p2) {StrataScratch PRO · Medium · Wine Magazine}
5. [Find the number of wines with and without designations per country](https://platform.stratascratch.com/coding/10035-find-the-number-of-wines-with-and-without-designations-per-country) {StrataScratch PRO · Medium · Wine Magazine}
6. [Price Of Wines In Each Country](https://platform.stratascratch.com/coding/10029-price-of-wines-in-each-country) {StrataScratch PRO · Medium · Wine Magazine}
7. [Find the average number of streams across all songs](https://platform.stratascratch.com/coding/9996-find-the-average-number-of-streams-across-all-songs) {StrataScratch PRO · Easy · Spotify}
8. [Find how many logins Spanish speakers made by country](https://platform.stratascratch.com/coding/9889-find-how-many-logins-spanish-speakers-made-by-country) {StrataScratch PRO · Medium · Google}
9. [Count the number of companies in the IT sector in each country](https://platform.stratascratch.com/coding/9665-count-the-number-of-companies-in-the-it-sector-in-each-country) {StrataScratch PRO · Easy · Forbes}
10. [Count the number of accounts used for logins in 2016](https://platform.stratascratch.com/coding/9649-count-the-number-of-accounts-used-for-logins-in-2016) {StrataScratch PRO · Easy · Apple+1}
11. [Account Registrations](https://platform.stratascratch.com/coding/2126-account-registrations) {StrataScratch PRO · Easy · Noom}
12. [Premium Accounts](https://platform.stratascratch.com/coding/2097-premium-acounts) {StrataScratch PRO · Medium · Meta+1}
13. [Average Customers Per City](https://platform.stratascratch.com/coding/2055-average-customers-per-city) {StrataScratch PRO · Medium · LinkedIn}
14. [Final Account Balance](https://datalemur.com/questions/final-account-balance) {DataLemur · Easy · PayPal}
15. [Average Population](https://www.hackerrank.com/challenges/average-population/problem) {HackerRank}
16. [Japan Population](https://www.hackerrank.com/challenges/japan-population/problem) {HackerRank}
17. [Weather Type in Each Country](https://leetcode.com/problems/weather-type-in-each-country/) {LeetCode Premium · Easy}
18. [Countries You Can Safely Invest In](https://leetcode.com/problems/countries-you-can-safely-invest-in/) {LeetCode Premium · Med}
19. [Bank Account Summary](https://leetcode.com/problems/bank-account-summary/) {LeetCode Premium · Med}
20. [All Valid Triplets That Can Represent a Country](https://leetcode.com/problems/all-valid-triplets-that-can-represent-a-country/) {LeetCode Premium · Easy}
21. [Leetflex Banned Accounts](https://leetcode.com/problems/leetflex-banned-accounts/) {LeetCode Premium · Med}
22. [Suspicious Bank Accounts](https://leetcode.com/problems/suspicious-bank-accounts/) {LeetCode Premium · Med}
23. [Number of Accounts That Did Not Stream](https://leetcode.com/problems/number-of-accounts-that-did-not-stream/) {LeetCode Premium · Med}
24. [Account Balance](https://leetcode.com/problems/account-balance/) {LeetCode Premium · Med}
25. [Find Peak Calling Hours for Each City](https://leetcode.com/problems/find-peak-calling-hours-for-each-city/) {LeetCode Premium · Med}
26. [Find Expensive Cities](https://leetcode.com/problems/find-expensive-cities/) {LeetCode Premium · Easy}
27. [Find Cities in Each State](https://leetcode.com/problems/find-cities-in-each-state/) {LeetCode Premium · Easy}
28. [Find Cities in Each State II](https://leetcode.com/problems/find-cities-in-each-state-ii/) {LeetCode Premium · Med}

## Anti-Joins & Relational Division ("has none" / "has all")

- Invariant: Rows in A with no match in B, or entities that satisfy every condition in a set -- EXISTS/NOT EXISTS territory.

1. [Find all inspections which are part of an inactive program](https://platform.stratascratch.com/coding/10277-find-all-inspections-which-are-part-of-an-inactive-program) {StrataScratch PRO · Easy · City of Los Angeles}
2. [Email Preference Missing](https://platform.stratascratch.com/coding/9924-find-libraries-who-havent-provided-the-email-address-in-2016-but-their-notice-preference-definition-is-set-to-email) {StrataScratch PRO · Easy · City of San Francisco}
3. [Identify Never-Sold Inventory Products](https://platform.stratascratch.com/coding/10552-identify-never-sold-inventory-products) {StrataScratch PRO · Easy · Google}
4. [No Order Customers](https://platform.stratascratch.com/coding/10142-no-order-customers) {StrataScratch PRO · Medium · Instacart+1}
5. [Find the number of customers without an order](https://platform.stratascratch.com/coding/10089-find-the-number-of-customers-without-an-order) {StrataScratch PRO · Medium · Google+1}
6. [Cast stars column values to integer and return with all other column values](https://platform.stratascratch.com/coding/10056-cast-stars-column-values-to-integer-and-return-with-all-other-column-values) {StrataScratch PRO · Easy · Yelp}
7. [Find all provinces which produced more wines in 'winemag_p1' than they did in 'winemag_p2'](https://platform.stratascratch.com/coding/10038-find-all-provinces-which-produced-more-wines-in-winemag_p1-than-they-did-in-winemag_p2) {StrataScratch PRO · Medium · Wine Magazine}
8. [Find all wine varieties which can be considered cheap based on the price](https://platform.stratascratch.com/coding/10022-find-all-wine-varieties-which-can-be-considered-cheap-based-on-the-price) {StrataScratch PRO · Easy · Wine Magazine}
9. [Employees Without Benefits](https://platform.stratascratch.com/coding/9981-employees-without-benefits) {StrataScratch PRO · Hard · City of San Francisco}
10. [Find all distinct sports that obese people participated in](https://platform.stratascratch.com/coding/9945-find-all-distinct-sports-that-obese-people-participated-in) {StrataScratch PRO · Medium · ESPN}
11. [Find all minors that participated in Olympics games](https://platform.stratascratch.com/coding/9936-find-all-minors-that-participated-in-olympics-games) {StrataScratch PRO · Easy · ESPN}
12. [Find all events participated by Christine Jacoba Aaftink](https://platform.stratascratch.com/coding/9935-find-all-events-participated-by-christine-jacoba-aaftink) {StrataScratch PRO · Easy · ESPN}
13. [Find all Danish athletes who won a medal](https://platform.stratascratch.com/coding/9933-find-all-danish-athletes-who-won-a-medal) {StrataScratch PRO · Easy · ESPN}
14. [Not Referred Employees](https://platform.stratascratch.com/coding/9907-not-referred-employees) {StrataScratch PRO · Easy · Sears+1}
15. [Customers Without Orders](https://platform.stratascratch.com/coding/9896-customers-without-orders) {StrataScratch PRO · Medium · Amazon+1}
16. [First Record Without LIMIT or ORDER BY](https://platform.stratascratch.com/coding/9863-find-the-first-record-of-the-dataset-without-using-limit-or-order-by) {StrataScratch PRO · Easy · Google+1}
17. [Last Record Without LIMIT or ORDER BY](https://platform.stratascratch.com/coding/9862-find-the-last-record-of-the-dataset-without-using-limit-or-order-by) {StrataScratch PRO · Easy · Google+1}
18. [Employees Without First Names 'Vipul' or 'Satish' or Last Name Containing a 'c'](https://platform.stratascratch.com/coding/9838-find-details-of-workers-excluding-those-with-the-first-name-vipul-or-satish) {StrataScratch PRO · Easy · Amazon}
19. [Find all companies with more than 10 employees](https://platform.stratascratch.com/coding/9807-find-all-companies-with-more-than-10-employees) {StrataScratch PRO · Easy · Google}
20. [Find the number of processed and not-processed complaints of each type](https://platform.stratascratch.com/coding/9790-find-the-number-of-processed-and-not-processed-complaints-of-each-type) {StrataScratch PRO · Hard · Meta}
21. [Find all actions which occurred more than once in the weblog](https://platform.stratascratch.com/coding/9771-find-all-actions-which-occurred-more-than-once-in-the-weblog) {StrataScratch PRO · Easy · Meta}
22. [Find all users who liked a post](https://platform.stratascratch.com/coding/9769-find-all-friends-who-liked-a-post) {StrataScratch PRO · Easy · Meta}
23. [Find all messages which have references to either user 2 or 3](https://platform.stratascratch.com/coding/9767-find-all-messages-which-have-references-to-either-user-2-or-3) {StrataScratch PRO · Easy · Meta}
24. [List all interactions of user wth id 4 on either day 0 or 2](https://platform.stratascratch.com/coding/9765-list-all-interactions-of-user-wth-id-4-on-either-day-0-or-2) {StrataScratch PRO · Easy · Meta}
25. [Nominees Without An Oscar](https://platform.stratascratch.com/coding/9751-nominees-without-an-oscar) {StrataScratch PRO · Medium · BuzzFeed+1}
26. [Verify that the first 4 digits are equal to 1415 for all phone numbers](https://platform.stratascratch.com/coding/9737-verify-that-the-first-4-digits-are-equal-to-1415-for-all-phone-numbers) {StrataScratch PRO · Medium · City of San Francisco}
27. [Find All Inspections Made On Restaurants](https://platform.stratascratch.com/coding/9721-find-all-inspections-made-on-restaurants) {StrataScratch PRO · Easy · City of San Francisco}
28. [Find all business postal codes of restaurants with issues related to the water](https://platform.stratascratch.com/coding/9719-find-all-business-postal-codes-of-restaurants-with-issues-related-to-the-water) {StrataScratch PRO · Easy · City of San Francisco}
29. [Find all businesses which have a phone number listed](https://platform.stratascratch.com/coding/9718-find-all-businesses-which-have-a-phone-number-listed) {StrataScratch PRO · Easy · City of San Francisco}
30. [Find all businesses which have low-risk safety violations](https://platform.stratascratch.com/coding/9717-find-all-businesses-which-have-low-risk-safety-violations) {StrataScratch PRO · Easy · City of San Francisco}
31. [Check if record_id is unique for every row](https://platform.stratascratch.com/coding/9696-check-if-record_id-is-unique-for-every-row) {StrataScratch PRO · Easy · City of Los Angeles}
32. [Find all routine inspections where high-risk issues were found](https://platform.stratascratch.com/coding/9690-find-all-routine-inspections-where-high-risk-issues-were-found) {StrataScratch PRO · Easy · City of Los Angeles}
33. [Flights With No Delay](https://platform.stratascratch.com/coding/9675-flights-with-no-delay) {StrataScratch PRO · Easy · British Airways+1}
34. [List all companies working in the financial sector with headquarters in Europe or Asia](https://platform.stratascratch.com/coding/9662-list-all-companies-working-in-the-financial-sector-with-headquarters-in-europe-or-asia) {StrataScratch PRO · Easy · Forbes}
35. [Find neighborhoods that have properties with a parking space and no cleaning fees](https://platform.stratascratch.com/coding/9631-find-neighborhoods-that-have-properties-with-a-parking-space-and-no-cleaning-fees) {StrataScratch PRO · Easy · Airbnb}
36. [Find all neighborhoods present in this dataset](https://platform.stratascratch.com/coding/9626-find-all-neighborhoods-present-in-this-dataset) {StrataScratch PRO · Easy · Airbnb}
37. [Find all searches for San Francisco with a flexible cancellation policy and a review score rating](https://platform.stratascratch.com/coding/9621-find-all-searches-for-san-francisco-with-a-flexible-cancellation-policy-and-a-review-score-rating) {StrataScratch PRO · Easy · Airbnb}
38. [Find searches with no data for the host_response_rate column](https://platform.stratascratch.com/coding/9620-find-searches-with-no-data-for-the-host_response_rate-column) {StrataScratch PRO · Easy · Airbnb}
39. [Find all searches for accommodations with an equal number of bedrooms bathrooms](https://platform.stratascratch.com/coding/9617-find-all-searches-for-accommodations-with-an-equal-number-of-bedrooms-bathrooms) {StrataScratch PRO · Easy · Airbnb}
40. [Products Never Sold](https://platform.stratascratch.com/coding/2122-products-never-sold) {StrataScratch PRO · Medium · Meta}
41. [Products with No Sales](https://platform.stratascratch.com/coding/2109-products-with-no-sales) {StrataScratch PRO · Easy · Salesforce+1}
42. [Rows With Missing Values](https://platform.stratascratch.com/coding/2106-rows-with-missing-values) {StrataScratch PRO · Medium · Google}
43. [Days Without Hiring/Termination](https://platform.stratascratch.com/coding/2045-days-without-hiringtermination) {StrataScratch PRO · Medium · Uber}
44. [Employees' Without Annual Review](https://platform.stratascratch.com/coding/2043-employees-without-annual-review) {StrataScratch PRO · Easy · Uber}
45. [Inactive Free Users](https://platform.stratascratch.com/coding/2018-inactive-free-users) {StrataScratch PRO · Easy · Ring Central}
46. [Customers Who Bought Products A and B but Not C](https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/) {LeetCode Premium · Med}
47. [Find the Quiet Students in All Exams](https://leetcode.com/problems/find-the-quiet-students-in-all-exams/) {LeetCode Premium · Hard}
48. [Find the Missing IDs](https://leetcode.com/problems/find-the-missing-ids/) {LeetCode Premium · Med}
49. [Find the Subtasks That Did Not Execute](https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/) {LeetCode Premium · Hard}
50. [All the Matches of the League](https://leetcode.com/problems/all-the-matches-of-the-league/) {LeetCode Premium · Easy}
51. [Find All Unique Email Domains](https://leetcode.com/problems/find-all-unique-email-domains/) {LeetCode Premium · Easy}

## Subqueries & Correlated Lookups

- Invariant: A value or filter that depends on a nested SELECT -- scalar subqueries, comparisons against an aggregate.

1. [Find the advertising channel where Uber spent more than 100k USD in 2019](https://platform.stratascratch.com/coding/10002-find-the-advertising-channel-where-uber-spent-more-than-100k-usd-in-2019) {StrataScratch PRO · Easy · Uber}
2. [Find the year that Uber acquired more than 2000 customers through celebrities](https://platform.stratascratch.com/coding/10000-find-the-year-that-uber-acquired-more-than-2000-customers-through-celebrities) {StrataScratch PRO · Easy · Uber}
3. [Find songs that have more than 3 million streams](https://platform.stratascratch.com/coding/9990-find-songs-that-have-more-than-3-million-streams) {StrataScratch PRO · Easy · Spotify}
4. [Stock Codes with Prices Above Average](https://platform.stratascratch.com/coding/2164-stock-codes-with-prices-above-average) {StrataScratch PRO · Medium · Amazon}
5. [More Than 100 Dollars](https://platform.stratascratch.com/coding/2115-more-than-100-dollars) {StrataScratch PRO · Hard · Salesforce+1}

## CTEs & Multi-Step Derivations

- Invariant: Genuinely multi-step logic that reads better broken into named stages.

1. [Marketing Campaign Success [Advanced]](https://platform.stratascratch.com/coding/514-marketing-campaign-success-advanced) {StrataScratch PRO · Hard · ActiveCampaign+1}

## Set Operations (UNION / INTERSECT / EXCEPT)

- Invariant: Combining or comparing two differently-sourced result sets.

1. [Find the list of intersections between both word lists](https://platform.stratascratch.com/coding/9816-find-the-list-of-intersections-between-both-word-lists) {StrataScratch PRO · Hard · Google}
2. [Count the number of words per row in both words lists](https://platform.stratascratch.com/coding/9812-count-the-number-of-words-per-row-in-both-words-lists) {StrataScratch PRO · Medium · Google}

## Pivoting & Conditional Aggregation Reports

- Invariant: Row-to-column reshaping and comparison/report-style questions (X vs. Y, breakdowns, summaries).

1. [Premium vs Freemium](https://platform.stratascratch.com/coding/10300-premium-vs-freemium) {StrataScratch PRO · Medium · Microsoft}
2. [Interaction Summary](https://platform.stratascratch.com/coding/10542-interaction-summary) {StrataScratch PRO · Medium · IBM}
3. [Weekly Orders Report](https://platform.stratascratch.com/coding/10363-weekly-orders-report) {StrataScratch PRO · Easy · Amazon}
4. [Clicked Vs Non-Clicked Search Results](https://platform.stratascratch.com/coding/10288-clicked-vs-non-clicked-search-results) {StrataScratch PRO · Medium · Meta}
5. [Fans vs Opposition](https://platform.stratascratch.com/coding/10062-fans-vs-opposition) {StrataScratch PRO · Hard · Meta}
6. [Actual vs Predicted Arrival Time](https://platform.stratascratch.com/coding/2135-actual-vs-predicted-arrival-time) {StrataScratch PRO · Medium · Lyft+1}
7. [Customers Report Summary](https://platform.stratascratch.com/coding/2040-customers-report-summary) {StrataScratch PRO · Medium · Whole Foods Market}
8. [Products Report Summary](https://platform.stratascratch.com/coding/2039-products-report-summary) {StrataScratch PRO · Easy · Whole Foods Market}
9. [Variable vs Fixed Rates](https://platform.stratascratch.com/coding/2000-variable-vs-fixed-rates) {StrataScratch PRO · Medium · Credit Karma}
10. [Sending vs. Opening Snaps](https://datalemur.com/questions/time-spent-snaps) {DataLemur · Medium · Snapchat}
11. [Average Salary: Departments VS Company](https://leetcode.com/problems/average-salary-departments-vs-company/) {LeetCode Premium · Hard}
12. [Students Report By Geography](https://leetcode.com/problems/students-report-by-geography/) {LeetCode Premium · Hard}
13. [Report Contiguous Dates](https://leetcode.com/problems/report-contiguous-dates/) {LeetCode Premium · Hard}

## Date & Time Analysis

- Invariant: Date truncation, elapsed time, seasonality, and calendar-bucketed reporting.

1. [Revenue Over Time](https://platform.stratascratch.com/coding/10314-revenue-over-time) {StrataScratch PRO · Hard · Amazon}
2. [Users By Average Session Time](https://platform.stratascratch.com/coding/10352-users-by-avg-session-time) {StrataScratch · Medium · Meta}
3. [Daily Revenue](https://platform.stratascratch.com/coding/10568-daily-revenue) {StrataScratch PRO · Hard · Meta+2}
4. [Multi-Status Order Tracking by Week](https://platform.stratascratch.com/coding/10563-multi-status-order-tracking-by-week) {StrataScratch PRO · Hard · Amazon}
5. [Same-Day Orders](https://platform.stratascratch.com/coding/10545-same-day-orders) {StrataScratch PRO · Hard · Walmart}
6. [Peak Online Time](https://platform.stratascratch.com/coding/10361-peak-online-time) {StrataScratch PRO · Easy · Amazon}
7. [Movie Duration Match](https://platform.stratascratch.com/coding/10360-movie-duration-match) {StrataScratch PRO · Easy · Amazon}
8. [Employees With Same Birth Month](https://platform.stratascratch.com/coding/10355-employees-with-same-birth-month) {StrataScratch PRO · Hard · Block}
9. [Find the total costs and total customers acquired in each year](https://platform.stratascratch.com/coding/10009-find-the-total-costs-and-total-customers-acquired-in-each-year) {StrataScratch PRO · Easy · Uber}
10. [Find the average distance traveled in each hour](https://platform.stratascratch.com/coding/10006-find-the-average-distance-traveled-in-each-hour) {StrataScratch PRO · Easy · Lyft}
11. [Find the history of each sport by finding the first year, last year and total times that sport was played in the Olympics](https://platform.stratascratch.com/coding/9954-find-the-history-of-each-sport-by-finding-the-first-year-last-year-and-total-years-that-sport-played-in-the-olympics) {StrataScratch PRO · Easy · ESPN}
12. [Find the year in which the shortest athlete participated](https://platform.stratascratch.com/coding/9946-find-the-year-in-which-the-shortest-athlete-participated) {StrataScratch PRO · Medium · ESPN}
13. [Find the number of athletes that participated in each Olympics season](https://platform.stratascratch.com/coding/9941-find-the-number-of-athletes-that-participated-in-each-olympics-season) {StrataScratch PRO · Medium · ESPN}
14. [Find how many people registered in libraries in the year 2016](https://platform.stratascratch.com/coding/9925-find-how-many-people-registered-in-libraries-in-the-year-2016) {StrataScratch PRO · Easy · City of San Francisco}
15. [Average Time Between Steps](https://platform.stratascratch.com/coding/9793-average-time-between-steps) {StrataScratch PRO · Hard · Meta}
16. [Time Between Two Events](https://platform.stratascratch.com/coding/9784-time-between-two-events) {StrataScratch PRO · Hard · Meta}
17. [Daily Interactions By Users Count](https://platform.stratascratch.com/coding/9779-daily-interactions-by-users-count) {StrataScratch PRO · Medium · Meta}
18. [Day 1 Common Reactions](https://platform.stratascratch.com/coding/9773-day-1-common-reactions) {StrataScratch PRO · Medium · Meta}
19. [Daily Violation Counts](https://platform.stratascratch.com/coding/9740-daily-violation-counts) {StrataScratch PRO · Medium · City of San Francisco}
20. [Find the number of inspections per day](https://platform.stratascratch.com/coding/9704-find-the-number-of-inspections-per-day) {StrataScratch PRO · Easy · City of Los Angeles}
21. [Sorting Movies By Duration Time](https://platform.stratascratch.com/coding/2163-sorting-movies-by-duration-time) {StrataScratch PRO · Easy · Google}
22. [Oregon's Prior Month's Sales](https://platform.stratascratch.com/coding/2160-oregons-prior-months-sales) {StrataScratch PRO · Easy · Capital One}
23. [10% Monthly Sales Increase](https://platform.stratascratch.com/coding/2157-10-monthly-sales-increase) {StrataScratch PRO · Medium · Amazon}
24. [Average On-Time Order Value](https://platform.stratascratch.com/coding/2153-average-on-time-order-value) {StrataScratch PRO · Medium · DoorDash}
25. [Number of Hires During Specific Time Period](https://platform.stratascratch.com/coding/2151-number-of-hires-during-specific-time-period) {StrataScratch PRO · Easy · Deloitte}
26. [First and Last Day Promotion Results](https://platform.stratascratch.com/coding/2120-first-and-last-day) {StrataScratch PRO · Hard · Meta}
27. [First Time Orders](https://platform.stratascratch.com/coding/2093-first-time-orders) {StrataScratch PRO · Medium · DoorDash}
28. [Latest Login Date](https://platform.stratascratch.com/coding/2091-latest-login-date) {StrataScratch PRO · Easy · Google+1}
29. [Time from 10th Runner](https://platform.stratascratch.com/coding/2065-time-from-10th-runner) {StrataScratch PRO · Medium · EY+1}
30. [Questions in Second Quarter](https://platform.stratascratch.com/coding/2062-questions-in-second-quarter) {StrataScratch PRO · Easy · Meta}
31. [Total Monetary Value Per Month/Service](https://platform.stratascratch.com/coding/2047-total-monatery-value-per-monthservice) {StrataScratch PRO · Medium · Uber}
32. [Avg Earnings per Weekday and Hour](https://platform.stratascratch.com/coding/2034-avg-earnings-per-weekday-and-hour) {StrataScratch PRO · Medium · DoorDash}
33. [Rush Hour Calls](https://platform.stratascratch.com/coding/2023-rush-hour-calls) {StrataScratch PRO · Medium · Redfin}
34. [Update Call Duration](https://platform.stratascratch.com/coding/2022-update-call-duration) {StrataScratch PRO · Medium · Redfin}
35. [Initial Call Duration](https://platform.stratascratch.com/coding/2021-initial-call-duration) {StrataScratch PRO · Medium · Redfin}
36. [Session Type Duration](https://platform.stratascratch.com/coding/2011-session-type-duration) {StrataScratch PRO · Easy · Twitch}
37. [Users Activity Per Month Day](https://platform.stratascratch.com/coding/2006-users-activity-per-month-day) {StrataScratch PRO · Easy · Meta}
38. [Server Utilization Time](https://datalemur.com/questions/total-utilization-time) {DataLemur · Hard · Amazon}
39. [New Users Daily Count](https://leetcode.com/problems/new-users-daily-count/) {LeetCode Premium · Med}
40. [Total Sales Amount by Year](https://leetcode.com/problems/total-sales-amount-by-year/) {LeetCode Premium · Hard}
41. [Sales by Day of the Week](https://leetcode.com/problems/sales-by-day-of-the-week/) {LeetCode Premium · Hard}
42. [Friendly Movies Streamed Last Month](https://leetcode.com/problems/friendly-movies-streamed-last-month/) {LeetCode Premium · Easy}
43. [Unique Orders and Customers Per Month](https://leetcode.com/problems/unique-orders-and-customers-per-month/) {LeetCode Premium · Easy}
44. [Find Total Time Spent by Each Employee](https://leetcode.com/problems/find-total-time-spent-by-each-employee/) {LeetCode · Easy}
45. [Convert Date Format](https://leetcode.com/problems/convert-date-format/) {LeetCode Premium · Easy}
46. [First and Last Call On the Same Day](https://leetcode.com/problems/first-and-last-call-on-the-same-day/) {LeetCode Premium · Hard}
47. [Bikes Last Time Used](https://leetcode.com/problems/bikes-last-time-used/) {LeetCode Premium · Easy}
48. [User Activities within Time Bounds](https://leetcode.com/problems/user-activities-within-time-bounds/) {LeetCode Premium · Hard}
49. [Server Utilization Time](https://leetcode.com/problems/server-utilization-time/) {LeetCode Premium · Med}
50. [Employee Task Duration and Concurrent Tasks](https://leetcode.com/problems/employee-task-duration-and-concurrent-tasks/) {LeetCode Premium · Hard}
51. [Calculate Parking Fees and Duration](https://leetcode.com/problems/calculate-parking-fees-and-duration/) {LeetCode Premium · Med}
52. [Seasonal Sales Analysis](https://leetcode.com/problems/seasonal-sales-analysis/) {LeetCode · Med}

## String & Text Processing

- Invariant: Pattern matching, formatting, and text-derived columns.

1. [Capitalize First Letters](https://platform.stratascratch.com/coding/10546-capitalize-first-letters) {StrataScratch PRO · Hard · Cisco Systems}
2. [Business Name Lengths](https://platform.stratascratch.com/coding/10131-business-name-lengths) {StrataScratch PRO · Hard · City of San Francisco}
3. [Number Of Custom Email Labels](https://platform.stratascratch.com/coding/10120-number-of-custom-email-labels) {StrataScratch PRO · Medium · Google}
4. [Email Details Based On Sends](https://platform.stratascratch.com/coding/10086-email-details-based-on-sends) {StrataScratch PRO · Medium · Google}
5. [User Email Labels](https://platform.stratascratch.com/coding/10068-user-email-labels) {StrataScratch PRO · Medium · Google}
6. [Name to Medal Connection](https://platform.stratascratch.com/coding/9952-name-to-medal-connection) {StrataScratch PRO · Hard · ESPN}
7. [First Name That Ends With The Letter 'a'](https://platform.stratascratch.com/coding/9841-find-all-workers-whose-first-name-ends-with-the-letter-a) {StrataScratch PRO · Easy · Amazon}
8. [First Name's Containing the Letter 'a'](https://platform.stratascratch.com/coding/9840-find-all-workers-whose-first-name-contains-the-letter-a) {StrataScratch PRO · Easy · Oracle+1}
9. [Sort Workers in Ascending Order by First Name and Descending Order by Department](https://platform.stratascratch.com/coding/9836-sort-workers-in-ascending-order-by-the-first-name-and-in-descending-order-by-department-name) {StrataScratch PRO · Easy · Oracle+1}
10. [Replace the letter 'a' with 'A' in the first name](https://platform.stratascratch.com/coding/9833-replace-the-letter-a-with-a-in-the-first-name) {StrataScratch PRO · Easy · Amazon}
11. [First Name with Left White Space Removed](https://platform.stratascratch.com/coding/9831-formatting-names) {StrataScratch PRO · Easy · Amazon}
12. [First Name with Right Whitespace Removed](https://platform.stratascratch.com/coding/9830-print-the-first-name-after-removing-white-spaces-from-the-right-side) {StrataScratch PRO · Easy · Stripe+1}
13. [First Three Characters of First Name](https://platform.stratascratch.com/coding/9828-print-the-first-three-characters-of-the-first-name) {StrataScratch PRO · Easy · Oracle+1}
14. [Sorting By Second Character](https://platform.stratascratch.com/coding/2166-sorting-by-second-character) {StrataScratch PRO · Easy · Amadeus}
15. [Fix Product Name Format](https://leetcode.com/problems/fix-product-name-format/) {LeetCode Premium · Easy}
16. [Concatenate the Name and the Profession](https://leetcode.com/problems/concatenate-the-name-and-the-profession/) {LeetCode Premium · Easy}
17. [Count Occurrences in Text](https://leetcode.com/problems/count-occurrences-in-text/) {LeetCode Premium · Med}

## NULL Handling, CASE WHEN & Categorization

- Invariant: Bucketing rows into named categories/tiers/statuses, and missing-value handling.

1. [Reviews of Categories](https://platform.stratascratch.com/coding/10049-reviews-of-categories) {StrataScratch · Medium · Yelp}
2. [Inspections Per Risk Category](https://platform.stratascratch.com/coding/9729-inspections-per-risk-category) {StrataScratch PRO · Medium · City of San Francisco}
3. [Classify Business Type](https://platform.stratascratch.com/coding/9726-classify-business-type) {StrataScratch PRO · Medium · City of San Francisco}
4. [Total Order Per Status Per Service](https://platform.stratascratch.com/coding/2049-total-order-per-status-per-service) {StrataScratch PRO · Easy · Uber}
5. [The Category of Each Member in the Store](https://leetcode.com/problems/the-category-of-each-member-in-the-store/) {LeetCode Premium · Med}
6. [Classifying Triangles by Lengths](https://leetcode.com/problems/classifying-triangles-by-lengths/) {LeetCode Premium · Easy}
7. [Books with NULL Ratings](https://leetcode.com/problems/books-with-null-ratings/) {LeetCode Premium · Easy}

## GROUP BY, HAVING & Basic Aggregation

- Invariant: The bread-and-butter shape: aggregate, group, filter the groups -- the largest bucket here because it's genuinely the most common real-world shape.

1. [Number of Comments Per User in 30 days before 2020-02-10](https://platform.stratascratch.com/coding/2004-number-of-comments-per-user-in-past-30-days) {StrataScratch PRO · Easy · Meta}
2. [Number Of Bathrooms And Bedrooms](https://platform.stratascratch.com/coding/9622-number-of-bathrooms-and-bedrooms) {StrataScratch PRO · Easy · Airbnb}
3. [Vehicle Gear Usage](https://platform.stratascratch.com/coding/10571-vehicle-gear-usage) {StrataScratch PRO · Medium · Tesla+2}
4. [Car Part Price](https://platform.stratascratch.com/coding/10570-car-part-price) {StrataScratch PRO · Medium · Tesla+2}
5. [User Flag Performance Analysis](https://platform.stratascratch.com/coding/10558-user-flag-performance-analysis) {StrataScratch PRO · Medium · Google}
6. [User Activity Analysis](https://platform.stratascratch.com/coding/10541-user-activity-analysis) {StrataScratch PRO · Medium · Dropbox}
7. [Calculate Average Score](https://platform.stratascratch.com/coding/10540-calculate-average-score) {StrataScratch PRO · Easy · Deloitte}
8. [User Activity Count](https://platform.stratascratch.com/coding/10539-user-activity-count) {StrataScratch PRO · Easy · Meta}
9. [Spotify Penetration Analysis](https://platform.stratascratch.com/coding/10369-spotify-penetration-analysis) {StrataScratch PRO · Hard · Spotify}
10. [Customer Feedback Analysis](https://platform.stratascratch.com/coding/10366-customer-feedback-analysis) {StrataScratch PRO · Medium · Capital One}
11. [Friday's Likes Count](https://platform.stratascratch.com/coding/10364-fridays-likes-count) {StrataScratch PRO · Medium · Meta}
12. [Algorithm Performance](https://platform.stratascratch.com/coding/10350-algorithm-performance) {StrataScratch PRO · Hard · Meta}
13. [Class Performance](https://platform.stratascratch.com/coding/10310-class-performance) {StrataScratch PRO · Medium · Box}
14. [Distance Per Dollar](https://platform.stratascratch.com/coding/10302-distance-per-dollar) {StrataScratch PRO · Hard · Uber}
15. [Find the total number of available beds per hosts' nationality](https://platform.stratascratch.com/coding/10187-find-the-total-number-of-available-beds-per-hosts-nationality) {StrataScratch PRO · Medium · Airbnb}
16. [Number of Streets Per Zip Code](https://platform.stratascratch.com/coding/10182-number-of-streets-per-zip-code) {StrataScratch PRO · Medium · City of San Francisco}
17. [Number Of Records By Variety](https://platform.stratascratch.com/coding/10168-number-of-records-by-variety) {StrataScratch PRO · Easy · Linux+1}
18. [Total Number Of Housing Units](https://platform.stratascratch.com/coding/10167-total-number-of-housing-units) {StrataScratch PRO · Easy · Zillow+1}
19. [Total AdWords Earnings](https://platform.stratascratch.com/coding/10164-total-adwords-earnings) {StrataScratch PRO · Easy · Google}
20. [Product Transaction Count](https://platform.stratascratch.com/coding/10163-product-transaction-count) {StrataScratch PRO · Medium · Nvidia+1}
21. [Number Of Acquisitions](https://platform.stratascratch.com/coding/10162-number-of-acquisitions) {StrataScratch PRO · Easy · Crunchbase}
22. [Find the number of Yelp businesses that sell pizza](https://platform.stratascratch.com/coding/10153-find-the-number-of-yelp-businesses-that-sell-pizza) {StrataScratch PRO · Easy · Yelp}
23. [Average Weight of Medal-Winning Judo](https://platform.stratascratch.com/coding/10144-average-weight-of-medal-winning-judo) {StrataScratch PRO · Medium · ESPN}
24. [Number of Speakers By Language](https://platform.stratascratch.com/coding/10139-number-of-speakers-by-language) {StrataScratch PRO · Medium · Apple+1}
25. [Find the total number of searches for houses Westlake neighborhood with a TV](https://platform.stratascratch.com/coding/10122-find-the-total-number-of-searches-for-houses-westlake-neighborhood-with-a-tv) {StrataScratch PRO · Easy · Airbnb}
26. [Find the number of employees who received the bonus and who didn't](https://platform.stratascratch.com/coding/10081-find-the-number-of-employees-who-received-the-bonus-and-who-didnt) {StrataScratch PRO · Hard · Dell+1}
27. [Find the average age of guests reviewed by each host](https://platform.stratascratch.com/coding/10074-find-the-average-age-of-guests-reviewed-by-each-host) {StrataScratch PRO · Medium · Airbnb}
28. [Find whether the number of seniors works at Meta/Facebook is higher than its number of USA based employees](https://platform.stratascratch.com/coding/10065-find-whether-the-number-of-seniors-works-at-facebook-is-higher-than-its-number-of-usa-based-employees) {StrataScratch PRO · Medium · Meta}
29. [Find the number of reviews received by Lo-Lo's Chicken & Waffles for each star](https://platform.stratascratch.com/coding/10058-find-the-number-of-reviews-received-by-lo-los-chicken-waffles-for-each-star) {StrataScratch PRO · Easy · Yelp}
30. [Find the number of 5-star reviews earned by Lo-Lo's Chicken & Waffles](https://platform.stratascratch.com/coding/10057-find-the-number-of-5-star-reviews-earned-by-lo-los-chicken-waffles) {StrataScratch PRO · Easy · Yelp}
31. [Find the number of entries per star](https://platform.stratascratch.com/coding/10054-find-the-number-of-entries-per-star) {StrataScratch PRO · Easy · Yelp}
32. [Find the average number of stars for each state](https://platform.stratascratch.com/coding/10052-find-the-average-number-of-stars-for-each-state) {StrataScratch PRO · Easy · Yelp}
33. [Find the number of open businesses](https://platform.stratascratch.com/coding/10051-find-the-number-of-open-businesses) {StrataScratch PRO · Easy · Yelp}
34. [Find the review count for one-star businesses from yelp](https://platform.stratascratch.com/coding/10050-find-the-review-count-for-one-star-businesses-from-yelp) {StrataScratch PRO · Easy · Yelp}
35. [Find Favourite Wine Variety](https://platform.stratascratch.com/coding/10037-find-favourite-wine-variety) {StrataScratch PRO · Hard · Wine Magazine}
36. [Find the number of Bodegas outside of Spain that produce wines with the blackberry taste](https://platform.stratascratch.com/coding/10031-find-the-number-of-bodegas-outside-of-spain-by-the-country-and-region-that-produces-wines-with-the-blackberry-taste) {StrataScratch PRO · Medium · Wine Magazine}
37. [Total Wine Revenue](https://platform.stratascratch.com/coding/10030-total-wine-revenue) {StrataScratch PRO · Medium · Wine Magazine}
38. [Find the number of wines each taster tasted within the variation](https://platform.stratascratch.com/coding/10028-find-the-number-of-wines-of-each-variety-that-has-been-tasted-by-each-taster) {StrataScratch PRO · Medium · Wine Magazine}
39. [Find the number of US-based wineries that have expensive wines (price >= 200)](https://platform.stratascratch.com/coding/10027-find-the-number-of-us-based-wineries-that-have-expensive-wines-price-200) {StrataScratch PRO · Easy · Wine Magazine}
40. [Find prices for Spanish, Italian, and French wines](https://platform.stratascratch.com/coding/10020-find-prices-for-spanish-italian-and-french-wines) {StrataScratch PRO · Easy · Wine Magazine}
41. [Find The Combinations](https://platform.stratascratch.com/coding/10010-find-the-combinations) {StrataScratch PRO · Medium · Lyft+1}
42. [Sum Of Numbers](https://platform.stratascratch.com/coding/10008-sum-of-numbers) {StrataScratch PRO · Medium · Tesla+1}
43. [Average Cost Of Each Request](https://platform.stratascratch.com/coding/10007-average-cost-of-each-request) {StrataScratch PRO · Easy · Uber}
44. [Find the cost per customer for advertising via public transport](https://platform.stratascratch.com/coding/10001-find-the-cost-per-customer-for-advertising-via-public-transport) {StrataScratch PRO · Easy · Uber}
45. [Find songs with less than 2000 streams](https://platform.stratascratch.com/coding/9994-find-songs-with-less-than-2000-streams) {StrataScratch PRO · Easy · Spotify}
46. [Artist Appearance Count](https://platform.stratascratch.com/coding/9992-find-artists-that-have-been-on-spotify-the-most-number-of-times) {StrataScratch · Easy · Spotify}
47. [Find the number of police officers, firefighters, and medical staff employees](https://platform.stratascratch.com/coding/9977-find-the-number-of-police-officers-firefighters-and-medical-staff-employees) {StrataScratch PRO · Hard · City of San Francisco}
48. [Average Number Of Points](https://platform.stratascratch.com/coding/9965-average-number-of-points) {StrataScratch PRO · Medium · ESPN}
49. [Find whether quarterbacks performed better at home or away in 2016](https://platform.stratascratch.com/coding/9964-find-whether-quarterbacks-performed-better-at-home-or-away-in-2016) {StrataScratch PRO · Medium · ESPN}
50. [Find quarterbacks who have achieved high average game points during their careers](https://platform.stratascratch.com/coding/9961-find-quarterbacks-who-have-achieved-high-average-game-points-during-their-careers) {StrataScratch PRO · Medium · ESPN}
51. [Olympic Medals By Chinese Athletes](https://platform.stratascratch.com/coding/9959-olympic-medals-by-chinese-athletes) {StrataScratch PRO · Hard · ESPN}
52. [Find how the average male height changed between each Olympics from 1896 to 2016](https://platform.stratascratch.com/coding/9957-find-how-the-average-male-height-changed-between-each-olympics-from-1896-to-2016) {StrataScratch PRO · Hard · ESPN}
53. [Find Olympics games that the youngest and the oldest athletes participated in the history of Olympics](https://platform.stratascratch.com/coding/9956-find-olympics-games-that-the-youngest-and-the-oldest-athletes-participated-in-the-history-of-olympics) {StrataScratch PRO · Easy · ESPN}
54. [Find how many athletes competing in Football won Gold medals by their NOC and gender](https://platform.stratascratch.com/coding/9947-find-how-many-athletes-competing-in-football-won-gold-medals-by-their-noc-and-gender) {StrataScratch PRO · Medium · ESPN}
55. [Olympics Events List By Age](https://platform.stratascratch.com/coding/9943-winter-olympics-events-list-by-height) {StrataScratch · Easy · ESPN}
56. [Find Olympic Events Based On Height](https://platform.stratascratch.com/coding/9938-find-olympic-events-based-on-height) {StrataScratch PRO · Easy · ESPN}
57. [Find the average total checkouts from Chinatown libraries in 2016](https://platform.stratascratch.com/coding/9929-find-the-average-total-checkouts-from-chinatown-libraries-in-2016) {StrataScratch PRO · Medium · City of San Francisco}
58. [100 Total Checkouts Libraries](https://platform.stratascratch.com/coding/9923-100-total-checkouts-libraries) {StrataScratch PRO · Easy · City of San Francisco}
59. [Sales Dept Salaries](https://platform.stratascratch.com/coding/9920-sales-dept-salaries) {StrataScratch PRO · Easy · LinkedIn+1}
60. [Number of Employees Per Department](https://platform.stratascratch.com/coding/9906-number-of-employees-per-department) {StrataScratch PRO · Easy · Asana+2}
61. [Proportion Of Total Spend](https://platform.stratascratch.com/coding/9899-percentage-of-total-spend) {StrataScratch PRO · Medium · Etsy+1}
62. [Find the team division of each player](https://platform.stratascratch.com/coding/9884-find-the-team-division-of-each-player) {StrataScratch PRO · Easy · ESPN}
63. [Find the oldest survivor per passenger class](https://platform.stratascratch.com/coding/9883-find-the-oldest-survivor-per-passenger-class) {StrataScratch PRO · Hard · Google}
64. [Find how the survivors are distributed by the gender and passenger classes](https://platform.stratascratch.com/coding/9882-find-how-the-survivors-are-distributed-by-the-gender-and-passenger-classes) {StrataScratch PRO · Medium · Google}
65. [Total Salary by Department](https://platform.stratascratch.com/coding/9869-find-the-total-salary-of-each-department) {StrataScratch PRO · Easy · Siemens+1}
66. [Total Employees in Each Department](https://platform.stratascratch.com/coding/9861-find-the-number-of-employees-in-each-department) {StrataScratch PRO · Easy · Apple+2}
67. [Find the duplicate records in the dataset](https://platform.stratascratch.com/coding/9849-find-the-duplicate-records-in-the-dataset) {StrataScratch PRO · Medium · Google+1}
68. [Workers by Department Since April](https://platform.stratascratch.com/coding/9847-find-the-number-of-workers-by-department) {StrataScratch PRO · Easy · Amazon}
69. [Sum Of Transportation Numbers](https://platform.stratascratch.com/coding/9819-sum-of-transportation-numbers) {StrataScratch PRO · Medium · Uber+2}
70. [Price Of A Handyman](https://platform.stratascratch.com/coding/9815-price-of-a-handyman) {StrataScratch PRO · Hard · Google}
71. [Find the minimal adwords earnings for each business type](https://platform.stratascratch.com/coding/9811-find-the-minimal-adwords-earnings-for-each-business-type) {StrataScratch PRO · Medium · Google}
72. [Find business types present in the dataset](https://platform.stratascratch.com/coding/9808-find-business-types-present-in-the-dataset) {StrataScratch PRO · Easy · Google}
73. [Find the total assets of the energy sector](https://platform.stratascratch.com/coding/9803-find-the-total-assets-of-the-energy-sector) {StrataScratch PRO · Easy · Forbes}
74. [Find the number of USA companies that are on the list](https://platform.stratascratch.com/coding/9801-find-the-number-of-american-companies-that-are-on-the-list) {StrataScratch PRO · Easy · Forbes}
75. [Find the total market value for the financial sector](https://platform.stratascratch.com/coding/9800-find-the-total-market-value-for-the-financial-sector) {StrataScratch PRO · Easy · Forbes}
76. [Find the average profit for major banks](https://platform.stratascratch.com/coding/9798-find-the-average-profit-for-major-banks) {StrataScratch PRO · Easy · Forbes}
77. [Views Per Keyword](https://platform.stratascratch.com/coding/9791-views-per-keyword) {StrataScratch PRO · Hard · Meta}
78. [Find the total number of approved friendship requests in January and February](https://platform.stratascratch.com/coding/9789-find-the-total-number-of-approved-friendship-requests-in-january-and-february) {StrataScratch PRO · Medium · Meta}
79. [Find the total number of interactions on days 0 and 2](https://platform.stratascratch.com/coding/9788-find-the-total-number-of-interactions-on-days-0-and-2) {StrataScratch PRO · Easy · Meta}
80. [Customer Revenue In March](https://platform.stratascratch.com/coding/9782-customer-revenue-in-march) {StrataScratch PRO · Medium · Amazon+1}
81. [Find the number of views each post has](https://platform.stratascratch.com/coding/9770-find-the-number-of-views-each-post-has) {StrataScratch PRO · Easy · Meta}
82. [Find the complaint id for the processed complaints of type 1](https://platform.stratascratch.com/coding/9766-find-the-complaint-id-for-the-processed-complaints-of-type-1) {StrataScratch PRO · Easy · Meta}
83. [Find the number of nights that are searching for when trying to book a host](https://platform.stratascratch.com/coding/9761-find-the-number-of-nights-that-are-searching-for-when-trying-to-book-a-host) {StrataScratch PRO · Medium · Airbnb}
84. [Find the number of people on Airbnb](https://platform.stratascratch.com/coding/9760-find-the-number-of-searches-on-airbnb) {StrataScratch PRO · Easy · Airbnb}
85. [Number Of Inspections By Zip](https://platform.stratascratch.com/coding/9734-number-of-inspections-by-zip) {StrataScratch PRO · Hard · City of San Francisco}
86. [Find the number of complaints that ended in a violation](https://platform.stratascratch.com/coding/9733-find-the-number-of-complaints-that-ended-in-a-violation) {StrataScratch PRO · Medium · City of San Francisco}
87. [Find the first and last inspection dates for vermin infestations per municipality](https://platform.stratascratch.com/coding/9732-find-the-first-and-last-inspection-dates-for-vermin-infestations-per-municipality) {StrataScratch PRO · Medium · City of San Francisco}
88. [Find the number of violations that each school had](https://platform.stratascratch.com/coding/9727-find-the-number-of-violations-that-each-school-had) {StrataScratch PRO · Medium · City of San Francisco}
89. [Find the business names that have inspection scores of less than 50](https://platform.stratascratch.com/coding/9720-find-the-business-names-that-have-inspection-scores-of-less-than-50) {StrataScratch PRO · Easy · City of San Francisco}
90. [Find the scores of 4 quartiles of each company](https://platform.stratascratch.com/coding/9713-find-the-scores-of-4-quartiles-of-each-company) {StrataScratch PRO · Hard · City of Los Angeles}
91. [Find the average of inspections scores between 91 and 100](https://platform.stratascratch.com/coding/9707-find-the-average-of-inspections-scores-between-91-and-100) {StrataScratch PRO · Easy · City of Los Angeles}
92. [Find the total number of inspections with low risk in 2017](https://platform.stratascratch.com/coding/9705-find-the-total-number-of-inspections-with-low-risk-in-2017) {StrataScratch PRO · Medium · City of Los Angeles}
93. [Number Of Unique Facilities And Inspections Per Municipality](https://platform.stratascratch.com/coding/9702-number-of-unique-facilities-and-inspections-per-municipality) {StrataScratch PRO · Easy · City of Los Angeles}
94. [Find the average score for grades A, B, and C](https://platform.stratascratch.com/coding/9693-find-the-average-score-for-grades-a-b-and-c) {StrataScratch PRO · Easy · City of Los Angeles}
95. [Find details of oscar winners between 2001 and 2009](https://platform.stratascratch.com/coding/9687-find-details-of-oscar-winners-between-2001-and-2009) {StrataScratch PRO · Easy · Netflix+1}
96. [Find industries that make a profit](https://platform.stratascratch.com/coding/9682-find-industries-with-the-lowest-sales-but-still-makes-a-profit) {StrataScratch PRO · Easy · Forbes}
97. [Count the number of cancelled flights by American Airlines (AA).](https://platform.stratascratch.com/coding/9677-count-the-number-of-cancelled-flights-by-american-airlines-aa) {StrataScratch PRO · Easy · Virgin+1}
98. [Find the average distance traveled from each origin airport.](https://platform.stratascratch.com/coding/9676-find-the-average-distance-traveled-from-each-origin-airport) {StrataScratch PRO · Easy · Delta Airlines+1}
99. [Find unique IATA codes](https://platform.stratascratch.com/coding/9673-find-unique-iata-codes) {StrataScratch PRO · Easy · American Airlines+2}
100. [Count the unique origin airports](https://platform.stratascratch.com/coding/9672-count-the-unique-origin-airports) {StrataScratch PRO · Easy · Southwest Airlines+1}
101. [Count the number of speakers per each language](https://platform.stratascratch.com/coding/9669-count-the-number-of-speakers-per-each-language) {StrataScratch PRO · Easy · Google}
102. [Count users that speak English, German, French or Spanish](https://platform.stratascratch.com/coding/9667-count-users-that-speak-english-german-french-or-spanish) {StrataScratch PRO · Easy · Google}
103. [Count the number of students lectured by each teacher](https://platform.stratascratch.com/coding/9660-count-the-number-of-students-lectured-by-each-teacher) {StrataScratch PRO · Easy · General Assembly+2}
104. [Find the average height of a quarterback](https://platform.stratascratch.com/coding/9656-find-the-average-height-of-a-quarterback) {StrataScratch PRO · Easy · ESPN}
105. [MacBookPro User Event Count](https://platform.stratascratch.com/coding/9653-count-the-number-of-user-events-performed-by-macbookpro-users) {StrataScratch · Easy · Apple}
106. [Find the unique room types](https://platform.stratascratch.com/coding/9642-find-the-number-of-unique-properties) {StrataScratch PRO · Medium · Airbnb}
107. [Find the number of users that have done a search](https://platform.stratascratch.com/coding/9641-find-the-number-of-users-that-have-done-a-search) {StrataScratch PRO · Easy · Airbnb}
108. [Find the average number of searches from each user](https://platform.stratascratch.com/coding/9640-find-the-average-number-of-searches-from-each-user) {StrataScratch PRO · Easy · Airbnb}
109. [Total Searches For Rooms](https://platform.stratascratch.com/coding/9638-total-searches-for-rooms) {StrataScratch PRO · Medium · Airbnb}
110. [Find the count of verified and non-verified Airbnb hosts](https://platform.stratascratch.com/coding/9629-find-the-count-of-verified-and-non-verified-airbnb-hosts) {StrataScratch PRO · Medium · Airbnb}
111. [Find the search details for villas and houses with wireless internet access](https://platform.stratascratch.com/coding/9619-find-the-search-details-for-villas-and-houses-with-wireless-internet-access) {StrataScratch PRO · Easy · Airbnb}
112. [Find searches for Los Angeles neighborhoods.](https://platform.stratascratch.com/coding/9618-find-distinct-searches-for-los-angeles-neighborhoods) {StrataScratch PRO · Easy · Airbnb}
113. [Find Nexus5 control group users in Italy who don't speak Italian](https://platform.stratascratch.com/coding/9609-find-nexus5-control-group-users-in-italy-who-dont-speak-italian) {StrataScratch PRO · Medium · Google}
114. [Find the average rating of movie stars](https://platform.stratascratch.com/coding/9605-find-the-average-rating-of-movie-stars) {StrataScratch PRO · Medium · Google+1}
115. [Find fare differences on the Titanic using a self join](https://platform.stratascratch.com/coding/9603-find-fare-differences-on-the-titanic-using-a-self-join) {StrataScratch PRO · Hard · LinkedIn+1}
116. [Find non-HS SAT scores](https://platform.stratascratch.com/coding/9598-find-non-hs-sat-scores) {StrataScratch PRO · Easy · General Assembly+2}
117. [Sales Evaluation on Media Formats](https://platform.stratascratch.com/coding/2158-sales-evaluation-on-media-formats) {StrataScratch PRO · Medium · Meta}
118. [Ad Performance Rating](https://platform.stratascratch.com/coding/2155-ad-performance-rating) {StrataScratch PRO · Medium · Accenture}
119. [Customer Consumable Sales Percentages](https://platform.stratascratch.com/coding/2149-customer-consumable-sales-percentages) {StrataScratch PRO · Medium · Meta}
120. [Average Age of Claims by Gender](https://platform.stratascratch.com/coding/2139-average-age-of-claims-by-gender) {StrataScratch PRO · Medium · CVS Health}
121. [Book Sales](https://platform.stratascratch.com/coding/2128-book-sales) {StrataScratch PRO · Medium · Amazon}
122. [Sales Revenue](https://platform.stratascratch.com/coding/2127-sales-revenue) {StrataScratch PRO · Easy · Amazon}
123. [Shipped by Speedy Express](https://platform.stratascratch.com/coding/2116-shipped-by-speedy-express) {StrataScratch PRO · Easy · Shopify}
124. [Flags per Video](https://platform.stratascratch.com/coding/2102-flags-per-video) {StrataScratch · Medium · Netflix+1}
125. [Salary by Education](https://platform.stratascratch.com/coding/2100-salary-by-education) {StrataScratch PRO · Easy · Google}
126. [Number of Conversations](https://platform.stratascratch.com/coding/2086-number-of-conversations) {StrataScratch PRO · Medium · Meta}
127. [Sales with Valid Promotion](https://platform.stratascratch.com/coding/2069-sales-with-valid-promotion) {StrataScratch PRO · Easy · Meta}
128. [Total Shipment Weight](https://platform.stratascratch.com/coding/2058-total-shipment-weight) {StrataScratch PRO · Easy · Amazon}
129. [Total Sales In Different Currencies](https://platform.stratascratch.com/coding/2041-total-sales-in-different-currencies) {StrataScratch PRO · Medium · Goldman Sachs+1}
130. [WFM Brand Segmentation based on Customer Activity](https://platform.stratascratch.com/coding/2038-wfm-brand-segmentation-based-on-customer-activity) {StrataScratch PRO · Hard · Whole Foods Market}
131. [Avg Order Cost During Rush Hours](https://platform.stratascratch.com/coding/2035-avg-order-cost-during-rush-hours) {StrataScratch PRO · Medium · DoorDash}
132. [Signups By Billing Cycle](https://platform.stratascratch.com/coding/2032-signups-by-billing-cycle) {StrataScratch PRO · Medium · Asana+1}
133. [Bottom 2 Companies By Mobile Usage](https://platform.stratascratch.com/coding/2026-bottom-2-companies-by-mobile-usage) {StrataScratch PRO · Medium · Apple+1}
134. [Users Exclusive Per Client](https://platform.stratascratch.com/coding/2025-users-exclusive-per-client) {StrataScratch PRO · Medium · Apple+2}
135. [Customer Average Orders](https://platform.stratascratch.com/coding/2013-customer-average-orders) {StrataScratch PRO · Easy · Postmates}
136. [Streamer Sessions by Initial Viewers](https://platform.stratascratch.com/coding/2012-viewers-turned-streamers) {StrataScratch PRO · Hard · Twitch}
137. [Patient Support Analysis (Part 1)](https://datalemur.com/questions/frequent-callers) {DataLemur · Easy · UnitedHealth}
138. [Patient Support Analysis (Part 2)](https://datalemur.com/questions/uncategorized-calls-percentage) {DataLemur · Medium · UnitedHealth}
139. [Patient Support Analysis (Part 3)](https://datalemur.com/questions/patient-call-history) {DataLemur · Hard · UnitedHealth}
140. [Patient Support Analysis (Part 4)](https://datalemur.com/questions/long-calls-growth) {DataLemur · Hard · UnitedHealth}
141. [Game Play Analysis II](https://leetcode.com/problems/game-play-analysis-ii/) {LeetCode Premium · Easy}
142. [Game Play Analysis III](https://leetcode.com/problems/game-play-analysis-iii/) {LeetCode Premium · Med}
143. [Count Student Number in Departments](https://leetcode.com/problems/count-student-number-in-departments/) {LeetCode Premium · Med}
144. [Product Sales Analysis II](https://leetcode.com/problems/product-sales-analysis-ii/) {LeetCode Premium · Easy}
145. [Sales Analysis I](https://leetcode.com/problems/sales-analysis-i/) {LeetCode Premium · Easy}
146. [Sales Analysis II](https://leetcode.com/problems/sales-analysis-ii/) {LeetCode Premium · Easy}
147. [Game Play Analysis V](https://leetcode.com/problems/game-play-analysis-v/) {LeetCode Premium · Hard}
148. [Market Analysis II](https://leetcode.com/problems/market-analysis-ii/) {LeetCode Premium · Hard}
149. [Number of Comments per Post](https://leetcode.com/problems/number-of-comments-per-post/) {LeetCode Premium · Easy}
150. [Find the Start and End Number of Continuous Ranges](https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/) {LeetCode Premium · Med}
151. [Ads Performance](https://leetcode.com/problems/ads-performance/) {LeetCode Premium · Easy}
152. [Activity Participants](https://leetcode.com/problems/activity-participants/) {LeetCode Premium · Med}
153. [Number of Trusted Contacts of a Customer](https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/) {LeetCode Premium · Med}
154. [Calculate Salaries](https://leetcode.com/problems/calculate-salaries/) {LeetCode Premium · Med}
155. [Number of Calls Between Two Persons](https://leetcode.com/problems/number-of-calls-between-two-persons/) {LeetCode Premium · Med}
156. [Count Apples and Oranges](https://leetcode.com/problems/count-apples-and-oranges/) {LeetCode Premium · Med}
157. [Product's Price for Each Store](https://leetcode.com/problems/products-price-for-each-store/) {LeetCode Premium · Easy}
158. [Find Interview Candidates](https://leetcode.com/problems/find-interview-candidates/) {LeetCode Premium · Med}
159. [Find Cutoff Score for Each School](https://leetcode.com/problems/find-cutoff-score-for-each-school/) {LeetCode Premium · Med}
160. [Count the Number of Experiments](https://leetcode.com/problems/count-the-number-of-experiments/) {LeetCode Premium · Med}
161. [The Number of Seniors and Juniors to Join the Company](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/) {LeetCode Premium · Hard}
162. [The Number of Seniors and Juniors to Join the Company II](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company-ii/) {LeetCode Premium · Hard}
163. [The Number of Rich Customers](https://leetcode.com/problems/the-number-of-rich-customers/) {LeetCode Premium · Easy}
164. [The Number of Passengers in Each Bus I](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/) {LeetCode Premium · Med}
165. [The Number of Passengers in Each Bus II](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/) {LeetCode Premium · Hard}
166. [The Number of Users That Are Eligible for Discount](https://leetcode.com/problems/the-number-of-users-that-are-eligible-for-discount/) {LeetCode Premium · Easy}
167. [Number of Times a Driver Was a Passenger](https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/) {LeetCode Premium · Med}
168. [Tasks Count in the Weekend](https://leetcode.com/problems/tasks-count-in-the-weekend/) {LeetCode Premium · Med}
169. [Arrange Table by Gender](https://leetcode.com/problems/arrange-table-by-gender/) {LeetCode Premium · Med}
170. [Product Sales Analysis IV](https://leetcode.com/problems/product-sales-analysis-iv/) {LeetCode Premium · Med}
171. [Product Sales Analysis V](https://leetcode.com/problems/product-sales-analysis-v/) {LeetCode Premium · Easy}
172. [Calculate the Influence of Each Salesperson](https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/) {LeetCode Premium · Med}
173. [Find Latest Salaries](https://leetcode.com/problems/find-latest-salaries/) {LeetCode Premium · Easy}
174. [Flight Occupancy and Waitlist Analysis](https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/) {LeetCode Premium · Med}
175. [Total Traveled Distance](https://leetcode.com/problems/total-traveled-distance/) {LeetCode Premium · Easy}
176. [Calculate Orders Within Each Interval](https://leetcode.com/problems/calculate-orders-within-each-interval/) {LeetCode Premium · Med}
177. [Market Analysis III](https://leetcode.com/problems/market-analysis-iii/) {LeetCode Premium · Med}
178. [Calculate Compressed Mean](https://leetcode.com/problems/calculate-compressed-mean/) {LeetCode Premium · Easy}
179. [Find Third Transaction](https://leetcode.com/problems/find-third-transaction/) {LeetCode Premium · Med}
180. [Class Performance](https://leetcode.com/problems/class-performance/) {LeetCode Premium · Med}
181. [Pizza Toppings Cost Analysis](https://leetcode.com/problems/pizza-toppings-cost-analysis/) {LeetCode Premium · Med}
182. [Find Candidates for Data Scientist Position](https://leetcode.com/problems/find-candidates-for-data-scientist-position/) {LeetCode Premium · Easy}
183. [Snaps Analysis](https://leetcode.com/problems/snaps-analysis/) {LeetCode Premium · Med}
184. [Calculate Trapping Rain Water](https://leetcode.com/problems/calculate-trapping-rain-water/) {LeetCode Premium · Hard}
185. [Find Trending Hashtags](https://leetcode.com/problems/find-trending-hashtags/) {LeetCode Premium · Med}
186. [Find Bursty Behavior](https://leetcode.com/problems/find-bursty-behavior/) {LeetCode Premium · Med}
187. [Find Trending Hashtags II](https://leetcode.com/problems/find-trending-hashtags-ii/) {LeetCode Premium · Hard}
188. [Find Longest Calls](https://leetcode.com/problems/find-longest-calls/) {LeetCode Premium · Med}
189. [Bitwise User Permissions Analysis](https://leetcode.com/problems/bitwise-user-permissions-analysis/) {LeetCode Premium · Med}
190. [Customer Purchasing Behavior Analysis](https://leetcode.com/problems/customer-purchasing-behavior-analysis/) {LeetCode Premium · Med}
191. [Find Overlapping Shifts](https://leetcode.com/problems/find-overlapping-shifts/) {LeetCode Premium · Med}
192. [Find Overlapping Shifts II](https://leetcode.com/problems/find-overlapping-shifts-ii/) {LeetCode Premium · Hard}
193. [Find Candidates for Data Scientist Position II](https://leetcode.com/problems/find-candidates-for-data-scientist-position-ii/) {LeetCode Premium · Med}
194. [Calculate Product Final Price](https://leetcode.com/problems/calculate-product-final-price/) {LeetCode Premium · Med}
195. [Team Dominance by Pass Success](https://leetcode.com/problems/team-dominance-by-pass-success/) {LeetCode Premium · Hard}
196. [Find Circular Gift Exchange Chains](https://leetcode.com/problems/find-circular-gift-exchange-chains/) {LeetCode Premium · Hard}
197. [Find Students Who Improved](https://leetcode.com/problems/find-students-who-improved/) {LeetCode · Med}
198. [Find Invalid IP Addresses](https://leetcode.com/problems/find-invalid-ip-addresses/) {LeetCode · Hard}
199. [Find Consistently Improving Employees](https://leetcode.com/problems/find-consistently-improving-employees/) {LeetCode · Med}
200. [Find COVID Recovery Patients](https://leetcode.com/problems/find-covid-recovery-patients/) {LeetCode · Med}
201. [Find Drivers with Improved Fuel Efficiency](https://leetcode.com/problems/find-drivers-with-improved-fuel-efficiency/) {LeetCode · Med}
202. [Find Overbooked Employees](https://leetcode.com/problems/find-overbooked-employees/) {LeetCode · Med}

## General Filtering & Miscellaneous Practice

- Invariant: Real problems whose title alone doesn't cleanly signal one specific technique -- treat this as a grab-bag of realistic, unguided practice: you won't know the pattern going in, which is the point.

1. [Recommendation System](https://platform.stratascratch.com/coding/2081-recommendation-system) {StrataScratch PRO · Medium · Meta}
2. [New Products](https://platform.stratascratch.com/coding/10318-new-products) {StrataScratch PRO · Medium · Tesla+1}
3. [Salaries Differences](https://platform.stratascratch.com/coding/10308-salaries-differences) {StrataScratch PRO · Easy · LinkedIn+1}
4. [Abigail Breslin Nominations](https://platform.stratascratch.com/coding/10128-count-the-number-of-movies-that-abigail-breslin-nominated-for-oscar) {StrataScratch PRO · Easy · Google+1}
5. [Aroma-based Winery Search.](https://platform.stratascratch.com/coding/10026-find-all-wineries-which-produce-wines-by-possessing-aromas-of-plum-cherry-rose-or-hazelnut) {StrataScratch PRO · Medium · Wine Magazine}
6. [Captain Base Pay](https://platform.stratascratch.com/coding/9972-find-the-base-pay-for-police-captains) {StrataScratch PRO · Easy · City of San Francisco}
7. [Submission Types](https://platform.stratascratch.com/coding/2002-submission-types) {StrataScratch PRO · Easy · MetLife+2}
8. [Customer Tracking](https://platform.stratascratch.com/coding/2136-customer-tracking) {StrataScratch PRO · Hard · Shopify+1}
9. [Bikes Last Used](https://platform.stratascratch.com/coding/10176-bikes-last-used) {StrataScratch PRO · Easy · DoorDash+1}
10. [User Streaks](https://platform.stratascratch.com/coding/2131-user-streaks) {StrataScratch PRO · Hard · LinkedIn+1}
11. [Customer Details](https://platform.stratascratch.com/coding/9891-customer-details) {StrataScratch PRO · Easy · Apple+1}
12. [VR App Sessions](https://platform.stratascratch.com/coding/10569-vr-app-sessions) {StrataScratch PRO · Medium · Meta+2}
13. [Mobile & Web Users](https://platform.stratascratch.com/coding/10561-mobile-web-users) {StrataScratch PRO · Easy · Meta+1}
14. [Pages Currently Active](https://platform.stratascratch.com/coding/10556-pages-currently-active) {StrataScratch PRO · Medium · Meta}
15. [High-Density Areas](https://platform.stratascratch.com/coding/10544-high-density-areas) {StrataScratch PRO · Medium · Visa}
16. [Aggregate Listening Data](https://platform.stratascratch.com/coding/10367-aggregate-listening-data) {StrataScratch PRO · Easy · Spotify}
17. [Friday Purchases](https://platform.stratascratch.com/coding/10358-friday-purchases) {StrataScratch PRO · Hard · IBM}
18. [Finding Doctors](https://platform.stratascratch.com/coding/10356-finding-doctors) {StrataScratch PRO · Easy · Google}
19. [Distances Traveled](https://platform.stratascratch.com/coding/10324-distances-traveled) {StrataScratch PRO · Medium · Lyft}
20. [Expensive Projects](https://platform.stratascratch.com/coding/10301-expensive-projects) {StrataScratch PRO · Medium · Microsoft}
21. [SMS Confirmations From Users](https://platform.stratascratch.com/coding/10291-sms-confirmations-from-users) {StrataScratch PRO · Medium · Meta}
22. [Reviews of Hotel Arena](https://platform.stratascratch.com/coding/10166-reviews-of-hotel-arena) {StrataScratch PRO · Easy · Expedia+1}
23. [Gender With Generous Reviews](https://platform.stratascratch.com/coding/10149-gender-with-generous-reviews) {StrataScratch PRO · Easy · Airbnb}
24. [Apple Product Counts](https://platform.stratascratch.com/coding/10141-apple-product-counts) {StrataScratch PRO · Medium · Apple+1}
25. [MacBook Pro Events](https://platform.stratascratch.com/coding/10140-macbook-pro-events) {StrataScratch PRO · Medium · Apple+1}
26. [Even-numbered IDs Hired in June](https://platform.stratascratch.com/coding/10137-find-workers-with-an-even-number-for-worker-id) {StrataScratch PRO · Easy · Bosch+1}
27. [Odd-numbered ID's Hired in February](https://platform.stratascratch.com/coding/10136-find-workers-with-an-odd-number-for-worker-id) {StrataScratch PRO · Easy · Bosch+1}
28. [Spam Posts](https://platform.stratascratch.com/coding/10134-spam-posts) {StrataScratch PRO · Medium · Meta}
29. [User Exile](https://platform.stratascratch.com/coding/10091-user-exile) {StrataScratch PRO · Easy · Meta}
30. [Liked' Posts](https://platform.stratascratch.com/coding/10088-liked-posts) {StrataScratch PRO · Medium · Meta}
31. [Favorite Host Nationality](https://platform.stratascratch.com/coding/10073-favorite-host-nationality) {StrataScratch PRO · Medium · Airbnb}
32. [Guest Or Host Kindness](https://platform.stratascratch.com/coding/10072-guest-or-host-kindness) {StrataScratch PRO · Easy · Airbnb}
33. [Hosts' Abroad Apartments](https://platform.stratascratch.com/coding/10071-hosts-abroad-apartments) {StrataScratch PRO · Medium · Airbnb}
34. [DeepMind employment competition](https://platform.stratascratch.com/coding/10070-deepmind-employment-competition) {StrataScratch PRO · Medium · Google}
35. [Google Fit User Tracking](https://platform.stratascratch.com/coding/10067-google-fit-user-tracking) {StrataScratch PRO · Hard · Google}
36. [Popularity of Hack](https://platform.stratascratch.com/coding/10061-popularity-of-hack) {StrataScratch PRO · Easy · Meta}
37. [Records With '?'](https://platform.stratascratch.com/coding/10055-records-with) {StrataScratch PRO · Easy · Yelp}
38. [Macedonian Vintages](https://platform.stratascratch.com/coding/10039-macedonian-vintages) {StrataScratch PRO · Medium · Wine Magazine}
39. [Wine Variety Revenues](https://platform.stratascratch.com/coding/10033-wine-variety-revenues) {StrataScratch PRO · Medium · Wine Magazine}
40. [Wine varieties tasted by 'Roger Voss'](https://platform.stratascratch.com/coding/10024-wine-varieties-tasted-by-roger-voss) {StrataScratch · Easy · Wine Magazine}
41. [Positive Ad Channels](https://platform.stratascratch.com/coding/10013-positive-ad-channels) {StrataScratch PRO · Hard · Uber}
42. [Advertising Channel Effectiveness](https://platform.stratascratch.com/coding/10012-advertising-channel-effectiveness) {StrataScratch PRO · Medium · Uber}
43. [Lyft Driver Wages](https://platform.stratascratch.com/coding/10003-lyft-driver-wages) {StrataScratch · Easy · Lyft}
44. [Overtime Pay](https://platform.stratascratch.com/coding/9987-overtime-pay) {StrataScratch PRO · Medium · City of San Francisco}
45. [METROPOLITAN TRANSIT AUTHORITY' Employees](https://platform.stratascratch.com/coding/9975-metropolitan-transit-authority-employees) {StrataScratch PRO · Easy · City of San Francisco}
46. [Benefits Of Employees Called Patrick](https://platform.stratascratch.com/coding/9974-benefits-of-employees-called-patric) {StrataScratch PRO · Easy · City of San Francisco}
47. [Quarterback With The Longest Throw](https://platform.stratascratch.com/coding/9966-quarterback-with-the-longest-throw) {StrataScratch PRO · Hard · ESPN}
48. [Norwegian Alpine Skiers](https://platform.stratascratch.com/coding/9955-norwegian-alpine-skiers) {StrataScratch PRO · Hard · ESPN}
49. [European Olympics](https://platform.stratascratch.com/coding/9951-european-olympics) {StrataScratch PRO · Medium · ESPN}
50. [Athletes On Single Or Multiple Teams](https://platform.stratascratch.com/coding/9949-athletes-on-single-or-multiple-teams) {StrataScratch PRO · Medium · ESPN}
51. [London Olympic Swimmers](https://platform.stratascratch.com/coding/9934-london-olympic-swimmers) {StrataScratch PRO · Easy · ESPN}
52. [Women In The Olympics Before World War 2](https://platform.stratascratch.com/coding/9932-women-in-the-olympics-before-world-war-2) {StrataScratch PRO · Easy · Google+1}
53. [Patrons Who Renewed Books](https://platform.stratascratch.com/coding/9931-patrons-who-renewed-books) {StrataScratch PRO · Easy · City of San Francisco}
54. [Department Salaries](https://platform.stratascratch.com/coding/9921-department-salaries) {StrataScratch PRO · Medium · LinkedIn+2}
55. [Favorite Customer](https://platform.stratascratch.com/coding/9910-favorite-customer) {StrataScratch PRO · Medium · Ebay+2}
56. [Customer Orders and Details](https://platform.stratascratch.com/coding/9908-customer-orders-and-details) {StrataScratch PRO · Medium · Ebay+1}
57. [Employees With Bonuses](https://platform.stratascratch.com/coding/9903-employees-with-bonuses) {StrataScratch PRO · Easy · Salesforce+2}
58. [Super Managers](https://platform.stratascratch.com/coding/9901-super-managers) {StrataScratch PRO · Medium · Walmart+1}
59. [Distinct Salaries](https://platform.stratascratch.com/coding/9898-unique-salaries) {StrataScratch PRO · Hard · Twitter}
60. [Duplicate Emails](https://platform.stratascratch.com/coding/9895-duplicate-emails) {StrataScratch PRO · Medium · Dropbox+3}
61. [Frequent Customers](https://platform.stratascratch.com/coding/9893-duplicate-orders) {StrataScratch PRO · Medium · Amazon+1}
62. [Highly Reviewed Hotels](https://platform.stratascratch.com/coding/9871-highly-reviewed-hotels) {StrataScratch PRO · Easy · Amadeus+2}
63. [Last Five Records of Dataset](https://platform.stratascratch.com/coding/9864-find-the-last-five-records-of-the-dataset) {StrataScratch PRO · Easy · Visa+1}
64. [Departments With Less Than 4 Employees](https://platform.stratascratch.com/coding/9860-find-departments-with-less-than-4-employees) {StrataScratch PRO · Medium · Amazon}
65. [First 50% of Records From Dataset](https://platform.stratascratch.com/coding/9859-find-the-first-50-records-of-the-dataset) {StrataScratch PRO · Medium · Bosch+1}
66. [Workers Who Are Also Managers](https://platform.stratascratch.com/coding/9848-find-all-workers-who-are-also-managers) {StrataScratch PRO · Medium · DoorDash+2}
67. [Full Names of Employees With Salaries in a Specific Range](https://platform.stratascratch.com/coding/9846-find-the-full-name-of-workers-whose-salaries-50000-and-100000) {StrataScratch PRO · Easy · Amazon}
68. [Employees Who Joined in February 2014](https://platform.stratascratch.com/coding/9844-find-all-workers-who-joined-on-february-2014) {StrataScratch PRO · Easy · Amazon}
69. [Employees With Salary Between Given Range](https://platform.stratascratch.com/coding/9843-find-all-workers-whose-salary-lies-between-100000-and-500000) {StrataScratch PRO · Easy · Amazon}
70. [Admin Department Workers](https://platform.stratascratch.com/coding/9839-find-all-workers-that-work-in-the-admin-department) {StrataScratch PRO · Easy · Amazon}
71. [Combine Workers First and Last Names](https://platform.stratascratch.com/coding/9834-combine-the-first-and-last-names-of-workers) {StrataScratch PRO · Easy · Amazon}
72. [Positions Of Letter 'a'](https://platform.stratascratch.com/coding/9829-positions-of-letter-a) {StrataScratch PRO · Easy · Square+1}
73. [Common Letters](https://platform.stratascratch.com/coding/9823-common-letters) {StrataScratch PRO · Hard · Google}
74. [File Contents Shuffle](https://platform.stratascratch.com/coding/9818-file-contents-shuffle) {StrataScratch PRO · Hard · Google}
75. [Records With Words Starting With 'g'](https://platform.stratascratch.com/coding/9806-find-all-records-with-words-that-start-with-the-letter-g) {StrataScratch PRO · Easy · Google}
76. [Words With Two Vowels](https://platform.stratascratch.com/coding/9794-words-with-two-vowels) {StrataScratch PRO · Hard · Google}
77. [User Feature Completion](https://platform.stratascratch.com/coding/9792-user-feature-completion) {StrataScratch PRO · Medium · Meta}
78. [User Scroll Up Events](https://platform.stratascratch.com/coding/9787-user-scroll-up-events) {StrataScratch PRO · Easy · Meta}
79. [Successfully Sent Messages](https://platform.stratascratch.com/coding/9777-successfully-sent-messages) {StrataScratch PRO · Medium · Meta}
80. [Common Interests Amongst Users](https://platform.stratascratch.com/coding/9776-common-interests-amongst-users) {StrataScratch PRO · Hard · Meta}
81. [Posts with 'nba' substring in keyword](https://platform.stratascratch.com/coding/9768-find-all-posts-with-the-keyword-nba) {StrataScratch PRO · Easy · Meta}
82. [NFL Powerhouse Colleges](https://platform.stratascratch.com/coding/9759-nfl-powerhouse-colleges) {StrataScratch PRO · Medium · ESPN}
83. [Inspection Scores For Businesses](https://platform.stratascratch.com/coding/9741-inspection-scores-for-businesses) {StrataScratch PRO · Hard · City of San Francisco}
84. [Dates Of Inspection](https://platform.stratascratch.com/coding/9714-dates-of-inspection) {StrataScratch PRO · Hard · City of Los Angeles}
85. [Facilities With Lots Of Inspections](https://platform.stratascratch.com/coding/9711-facilities-with-lots-of-inspections) {StrataScratch PRO · Hard · City of Los Angeles}
86. [Owners With 3 Grades](https://platform.stratascratch.com/coding/9710-owners-with-3-grades) {StrataScratch PRO · Medium · Tripadvisor+1}
87. [Rules To Determine Grades](https://platform.stratascratch.com/coding/9700-rules-to-determine-grades) {StrataScratch PRO · Medium · City of Los Angeles}
88. [BAKERY' Owned Facilities](https://platform.stratascratch.com/coding/9697-bakery-owned-facilities) {StrataScratch PRO · Easy · City of Los Angeles}
89. [Single Facility Corporations](https://platform.stratascratch.com/coding/9694-single-facility-corporations) {StrataScratch PRO · Medium · City of Los Angeles}
90. [Facility Zip Codes](https://platform.stratascratch.com/coding/9691-facility-zip-codes) {StrataScratch PRO · Easy · City of Los Angeles}
91. [Inspection For Glassell Coffee Shop](https://platform.stratascratch.com/coding/9689-inspection-for-glassell-coffee-shop) {StrataScratch · Easy · City of Los Angeles}
92. [Companies With Chinese Speakers](https://platform.stratascratch.com/coding/9685-companies-with-chinese-speakers) {StrataScratch PRO · Easy · Google}
93. [English, German, French, Spanish Speakers](https://platform.stratascratch.com/coding/9668-english-german-french-spanish-speakers) {StrataScratch PRO · Medium · Google}
94. [Underweight/Overweight Athletes](https://platform.stratascratch.com/coding/9658-underweightoverweight-athletes) {StrataScratch PRO · Medium · ESPN}
95. [Drafted Into NFL](https://platform.stratascratch.com/coding/9648-drafted-into-nfl) {StrataScratch PRO · Easy · ESPN}
96. [Cheapest Neighborhood With Real Beds And Internet](https://platform.stratascratch.com/coding/9636-cheapest-neighborhoods-with-real-beds-and-internet) {StrataScratch PRO · Medium · Airbnb}
97. [Host Response Rates With Cleaning Fees](https://platform.stratascratch.com/coding/9634-host-response-rates-with-cleaning-fees) {StrataScratch PRO · Medium · Airbnb}
98. [Host Popularity Rental Prices](https://platform.stratascratch.com/coding/9632-host-popularity-rental-prices) {StrataScratch PRO · Medium · Airbnb}
99. [Reviews Bins on Reviews Number](https://platform.stratascratch.com/coding/9628-reviews-bins-on-reviews-number) {StrataScratch PRO · Easy · Airbnb}
100. [Cheapest Properties](https://platform.stratascratch.com/coding/9625-cheapest-properties) {StrataScratch PRO · Easy · Airbnb}
101. [Solo Apartment Search](https://platform.stratascratch.com/coding/9615-find-out-search-details-for-apartments-designed-for-a-sole-person-stay) {StrataScratch PRO · Easy · Airbnb}
102. [Keywords From Yelp Reviews](https://platform.stratascratch.com/coding/9612-keywords-from-yelp-reviews) {StrataScratch PRO · Hard · Yelp}
103. [Exclusive Amazon Products](https://platform.stratascratch.com/coding/9608-exclusive-amazon-products) {StrataScratch PRO · Hard · Amazon}
104. [Dirty Hotel Rooms](https://platform.stratascratch.com/coding/9602-dirty-hotel-rooms) {StrataScratch PRO · Easy · Tripadvisor+2}
105. [Old And Young Athletes](https://platform.stratascratch.com/coding/9599-old-and-young-athletes) {StrataScratch PRO · Medium · ESPN+1}
106. [April & May Sign Up's](https://platform.stratascratch.com/coding/2159-april-may-sign-ups) {StrataScratch PRO · Easy · Amazon}
107. [Unique Employee Logins](https://platform.stratascratch.com/coding/2156-unique-employee-logins) {StrataScratch PRO · Easy · Meta}
108. [Successful Customer Sign Up Responses](https://platform.stratascratch.com/coding/2152-successful-customer-sign-up-responses) {StrataScratch PRO · Medium · Amazon+1}
109. [Customers Who Purchased the Same Product](https://platform.stratascratch.com/coding/2150-customers-who-purchased-the-same-product) {StrataScratch PRO · Medium · Meta}
110. [Flight Satisfaction Query](https://platform.stratascratch.com/coding/2144-flight-satisfaction-2022) {StrataScratch PRO · Medium · Tata Consultancy}
111. [Invalid Bank Transactions](https://platform.stratascratch.com/coding/2143-invalid-bank-transactions) {StrataScratch PRO · Medium · Chase+2}
112. [Third Heaviest Shipment](https://platform.stratascratch.com/coding/2142-third-heaviest-package) {StrataScratch PRO · Easy · Amazon}
113. [Completed Trip within 168 Hours](https://platform.stratascratch.com/coding/2134-completed-trip-within-168-hours) {StrataScratch PRO · Hard · Uber}
114. [Caller History](https://platform.stratascratch.com/coding/2132-caller-history) {StrataScratch PRO · Medium · Etsy+1}
115. [Duplicate Training Lessons](https://platform.stratascratch.com/coding/2130-duplicate-training-lessons) {StrataScratch PRO · Medium · General Assembly+1}
116. [Post Likes](https://platform.stratascratch.com/coding/2129-post-likes) {StrataScratch PRO · Easy · Meta}
117. [Process a Refund](https://platform.stratascratch.com/coding/2125-process-a-refund) {StrataScratch PRO · Medium · Noom}
118. [Product Families](https://platform.stratascratch.com/coding/2123-product-families) {StrataScratch PRO · Hard · Meta}
119. [First Ever Ratings](https://platform.stratascratch.com/coding/2114-first-ever-ratings) {StrataScratch PRO · Medium · DoorDash}
120. [Extremely Late Delivery](https://platform.stratascratch.com/coding/2113-extremely-late-delivery) {StrataScratch PRO · Medium · Yelp+1}
121. [Product Market Share](https://platform.stratascratch.com/coding/2112-product-market-share) {StrataScratch PRO · Hard · Shopify+1}
122. [Primary Key Violation](https://platform.stratascratch.com/coding/2107-primary-key-violation) {StrataScratch PRO · Easy · Apple+1}
123. [Election Results](https://platform.stratascratch.com/coding/2099-election-results) {StrataScratch PRO · Medium · Deloitte+1}
124. [World Tours](https://platform.stratascratch.com/coding/2098-world-tours) {StrataScratch PRO · Medium · Expedia+2}
125. [Completed Tasks](https://platform.stratascratch.com/coding/2096-completed-tasks) {StrataScratch PRO · Medium · Asana}
126. [Three Purchases](https://platform.stratascratch.com/coding/2095-three-purchases) {StrataScratch PRO · Medium · Amazon}
127. [Cookbook Recipes](https://platform.stratascratch.com/coding/2089-cookbook-recipes) {StrataScratch PRO · Hard · Ebay+1}
128. [Negative Reviews in New Locations](https://platform.stratascratch.com/coding/2087-negative-reviews-in-new-locations) {StrataScratch PRO · Hard · Instacart}
129. [Blocked Users](https://platform.stratascratch.com/coding/2084-blocked-users) {StrataScratch PRO · Medium · Meta}
130. [Pending Claims](https://platform.stratascratch.com/coding/2083-pending-claims) {StrataScratch PRO · Easy · CVS Health}
131. [From Microsoft to Google](https://platform.stratascratch.com/coding/2078-from-microsoft-to-google) {StrataScratch PRO · Hard · LinkedIn}
132. [Employed at Google](https://platform.stratascratch.com/coding/2077-employed-at-google) {StrataScratch PRO · Medium · LinkedIn}
133. [Homework Results](https://platform.stratascratch.com/coding/2075-homework-results) {StrataScratch PRO · Medium · Allstate}
134. [Popular Posts](https://platform.stratascratch.com/coding/2073-popular-posts) {StrataScratch PRO · Hard · Google+2}
135. [Same Brand Purchases](https://platform.stratascratch.com/coding/2071-customers-with-specific-brands) {StrataScratch PRO · Medium · Meta}
136. [Successful Lower Priced Product](https://platform.stratascratch.com/coding/2068-find-products) {StrataScratch PRO · Medium · Meta}
137. [Low Fat and Recyclable](https://platform.stratascratch.com/coding/2067-low-fat-and-recyclable) {StrataScratch PRO · Easy · Meta}
138. [Fastest Hometowns](https://platform.stratascratch.com/coding/2066-fastest-hometowns) {StrataScratch PRO · Medium · EY+1}
139. [Users with Many Searches](https://platform.stratascratch.com/coding/2061-users-with-many-searches) {StrataScratch PRO · Easy · Meta}
140. [Weight For First Shipment](https://platform.stratascratch.com/coding/2057-weight-for-first-shipment) {StrataScratch PRO · Easy · Amazon}
141. [Employees' Years In Service](https://platform.stratascratch.com/coding/2042-employees-years-in-service) {StrataScratch PRO · Medium · Uber}
142. [Delivering and Placing Orders](https://platform.stratascratch.com/coding/2037-delivering-and-placing-orders) {StrataScratch PRO · Hard · DoorDash}
143. [New And Existing Users](https://platform.stratascratch.com/coding/2028-new-and-existing-users) {StrataScratch PRO · Hard · IBM+2}
144. [Call Declines](https://platform.stratascratch.com/coding/2020-call-declines) {StrataScratch PRO · Medium · Ring Central}
145. [Paid Users In April 2020](https://platform.stratascratch.com/coding/2017-paid-users-in-april-2020) {StrataScratch PRO · Easy · Ring Central}
146. [Pizza Partners](https://platform.stratascratch.com/coding/2016-pizza-partners) {StrataScratch PRO · Medium · Postmates}
147. [Users With Two Statuses](https://platform.stratascratch.com/coding/2009-users-with-two-statuses) {StrataScratch PRO · Easy · Twitch}
148. [The Cheapest Airline Connection](https://platform.stratascratch.com/coding/2008-the-cheapest-airline-connection) {StrataScratch PRO · Hard · Delta Airlines}
149. [Recent Refinance Submissions](https://platform.stratascratch.com/coding/2003-recent-refinance-submissions) {StrataScratch PRO · Medium · MetLife+1}
150. [Pharmacy Analytics (Part 1)](https://datalemur.com/questions/top-profitable-drugs) {DataLemur · Easy · CVS Health}
151. [Pharmacy Analytics (Part 2)](https://datalemur.com/questions/non-profitable-drugs) {DataLemur · Easy · CVS Health}
152. [Pharmacy Analytics (Part 3)](https://datalemur.com/questions/total-drugs-sales) {DataLemur · Easy · CVS Health}
153. [Maximize Prime Item Inventory](https://datalemur.com/questions/prime-warehouse-storage) {DataLemur · Hard · Amazon}
154. [Weather Observation Station 4](https://www.hackerrank.com/challenges/weather-observation-station-4/problem) {HackerRank}
155. [Weather Observation Station 5](https://www.hackerrank.com/challenges/weather-observation-station-5/problem) {HackerRank}
156. [Weather Observation Station 6](https://www.hackerrank.com/challenges/weather-observation-station-6/problem) {HackerRank}
157. [Weather Observation Station 7](https://www.hackerrank.com/challenges/weather-observation-station-7/problem) {HackerRank}
158. [Weather Observation Station 8](https://www.hackerrank.com/challenges/weather-observation-station-8/problem) {HackerRank}
159. [Weather Observation Station 9](https://www.hackerrank.com/challenges/weather-observation-station-9/problem) {HackerRank}
160. [Weather Observation Station 10](https://www.hackerrank.com/challenges/weather-observation-station-10/problem) {HackerRank}
161. [Weather Observation Station 11](https://www.hackerrank.com/challenges/weather-observation-station-11/problem) {HackerRank}
162. [Weather Observation Station 12](https://www.hackerrank.com/challenges/weather-observation-station-12/problem) {HackerRank}
163. [Earnings Of Employees](https://www.hackerrank.com/challenges/earnings-of-employees/problem) {HackerRank}
164. [Weather Observation Station 2](https://www.hackerrank.com/challenges/weather-observation-station-2/problem) {HackerRank}
165. [Weather Observation Station 14](https://www.hackerrank.com/challenges/weather-observation-station-14/problem) {HackerRank}
166. [Weather Observation Station 15](https://www.hackerrank.com/challenges/weather-observation-station-15/problem) {HackerRank}
167. [Weather Observation Station 16](https://www.hackerrank.com/challenges/weather-observation-station-16/problem) {HackerRank}
168. [Weather Observation Station 17](https://www.hackerrank.com/challenges/weather-observation-station-17/problem) {HackerRank}
169. [Weather Observation Station 18](https://www.hackerrank.com/challenges/weather-observation-station-18/problem) {HackerRank}
170. [Weather Observation Station 19](https://www.hackerrank.com/challenges/weather-observation-station-19/problem) {HackerRank}
171. [Winning Candidate](https://leetcode.com/problems/winning-candidate/) {LeetCode Premium · Med}
172. [Shortest Distance in a Plane](https://leetcode.com/problems/shortest-distance-in-a-plane/) {LeetCode Premium · Med}
173. [Shortest Distance in a Line](https://leetcode.com/problems/shortest-distance-in-a-line/) {LeetCode Premium · Easy}
174. [Second Degree Follower](https://leetcode.com/problems/second-degree-follower/) {LeetCode Premium · Med}
175. [Project Employees II](https://leetcode.com/problems/project-employees-ii/) {LeetCode Premium · Easy}
176. [Project Employees III](https://leetcode.com/problems/project-employees-iii/) {LeetCode Premium · Med}
177. [Unpopular Books](https://leetcode.com/problems/unpopular-books/) {LeetCode Premium · Med}
178. [Reported Posts](https://leetcode.com/problems/reported-posts/) {LeetCode Premium · Easy}
179. [Active Businesses](https://leetcode.com/problems/active-businesses/) {LeetCode Premium · Med}
180. [User Purchase Platform](https://leetcode.com/problems/user-purchase-platform/) {LeetCode Premium · Hard}
181. [Reported Posts II](https://leetcode.com/problems/reported-posts-ii/) {LeetCode Premium · Med}
182. [Tournament Winners](https://leetcode.com/problems/tournament-winners/) {LeetCode Premium · Hard}
183. [Page Recommendations](https://leetcode.com/problems/page-recommendations/) {LeetCode Premium · Med}
184. [Students With Invalid Departments](https://leetcode.com/problems/students-with-invalid-departments/) {LeetCode Premium · Easy}
185. [NPV Queries](https://leetcode.com/problems/npv-queries/) {LeetCode Premium · Easy}
186. [Evaluate Boolean Expression](https://leetcode.com/problems/evaluate-boolean-expression/) {LeetCode Premium · Med}
187. [Apples & Oranges](https://leetcode.com/problems/apples-oranges/) {LeetCode Premium · Med}
188. [Rectangles Area](https://leetcode.com/problems/rectangles-area/) {LeetCode Premium · Med}
189. [Customer Order Frequency](https://leetcode.com/problems/customer-order-frequency/) {LeetCode Premium · Easy}
190. [Hopper Company Queries I](https://leetcode.com/problems/hopper-company-queries-i/) {LeetCode Premium · Hard}
191. [Hopper Company Queries II](https://leetcode.com/problems/hopper-company-queries-ii/) {LeetCode Premium · Hard}
192. [Hopper Company Queries III](https://leetcode.com/problems/hopper-company-queries-iii/) {LeetCode Premium · Hard}
193. [Product's Worth Over Invoices](https://leetcode.com/problems/products-worth-over-invoices/) {LeetCode Premium · Easy}
194. [Grand Slam Titles](https://leetcode.com/problems/grand-slam-titles/) {LeetCode Premium · Med}
195. [Ad-Free Sessions](https://leetcode.com/problems/ad-free-sessions/) {LeetCode Premium · Easy}
196. [League Statistics](https://leetcode.com/problems/league-statistics/) {LeetCode Premium · Med}
197. [Page Recommendations II](https://leetcode.com/problems/page-recommendations-ii/) {LeetCode Premium · Hard}
198. [Users That Actively Request Confirmation Messages](https://leetcode.com/problems/users-that-actively-request-confirmation-messages/) {LeetCode Premium · Easy}
199. [Strong Friendship](https://leetcode.com/problems/strong-friendship/) {LeetCode Premium · Med}
200. [Low-Quality Problems](https://leetcode.com/problems/low-quality-problems/) {LeetCode Premium · Easy}
201. [Accepted Candidates From the Interviews](https://leetcode.com/problems/accepted-candidates-from-the-interviews/) {LeetCode Premium · Med}
202. [The Winner University](https://leetcode.com/problems/the-winner-university/) {LeetCode Premium · Easy}
203. [Drop Type 1 Orders for Customers With Type 0 Orders](https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/) {LeetCode Premium · Med}
204. [Build the Equation](https://leetcode.com/problems/build-the-equation/) {LeetCode Premium · Hard}
205. [Order Two Columns Independently](https://leetcode.com/problems/order-two-columns-independently/) {LeetCode Premium · Med}
206. [Finding the Topic of Each Post](https://leetcode.com/problems/finding-the-topic-of-each-post/) {LeetCode Premium · Hard}
207. [Users With Two Purchases Within Seven Days](https://leetcode.com/problems/users-with-two-purchases-within-seven-days/) {LeetCode Premium · Med}
208. [The Users That Are Eligible for Discount](https://leetcode.com/problems/the-users-that-are-eligible-for-discount/) {LeetCode Premium · Easy}
209. [Dynamic Pivoting of a Table](https://leetcode.com/problems/dynamic-pivoting-of-a-table/) {LeetCode Premium · Hard}
210. [Dynamic Unpivoting of a Table](https://leetcode.com/problems/dynamic-unpivoting-of-a-table/) {LeetCode Premium · Hard}
211. [Generate the Invoice](https://leetcode.com/problems/generate-the-invoice/) {LeetCode Premium · Hard}
212. [Sort the Olympic Table](https://leetcode.com/problems/sort-the-olympic-table/) {LeetCode Premium · Easy}
213. [Employees With Deductions](https://leetcode.com/problems/employees-with-deductions/) {LeetCode Premium · Med}
214. [Customers With Strictly Increasing Purchases](https://leetcode.com/problems/customers-with-strictly-increasing-purchases/) {LeetCode Premium · Hard}
215. [Form a Chemical Bond](https://leetcode.com/problems/form-a-chemical-bond/) {LeetCode Premium · Easy}
216. [Merge Overlapping Events in the Same Hall](https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/) {LeetCode Premium · Hard}
217. [Immediate Food Delivery III](https://leetcode.com/problems/immediate-food-delivery-iii/) {LeetCode Premium · Med}
218. [Loan Types](https://leetcode.com/problems/loan-types/) {LeetCode Premium · Easy}
219. [Friday Purchases I](https://leetcode.com/problems/friday-purchases-i/) {LeetCode Premium · Med}
220. [Friday Purchases II](https://leetcode.com/problems/friday-purchases-ii/) {LeetCode Premium · Hard}
221. [Viewers Turned Streamers](https://leetcode.com/problems/viewers-turned-streamers/) {LeetCode Premium · Hard}
222. [Maximize Items](https://leetcode.com/problems/maximize-items/) {LeetCode Premium · Hard}
223. [Binary Tree Nodes](https://leetcode.com/problems/binary-tree-nodes/) {LeetCode Premium · Med}
224. [Employees Project Allocation](https://leetcode.com/problems/employees-project-allocation/) {LeetCode Premium · Hard}
225. [Friday Purchase III](https://leetcode.com/problems/friday-purchase-iii/) {LeetCode Premium · Med}
226. [Invalid Tweets II](https://leetcode.com/problems/invalid-tweets-ii/) {LeetCode Premium · Easy}
227. [Odd and Even Transactions](https://leetcode.com/problems/odd-and-even-transactions/) {LeetCode · Med}
228. [First Letter Capitalization](https://leetcode.com/problems/first-letter-capitalization/) {LeetCode Premium · Hard}
229. [First Letter Capitalization II](https://leetcode.com/problems/first-letter-capitalization-ii/) {LeetCode · Hard}
230. [DNA Pattern Recognition](https://leetcode.com/problems/dna-pattern-recognition/) {LeetCode · Med}
