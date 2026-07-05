# Intermediate To Frontier: 1000+ High-Return Coding Problem Ladders

This workbook is for someone who is already comfortable with normal LeetCode easy/medium lists and wants the next jump: hard interview patterns, competitive-programming ideas, merged concepts, and problems that unlock whole new families.

The document is organized into ladders. Each ladder gives prerequisite problems, one frontier unlock problem, solidifiers, and mutation questions. The goal is not to memorize a title. The goal is to make the underlying pattern survive small changes.

## Source Basis

- [LeetCode Problemset](https://leetcode.com/problemset/) for interview-style hard and medium-hard problems.
- [wisdompeak/LeetCode](https://github.com/wisdompeak/LeetCode) for medium+ and hard LeetCode taxonomy by technique.
- [Sean Prashad LeetCode Patterns](https://github.com/seanprashad/leetcode-patterns) for pattern-oriented interview grouping.
- [doocs/leetcode](https://github.com/doocs/leetcode) for broad LeetCode coverage and cross-language solutions.
- [LeetCode Master](https://github.com/youngyangyang04/leetcode-master) for ordered, concept-by-concept progression.
- [labuladong algorithm notes](https://github.com/labuladong/fucking-algorithm) for invariant-first explanations.
- [Tech Interview Handbook / Grind 75](https://www.techinterviewhandbook.org/grind75/) and [NeetCode Roadmap](https://neetcode.io/roadmap) for baseline interview-list expectations.
- [AlgoMonster patterns](https://algo.monster/problems/stats) for pattern taxonomy and decision rules.
- [AtCoder Educational DP Contest](https://atcoder.jp/contests/dp/tasks) for DP frontier problems.
- [USACO Guide](https://usaco.guide/) for Gold/Platinum topic progression.
- [Codeforces](https://codeforces.com/) as the post-sheet contest progression target.
- [CSES Problem Set](https://cses.fi/problemset/) for compact competitive-programming coverage, not as the only source.
- [cp-algorithms](https://cp-algorithms.com/) for the theory behind advanced techniques.

I treated Reddit, LeetCode Discuss, and LinkedIn posts as community signal rather than authoritative citations: useful for noticing recurring advice like "move from lists to patterns, contests, and harder mixed problems," but too noisy and unstable to use as the backbone of a serious sheet.

## What Counts As A Question Here

Each ladder has 14 directed reps:

1. 3 prerequisite questions.
2. 1 frontier unlock question.
3. 6 solidifier questions.
4. 4 mutation questions.

With 81 ladders, that is 1134 directed questions/reps.

## Repetition Protocol

Use this for every ladder:

1. Day 0: solve the 3 prerequisites quickly, then attempt the unlock cold.
2. Day 1: redo the unlock from a blank editor and write the invariant.
3. Day 3: solve 2 solidifiers without looking at the unlock.
4. Day 7: solve 2 more solidifiers and 1 mutation.
5. Day 14: solve the remaining solidifiers mixed with problems from other ladders.
6. Day 30: redo the unlock under time pressure.
7. Day 60: solve one unseen sibling problem from the same topic.
8. Day 90: teach the pattern out loud in 5 minutes and implement the unlock again.

A ladder is mastered only when you can solve a mutation without remembering the original problem title.

## Progression

1. First pass: choose 25 ladders that hit your weak areas.
2. Second pass: complete all graph, DP, tree, and data-structure ladders.
3. Third pass: complete all 81 ladders.
4. After this sheet: move to Codeforces 1800-2400, AtCoder ARC/ABC Ex, USACO Gold/Platinum, and full CSES advanced sections.

## Ladders

### Ladder 01: Ordered Prefix Counting

Unlock idea: Prefix sums become order-statistics queries. This is the first big jump from hash-map prefix tricks into Fenwick/merge-sort counting.

Baseline before this unlock:

1. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
2. [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)
3. [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)

Frontier unlock: [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)

Solidifiers:

1. [Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)
2. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
3. [Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/)
4. [Nested Ranges Count](https://cses.fi/problemset/task/2169)
5. [Distinct Values Queries](https://cses.fi/problemset/task/1734)
6. [Maximum Sum Queries](https://leetcode.com/problems/maximum-sum-queries/)

Mutation questions:

1. Count ranges in [L, R] when the array has negative values.
2. Return the actual earliest subarray whose sum lies in [L, R].
3. Support point updates and range-sum-count queries.
4. Compress values when prefix sums are up to 1e18.

### Ladder 02: 2D Prefix Compression

Unlock idea: A 2D problem can often be reduced to many 1D prefix problems by fixing row or column boundaries.

Baseline before this unlock:

1. [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)
2. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
3. [Maximal Square](https://leetcode.com/problems/maximal-square/)

Frontier unlock: [Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/)

Solidifiers:

1. [Max Sum of Rectangle No Larger Than K](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/)
2. [Largest 1-Bordered Square](https://leetcode.com/problems/largest-1-bordered-square/)
3. [Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)
4. [Image Overlap](https://leetcode.com/problems/image-overlap/)
5. [Grid Paths](https://cses.fi/problemset/task/1638)
6. [Grid 1](https://atcoder.jp/contests/dp/tasks/dp_h)

Mutation questions:

1. Find the maximum rectangle with sum <= K.
2. Count rectangles with sum divisible by K.
3. Support blocked cells and only count fully unblocked rectangles.
4. Choose whether to compress rows or columns from dimensions.

### Ladder 03: Prefix Sums Plus Monotonic Deque

Unlock idea: When negatives break normal sliding window, monotonic prefix candidates restore the invariant.

Baseline before this unlock:

1. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
2. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
3. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

Frontier unlock: [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)

Solidifiers:

1. [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)
2. [Jump Game VI](https://leetcode.com/problems/jump-game-vi/)
3. [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)
4. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
5. [Sliding Window Minimum](https://cses.fi/problemset/task/1076)
6. [Sliding Window Cost](https://cses.fi/problemset/task/1077)

Mutation questions:

1. Return longest subarray with sum at most K when negatives exist.
2. Change minimum length to minimum cost with prefix penalties.
3. Use a heap and explain why lazy deletion is needed.
4. Make the window size bounded by W.

### Ladder 04: Difference Arrays To Sweep Lines

Unlock idea: Range updates and interval overlap become boundary events. Endpoint ordering becomes the whole problem.

Baseline before this unlock:

1. [Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)
2. [Car Pooling](https://leetcode.com/problems/car-pooling/)
3. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)

Frontier unlock: [My Calendar III](https://leetcode.com/problems/my-calendar-iii/)

Solidifiers:

1. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
2. [Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)
3. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
4. [Falling Squares](https://leetcode.com/problems/falling-squares/)
5. [Restaurant Customers](https://cses.fi/problemset/task/1619)
6. [Traffic Lights](https://cses.fi/problemset/task/1163)

Mutation questions:

1. Return intervals where overlap is maximum.
2. Handle inclusive endpoints and prove event ordering.
3. Compress coordinates up to 1e9.
4. Support online insert/delete intervals.

### Ladder 05: Coordinate Compression Plus Fenwick

Unlock idea: Huge values do not matter; order does. Compress, then use prefix counts.

Baseline before this unlock:

1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
2. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
3. [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)

Frontier unlock: [Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)

Solidifiers:

1. [Salary Queries](https://cses.fi/problemset/task/1144)
2. [List Removals](https://cses.fi/problemset/task/1749)
3. [Nested Ranges Check](https://cses.fi/problemset/task/2168)
4. [Nested Ranges Count](https://cses.fi/problemset/task/2169)
5. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
6. [Longest Increasing Subsequence II](https://leetcode.com/problems/longest-increasing-subsequence-ii/)

Mutation questions:

1. Find kth active element after removals.
2. Support duplicate compressed values.
3. Change counts to sums.
4. Answer all queries offline sorted by threshold.

### Ladder 06: Monotonic Stack Contribution Counting

Unlock idea: Instead of enumerating subarrays, count how many subarrays each element controls as the minimum or maximum.

Baseline before this unlock:

1. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
2. [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)
3. [Online Stock Span](https://leetcode.com/problems/online-stock-span/)

Frontier unlock: [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/)

Solidifiers:

1. [Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/)
2. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
3. [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/)
4. [Remove K Digits](https://leetcode.com/problems/remove-k-digits/)
5. [Number of Visible People in a Queue](https://leetcode.com/problems/number-of-visible-people-in-a-queue/)
6. [Steps to Make Array Non-decreasing](https://leetcode.com/problems/steps-to-make-array-non-decreasing/)

Mutation questions:

1. Switch minimum contribution to maximum contribution.
2. Handle duplicate values with strict/non-strict boundaries.
3. Return contribution per index.
4. Convert the same idea to circular arrays.

### Ladder 07: Histogram Compression

Unlock idea: A matrix can become a sequence of histogram problems when the right cumulative dimension is maintained.

Baseline before this unlock:

1. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
2. [Maximal Square](https://leetcode.com/problems/maximal-square/)
3. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)

Frontier unlock: [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)

Solidifiers:

1. [Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)
2. [Largest 1-Bordered Square](https://leetcode.com/problems/largest-1-bordered-square/)
3. [Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/)
4. [Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)
5. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
6. [Subarray Sum Queries](https://cses.fi/problemset/task/1190)

Mutation questions:

1. Find largest all-zero rectangle.
2. Return coordinates of rectangle.
3. Allow at most K zero cells.
4. Convert rows to columns and compare complexity.

### Ladder 08: Monotonic Queue DP

Unlock idea: DP transitions over a recent window can be made O(n) by keeping only useful candidates.

Baseline before this unlock:

1. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
2. [House Robber](https://leetcode.com/problems/house-robber/)
3. [Jump Game II](https://leetcode.com/problems/jump-game-ii/)

Frontier unlock: [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)

Solidifiers:

1. [Jump Game VI](https://leetcode.com/problems/jump-game-vi/)
2. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
3. [Maximum Number of Points with Cost](https://leetcode.com/problems/maximum-number-of-points-with-cost/)
4. [Frog 3](https://atcoder.jp/contests/dp/tasks/dp_z)
5. [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)
6. [Pizzeria Queries](https://cses.fi/problemset/task/2206)

Mutation questions:

1. Window size changes per index.
2. Transition asks for min instead of max.
3. Candidates expire by value and index.
4. Add reconstruction of chosen indices.

### Ladder 09: Sliding Order Statistics

Unlock idea: Maintaining ordered state under insertion and deletion is a different skill from ordinary heaps.

Baseline before this unlock:

1. [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)
2. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
3. [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)

Frontier unlock: [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)

Solidifiers:

1. [Sliding Window Median](https://cses.fi/problemset/task/1076)
2. [Sliding Window Cost](https://cses.fi/problemset/task/1077)
3. [Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)
4. [Range Module](https://leetcode.com/problems/range-module/)
5. [Movie Festival II](https://cses.fi/problemset/task/1632)
6. [The Number of the Smallest Unoccupied Chair](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/)

Mutation questions:

1. Return kth smallest, not median.
2. Support duplicate values.
3. Use two heaps with lazy deletion.
4. Use Fenwick with compressed values.

### Ladder 10: Binary Search On Feasibility

Unlock idea: Many minimization problems are solved by checking whether a candidate answer is feasible.

Baseline before this unlock:

1. [Binary Search](https://leetcode.com/problems/binary-search/)
2. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
3. [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

Frontier unlock: [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)

Solidifiers:

1. [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)
2. [Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/)
3. [Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/)
4. [Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/)
5. [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
6. [Array Division](https://cses.fi/problemset/task/1085)

Mutation questions:

1. Minimize maximum.
2. Maximize minimum.
3. Feasibility uses greedy grouping.
4. Feasibility uses two pointers or counting.

### Ladder 11: Kth-Value Search In Implicit Sorted Spaces

Unlock idea: The answer may be a value, not an index. Counting <= mid becomes the core operation.

Baseline before this unlock:

1. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
2. [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)
3. [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)

Frontier unlock: [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

Solidifiers:

1. [Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/)
2. [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
3. [Kth Smallest Product of Two Sorted Arrays](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/)
4. [Ugly Number III](https://leetcode.com/problems/ugly-number-iii/)
5. [Super Ugly Number](https://leetcode.com/problems/super-ugly-number/)
6. [Multiplication Table](https://cses.fi/problemset/task/2422)

Mutation questions:

1. Arrays contain negative values.
2. Need kth largest instead of kth smallest.
3. Counting operation must be O(n).
4. Duplicates count separately or uniquely.

### Ladder 12: Meet In The Middle

Unlock idea: When n is around 30-40, split exponential search into two half-enumerations.

Baseline before this unlock:

1. [Subsets](https://leetcode.com/problems/subsets/)
2. [Combination Sum](https://leetcode.com/problems/combination-sum/)
3. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

Frontier unlock: [Meet in the Middle](https://cses.fi/problemset/task/1628)

Solidifiers:

1. [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
2. [Closest Subsequence Sum](https://leetcode.com/problems/closest-subsequence-sum/)
3. [Split Array With Same Average](https://leetcode.com/problems/split-array-with-same-average/)
4. [Maximum Compatibility Score Sum](https://leetcode.com/problems/maximum-compatibility-score-sum/)
5. [Number of Ways to Split Array](https://leetcode.com/problems/number-of-ways-to-split-array/)
6. [Grouping](https://atcoder.jp/contests/dp/tasks/dp_u)

Mutation questions:

1. Count pairs with sum exactly X.
2. Minimize absolute difference.
3. Store bitmasks for reconstruction.
4. Deduplicate equal sums carefully.

### Ladder 13: Heap Frontier Search

Unlock idea: The heap stores a frontier across sorted streams; correctness comes from advancing the current minimum stream.

Baseline before this unlock:

1. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
2. [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
3. [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)

Frontier unlock: [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)

Solidifiers:

1. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
2. [Trapping Rain Water II](https://leetcode.com/problems/trapping-rain-water-ii/)
3. [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)
4. [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
5. [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/)
6. [Room Allocation](https://cses.fi/problemset/task/1164)

Mutation questions:

1. Avoid pushing the same matrix cell twice.
2. Return range with tie-breaking.
3. K streams arrive online.
4. Switch from min range to kth popped state.

### Ladder 14: Heap Replacement Greedy

Unlock idea: Sort by deadline, keep chosen tasks, and eject the worst chosen item when a better set exists.

Baseline before this unlock:

1. [Task Scheduler](https://leetcode.com/problems/task-scheduler/)
2. [Reorganize String](https://leetcode.com/problems/reorganize-string/)
3. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)

Frontier unlock: [Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)

Solidifiers:

1. [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)
2. [IPO](https://leetcode.com/problems/ipo/)
3. [Maximum Performance of a Team](https://leetcode.com/problems/maximum-performance-of-a-team/)
4. [Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/)
5. [Movie Festival II](https://cses.fi/problemset/task/1632)
6. [Process Tasks Using Servers](https://leetcode.com/problems/process-tasks-using-servers/)

Mutation questions:

1. Maximize count under deadlines.
2. Maximize profit under capital constraints.
3. Replace longest duration with shorter duration.
4. Add tie-breaking on equal deadlines.

### Ladder 15: Topological Sort To DAG DP

Unlock idea: Topological order is not only for ordering; it is also the backbone of DP on directed acyclic structure.

Baseline before this unlock:

1. [Course Schedule](https://leetcode.com/problems/course-schedule/)
2. [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
3. [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)

Frontier unlock: [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)

Solidifiers:

1. [Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/)
2. [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)
3. [Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)
4. [Longest Flight Route](https://cses.fi/problemset/task/1680)
5. [Game Routes](https://cses.fi/problemset/task/1681)
6. [Longest Path](https://atcoder.jp/contests/dp/tasks/dp_g)

Mutation questions:

1. Need cycle detection and DP in one pass.
2. Need count of paths modulo M.
3. Need longest path with node weights.
4. Need topological order per group and per item.

### Ladder 16: Implicit State BFS

Unlock idea: Visited state must include everything that affects future moves, not just position.

Baseline before this unlock:

1. [Open the Lock](https://leetcode.com/problems/open-the-lock/)
2. [Word Ladder](https://leetcode.com/problems/word-ladder/)
3. [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)

Frontier unlock: [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/)

Solidifiers:

1. [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
2. [Sliding Puzzle](https://leetcode.com/problems/sliding-puzzle/)
3. [Bus Routes](https://leetcode.com/problems/bus-routes/)
4. [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)
5. [Cut Off Trees for Golf Event](https://leetcode.com/problems/cut-off-trees-for-golf-event/)
6. [Labyrinth](https://cses.fi/problemset/task/1193)

Mutation questions:

1. Add keys, doors, and bitmask inventory.
2. Return all shortest paths.
3. Use bidirectional BFS.
4. Compress state into integer ids.

### Ladder 17: 0-1 BFS

Unlock idea: When edge weights are only 0 or 1, a deque replaces Dijkstra and gives linear complexity.

Baseline before this unlock:

1. [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
2. [Network Delay Time](https://leetcode.com/problems/network-delay-time/)
3. [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)

Frontier unlock: [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)

Solidifiers:

1. [Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/)
2. [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
3. [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)
4. [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/)
5. [Monsters](https://cses.fi/problemset/task/1194)
6. [Message Route](https://cses.fi/problemset/task/1667)

Mutation questions:

1. Switch between BFS, 0-1 BFS, and Dijkstra.
2. Track parent path.
3. Add teleport edges with zero cost.
4. Add state dimensions.

### Ladder 18: Stateful Dijkstra

Unlock idea: Run shortest paths from the right sources, sometimes on reversed graphs, then combine distances.

Baseline before this unlock:

1. [Network Delay Time](https://leetcode.com/problems/network-delay-time/)
2. [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
3. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)

Frontier unlock: [Minimum Weighted Subgraph With the Required Paths](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/)

Solidifiers:

1. [Reachable Nodes In Subdivided Graph](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/)
2. [Second Minimum Time to Reach Destination](https://leetcode.com/problems/second-minimum-time-to-reach-destination/)
3. [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)
4. [Shortest Routes I](https://cses.fi/problemset/task/1671)
5. [Flight Discount](https://cses.fi/problemset/task/1195)
6. [Investigation](https://cses.fi/problemset/task/1202)

Mutation questions:

1. Need second shortest path.
2. Need number of shortest paths.
3. One edge can be discounted.
4. Reverse graph to compute distance-to-target.

### Ladder 19: Bellman-Ford And Constraint Shortest Paths

Unlock idea: Negative edges and bounded edge counts break ordinary Dijkstra thinking.

Baseline before this unlock:

1. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
2. [Network Delay Time](https://leetcode.com/problems/network-delay-time/)
3. [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)

Frontier unlock: [High Score](https://cses.fi/problemset/task/1673)

Solidifiers:

1. [Cycle Finding](https://cses.fi/problemset/task/1197)
2. [Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)
3. [Shortest Routes II](https://cses.fi/problemset/task/1672)
4. [Flight Routes](https://cses.fi/problemset/task/1196)
5. [Minimum Cost to Reach Destination in Time](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/)
6. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)

Mutation questions:

1. Detect negative cycle affecting the answer.
2. Limit by number of edges.
3. Use Floyd-Warshall for all-pairs.
4. Keep two dimensions: node and stops/time.

### Ladder 20: Reverse Offline DSU

Unlock idea: Deletions are hard online; process them backward as additions.

Baseline before this unlock:

1. [Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
2. [Redundant Connection](https://leetcode.com/problems/redundant-connection/)
3. [Accounts Merge](https://leetcode.com/problems/accounts-merge/)

Frontier unlock: [Bricks Falling When Hit](https://leetcode.com/problems/bricks-falling-when-hit/)

Solidifiers:

1. [Making A Large Island](https://leetcode.com/problems/making-a-large-island/)
2. [Checking Existence of Edge Length Limited Paths](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/)
3. [Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/)
4. [Road Construction](https://cses.fi/problemset/task/1676)
5. [Dynamic Connectivity](https://cses.fi/problemset/task/2133)
6. [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)

Mutation questions:

1. Reverse removals into additions.
2. Maintain component size.
3. Have a special roof/source component.
4. Answer queries sorted by threshold.

### Ladder 21: DSU With Component Metadata

Unlock idea: Union-find becomes much stronger when each component carries counts, max values, or special flags.

Baseline before this unlock:

1. [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)
2. [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
3. [Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/)

Frontier unlock: [Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/)

Solidifiers:

1. [Similar String Groups](https://leetcode.com/problems/similar-string-groups/)
2. [Making A Large Island](https://leetcode.com/problems/making-a-large-island/)
3. [Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/)
4. [Building Roads](https://cses.fi/problemset/task/1666)
5. [Road Construction](https://cses.fi/problemset/task/1676)
6. [Accounts Merge](https://leetcode.com/problems/accounts-merge/)

Mutation questions:

1. Union in value-sorted order.
2. Maintain count of max-value nodes per component.
3. Use two DSUs for two users.
4. Track whether a component touches boundary.

### Ladder 22: MST Edge Classification

Unlock idea: MST is not only build-the-tree; you must reason about forced edges, banned edges, and alternative optima.

Baseline before this unlock:

1. [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)
2. [Road Reparation](https://cses.fi/problemset/task/1675)
3. [Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/)

Frontier unlock: [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)

Solidifiers:

1. [Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/)
2. [Road Construction](https://cses.fi/problemset/task/1676)
3. [Building Roads](https://cses.fi/problemset/task/1666)
4. [Optimize Water Distribution in a Village](https://leetcode.com/problems/optimize-water-distribution-in-a-village/)
5. [Minimize Malware Spread](https://leetcode.com/problems/minimize-malware-spread/)
6. [Road Reparation](https://cses.fi/problemset/task/1675)

Mutation questions:

1. Find critical edges.
2. Find pseudo-critical edges.
3. Force include one edge.
4. Ban one edge and recompute MST.

### Ladder 23: Low-Link Bridges And Articulation

Unlock idea: DFS timestamps and low-link values reveal edges or vertices whose removal changes connectivity.

Baseline before this unlock:

1. [Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
2. [Redundant Connection](https://leetcode.com/problems/redundant-connection/)
3. [Clone Graph](https://leetcode.com/problems/clone-graph/)

Frontier unlock: [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)

Solidifiers:

1. [Building Roads](https://cses.fi/problemset/task/1666)
2. [Round Trip](https://cses.fi/problemset/task/1669)
3. [Planets and Kingdoms](https://cses.fi/problemset/task/1683)
4. [Strong Orientation](https://cses.fi/problemset/task/2177)
5. [Minimum Number of Days to Disconnect Island](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/)
6. [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)

Mutation questions:

1. Find bridges.
2. Find articulation points.
3. Handle disconnected graph.
4. Convert undirected graph to bridge tree.

### Ladder 24: SCC Condensation DP

Unlock idea: Collapse cycles into components, then solve a DAG problem.

Baseline before this unlock:

1. [Course Schedule](https://leetcode.com/problems/course-schedule/)
2. [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)
3. [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)

Frontier unlock: [Coin Collector](https://cses.fi/problemset/task/1686)

Solidifiers:

1. [Planets and Kingdoms](https://cses.fi/problemset/task/1683)
2. [Giant Pizza](https://cses.fi/problemset/task/1684)
3. [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)
4. [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)
5. [Flight Routes Check](https://cses.fi/problemset/task/1682)
6. [Minimum Number of Vertices to Reach All Nodes](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/)

Mutation questions:

1. Build condensation DAG.
2. Run DP on SCC DAG.
3. Use SCC for 2-SAT.
4. Handle graph that is not fully reachable.

### Ladder 25: Eulerian Traversal

Unlock idea: Using every edge exactly once is not shortest path; degree conditions and Hierholzer drive the solution.

Baseline before this unlock:

1. [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
2. [Round Trip](https://cses.fi/problemset/task/1669)
3. [Clone Graph](https://leetcode.com/problems/clone-graph/)

Frontier unlock: [Teleporters Path](https://cses.fi/problemset/task/1693)

Solidifiers:

1. [Mail Delivery](https://cses.fi/problemset/task/1691)
2. [De Bruijn Sequence](https://cses.fi/problemset/task/1692)
3. [Valid Arrangement of Pairs](https://leetcode.com/problems/valid-arrangement-of-pairs/)
4. [Cracking the Safe](https://leetcode.com/problems/cracking-the-safe/)
5. [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
6. [Round Trip II](https://cses.fi/problemset/task/1678)

Mutation questions:

1. Directed vs undirected Euler path.
2. Need lexicographically smallest path.
3. Check in-degree/out-degree conditions.
4. Use stack to build path after dead ends.

### Ladder 26: Max Flow And Min Cut

Unlock idea: Residual networks unlock capacity, min-cut, matching, and disjoint path problems.

Baseline before this unlock:

1. [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
2. [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)
3. [Building Teams](https://cses.fi/problemset/task/1668)

Frontier unlock: [Download Speed](https://cses.fi/problemset/task/1694)

Solidifiers:

1. [Police Chase](https://cses.fi/problemset/task/1695)
2. [School Dance](https://cses.fi/problemset/task/1696)
3. [Distinct Routes](https://cses.fi/problemset/task/1711)
4. [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
5. [Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)
6. [Grid Puzzle I](https://cses.fi/problemset/task/2131)

Mutation questions:

1. Extract min cut after max flow.
2. Reduce bipartite matching to flow.
3. Recover actual edge-disjoint paths.
4. Add capacities greater than one.

### Ladder 27: Bipartite Matching As A Pattern

Unlock idea: Many assignment, pairing, and grid selection problems are hidden matching problems.

Baseline before this unlock:

1. [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
2. [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)
3. [Building Teams](https://cses.fi/problemset/task/1668)

Frontier unlock: [School Dance](https://cses.fi/problemset/task/1696)

Solidifiers:

1. [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
2. [Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)
3. [Maximum Compatibility Score Sum](https://leetcode.com/problems/maximum-compatibility-score-sum/)
4. [Campus Bikes II](https://leetcode.com/problems/campus-bikes-ii/)
5. [Matching](https://atcoder.jp/contests/dp/tasks/dp_o)
6. [Distinct Routes](https://cses.fi/problemset/task/1711)

Mutation questions:

1. Convert grid to bipartite graph.
2. Add capacities per node.
3. Need min-cost matching.
4. Need maximum independent set via complement idea.

### Ladder 28: Tree Rerooting

Unlock idea: One DFS computes local answers; a second DFS transfers the answer when the root moves.

Baseline before this unlock:

1. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
2. [Tree Diameter](https://cses.fi/problemset/task/1131)
3. [House Robber III](https://leetcode.com/problems/house-robber-iii/)

Frontier unlock: [Sum of Distances in Tree](https://leetcode.com/problems/sum-of-distances-in-tree/)

Solidifiers:

1. [Tree Distances I](https://cses.fi/problemset/task/1132)
2. [Tree Distances II](https://cses.fi/problemset/task/1133)
3. [Subtree](https://atcoder.jp/contests/dp/tasks/dp_v)
4. [Tree Matching](https://cses.fi/problemset/task/1130)
5. [Height of Binary Tree After Subtree Removal Queries](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/)
6. [Count Subtrees With Max Distance Between Cities](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/)

Mutation questions:

1. Compute answer for every possible root.
2. Maintain subtree sizes.
3. Transfer parent contribution to child.
4. Change sum distances to max distance.

### Ladder 29: Binary Lifting And LCA

Unlock idea: Precompute powers of two ancestors to jump through trees and answer path queries quickly.

Baseline before this unlock:

1. [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
2. [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
3. [Tree Diameter](https://cses.fi/problemset/task/1131)

Frontier unlock: [Company Queries II](https://cses.fi/problemset/task/1688)

Solidifiers:

1. [Company Queries I](https://cses.fi/problemset/task/1687)
2. [Distance Queries](https://cses.fi/problemset/task/1135)
3. [Counting Paths](https://cses.fi/problemset/task/1136)
4. [Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)
5. [Tree of Coprimes](https://leetcode.com/problems/tree-of-coprimes/)
6. [Planets Queries I](https://cses.fi/problemset/task/1750)

Mutation questions:

1. Find kth ancestor.
2. Find distance between nodes.
3. Lift deeper node first.
4. Use binary lifting on functional graph.

### Ladder 30: Euler Tour For Subtree Queries

Unlock idea: Flatten a tree so every subtree becomes one contiguous array interval.

Baseline before this unlock:

1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
2. [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
3. [Subordinates](https://cses.fi/problemset/task/1674)

Frontier unlock: [Subtree Queries](https://cses.fi/problemset/task/1137)

Solidifiers:

1. [Path Queries](https://cses.fi/problemset/task/1138)
2. [Counting Paths](https://cses.fi/problemset/task/1136)
3. [Distinct Colors](https://cses.fi/problemset/task/1139)
4. [Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/)
5. [Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/)
6. [Company Queries I](https://cses.fi/problemset/task/1687)

Mutation questions:

1. Subtree sum with updates.
2. Subtree distinct colors.
3. Path contribution via difference on tree.
4. Use entry and exit times.

### Ladder 31: Heavy-Light Decomposition

Unlock idea: Break tree paths into logarithmically many heavy segments, then use segment trees on the flattened order.

Baseline before this unlock:

1. [Distance Queries](https://cses.fi/problemset/task/1135)
2. [Path Queries](https://cses.fi/problemset/task/1138)
3. [Subtree Queries](https://cses.fi/problemset/task/1137)

Frontier unlock: [Path Queries II](https://cses.fi/problemset/task/2134)

Solidifiers:

1. [Counting Paths](https://cses.fi/problemset/task/1136)
2. [Distinct Colors](https://cses.fi/problemset/task/1139)
3. [Tree of Coprimes](https://leetcode.com/problems/tree-of-coprimes/)
4. [Company Queries II](https://cses.fi/problemset/task/1688)
5. [Minimum Edge Weight Equilibrium Queries in a Tree](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/)
6. [Path Queries](https://cses.fi/problemset/task/1138)

Mutation questions:

1. Path max query with point updates.
2. Path sum query with point updates.
3. Edge values instead of node values.
4. Combine HLD with lazy segment tree.

### Ladder 32: Centroid Decomposition And Path Counting

Unlock idea: Centroids let you count paths through a divide-and-conquer center without double counting.

Baseline before this unlock:

1. [Tree Diameter](https://cses.fi/problemset/task/1131)
2. [Tree Distances I](https://cses.fi/problemset/task/1132)
3. [Counting Paths](https://cses.fi/problemset/task/1136)

Frontier unlock: [Fixed-Length Paths II](https://cses.fi/problemset/task/2081)

Solidifiers:

1. [Finding a Centroid](https://cses.fi/problemset/task/2079)
2. [Fixed-Length Paths I](https://cses.fi/problemset/task/2080)
3. [Count Subtrees With Max Distance Between Cities](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/)
4. [Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/)
5. [Tree Distances II](https://cses.fi/problemset/task/1133)
6. [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)

Mutation questions:

1. Count paths of exact length K.
2. Count paths with length in [A, B].
3. Avoid double counting paths in one child subtree.
4. Maintain distance frequency map per centroid.

### Ladder 33: Trie Search With Pruning

Unlock idea: Trie + DFS prunes a massive search tree by killing impossible prefixes early.

Baseline before this unlock:

1. [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/)
2. [Word Search](https://leetcode.com/problems/word-search/)
3. [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)

Frontier unlock: [Word Search II](https://leetcode.com/problems/word-search-ii/)

Solidifiers:

1. [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/)
2. [Stream of Characters](https://leetcode.com/problems/stream-of-characters/)
3. [Concatenated Words](https://leetcode.com/problems/concatenated-words/)
4. [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
5. [Word Combinations](https://cses.fi/problemset/task/1731)
6. [Replace Words](https://leetcode.com/problems/replace-words/)

Mutation questions:

1. Delete found words from trie to reduce work.
2. Support wildcard characters.
3. Return only top K lexicographic words.
4. Use reversed trie for suffix questions.

### Ladder 34: Bit Trie And Offline XOR

Unlock idea: Sort queries by limit, insert eligible values, then answer maximum-XOR greedily.

Baseline before this unlock:

1. [Single Number III](https://leetcode.com/problems/single-number-iii/)
2. [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)
3. [Counting Bits](https://leetcode.com/problems/counting-bits/)

Frontier unlock: [Maximum XOR With an Element From Array](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/)

Solidifiers:

1. [Count Pairs With XOR in a Range](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/)
2. [Maximum Genetic Difference Query](https://leetcode.com/problems/maximum-genetic-difference-query/)
3. [Find Kth Largest XOR Coordinate Value](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/)
4. [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/)
5. [Minimum XOR Sum of Two Arrays](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/)
6. [Maximum Xor Subarray](https://cses.fi/problemset/task/1655)

Mutation questions:

1. Add query threshold.
2. Count pairs in XOR range.
3. Trie supports insert/delete during DFS.
4. Explain bitwise greedy correctness.

### Ladder 35: KMP And Z-Function

Unlock idea: Prefix and Z arrays expose borders, periods, and pattern matches without rechecking characters.

Baseline before this unlock:

1. [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
2. [Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)
3. [String Matching](https://cses.fi/problemset/task/1753)

Frontier unlock: [String Functions](https://cses.fi/problemset/task/2107)

Solidifiers:

1. [Finding Borders](https://cses.fi/problemset/task/1732)
2. [Finding Periods](https://cses.fi/problemset/task/1733)
3. [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
4. [Sum of Scores of Built Strings](https://leetcode.com/problems/sum-of-scores-of-built-strings/)
5. [Counting Patterns](https://cses.fi/problemset/task/2103)
6. [Finding Patterns](https://cses.fi/problemset/task/2102)

Mutation questions:

1. Convert KMP prefix values to borders.
2. Use Z-function for pattern matching.
3. Find all periods of a string.
4. Build shortest palindrome by matching reversed string.

### Ladder 36: Rolling Hash Plus Binary Search

Unlock idea: When checking a string property is monotonic by length, binary search plus hashing becomes powerful.

Baseline before this unlock:

1. [Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/)
2. [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
3. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)

Frontier unlock: [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)

Solidifiers:

1. [Distinct Substrings](https://cses.fi/problemset/task/2105)
2. [Repeating Substring](https://cses.fi/problemset/task/2106)
3. [Distinct Echo Substrings](https://leetcode.com/problems/distinct-echo-substrings/)
4. [Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/)
5. [Pattern Positions](https://cses.fi/problemset/task/2104)
6. [Substring Distribution](https://cses.fi/problemset/task/2110)

Mutation questions:

1. Discuss collision risk and double hashing.
2. Return substring, not length.
3. Count distinct substrings.
4. Use suffix array instead of hashing.

### Ladder 37: Manacher And Palindrome Structure

Unlock idea: Manacher stores palindrome radii so all centers are processed in linear time.

Baseline before this unlock:

1. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
2. [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)
3. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)

Frontier unlock: [Longest Palindrome](https://cses.fi/problemset/task/1111)

Solidifiers:

1. [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
2. [Count Different Palindromic Subsequences](https://leetcode.com/problems/count-different-palindromic-subsequences/)
3. [All Palindromes](https://cses.fi/problemset/task/3138)
4. [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
5. [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)
6. [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)

Mutation questions:

1. Handle odd and even centers uniformly.
2. Count palindromes, not just longest.
3. Use radii to answer palindrome queries.
4. Combine with DP partitioning.

### Ladder 38: Suffix Array Frontier

Unlock idea: Sorted suffixes plus LCP arrays turn substring order/counting into prefix-sum style reasoning.

Baseline before this unlock:

1. [String Matching](https://cses.fi/problemset/task/1753)
2. [Distinct Substrings](https://cses.fi/problemset/task/2105)
3. [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)

Frontier unlock: [Substring Order II](https://cses.fi/problemset/task/2109)

Solidifiers:

1. [Substring Order I](https://cses.fi/problemset/task/2108)
2. [Substring Distribution](https://cses.fi/problemset/task/2110)
3. [Repeating Substring](https://cses.fi/problemset/task/2106)
4. [Minimal Rotation](https://cses.fi/problemset/task/1110)
5. [Last Substring in Lexicographical Order](https://leetcode.com/problems/last-substring-in-lexicographical-order/)
6. [Pattern Positions](https://cses.fi/problemset/task/2104)

Mutation questions:

1. Find kth lexicographic substring.
2. Count distinct substrings by LCP.
3. Find longest repeated substring.
4. Compare suffix array vs suffix automaton.

### Ladder 39: Aho-Corasick And Multi-Pattern Search

Unlock idea: Failure links let many patterns be searched as one automaton.

Baseline before this unlock:

1. [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/)
2. [Stream of Characters](https://leetcode.com/problems/stream-of-characters/)
3. [Word Combinations](https://cses.fi/problemset/task/1731)

Frontier unlock: [Counting Patterns](https://cses.fi/problemset/task/2103)

Solidifiers:

1. [Finding Patterns](https://cses.fi/problemset/task/2102)
2. [Pattern Positions](https://cses.fi/problemset/task/2104)
3. [Concatenated Words](https://leetcode.com/problems/concatenated-words/)
4. [Word Search II](https://leetcode.com/problems/word-search-ii/)
5. [Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/)
6. [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)

Mutation questions:

1. Report first occurrence for each pattern.
2. Count occurrences for each pattern.
3. Propagate terminal counts through failure tree.
4. Stream characters online.

### Ladder 40: Interval DP

Unlock idea: Choose the last action inside an interval, not the first, to make subproblems independent.

Baseline before this unlock:

1. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
2. [Predict the Winner](https://leetcode.com/problems/predict-the-winner/)
3. [Deque](https://atcoder.jp/contests/dp/tasks/dp_l)

Frontier unlock: [Burst Balloons](https://leetcode.com/problems/burst-balloons/)

Solidifiers:

1. [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)
2. [Slimes](https://atcoder.jp/contests/dp/tasks/dp_n)
3. [Rectangle Cutting](https://cses.fi/problemset/task/1744)
4. [Stone Game II](https://leetcode.com/problems/stone-game-ii/)
5. [Stone Game III](https://leetcode.com/problems/stone-game-iii/)
6. [Strange Printer](https://leetcode.com/problems/strange-printer/)

Mutation questions:

1. Add sentinels.
2. Choose last operation.
3. Minimize cost instead of maximize coins.
4. Add game/opponent state.

### Ladder 41: Range DP With Extra State

Unlock idea: Sometimes an interval needs a carry state from outside the interval to become solvable.

Baseline before this unlock:

1. [Burst Balloons](https://leetcode.com/problems/burst-balloons/)
2. [Strange Printer](https://leetcode.com/problems/strange-printer/)
3. [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)

Frontier unlock: [Remove Boxes](https://leetcode.com/problems/remove-boxes/)

Solidifiers:

1. [Scramble String](https://leetcode.com/problems/scramble-string/)
2. [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)
3. [Stone Game III](https://leetcode.com/problems/stone-game-iii/)
4. [Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)
5. [Frog Jump](https://leetcode.com/problems/frog-jump/)
6. [Slimes](https://atcoder.jp/contests/dp/tasks/dp_n)

Mutation questions:

1. Add third dimension for carried equal items.
2. Compress consecutive same colors.
3. Memoize sparse states.
4. Explain why 2D interval DP is insufficient.

### Ladder 42: Game DP And Minimax

Unlock idea: Represent score difference instead of both players' scores.

Baseline before this unlock:

1. [Predict the Winner](https://leetcode.com/problems/predict-the-winner/)
2. [Stone Game](https://leetcode.com/problems/stone-game/)
3. [Stones](https://atcoder.jp/contests/dp/tasks/dp_k)

Frontier unlock: [Deque](https://atcoder.jp/contests/dp/tasks/dp_l)

Solidifiers:

1. [Stone Game II](https://leetcode.com/problems/stone-game-ii/)
2. [Stone Game III](https://leetcode.com/problems/stone-game-iii/)
3. [Can I Win](https://leetcode.com/problems/can-i-win/)
4. [Cat and Mouse](https://leetcode.com/problems/cat-and-mouse/)
5. [Guess Number Higher or Lower II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/)
6. [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)

Mutation questions:

1. Return win/lose boolean.
2. Return optimal score difference.
3. Add memo over used mask.
4. Detect draws/cycles.

### Ladder 43: Tree DP

Unlock idea: For every node, keep states based on whether the node is selected, covered, colored, or constrained.

Baseline before this unlock:

1. [House Robber III](https://leetcode.com/problems/house-robber-iii/)
2. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
3. [Tree Matching](https://cses.fi/problemset/task/1130)

Frontier unlock: [Independent Set](https://atcoder.jp/contests/dp/tasks/dp_p)

Solidifiers:

1. [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)
2. [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/)
3. [Tree Matching](https://cses.fi/problemset/task/1130)
4. [Tree Distances II](https://cses.fi/problemset/task/1133)
5. [Subtree](https://atcoder.jp/contests/dp/tasks/dp_v)
6. [Sum of Distances in Tree](https://leetcode.com/problems/sum-of-distances-in-tree/)

Mutation questions:

1. Selected/not selected states.
2. Covered/has camera/needs camera states.
3. Reroot to answer all roots.
4. Combine child DP values.

### Ladder 44: DAG Path Counting

Unlock idea: Topological order plus DP lets you count or optimize over exponentially many paths.

Baseline before this unlock:

1. [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
2. [Longest Path](https://atcoder.jp/contests/dp/tasks/dp_g)
3. [Longest Flight Route](https://cses.fi/problemset/task/1680)

Frontier unlock: [Game Routes](https://cses.fi/problemset/task/1681)

Solidifiers:

1. [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)
2. [Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/)
3. [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)
4. [Coin Collector](https://cses.fi/problemset/task/1686)
5. [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)
6. [Hamiltonian Flights](https://cses.fi/problemset/task/1690)

Mutation questions:

1. Count paths modulo M.
2. Find longest path.
3. Cycle invalidates DAG DP.
4. Condense SCCs before DP.

### Ladder 45: Knapsack Transformations

Unlock idea: Hard knapsack problems usually come from adding dimensions, changing count/min/max semantics, or transforming target sum.

Baseline before this unlock:

1. [Coin Change](https://leetcode.com/problems/coin-change/)
2. [Coin Change II](https://leetcode.com/problems/coin-change-ii/)
3. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

Frontier unlock: [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/)

Solidifiers:

1. [Target Sum](https://leetcode.com/problems/target-sum/)
2. [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)
3. [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)
4. [Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/)
5. [Money Sums](https://cses.fi/problemset/task/1745)
6. [Knapsack 2](https://atcoder.jp/contests/dp/tasks/dp_e)

Mutation questions:

1. 0/1 vs unbounded.
2. Count ways vs min items.
3. Add two resource dimensions.
4. Reverse loop direction and explain why.

### Ladder 46: LIS With Data Structures

Unlock idea: LIS becomes range maximum query when constraints add value gaps, counts, or updates.

Baseline before this unlock:

1. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
2. [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)
3. [Increasing Subsequence](https://cses.fi/problemset/task/1145)

Frontier unlock: [Longest Increasing Subsequence II](https://leetcode.com/problems/longest-increasing-subsequence-ii/)

Solidifiers:

1. [Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)
2. [Longest Arithmetic Subsequence](https://leetcode.com/problems/longest-arithmetic-subsequence/)
3. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
4. [Flowers](https://atcoder.jp/contests/dp/tasks/dp_q)
5. [Minimum Operations to Make the Array K-Increasing](https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/)
6. [Nested Ranges Count](https://cses.fi/problemset/task/2169)

Mutation questions:

1. Strict vs non-decreasing.
2. Need number of LIS.
3. Add max adjacent difference.
4. Use Fenwick/segment tree over values.

### Ladder 47: Bitmask DP

Unlock idea: Represent completed requirements as bits, then optimize over subsets.

Baseline before this unlock:

1. [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
2. [Can I Win](https://leetcode.com/problems/can-i-win/)
3. [Matching](https://atcoder.jp/contests/dp/tasks/dp_o)

Frontier unlock: [Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)

Solidifiers:

1. [Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word/)
2. [Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/)
3. [Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)
4. [Minimum Incompatibility](https://leetcode.com/problems/minimum-incompatibility/)
5. [Hamiltonian Flights](https://cses.fi/problemset/task/1690)
6. [Grouping](https://atcoder.jp/contests/dp/tasks/dp_u)

Mutation questions:

1. Mask over people vs skills.
2. Reconstruct chosen subset.
3. Precompute pair gains.
4. Iterate submasks efficiently.

### Ladder 48: Subset DP Optimization

Unlock idea: Precompute scores for subsets, then iterate submasks to build optimal partitions.

Baseline before this unlock:

1. [Subsets](https://leetcode.com/problems/subsets/)
2. [Can I Win](https://leetcode.com/problems/can-i-win/)
3. [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)

Frontier unlock: [Grouping](https://atcoder.jp/contests/dp/tasks/dp_u)

Solidifiers:

1. [Minimum Incompatibility](https://leetcode.com/problems/minimum-incompatibility/)
2. [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
3. [Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)
4. [Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/)
5. [Elevator Rides](https://cses.fi/problemset/task/1653)
6. [Hamiltonian Flights](https://cses.fi/problemset/task/1690)

Mutation questions:

1. Enumerate all submasks of mask.
2. Precompute compatibility for each mask.
3. Use DP over partitions.
4. Optimize by fixing one chosen bit.

### Ladder 49: Digit DP

Unlock idea: Digit constraints require position, tightness, leading-zero, and previous-state flags.

Baseline before this unlock:

1. [Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/)
2. [Number of Digit One](https://leetcode.com/problems/number-of-digit-one/)
3. [Non-negative Integers without Consecutive Ones](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/)

Frontier unlock: [Counting Numbers](https://cses.fi/problemset/task/2220)

Solidifiers:

1. [Numbers With Repeated Digits](https://leetcode.com/problems/numbers-with-repeated-digits/)
2. [Count Special Integers](https://leetcode.com/problems/count-special-integers/)
3. [Number of Beautiful Integers in the Range](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/)
4. [Digit Queries](https://cses.fi/problemset/task/2431)
5. [Digit Count in Range](https://leetcode.com/problems/digit-count-in-range/)
6. [Find All Good Strings](https://leetcode.com/problems/find-all-good-strings/)

Mutation questions:

1. Add tight flag.
2. Handle leading zeros.
3. Track previous digit.
4. Answer range [L, R] as f(R)-f(L-1).

### Ladder 50: Profile DP

Unlock idea: When one grid dimension is small, a row/column mask can encode the frontier.

Baseline before this unlock:

1. [Unique Paths](https://leetcode.com/problems/unique-paths/)
2. [Maximal Square](https://leetcode.com/problems/maximal-square/)
3. [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)

Frontier unlock: [Counting Tilings](https://cses.fi/problemset/task/2181)

Solidifiers:

1. [Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)
2. [Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)
3. [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
4. [Painting a Grid With Three Different Colors](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/)
5. [Number of Ways to Paint N x 3 Grid](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/)
6. [Elevator Rides](https://cses.fi/problemset/task/1653)

Mutation questions:

1. Represent current row as bitmask.
2. Generate legal next masks.
3. Swap dimensions so smaller side is masked.
4. Add obstacles.

### Ladder 51: Expected Value DP

Unlock idea: Expectation often solves by conditioning on the next random event and rearranging equations.

Baseline before this unlock:

1. [Coins](https://atcoder.jp/contests/dp/tasks/dp_i)
2. [Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/)
3. [New 21 Game](https://leetcode.com/problems/new-21-game/)

Frontier unlock: [Sushi](https://atcoder.jp/contests/dp/tasks/dp_j)

Solidifiers:

1. [Soup Servings](https://leetcode.com/problems/soup-servings/)
2. [Frog Position After T Seconds](https://leetcode.com/problems/frog-position-after-t-seconds/)
3. [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/)
4. [Linked List Random Node](https://leetcode.com/problems/linked-list-random-node/)
5. [Implement Rand10() Using Rand7()](https://leetcode.com/problems/implement-rand10-using-rand7/)
6. [Probability of a Two Boxes Having The Same Number of Distinct Balls](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/)

Mutation questions:

1. Convert probability DP to expectation DP.
2. Condition on current state counts.
3. Use linearity of expectation.
4. Avoid infinite recursion by rearranging self-transition.

### Ladder 52: Convex Hull Trick DP

Unlock idea: Some quadratic DP transitions are line queries in disguise.

Baseline before this unlock:

1. [Frog 2](https://atcoder.jp/contests/dp/tasks/dp_b)
2. [Maximum Number of Points with Cost](https://leetcode.com/problems/maximum-number-of-points-with-cost/)
3. [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)

Frontier unlock: [Frog 3](https://atcoder.jp/contests/dp/tasks/dp_z)

Solidifiers:

1. [Monster Game I](https://cses.fi/problemset/task/2084)
2. [Monster Game II](https://cses.fi/problemset/task/2085)
3. [Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/)
4. [Minimum Cost to Make Array Equal](https://leetcode.com/problems/minimum-cost-to-make-array-equal/)
5. [Minimum Cost to Split an Array](https://leetcode.com/problems/minimum-cost-to-split-an-array/)
6. [Selling Pieces of Wood](https://leetcode.com/problems/selling-pieces-of-wood/)

Mutation questions:

1. Derive line slope and intercept from DP transition.
2. Queries are monotonic.
3. Slopes are monotonic.
4. Use Li Chao when order is arbitrary.

### Ladder 53: Divide-And-Conquer And Knuth DP Optimization

Unlock idea: Many slow DP transitions become fast with prefix sums, monotone optima, or restricted split points.

Baseline before this unlock:

1. [Slimes](https://atcoder.jp/contests/dp/tasks/dp_n)
2. [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)
3. [Rectangle Cutting](https://cses.fi/problemset/task/1744)

Frontier unlock: [Candies](https://atcoder.jp/contests/dp/tasks/dp_m)

Solidifiers:

1. [Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)
2. [Allocate Mailboxes](https://leetcode.com/problems/allocate-mailboxes/)
3. [Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/)
4. [Minimum Cost to Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/)
5. [Permutation](https://atcoder.jp/contests/dp/tasks/dp_t)
6. [Intervals](https://atcoder.jp/contests/dp/tasks/dp_w)

Mutation questions:

1. Use prefix sums to optimize transitions.
2. Check quadrangle inequality before Knuth.
3. Check monotone optima before divide-and-conquer DP.
4. Add one dimension and observe complexity.

### Ladder 54: Lazy Segment Tree

Unlock idea: Range updates require deferred tags; the hard part is composing tags correctly.

Baseline before this unlock:

1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
2. [Dynamic Range Sum Queries](https://cses.fi/problemset/task/1648)
3. [Range Minimum Queries II](https://cses.fi/problemset/task/1649)

Frontier unlock: [Range Updates and Sums](https://cses.fi/problemset/task/1735)

Solidifiers:

1. [Polynomial Queries](https://cses.fi/problemset/task/1736)
2. [Handling Sum Queries After Update](https://leetcode.com/problems/handling-sum-queries-after-update/)
3. [Range Module](https://leetcode.com/problems/range-module/)
4. [Subarray Sum Queries](https://cses.fi/problemset/task/1190)
5. [Prefix Sum Queries](https://cses.fi/problemset/task/2166)
6. [Falling Squares](https://leetcode.com/problems/falling-squares/)

Mutation questions:

1. Range add plus range sum.
2. Range assign plus range sum.
3. Flip bits plus sum ones.
4. Maintain max prefix/suffix/best segment.

### Ladder 55: Persistent Segment Tree

Unlock idea: Path-copying lets you keep old versions without copying the whole array.

Baseline before this unlock:

1. [Range Updates and Sums](https://cses.fi/problemset/task/1735)
2. [Snapshot Array](https://leetcode.com/problems/snapshot-array/)
3. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)

Frontier unlock: [Range Queries and Copies](https://cses.fi/problemset/task/1737)

Solidifiers:

1. [Snapshot Array](https://leetcode.com/problems/snapshot-array/)
2. [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)
3. [List Removals](https://cses.fi/problemset/task/1749)
4. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
5. [Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)
6. [Range Module](https://leetcode.com/problems/range-module/)

Mutation questions:

1. Create version after each update.
2. Query old version.
3. Copy one version into another.
4. Explain memory O(log n) per update.

### Ladder 56: Sparse Table And Idempotent Queries

Unlock idea: When operation is idempotent, overlapping blocks answer range queries in O(1).

Baseline before this unlock:

1. [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)
2. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
3. [Static Range Minimum Queries](https://cses.fi/problemset/task/1647)

Frontier unlock: [Static Range Minimum Queries](https://cses.fi/problemset/task/1647)

Solidifiers:

1. [Static Range Minimum Queries](https://cses.fi/problemset/task/1647)
2. [Range Xor Queries](https://cses.fi/problemset/task/1650)
3. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
4. [Minimum Absolute Difference Queries](https://leetcode.com/problems/minimum-absolute-difference-queries/)
5. [Distance Queries](https://cses.fi/problemset/task/1135)
6. [Height of Binary Tree After Subtree Removal Queries](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/)

Mutation questions:

1. RMQ operation is min/max/gcd.
2. Sum is not idempotent; explain why sparse overlap fails.
3. Use log table.
4. Use RMQ for LCA via Euler tour.

### Ladder 57: Sqrt Decomposition And Mo's Algorithm

Unlock idea: Offline query ordering turns expensive range add/remove operations into amortized movement.

Baseline before this unlock:

1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
2. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
3. [Distinct Values Queries](https://cses.fi/problemset/task/1734)

Frontier unlock: [Distinct Values Queries](https://cses.fi/problemset/task/1734)

Solidifiers:

1. [Range Updates and Sums](https://cses.fi/problemset/task/1735)
2. [Query Kth Smallest Trimmed Number](https://leetcode.com/problems/query-kth-smallest-trimmed-number/)
3. [Maximum Sum Queries](https://leetcode.com/problems/maximum-sum-queries/)
4. [Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/)
5. [Nested Ranges Count](https://cses.fi/problemset/task/2169)
6. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)

Mutation questions:

1. Sort queries by block and right endpoint.
2. Maintain add/remove functions.
3. Change answer from distinct count to frequency statistic.
4. Add point updates and discuss Mo with modifications.

### Ladder 58: Li Chao Tree And Line Containers

Unlock idea: When slopes or queries are not monotonic, Li Chao handles dynamic line minimum/maximum queries.

Baseline before this unlock:

1. [Frog 3](https://atcoder.jp/contests/dp/tasks/dp_z)
2. [Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/)
3. [Monster Game I](https://cses.fi/problemset/task/2084)

Frontier unlock: [Monster Game II](https://cses.fi/problemset/task/2085)

Solidifiers:

1. [Minimum Cost to Make Array Equal](https://leetcode.com/problems/minimum-cost-to-make-array-equal/)
2. [Selling Pieces of Wood](https://leetcode.com/problems/selling-pieces-of-wood/)
3. [Maximum Number of Points with Cost](https://leetcode.com/problems/maximum-number-of-points-with-cost/)
4. [Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/)
5. [Monster Game I](https://cses.fi/problemset/task/2084)
6. [Frog 3](https://atcoder.jp/contests/dp/tasks/dp_z)

Mutation questions:

1. Min query vs max query.
2. Lines inserted online.
3. Queries arbitrary x.
4. Use coordinate-compressed Li Chao.

### Ladder 59: Treap And Ordered Sets

Unlock idea: When you need ordered insert/delete/kth/split/merge, balanced randomized structures become a new toolbox.

Baseline before this unlock:

1. [Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)
2. [Range Module](https://leetcode.com/problems/range-module/)
3. [List Removals](https://cses.fi/problemset/task/1749)

Frontier unlock: [Design Skiplist](https://leetcode.com/problems/design-skiplist/)

Solidifiers:

1. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
2. [Falling Squares](https://leetcode.com/problems/falling-squares/)
3. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
4. [Traffic Lights](https://cses.fi/problemset/task/1163)
5. [Salary Queries](https://cses.fi/problemset/task/1144)
6. [Amount of New Area Painted Each Day](https://leetcode.com/problems/amount-of-new-area-painted-each-day/)

Mutation questions:

1. Find predecessor/successor.
2. Split by key.
3. Merge two treaps.
4. Maintain subtree size for kth element.

### Ladder 60: Offline Queries With Rollback

Unlock idea: Rollback DSU plus segment tree over time handles edge additions/removals offline.

Baseline before this unlock:

1. [Checking Existence of Edge Length Limited Paths](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/)
2. [Bricks Falling When Hit](https://leetcode.com/problems/bricks-falling-when-hit/)
3. [Road Construction](https://cses.fi/problemset/task/1676)

Frontier unlock: [Dynamic Connectivity](https://cses.fi/problemset/task/2133)

Solidifiers:

1. [Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/)
2. [Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/)
3. [Road Construction](https://cses.fi/problemset/task/1676)
4. [Building Roads](https://cses.fi/problemset/task/1666)
5. [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)
6. [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)

Mutation questions:

1. Store operations on intervals of time.
2. Rollback parent and size changes.
3. Answer connectivity at leaves.
4. No path compression under rollback.

### Ladder 61: Modular Combinatorics

Unlock idea: Factorials, inverse factorials, and modular inverses unlock counting under large modulo.

Baseline before this unlock:

1. [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/)
2. [Pow(x, n)](https://leetcode.com/problems/powx-n/)
3. [Binomial Coefficients](https://cses.fi/problemset/task/1079)

Frontier unlock: [Creating Strings II](https://cses.fi/problemset/task/1715)

Solidifiers:

1. [Distributing Apples](https://cses.fi/problemset/task/1716)
2. [Christmas Party](https://cses.fi/problemset/task/1717)
3. [Count All Valid Pickup and Delivery Options](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/)
4. [Number of Ways to Reorder Array to Get Same BST](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/)
5. [Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)
6. [Count Number of Homogenous Substrings](https://leetcode.com/problems/count-number-of-homogenous-substrings/)

Mutation questions:

1. Precompute factorials.
2. Divide by duplicate factorials.
3. Use Fermat inverse.
4. Switch from permutations to combinations.

### Ladder 62: Inclusion-Exclusion

Unlock idea: Counting often requires adding all, subtracting bad, and managing overlaps.

Baseline before this unlock:

1. [Subsets](https://leetcode.com/problems/subsets/)
2. [Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/)
3. [Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/)

Frontier unlock: [Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)

Solidifiers:

1. [Count Vowels Permutation](https://leetcode.com/problems/count-vowels-permutation/)
2. [Number of Music Playlists](https://leetcode.com/problems/number-of-music-playlists/)
3. [K Inverse Pairs Array](https://leetcode.com/problems/k-inverse-pairs-array/)
4. [Counting Derangements](https://cses.fi/problemset/task/1717)
5. [Counting Coprime Pairs](https://cses.fi/problemset/task/2417)
6. [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/)

Mutation questions:

1. Count at least one condition.
2. Count none of the forbidden properties.
3. Use bitmask inclusion-exclusion.
4. Combine with DP.

### Ladder 63: Sieve, Mobius, And Divisor Counting

Unlock idea: Number theory counting often flips from values to divisors and uses inclusion-exclusion over multiples.

Baseline before this unlock:

1. [Count Primes](https://leetcode.com/problems/count-primes/)
2. [Ugly Number III](https://leetcode.com/problems/ugly-number-iii/)
3. [Common Divisors](https://cses.fi/problemset/task/1081)

Frontier unlock: [Counting Coprime Pairs](https://cses.fi/problemset/task/2417)

Solidifiers:

1. [Divisor Analysis](https://cses.fi/problemset/task/2182)
2. [Prime Multiples](https://cses.fi/problemset/task/2185)
3. [Counting Divisors](https://cses.fi/problemset/task/1713)
4. [Number of Different Subsequences GCDs](https://leetcode.com/problems/number-of-different-subsequences-gcds/)
5. [Count Array Pairs Divisible by K](https://leetcode.com/problems/count-array-pairs-divisible-by-k/)
6. [Greatest Common Divisor Traversal](https://leetcode.com/problems/greatest-common-divisor-traversal/)

Mutation questions:

1. Count pairs with gcd = 1.
2. Count by multiples of d.
3. Use Mobius inversion conceptually.
4. Precompute smallest prime factor.

### Ladder 64: GCD And Diophantine Thinking

Unlock idea: Connectivity and reachability can depend on shared factors, not explicit edges.

Baseline before this unlock:

1. [Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/)
2. [Water and Jug Problem](https://leetcode.com/problems/water-and-jug-problem/)
3. [Minimum Operations to Make Array Equal](https://leetcode.com/problems/minimum-operations-to-make-array-equal/)

Frontier unlock: [Greatest Common Divisor Traversal](https://leetcode.com/problems/greatest-common-divisor-traversal/)

Solidifiers:

1. [Number of Different Subsequences GCDs](https://leetcode.com/problems/number-of-different-subsequences-gcds/)
2. [Count Array Pairs Divisible by K](https://leetcode.com/problems/count-array-pairs-divisible-by-k/)
3. [Common Divisors](https://cses.fi/problemset/task/1081)
4. [Counting Coprime Pairs](https://cses.fi/problemset/task/2417)
5. [Check if Point Is Reachable](https://leetcode.com/problems/check-if-point-is-reachable/)
6. [Minimum Number of Operations to Make Array Continuous](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/)

Mutation questions:

1. Build DSU through prime factors.
2. Use gcd for reachability.
3. Count pairs by gcd buckets.
4. Use extended gcd for linear combinations.

### Ladder 65: Matrix Exponentiation

Unlock idea: Linear recurrences and fixed-length walks can be exponentiated with matrices.

Baseline before this unlock:

1. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
2. [Pow(x, n)](https://leetcode.com/problems/powx-n/)
3. [Walk](https://atcoder.jp/contests/dp/tasks/dp_r)

Frontier unlock: [Walk](https://atcoder.jp/contests/dp/tasks/dp_r)

Solidifiers:

1. [Knight Dialer](https://leetcode.com/problems/knight-dialer/)
2. [Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/)
3. [Number of Ways to Stay in the Same Place After Some Steps](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/)
4. [Graph Paths I](https://cses.fi/problemset/task/1723)
5. [Graph Paths II](https://cses.fi/problemset/task/1724)
6. [Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/)

Mutation questions:

1. Turn recurrence into matrix.
2. Count walks of exactly K edges.
3. Use min-plus matrix for shortest paths.
4. Optimize exponentiation by squaring.

### Ladder 66: Geometry Orientation

Unlock idea: Cross products and orientation tests replace fragile slope/float reasoning.

Baseline before this unlock:

1. [Rectangle Overlap](https://leetcode.com/problems/rectangle-overlap/)
2. [Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/)
3. [Point Location Test](https://cses.fi/problemset/task/2189)

Frontier unlock: [Line Segment Intersection](https://cses.fi/problemset/task/2190)

Solidifiers:

1. [Polygon Area](https://cses.fi/problemset/task/2191)
2. [Point in Polygon](https://cses.fi/problemset/task/2192)
3. [Polygon Lattice Points](https://cses.fi/problemset/task/2193)
4. [Rectangle Area](https://leetcode.com/problems/rectangle-area/)
5. [Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)
6. [Check If It Is a Straight Line](https://leetcode.com/problems/check-if-it-is-a-straight-line/)

Mutation questions:

1. Handle collinear points.
2. Avoid floating point slopes.
3. Check on-segment condition.
4. Use signed area.

### Ladder 67: Convex Hull And Closest Pair

Unlock idea: Convex hull is a reusable boundary abstraction for many geometry optimization problems.

Baseline before this unlock:

1. [Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/)
2. [Point Location Test](https://cses.fi/problemset/task/2189)
3. [Polygon Area](https://cses.fi/problemset/task/2191)

Frontier unlock: [Erect the Fence](https://leetcode.com/problems/erect-the-fence/)

Solidifiers:

1. [Convex Hull](https://cses.fi/problemset/task/2195)
2. [Minimum Euclidean Distance](https://cses.fi/problemset/task/2194)
3. [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)
4. [Valid Square](https://leetcode.com/problems/valid-square/)
5. [Minimum Area Rectangle](https://leetcode.com/problems/minimum-area-rectangle/)
6. [Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)

Mutation questions:

1. Include collinear boundary points.
2. Exclude collinear interior points.
3. Find rotating-calipers diameter.
4. Closest pair by divide and conquer.

### Ladder 68: Sweep Line Geometry

Unlock idea: 2D union and intersection problems often become sweep-line plus active interval structure.

Baseline before this unlock:

1. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
2. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
3. [Line Segment Intersection](https://cses.fi/problemset/task/2190)

Frontier unlock: [Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)

Solidifiers:

1. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
2. [Falling Squares](https://leetcode.com/problems/falling-squares/)
3. [Minimum Euclidean Distance](https://cses.fi/problemset/task/2194)
4. [Amount of New Area Painted Each Day](https://leetcode.com/problems/amount-of-new-area-painted-each-day/)
5. [Perfect Rectangle](https://leetcode.com/problems/perfect-rectangle/)
6. [Employee Free Time](https://leetcode.com/problems/employee-free-time/)

Mutation questions:

1. Sweep x and maintain y-coverage.
2. Compress y-coordinates.
3. Count union area modulo M.
4. Handle overlapping rectangles.

### Ladder 69: Randomization And Probability APIs

Unlock idea: Map sparse forbidden values into valid space rather than sampling and retrying.

Baseline before this unlock:

1. [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/)
2. [Linked List Random Node](https://leetcode.com/problems/linked-list-random-node/)
3. [Shuffle an Array](https://leetcode.com/problems/shuffle-an-array/)

Frontier unlock: [Random Pick with Blacklist](https://leetcode.com/problems/random-pick-with-blacklist/)

Solidifiers:

1. [Implement Rand10() Using Rand7()](https://leetcode.com/problems/implement-rand10-using-rand7/)
2. [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)
3. [Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/)
4. [Generate Random Point in a Circle](https://leetcode.com/problems/generate-random-point-in-a-circle/)
5. [Random Point in Non-overlapping Rectangles](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/)
6. [Random Flip Matrix](https://leetcode.com/problems/random-flip-matrix/)

Mutation questions:

1. Use prefix probability and binary search.
2. Use rejection sampling and bound expected retries.
3. Use reservoir sampling.
4. Map blacklist values to allowed tail values.

### Ladder 70: Expression Parsing

Unlock idea: Stack state should represent pending signs, values, and nested expression context.

Baseline before this unlock:

1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
2. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
3. [Decode String](https://leetcode.com/problems/decode-string/)

Frontier unlock: [Basic Calculator](https://leetcode.com/problems/basic-calculator/)

Solidifiers:

1. [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/)
2. [Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/)
3. [Number of Atoms](https://leetcode.com/problems/number-of-atoms/)
4. [Parsing A Boolean Expression](https://leetcode.com/problems/parsing-a-boolean-expression/)
5. [Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/)
6. [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)

Mutation questions:

1. Add unary minus.
2. Add operator precedence.
3. Add nested parentheses.
4. Return parse tree instead of value.

### Ladder 71: O(1) Design Data Structures

Unlock idea: Multiple indexes must be updated atomically to preserve O(1) API behavior.

Baseline before this unlock:

1. [LRU Cache](https://leetcode.com/problems/lru-cache/)
2. [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)
3. [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)

Frontier unlock: [LFU Cache](https://leetcode.com/problems/lfu-cache/)

Solidifiers:

1. [All O(1) Data Structure](https://leetcode.com/problems/all-oone-data-structure/)
2. [Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/)
3. [Snapshot Array](https://leetcode.com/problems/snapshot-array/)
4. [Design Twitter](https://leetcode.com/problems/design-twitter/)
5. [Design In-Memory File System](https://leetcode.com/problems/design-in-memory-file-system/)
6. [Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/)

Mutation questions:

1. Add TTL expiration.
2. Add duplicate keys or values.
3. Add capacity eviction.
4. Explain each map/list pointer update.

### Ladder 72: Trie Plus DP Word Segmentation

Unlock idea: Trie and DP combine when valid prefixes create transitions in a string segmentation graph.

Baseline before this unlock:

1. [Word Break](https://leetcode.com/problems/word-break/)
2. [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/)
3. [Word Combinations](https://cses.fi/problemset/task/1731)

Frontier unlock: [Concatenated Words](https://leetcode.com/problems/concatenated-words/)

Solidifiers:

1. [Word Break II](https://leetcode.com/problems/word-break-ii/)
2. [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
3. [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
4. [Stream of Characters](https://leetcode.com/problems/stream-of-characters/)
5. [Word Combinations](https://cses.fi/problemset/task/1731)
6. [Extra Characters in a String](https://leetcode.com/problems/extra-characters-in-a-string/)

Mutation questions:

1. Return boolean vs count vs all sentences.
2. Use trie to avoid substring creation.
3. Allow wildcard characters.
4. Minimize leftover characters.

### Ladder 73: DP Plus Range Data Structure

Unlock idea: DP transitions that ask for max over previous values become Fenwick/segment tree queries.

Baseline before this unlock:

1. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
2. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
3. [Flowers](https://atcoder.jp/contests/dp/tasks/dp_q)

Frontier unlock: [Flowers](https://atcoder.jp/contests/dp/tasks/dp_q)

Solidifiers:

1. [Longest Increasing Subsequence II](https://leetcode.com/problems/longest-increasing-subsequence-ii/)
2. [Maximum Balanced Subsequence Sum](https://leetcode.com/problems/maximum-balanced-subsequence-sum/)
3. [Best Team With No Conflicts](https://leetcode.com/problems/best-team-with-no-conflicts/)
4. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
5. [Projects](https://cses.fi/problemset/task/1140)
6. [Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)

Mutation questions:

1. Sort first, then DP.
2. Query range max by value.
3. Coordinate-compress states.
4. Return chosen sequence.

### Ladder 74: String DP Meets Automata

Unlock idea: Digit DP style tight bounds can merge with KMP automaton state to avoid forbidden substrings.

Baseline before this unlock:

1. [Word Break](https://leetcode.com/problems/word-break/)
2. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
3. [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)

Frontier unlock: [Find All Good Strings](https://leetcode.com/problems/find-all-good-strings/)

Solidifiers:

1. [Distinct Subsequences II](https://leetcode.com/problems/distinct-subsequences-ii/)
2. [Count Different Palindromic Subsequences](https://leetcode.com/problems/count-different-palindromic-subsequences/)
3. [String Functions](https://cses.fi/problemset/task/2107)
4. [Counting Patterns](https://cses.fi/problemset/task/2103)
5. [Number of Ways to Form a Target String Given a Dictionary](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/)
6. [Freedom Trail](https://leetcode.com/problems/freedom-trail/)

Mutation questions:

1. Add automaton state to DP.
2. Use prefix function for forbidden pattern.
3. Add lexicographic lower/upper bound.
4. Count strings modulo M.

### Ladder 75: Two-Agent Grid DP

Unlock idea: Two trips can become two walkers moving simultaneously, reducing repeated path dependence.

Baseline before this unlock:

1. [Unique Paths](https://leetcode.com/problems/unique-paths/)
2. [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)
3. [Dungeon Game](https://leetcode.com/problems/dungeon-game/)

Frontier unlock: [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/)

Solidifiers:

1. [Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/)
2. [Minimum Falling Path Sum II](https://leetcode.com/problems/minimum-falling-path-sum-ii/)
3. [Maximum Number of Points with Cost](https://leetcode.com/problems/maximum-number-of-points-with-cost/)
4. [Number of Paths with Max Score](https://leetcode.com/problems/number-of-paths-with-max-score/)
5. [Grid 2](https://atcoder.jp/contests/dp/tasks/dp_y)
6. [Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths/)

Mutation questions:

1. Two agents move at same time.
2. Prevent double-counting same cell.
3. Use row and two columns as state.
4. Reverse from end to start.

### Ladder 76: Permutation And Ranking DP

Unlock idea: Inequality patterns and rankings can be counted with prefix-sum optimized DP.

Baseline before this unlock:

1. [Permutations](https://leetcode.com/problems/permutations/)
2. [Next Permutation](https://leetcode.com/problems/next-permutation/)
3. [K-th Symbol in Grammar](https://leetcode.com/problems/k-th-symbol-in-grammar/)

Frontier unlock: [Permutation](https://atcoder.jp/contests/dp/tasks/dp_t)

Solidifiers:

1. [K Inverse Pairs Array](https://leetcode.com/problems/k-inverse-pairs-array/)
2. [Number of Ways to Reorder Array to Get Same BST](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/)
3. [Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/)
4. [DI String Match](https://leetcode.com/problems/di-string-match/)
5. [Find the Derangement of An Array](https://leetcode.com/problems/find-the-derangement-of-an-array/)
6. [Creating Strings II](https://cses.fi/problemset/task/1715)

Mutation questions:

1. Count permutations satisfying inequality string.
2. Use prefix sums over ranks.
3. Handle duplicate values.
4. Return kth permutation.

### Ladder 77: Offline Threshold Queries

Unlock idea: Sort queries and data by threshold, then add only eligible objects to your data structure.

Baseline before this unlock:

1. [Two Sum](https://leetcode.com/problems/two-sum/)
2. [Binary Search](https://leetcode.com/problems/binary-search/)
3. [Accounts Merge](https://leetcode.com/problems/accounts-merge/)

Frontier unlock: [Checking Existence of Edge Length Limited Paths](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/)

Solidifiers:

1. [Maximum XOR With an Element From Array](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/)
2. [Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/)
3. [Maximum Sum Queries](https://leetcode.com/problems/maximum-sum-queries/)
4. [Distinct Values Queries](https://cses.fi/problemset/task/1734)
5. [Nested Ranges Count](https://cses.fi/problemset/task/2169)
6. [Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/)

Mutation questions:

1. Sort queries ascending by limit.
2. Sort events descending by value.
3. Use DSU, heap, trie, or Fenwick as backend.
4. Preserve original query order.

### Ladder 78: Functional Graphs

Unlock idea: Every node has one outgoing edge, so components are cycles with trees feeding into them.

Baseline before this unlock:

1. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
2. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
3. [Course Schedule](https://leetcode.com/problems/course-schedule/)

Frontier unlock: [Planets Queries II](https://cses.fi/problemset/task/1160)

Solidifiers:

1. [Planets Queries I](https://cses.fi/problemset/task/1750)
2. [Planets Cycles](https://cses.fi/problemset/task/1751)
3. [Maximum Employees to Be Invited to a Meeting](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/)
4. [Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/)
5. [Find Closest Node to Given Two Nodes](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/)
6. [Frog Position After T Seconds](https://leetcode.com/problems/frog-position-after-t-seconds/)

Mutation questions:

1. Binary lifting on next pointers.
2. Find cycle entry and length.
3. Distance to cycle.
4. Answer kth successor queries.

### Ladder 79: MEX And Dynamic Smallest Missing

Unlock idea: MEX problems reward maintaining exactly the missing frontier instead of rescanning values.

Baseline before this unlock:

1. [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)
2. [Missing Number](https://leetcode.com/problems/missing-number/)
3. [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)

Frontier unlock: [Smallest Missing Genetic Value in Each Subtree](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/)

Solidifiers:

1. [Minimum Number of Operations to Make Array Continuous](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/)
2. [Maximum MEX After Operations](https://leetcode.com/problems/maximum-mex-after-operations/)
3. [Find the K-th Smallest Sum of a Matrix With Sorted Rows](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/)
4. [Mex Grid Construction](https://cses.fi/problemset/task/3314)
5. [Append K Integers With Minimal Sum](https://leetcode.com/problems/append-k-integers-with-minimal-sum/)
6. [Couples Holding Hands](https://leetcode.com/problems/couples-holding-hands/)

Mutation questions:

1. Static MEX.
2. Dynamic MEX after updates.
3. Subtree MEX.
4. MEX under modulo classes.

### Ladder 80: Min-Cost Path With Extra Resource

Unlock idea: Shortest path may need a second resource dimension, making it graph DP rather than plain Dijkstra.

Baseline before this unlock:

1. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
2. [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
3. [Coin Change](https://leetcode.com/problems/coin-change/)

Frontier unlock: [Minimum Cost to Reach Destination in Time](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/)

Solidifiers:

1. [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/)
2. [Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/)
3. [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)
4. [Second Minimum Time to Reach Destination](https://leetcode.com/problems/second-minimum-time-to-reach-destination/)
5. [Flight Discount](https://cses.fi/problemset/task/1195)
6. [Minimum Weighted Subgraph With the Required Paths](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/)

Mutation questions:

1. Budget is time, optimize cost.
2. Budget is stops, optimize price.
3. State includes node and resource used.
4. Dominance pruning: worse cost and worse resource can be dropped.

### Ladder 81: Final Mixed Frontier Boss

Unlock idea: Hard problems often merge string overlap, bitmask DP, reconstruction, and preprocessing.

Baseline before this unlock:

1. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
2. [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/)
3. [Burst Balloons](https://leetcode.com/problems/burst-balloons/)

Frontier unlock: [Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/)

Solidifiers:

1. [Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word/)
2. [Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)
3. [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
4. [Word Search II](https://leetcode.com/problems/word-search-ii/)
5. [Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)
6. [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)

Mutation questions:

1. Reconstruct optimal answer.
2. Precompute pairwise transition cost.
3. Mask represents completed strings/skills/cells.
4. Remove dominated inputs before DP.

## Totals

- Ladders: 81
- Directed questions/reps: 1134
- Linked platform problems: 810
- Custom mutation questions: 324

## Where To Go After This

If you finish this workbook honestly, progress in this order:

1. CSES Advanced Graphs, Tree Algorithms, Range Queries, and String Algorithms.
2. AtCoder DP Contest until every transition feels natural.
3. USACO Guide Gold, then Platinum modules.
4. Codeforces 1800-2000 problems for speed and recognition.
5. Codeforces 2100-2400 problems for synthesis and proof.
6. AtCoder ARC/ABC Ex problems for clean mathematical reductions.
7. ICPC-style regional problemsets if you want true competitive-programming depth.

Do not rush the sheet. The point is to turn each unlock into a reusable mental tool.
