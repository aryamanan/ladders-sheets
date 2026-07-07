# Extreme Mastery Map

This is the heavier replacement for a normal DSA list. It is built to cover the interview surface area, not just popular questions. No document can honestly guarantee a 100% pass rate, because interviews also test communication, speed, debugging, and judgment under pressure. But if you can solve this set cold, explain the invariants, and adapt to variants, you should be ready for almost any FAANG-style DSA interview.

Primary calibration sources: [LeetCode Problemset](https://leetcode.com/problemset/), [LeetCode Top Interview 150](https://leetcode.com/studyplan/top-interview-150/), [NeetCode Roadmap](https://neetcode.io/roadmap), [CSES Problem Set](https://cses.fi/problemset/), and [cp-algorithms](https://cp-algorithms.com/).

## The Standard

You are not done when you get accepted. You are done when you can do all of this:

1. State the brute force solution.
2. State the optimized idea.
3. Name the invariant or proof idea.
4. Implement cleanly without editorials.
5. Give time and space complexity.
6. Explain edge cases.
7. Explain what changes if constraints become 10x larger.
8. Solve a nearby variant in the same sitting.

## Coverage Mindset

Interviewers rarely ask "topic names." They ask disguised versions of patterns:

- Can you transform raw input into the right state?
- Can you see monotonicity?
- Can you choose the right traversal?
- Can you turn exponential search into DP?
- Can you identify whether the graph is implicit?
- Can you avoid double-counting?
- Can you make the data structure maintain exactly the needed invariant?
- Can you reason about constraints before coding?

## 30 Brutal Mock Rounds

Do these timed. Each round is 75 to 90 minutes. No hints, no editorials, no AI.

| Round | Topic | Problem 1 | Problem 2 |
|---|---|---|---|
| 1 | Arrays, Hashing, Counting | [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) | [Grid Illumination](https://leetcode.com/problems/grid-illumination/) |
| 2 | Prefix Sums, Difference Arrays, Subarray Counting | [Count All Subarrays With Given Sum](https://www.naukri.com/code360/problems/subarray-sums-i_1467103) | [Maximum Sum of Two Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/) |
| 3 | Two Pointers | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/) |
| 4 | Sliding Window and Deques | [Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) | [Design Front Middle Back Queue](https://leetcode.com/problems/design-front-middle-back-queue/) |
| 5 | Sorting, Intervals, Sweep Line | [Sort the Jumbled Numbers](https://leetcode.com/problems/sort-the-jumbled-numbers/) | [Maximum Gap](https://leetcode.com/problems/maximum-gap/) |
| 6 | Binary Search | [Search Insert Position](https://leetcode.com/problems/search-insert-position/) | [Search In Infinite Sorted 0-1 Array](https://www.naukri.com/code360/problem-details/search-in-infinite-sorted-0-1-array_696193) |
| 7 | Stack, Monotonic Stack, Parsing | [Remove Outermost Parentheses](https://leetcode.com/problems/remove-outermost-parentheses/) | [N Stacks in an Array](https://www.naukri.com/code360/problems/n-stacks-in-an-array_1164271) |
| 8 | Heaps, Priority Queues, Streaming | [K Largest Elements](https://www.geeksforgeeks.org/problems/k-largest-elements4206/1) | [Design a Food Rating System](https://leetcode.com/problems/design-a-food-rating-system/) |
| 9 | Linked Lists and Pointer Manipulation | [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) | [Design Linked List](https://leetcode.com/problems/design-linked-list/) |
| 10 | DSA Design | [Design Hit Counter](https://leetcode.com/problems/design-hit-counter/) | [Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/) |
| 11 | Binary Trees and BSTs | [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) | [Second Minimum Node In a Binary Tree](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/) |
| 12 | Tries and Word Search | [Sum of Prefix Scores of Strings](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/) | [Encrypt and Decrypt Strings](https://leetcode.com/problems/encrypt-and-decrypt-strings/) |
| 13 | String Algorithms | [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) | [Unique Length-3 Palindromic Subsequences](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/) |
| 14 | Graph Traversal | [Flood Fill](https://leetcode.com/problems/flood-fill/) | [Labyrinth](https://cses.fi/problemset/task/1193) |
| 15 | Directed Graphs, Topological Sort, SCC | [Alien Dictionary](https://www.geeksforgeeks.org/problems/alien-dictionary/1) | [Giant Pizza](https://cses.fi/problemset/task/1684) |
| 16 | DSU, MST, Offline Connectivity | [Disjoint Set (Union-Find)](https://practice.geeksforgeeks.org/problems/disjoint-set-union-find/1) | [Kruskal's Minimum Spanning Tree Algorithm](https://www.naukri.com/code360/problem-details/kruskal-s-minimum-spanning-tree-algorithm_1082553) |
| 17 | Shortest Paths | [Shortest Routes I](https://cses.fi/problemset/task/1671) | [Shortest Distance After Road Addition Queries II](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/) |
| 18 | Flow and Matching | [Maximum Bipartite Matching](https://www.geeksforgeeks.org/problems/maximum-bipartite-matching--170646/1) | [Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/) |
| 19 | Greedy | [Minimum Deletion Cost to Avoid Repeating Letters](https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/) | [Fractional Knapsack](https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1) |
| 20 | Backtracking and Branching Search | [Non-decreasing Subsequences](https://leetcode.com/problems/non-decreasing-subsequences/) | [M-Coloring Problem](https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1) |
| 21 | Dynamic Programming Foundations | [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | [Paint House II](https://leetcode.com/problems/paint-house-ii/) |
| 22 | Knapsack, LIS, Stocks | [0 - 1 Knapsack Problem](https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1) | [Flip Array](https://www.interviewbit.com/problems/flip-array/) |
| 23 | String DP | [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) | [Word Wrap](https://www.geeksforgeeks.org/problems/word-wrap1646/1) |
| 24 | Grid, Interval, Game DP | [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/) | [Egg Dropping Puzzle](https://www.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1) |
| 25 | Bitmask, Digit, Profile DP | [Parallel Courses II](https://leetcode.com/problems/parallel-courses-ii/) | [Counting Tilings](https://cses.fi/problemset/task/2181) |
| 26 | Range Queries and Ordered Structures | [Dynamic Range Sum Queries](https://cses.fi/problemset/task/1648) | [Distinct Values Queries](https://cses.fi/problemset/task/1734) |
| 27 | Tree Algorithms Beyond Binary Trees | [Subordinates](https://cses.fi/problemset/task/1674) | [Company Queries II](https://cses.fi/problemset/task/1688) |
| 28 | Math, Bits, Randomization, Geometry | [Counting Divisors](https://cses.fi/problemset/task/1713) | [Convex Hull](https://cses.fi/problemset/task/2195) |

## Mastery Rubric

- Bronze: solve 120 problems from this doc without hints.
- Silver: solve 220 problems, including at least 60 hard problems.
- Gold: solve 320 problems, including all mock rounds and all weak-topic retries.
- Black belt: solve the advanced CSES section too, explain each algorithm from first principles, and pass random mixed mocks under time.

## Topic Taxonomy

Each topic below is broken into named sub-patterns pulled from its own "Know:" vocabulary. Every sub-pattern has one invariant to internalize, then a Foundation to Reinforcement to Boss ladder of real, verified problems -- sourced from LeetCode (premium-checked), GeeksforGeeks, InterviewBit, Naukri Code360, and CSES, with zero overlap against the other sheets in this repo.

### Arrays, Hashing, Counting

#### In-Place Index Encoding And Cyclic Placement

- Invariant: When values are bounded to [1, n], the array's own indices can serve as a hash table by negating or swapping into place.

Foundation:

1. [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
2. [Set Mismatch](https://leetcode.com/problems/set-mismatch/)


#### Majority Vote (Boyer-Moore)

- Invariant: A true majority element survives cancellation against every non-majority element when paired off.

Foundation:

1. [Majority Element](https://leetcode.com/problems/majority-element/)

Boss:

1. [Majority Element II](https://leetcode.com/problems/majority-element-ii/)


#### In-Place Matrix Transformation

- Invariant: Rotating, zeroing, or traversing a matrix in place is an index-remapping exercise, not an allocation exercise.

Foundation:

1. [Rotate Array](https://leetcode.com/problems/rotate-array/)
2. [Move Zeroes](https://leetcode.com/problems/move-zeroes/)

Reinforcement:

1. [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)
2. [Rotate Image](https://leetcode.com/problems/rotate-image/)

Boss:

1. [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)
2. [Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)
3. [Game of Life](https://leetcode.com/problems/game-of-life/)


#### Hashmap Complement / Pair-Sum Counting

- Invariant: Store exactly the counts needed to answer "does the complement exist" in O(1) per element.

Foundation:

1. [Count Pairs With Given Sum](https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum--150253/1)
2. [K-diff Pairs in an Array](https://leetcode.com/problems/k-diff-pairs-in-an-array/)
3. [Max Number of K-Sum Pairs](https://leetcode.com/problems/max-number-of-k-sum-pairs/)

Reinforcement:

1. [Check if Array Pairs Are Divisible by K](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/)
2. [4Sum II](https://leetcode.com/problems/4sum-ii/)
3. [Number of Equivalent Domino Pairs](https://leetcode.com/problems/number-of-equivalent-domino-pairs/)

Boss:

1. [Find Players With Zero or One Losses](https://leetcode.com/problems/find-players-with-zero-or-one-losses/)


#### Frequency-Driven Reordering

- Invariant: Once you know each element's count, placement becomes a bucket/comparator problem rather than a search problem.

Foundation:

1. [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)
2. [Custom Sort String](https://leetcode.com/problems/custom-sort-string/)
3. [Relative Sort Array](https://leetcode.com/problems/relative-sort-array/)

Reinforcement:

1. [Group the People Given the Group Size They Belong To](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/)
2. [Array of Doubled Pairs](https://leetcode.com/problems/array-of-doubled-pairs/)

Boss:

1. [Split Array into Consecutive Subsequences](https://leetcode.com/problems/split-array-into-consecutive-subsequences/)


#### Multiset / Bijection Equality Checks

- Invariant: Two structures are equivalent iff their canonical (sorted-count or mapped) forms match exactly.

Foundation:

1. [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/)
2. [Non Repeating Character](https://www.geeksforgeeks.org/problems/non-repeating-character-1587115620/1)

Reinforcement:

1. [Determine if Two Strings Are Close](https://leetcode.com/problems/determine-if-two-strings-are-close/)
2. [Longest Harmonious Subsequence](https://leetcode.com/problems/longest-harmonious-subsequence/)


#### Prefix/Suffix Aggregate Reasoning

- Invariant: Many "count elements satisfying X relative to position i" problems reduce to a running prefix/suffix aggregate.

Foundation:

1. [H-Index](https://leetcode.com/problems/h-index/)
2. [H-Index II](https://leetcode.com/problems/h-index-ii/)

Reinforcement:

1. [Minimum Consecutive Cards to Pick Up](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/)

Boss:

1. [Brick Wall](https://leetcode.com/problems/brick-wall/)
2. [Grid Illumination](https://leetcode.com/problems/grid-illumination/)


### Prefix Sums, Difference Arrays, Subarray Counting

#### Prefix-Sum Hashmap Counting

- Invariant: A subarray sum equals target iff two prefix sums differ by exactly target; store first/every occurrence in a hashmap.

Foundation:

1. [Count All Subarrays With Given Sum](https://www.naukri.com/code360/problems/subarray-sums-i_1467103)
2. [Subarray With Given Sum](https://www.naukri.com/code360/problems/subarray-with-given-sum_842487)
3. [Number of Sub-arrays With Odd Sum](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/)

Reinforcement:

1. [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/)
2. [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)
3. [Contiguous Array](https://leetcode.com/problems/contiguous-array/)

Boss:

1. [Maximum Size Subarray Sum Equals k](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/)
2. [Find Two Non-overlapping Sub-arrays Each With Target Sum](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/)
3. [Longest Well-Performing Interval](https://leetcode.com/problems/longest-well-performing-interval/)


#### Difference Arrays For Range Updates

- Invariant: A range +delta update is two point updates on a difference array, recovered by a single prefix-sum pass.

Foundation:

1. [Maximum Population Year](https://leetcode.com/problems/maximum-population-year/)
2. [Zero Array Transformation I](https://leetcode.com/problems/zero-array-transformation-i/)

Reinforcement:

1. [Zero Array Transformation II](https://leetcode.com/problems/zero-array-transformation-ii/)

Boss:

1. [Describe the Painting](https://leetcode.com/problems/describe-the-painting/)
2. [Count Days Without Meetings](https://leetcode.com/problems/count-days-without-meetings/)


#### 2D Prefix Sums

- Invariant: A 2D block sum is four corner lookups into a precomputed 2D prefix table.

Foundation:

1. [Matrix Block Sum](https://leetcode.com/problems/matrix-block-sum/)

Boss:

1. [Count Submatrices With All Ones](https://leetcode.com/problems/count-submatrices-with-all-ones/)


#### Prefix Aggregates Beyond Plain Sums

- Invariant: Prefix reasoning generalizes to running products (with zero-resets), parity buckets, and circular wraparound.

Foundation:

1. [Sum of All Odd Length Subarrays](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/)
2. [Equilibrium Point](https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1)

Reinforcement:

1. [Product of the Last K Numbers](https://leetcode.com/problems/product-of-the-last-k-numbers/)
2. [K Radius Subarray Averages](https://leetcode.com/problems/k-radius-subarray-averages/)

Boss:

1. [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/)
2. [Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)
3. [Maximum Sum of Two Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/)


### Two Pointers

#### Sorted-Array Opposite-End Pointers

- Invariant: On a sorted array, advancing the pointer at the provably-wrong extreme is always safe and never skips the answer.

Foundation:

1. [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
2. [Pair With Given Difference](https://www.interviewbit.com/problems/pair-with-given-difference/)

Reinforcement:

1. [3Sum Closest](https://leetcode.com/problems/3sum-closest/)
2. [Minimize Maximum Pair Sum in Array](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/)
3. [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)

Boss:

1. [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)


#### In-Place Partitioning

- Invariant: A write pointer trailing a read pointer compacts or reorders an array in one pass without extra space.

Foundation:

1. [Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/)
2. [Sort Array By Parity II](https://leetcode.com/problems/sort-array-by-parity-ii/)
3. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

Boss:

1. [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)
2. [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)


#### Palindrome / Mirror Scanning

- Invariant: Comparing from both ends simultaneously verifies symmetry, or breaks it, in one pass.

Foundation:

1. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
2. [Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/)

Reinforcement:

1. [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)
2. [Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)

Boss:

1. [Minimum Number of Moves to Make Palindrome](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/)


#### Fast/Slow And Cross-Structure Two Pointers

- Invariant: Two pointers moving at different rates, or over different structures (list vs. BST-inorder), still preserve the sorted-search property.

Foundation:

1. [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
2. [Is Subsequence](https://leetcode.com/problems/is-subsequence/)

Reinforcement:

1. [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)
2. [Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

Boss:

1. [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)


### Sliding Window and Deques

#### Fixed-Size Window Aggregation

- Invariant: A fixed window's aggregate updates in O(1) by adding the entering element and removing the one that leaves.

Foundation:

1. [Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)
2. [First Negative Integer in Every Window of Size K](https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1)

Reinforcement:

1. [Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/)
2. [Minimum Swaps to Group All 1's Together](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/)

Boss:

1. [Minimum Swaps to Group All 1's Together II](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/)
2. [Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)


#### Variable Window With A Budget Or Constraint

- Invariant: Grow the window greedily; shrink from the left only when the constraint is violated, never re-scan from scratch.

Foundation:

1. [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
2. [Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)

Reinforcement:

1. [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)
2. [Length of Longest Subarray With at Most K Frequency](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/)
3. [Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)

Boss:

1. [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)
2. [Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/)
3. [Count Complete Subarrays in an Array](https://leetcode.com/problems/count-complete-subarrays-in-an-array/)


#### Monotonic Deque Window Extremum

- Invariant: A deque that evicts dominated elements from the back keeps the window's max/min accessible at the front in amortized O(1).

Foundation:

1. [Continuous Subarrays](https://leetcode.com/problems/continuous-subarrays/)

Boss:

1. [Maximum Number of Robots Within Budget](https://leetcode.com/problems/maximum-number-of-robots-within-budget/)
2. [Count Subarrays Where Max Element Appears at Least K Times](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/)


#### Window Plus Extra State

- Invariant: Some windows need more than a running counter -- a bitmask, a value cap, or a companion data structure.

Foundation:

1. [Maximum Erasure Value](https://leetcode.com/problems/maximum-erasure-value/)

Boss:

1. [Longest Nice Subarray](https://leetcode.com/problems/longest-nice-subarray/)
2. [Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/)
3. [Design Front Middle Back Queue](https://leetcode.com/problems/design-front-middle-back-queue/)


### Sorting, Intervals, Sweep Line

#### Custom Comparator Sort

- Invariant: When the natural order isn't numeric or lexicographic, define a comparator that directly encodes the optimality criterion.

Foundation:

1. [Sort the Jumbled Numbers](https://leetcode.com/problems/sort-the-jumbled-numbers/)
2. [Wiggle Sort II](https://leetcode.com/problems/wiggle-sort-ii/)

Reinforcement:

1. [Largest Number](https://leetcode.com/problems/largest-number/)
2. [Advantage Shuffle](https://leetcode.com/problems/advantage-shuffle/)

Boss:

1. [Pancake Sorting](https://leetcode.com/problems/pancake-sorting/)


#### Sort Then Greedy Assignment

- Invariant: Sorting collapses an assignment problem into a single left-to-right greedy pass.

Foundation:

1. [Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/)

Reinforcement:

1. [Rank Transform of an Array](https://leetcode.com/problems/rank-transform-of-an-array/)
2. [Reduction Operations to Make the Array Elements Equal](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/)

Boss:

1. [Minimum Time Difference](https://leetcode.com/problems/minimum-time-difference/)


#### Interval Merge, Containment, And Sweep

- Invariant: Sorting intervals by start (or end) turns overlap and containment questions into a single linear sweep.

Foundation:

1. [My Calendar I](https://leetcode.com/problems/my-calendar-i/)
2. [Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/)

Reinforcement:

1. [Meeting Scheduler](https://leetcode.com/problems/meeting-scheduler/)
2. [Video Stitching](https://leetcode.com/problems/video-stitching/)

Boss:

1. [Divide Intervals Into Minimum Number of Groups](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/)
2. [Count Integers in Intervals](https://leetcode.com/problems/count-integers-in-intervals/)
3. [Points That Intersect With Cars](https://leetcode.com/problems/points-that-intersect-with-cars/)


#### Weighted / Heap-Assisted Interval Scheduling

- Invariant: When intervals carry a value, a heap (or DP over sorted intervals) replaces plain greedy count-maximization.

Foundation:

1. [Merge Similar Items](https://leetcode.com/problems/merge-similar-items/)

Boss:

1. [Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)
2. [Maximum Number of Events That Can Be Attended II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/)


#### Coordinate/Gap Analysis After Sort

- Invariant: Once sorted, the answer often lives in the gaps between consecutive elements, not the elements themselves.

Foundation:

1. [Maximum Gap](https://leetcode.com/problems/maximum-gap/)


### Binary Search

#### Binary Search On Index

- Invariant: Sortedness lets you eliminate half the remaining indices on every comparison.

Foundation:

1. [Search Insert Position](https://leetcode.com/problems/search-insert-position/)
2. [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/)

Reinforcement:

1. [Find Right Interval](https://leetcode.com/problems/find-right-interval/)
2. [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)

Boss:

1. [Online Election](https://leetcode.com/problems/online-election/)


#### Binary Search On Rotated/Perturbed Sorted Arrays

- Invariant: At least one half of a rotated sorted array is always genuinely sorted; check which half to recurse into.

Foundation:

1. [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

Boss:

1. [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)


#### Binary Search On A Property, Not An Exact Value

- Invariant: Search a monotonic true/false predicate over index space rather than searching for one exact match.

Foundation:

1. [Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/)

Reinforcement:

1. [Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/)
2. [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/)

Boss:

1. [Find a Peak Element II](https://leetcode.com/problems/find-a-peak-element-ii/)


#### Binary Search On The Answer

- Invariant: If a candidate value satisfies the feasibility check, every value on one side of it also does -- monotonicity lets you binary search the answer itself.

Foundation:

1. [Minimize Maximum of Array](https://leetcode.com/problems/minimize-maximum-of-array/)
2. [Allocate Minimum Number of Pages](https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1)

Reinforcement:

1. [The Painter's Partition Problem](https://www.geeksforgeeks.org/problems/the-painters-partition-problem1535/1)
2. [Aggressive Cows](https://www.geeksforgeeks.org/problems/aggressive-cows/1)
3. [Minimum Limit of Balls in a Bag](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/)
4. [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/)

Boss:

1. [Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/)
2. [Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/)
3. [Maximum Number of Removable Characters](https://leetcode.com/problems/maximum-number-of-removable-characters/)
4. [Maximum Side Length of a Square with Sum Less than or Equal to Threshold](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/)
5. [Nth Magical Number](https://leetcode.com/problems/nth-magical-number/)
6. [Sum of Mutated Array Closest to Target](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/)
7. [Special Array With X Elements Greater Than or Equal X](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/)


#### Binary Search On 2D / Matrix Structures

- Invariant: Row and column monotonicity let you eliminate a full row or column per comparison, not just one element.

Foundation:

1. [Count Negative Numbers in a Sorted Matrix](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/)

Boss:

1. [Matrix Median](https://www.interviewbit.com/problems/matrix-median/)


#### Unbounded / Galloping Search

- Invariant: When the search space size is unknown up front, first find an exponential bound, then binary search inside it.

Foundation:

1. [Search In Infinite Sorted 0-1 Array](https://www.naukri.com/code360/problem-details/search-in-infinite-sorted-0-1-array_696193)


### Stack, Monotonic Stack, Parsing

#### Bracket / Bracket-Like Validity Stacks

- Invariant: A stack of open, unmatched tokens turns nested-validity checking into O(1) push/pop decisions.

Foundation:

1. [Remove Outermost Parentheses](https://leetcode.com/problems/remove-outermost-parentheses/)
2. [Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/)

Reinforcement:

1. [Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)
2. [Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/)

Boss:

1. [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)


#### Adjacent-Cancellation Stacks

- Invariant: A stack that pops on a matching adjacent element reduces a string/sequence by cancellation in one pass.

Foundation:

1. [Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

Reinforcement:

1. [Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)
2. [Check If Word Is Valid After Substitutions](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/)


#### Monotonic Stack: Next Greater/Smaller

- Invariant: A monotonic stack discards elements that can never be the answer for anything still to come, leaving O(n) total work.

Foundation:

1. [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)

Reinforcement:

1. [Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/)
2. [132 Pattern](https://leetcode.com/problems/132-pattern/)

Boss:

1. [Maximum Width Ramp](https://leetcode.com/problems/maximum-width-ramp/)
2. [Sum of Subarray Ranges](https://leetcode.com/problems/sum-of-subarray-ranges/)
3. [Car Fleet II](https://leetcode.com/problems/car-fleet-ii/)


#### Monotonic Stack: Counting Contribution

- Invariant: Instead of re-scanning per subarray, count how many subarrays each element controls as the extremum via its stack boundaries.

Foundation:

1. [Number of Valid Subarrays](https://leetcode.com/problems/number-of-valid-subarrays/)


#### Simulation Via Explicit Stack

- Invariant: Some problems are direct simulations of push/pop instructions or nested calls -- the stack literally is the state machine.

Foundation:

1. [Baseball Game](https://leetcode.com/problems/baseball-game/)
2. [Crawler Log Folder](https://leetcode.com/problems/crawler-log-folder/)

Reinforcement:

1. [Validate Stack Sequences](https://leetcode.com/problems/validate-stack-sequences/)
2. [Build an Array With Stack Operations](https://leetcode.com/problems/build-an-array-with-stack-operations/)

Boss:

1. [Exclusive Time of Functions](https://leetcode.com/problems/exclusive-time-of-functions/)
2. [Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator/)
3. [Simplify Path](https://leetcode.com/problems/simplify-path/)


#### Expression / Grammar Parsing

- Invariant: Recursive-descent or precedence-climbing parsing reduces to a stack of pending operators and operands.

Foundation:

1. [Infix to Postfix](https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1)
2. [Redundant Braces](https://www.interviewbit.com/problems/redundant-braces/)

Boss:

1. [Basic Calculator IV](https://leetcode.com/problems/basic-calculator-iv/)


#### Stack-Backed Data Structure Design

- Invariant: Augment a stack with extra bookkeeping (counts, ranges, secondary stacks) to answer more than just push/pop.

Foundation:

1. [Nearest Smaller Element](https://www.interviewbit.com/problems/nearest-smaller-element/)
2. [The Celebrity Problem](https://www.geeksforgeeks.org/problems/the-celebrity-problem/1)

Reinforcement:

1. [Design a Stack With Increment Operation](https://leetcode.com/problems/design-a-stack-with-increment-operation/)
2. [Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/)

Boss:

1. [Dinner Plate Stacks](https://leetcode.com/problems/dinner-plate-stacks/)
2. [N Stacks in an Array](https://www.naukri.com/code360/problems/n-stacks-in-an-array_1164271)


### Heaps, Priority Queues, Streaming

#### Top-K / Bounded Heap Selection

- Invariant: A heap bounded to size k keeps only the k best candidates seen so far, discarding the rest immediately.

Foundation:

1. [K Largest Elements](https://www.geeksforgeeks.org/problems/k-largest-elements4206/1)
2. [Reduce Array Size to the Half](https://leetcode.com/problems/reduce-array-size-to-the-half/)


#### K-Way Merge

- Invariant: A heap holding one candidate per sorted source always exposes the next global minimum/maximum in log(k) time.

Foundation:

1. [Merge K Sorted Arrays](https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1)

Reinforcement:

1. [Ugly Number II](https://leetcode.com/problems/ugly-number-ii/)

Boss:

1. [K-th Smallest Prime Fraction](https://leetcode.com/problems/k-th-smallest-prime-fraction/)


#### Streaming Median / Two Heaps

- Invariant: Balancing a max-heap of the lower half against a min-heap of the upper half keeps the median at both roots.

Foundation:

1. [Find Median in a Stream](https://www.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1)


#### Greedy Rearrangement / Construction Via Heap

- Invariant: When the next best choice can only be judged by frequency or value, a max-heap makes the greedy choice cheap to repeat.

Foundation:

1. [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)
2. [Minimum Cost of Ropes](https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1)

Reinforcement:

1. [Distant Barcodes](https://leetcode.com/problems/distant-barcodes/)
2. [Longest Happy String](https://leetcode.com/problems/longest-happy-string/)
3. [Minimum Deviation in Array](https://leetcode.com/problems/minimum-deviation-in-array/)

Boss:

1. [Maximum Average Pass Ratio](https://leetcode.com/problems/maximum-average-pass-ratio/)
2. [Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/)
3. [Total Cost to Hire K Workers](https://leetcode.com/problems/total-cost-to-hire-k-workers/)


#### Heap-Scheduled Greedy Over Time

- Invariant: A min-heap keyed by an expiry/finish time lets a greedy scheduler always evict or admit the most urgent item first.

Foundation:

1. [Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/)

Reinforcement:

1. [Maximum Number of Eaten Apples](https://leetcode.com/problems/maximum-number-of-eaten-apples/)
2. [Number of Orders in the Backlog](https://leetcode.com/problems/number-of-orders-in-the-backlog/)


#### Streaming Design With Lazy Deletion

- Invariant: Rather than remove a stale entry immediately, mark it and skip past it lazily the next time it surfaces at the top.

Foundation:

1. [Seat Reservation Manager](https://leetcode.com/problems/seat-reservation-manager/)

Reinforcement:

1. [Design a Number Container System](https://leetcode.com/problems/design-a-number-container-system/)
2. [Design a Food Rating System](https://leetcode.com/problems/design-a-food-rating-system/)


### Linked Lists and Pointer Manipulation

#### Dummy Node And In-Place Reversal

- Invariant: A dummy node placed before the head removes special-casing whenever the head itself might be mutated or removed.

Foundation:

1. [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
2. [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

Reinforcement:

1. [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)
2. [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/)

Boss:

1. [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
2. [Reverse Nodes in Even Length Groups](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/)


#### Splicing And Restructuring

- Invariant: Relinking next-pointers around a boundary splices one structure into another without copying any values.

Foundation:

1. [Partition List](https://leetcode.com/problems/partition-list/)
2. [Merge In Between Linked Lists](https://leetcode.com/problems/merge-in-between-linked-lists/)

Reinforcement:

1. [Rotate List](https://leetcode.com/problems/rotate-list/)
2. [Split Linked List in Parts](https://leetcode.com/problems/split-linked-list-in-parts/)

Boss:

1. [Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/)
2. [Flattening a Linked List](https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1)


#### Value Accumulation While Traversing

- Invariant: A running accumulator (digit, bit, running sum) can be built during a single traversal instead of materializing an array first.

Foundation:

1. [Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

Reinforcement:

1. [Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/)

Boss:

1. [Remove Zero Sum Consecutive Nodes from Linked List](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/)


#### Pointer-Offset Techniques

- Invariant: Two pointers separated by a fixed offset find the kth-from-end or swap symmetric nodes without a second pass.

Foundation:

1. [Swapping Nodes in a Linked List](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/)

Reinforcement:

1. [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)


#### Sorting And Ordered Insertion On Lists

- Invariant: Classic sorting algorithms transfer to linked lists once array-index access is replaced by pointer traversal.

Foundation:

1. [Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)

Boss:

1. [Sort List](https://leetcode.com/problems/sort-list/)


#### Deep Copy And Cross-Structure Reasoning

- Invariant: To copy a graph-like structure (random pointers) in O(1) extra space, interleave the copy directly into the original.

Foundation:

1. [Clone a Linked List with Next and Random Pointer](https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1)

Boss:

1. [Linked List in Binary Tree](https://leetcode.com/problems/linked-list-in-binary-tree/)
2. [Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/)


#### Delete/Design Without Head Access

- Invariant: When you can't reach the head, a deletion or design task must be solved purely through local pointer surgery.

Foundation:

1. [Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)

Boss:

1. [Design Linked List](https://leetcode.com/problems/design-linked-list/)


### DSA Design

#### Streaming Counters With Time Windows

- Invariant: Bucket or queue-based counters trimmed by a time/expiry boundary answer "how many in the last X" in amortized O(1).

Foundation:

1. [Design Hit Counter](https://leetcode.com/problems/design-hit-counter/)

Boss:

1. [Design Underground System](https://leetcode.com/problems/design-underground-system/)


#### Ordered / Ranked Live Queries

- Invariant: Maintaining a sorted structure, not just a hashmap, is what keeps rank/leaderboard/gap queries fast after every update.

Foundation:

1. [Design a Leaderboard](https://leetcode.com/problems/design-a-leaderboard/)

Boss:

1. [Exam Room](https://leetcode.com/problems/exam-room/)


#### Circular Buffer Design

- Invariant: Modular arithmetic on read/write pointers turns a fixed array into a wraparound queue or deque.

Foundation:

1. [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)

Boss:

1. [Design Circular Deque](https://leetcode.com/problems/design-circular-deque/)


#### History / Navigation Structures

- Invariant: A back/forward navigation stack is really two stacks: one to go back, one to redo forward.

Foundation:

1. [Design Browser History](https://leetcode.com/problems/design-browser-history/)

Boss:

1. [Complete Binary Tree Inserter](https://leetcode.com/problems/complete-binary-tree-inserter/)


#### Hashing And Encoding From Scratch

- Invariant: Building the hashing or key-generation layer yourself exposes exactly what a library hashmap or shortener hides.

Foundation:

1. [Design HashMap](https://leetcode.com/problems/design-hashmap/)

Boss:

1. [Encode and Decode TinyURL](https://leetcode.com/problems/encode-and-decode-tinyurl/)
2. [Design Log Storage System](https://leetcode.com/problems/design-log-storage-system/)


#### Iterator / Lazy Generation Design

- Invariant: An iterator interface can wrap lazy computation so elements are generated only as they're requested.

Foundation:

1. [Peeking Iterator](https://leetcode.com/problems/peeking-iterator/)

Boss:

1. [Iterator for Combination](https://leetcode.com/problems/iterator-for-combination/)


#### TTL/Expiry And Out-Of-Order Update Handling

- Invariant: Timestamped or expiring state needs a structure that tolerates updates arriving out of chronological order.

Foundation:

1. [Design Authentication Manager](https://leetcode.com/problems/design-authentication-manager/)

Boss:

1. [Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/)


### Binary Trees and BSTs

#### Level-Order (BFS) Traversal Variants

- Invariant: Processing one full level at a time exposes width, per-level aggregates, and completeness properties that DFS would need extra bookkeeping to see.

Foundation:

1. [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/)
2. [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

Reinforcement:

1. [Cousins in Binary Tree](https://leetcode.com/problems/cousins-in-binary-tree/)
2. [Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)
3. [Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/)

Boss:

1. [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)
2. [Check Completeness of a Binary Tree](https://leetcode.com/problems/check-completeness-of-a-binary-tree/)
3. [Even Odd Tree](https://leetcode.com/problems/even-odd-tree/)
4. [Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/)
5. [Add One Row to Tree](https://leetcode.com/problems/add-one-row-to-tree/)


#### Structural Equality And Comparison

- Invariant: Two trees match iff their shapes and values agree at every recursive step, optionally allowing a symmetric mirror or child swap.

Foundation:

1. [Same Tree](https://leetcode.com/problems/same-tree/)
2. [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)

Reinforcement:

1. [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)
2. [Leaf-Similar Trees](https://leetcode.com/problems/leaf-similar-trees/)

Boss:

1. [Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/)
2. [Flip Equivalent Binary Trees](https://leetcode.com/problems/flip-equivalent-binary-trees/)
3. [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/)


#### Root-to-Leaf Path Accumulation

- Invariant: Carry a running value (sum, bitmask, string) down each root-to-leaf path and only finalize it once you reach a leaf.

Foundation:

1. [Path Sum](https://leetcode.com/problems/path-sum/)
2. [Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

Reinforcement:

1. [Path Sum II](https://leetcode.com/problems/path-sum-ii/)
2. [Sum of Root To Leaf Binary Numbers](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/)
3. [Smallest String Starting From Leaf](https://leetcode.com/problems/smallest-string-starting-from-leaf/)

Boss:

1. [Pseudo-Palindromic Paths in a Binary Tree](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/)
2. [Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/)
3. [Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/)


#### BST Property Exploitation (Inorder Is Sorted)

- Invariant: An inorder traversal of a BST visits nodes in sorted order, turning many BST problems into a sorted-sequence problem.

Foundation:

1. [Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree/)
2. [Range Sum of BST](https://leetcode.com/problems/range-sum-of-bst/)
3. [Minimum Distance Between BST Nodes](https://leetcode.com/problems/minimum-distance-between-bst-nodes/)

Reinforcement:

1. [Increasing Order Search Tree](https://leetcode.com/problems/increasing-order-search-tree/)
2. [Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/)
3. [Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/)

Boss:

1. [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)
2. [Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/)
3. [Largest BST](https://www.geeksforgeeks.org/problems/largest-bst/1)
4. [BST Iterator](https://leetcode.com/problems/binary-search-tree-iterator/)


#### Construction From Traversals / Serialization

- Invariant: A preorder (or postorder) value fixes the root; its position in the inorder sequence splits the rest into left/right subtrees.

Foundation:

1. [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

Reinforcement:

1. [Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)

Boss:

1. [Construct String from Binary Tree](https://leetcode.com/problems/construct-string-from-binary-tree/)
2. [All Possible Full Binary Trees](https://leetcode.com/problems/all-possible-full-binary-trees/)
3. [Diagonal Traversal of Binary Tree](https://www.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1)


#### Post-Order Aggregation (Bottom-Up)

- Invariant: Computing a value at a node from its already-computed children's results is a post-order accumulation, not a top-down pass.

Foundation:

1. [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
2. [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

Reinforcement:

1. [Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/)
2. [Binary Tree Pruning](https://leetcode.com/problems/binary-tree-pruning/)

Boss:

1. [Distribute Coins in Binary Tree](https://leetcode.com/problems/distribute-coins-in-binary-tree/)
2. [Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/)


#### Counting BST Shapes (Catalan-Style Recursion)

- Invariant: The number of valid BST shapes on n keys splits into an independent left-subtree-count times right-subtree-count sum over every root choice.

Foundation:

1. [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)

Boss:

1. [Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/)


#### Graph-Like Reasoning On Trees

- Invariant: Once you add parent pointers, a tree becomes an ordinary graph and BFS/DFS distance reasoning applies directly.

Foundation:

1. [All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)

Boss:

1. [Second Minimum Node In a Binary Tree](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/)


#### N-ary And Threaded Tree Serialization

- Invariant: Binary tree serialization uses null markers for missing children, but an n-ary tree has no fixed child count -- it needs an explicit end-of-children marker, and threading a BST into a doubly linked list reuses the same left/right pointers as prev/next in place.

Foundation:

1. [Serialize and Deserialize N-ary Tree](https://www.geeksforgeeks.org/dsa/serialize-deserialize-n-ary-tree/)

Boss:

1. [Convert BST to Sorted Doubly Linked List](https://www.geeksforgeeks.org/problems/binary-tree-to-dll/1)

#### BST-Guided Closest Value Search

- Invariant: A BST's ordering lets you discard half the tree at every step when hunting for the single closest value, but hunting for the k closest values needs an in-order walk with a sliding window instead of repeated single-value searches.

Foundation:

1. [Closest Binary Search Tree Value](https://www.geeksforgeeks.org/dsa/find-closest-element-binary-search-tree/)

Boss:

1. [Closest Binary Search Tree Value II](https://www.geeksforgeeks.org/dsa/find-the-closest-binary-search-tree-value-ii/)

#### Height-Based Leaf Peeling And Consecutive Runs

- Invariant: Repeatedly stripping every current leaf layer is really a height computation read backwards, and tracking a consecutive value run down a root-to-leaf path only works if the recursion carries the run's current length as state, not just the running maximum.

Foundation:

1. [Find Leaves of Binary Tree](https://www.geeksforgeeks.org/dsa/print-and-remove-leaf-nodes-of-given-binary-tree-on-each-iteration/)

Boss:

1. [Binary Tree Longest Consecutive Sequence](https://www.geeksforgeeks.org/problems/longest-consecutive-sequence-in-binary-tree/1)

### Tries and Word Search

#### Trie Construction Fundamentals

- Invariant: A trie shares common prefixes across all inserted words, so prefix-existence and prefix-count queries cost O(word length), not O(number of words).

Foundation:

1. [Sum of Prefix Scores of Strings](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/)

Reinforcement:

1. [Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/)

Boss:

1. [Number of Distinct Substrings in a String](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/)


#### Trie-Pruned Board/Grid Search

- Invariant: Pruning a DFS the instant its current path leaves the trie avoids exploring any branch no dictionary word can complete.

Foundation:

1. [Word Boggle](https://www.geeksforgeeks.org/problems/word-boggle4143/1)
2. [Search a Word in a 2D Grid of Characters](https://www.geeksforgeeks.org/problems/search-a-word-in-a-2d-grid-of-characters/1)


#### Approximate / Multi-Constraint Trie Matching

- Invariant: Allow bounded slack (one mismatch, a wildcard, both ends) by branching the trie search instead of scanning every word.

Foundation:

1. [Camelcase Matching](https://leetcode.com/problems/camelcase-matching/)

Reinforcement:

1. [Implement Magic Dictionary](https://leetcode.com/problems/implement-magic-dictionary/)

Boss:

1. [Prefix and Suffix Search](https://leetcode.com/problems/prefix-and-suffix-search/)
2. [Index Pairs of a String](https://leetcode.com/problems/index-pairs-of-a-string/)


#### Reverse / Suffix Trie Tricks

- Invariant: Inserting words backward turns a suffix-containment question into an ordinary prefix (trie) question.

Foundation:

1. [Short Encoding of Words](https://leetcode.com/problems/short-encoding-of-words/)


#### Trie As A Hierarchical Namespace

- Invariant: A trie node can represent a filesystem directory or folder, not just a string prefix.

Foundation:

1. [Design File System](https://leetcode.com/problems/design-file-system/)

Boss:

1. [Delete Duplicate Folders in System](https://leetcode.com/problems/delete-duplicate-folders-in-system/)


#### Bitwise / Binary Trie

- Invariant: Inserting numbers bit by bit into a binary trie lets you greedily maximize XOR by choosing the opposite bit at every level.

Foundation:

1. [Xor Between Two Arrays!](https://www.interviewbit.com/problems/xor-between-two-arrays/)


#### Autocomplete / Prefix-Count Applications

- Invariant: Augmenting each trie node with a count or list turns it into an autocomplete engine or a unique-prefix generator.

Foundation:

1. [Shortest Unique Prefix](https://www.interviewbit.com/problems/shortest-unique-prefix/)
2. [Implement a Phone Directory](https://www.naukri.com/code360/problems/implement-a-phone-directory_1062666)

Boss:

1. [Encrypt and Decrypt Strings](https://leetcode.com/problems/encrypt-and-decrypt-strings/)


### String Algorithms

#### String-Building Simulation

- Invariant: Constructing an output string token-by-token in a single pass avoids repeated concatenation costs.

Foundation:

1. [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)
2. [String Compression](https://leetcode.com/problems/string-compression/)

Boss:

1. [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/)


#### Bijective / Pattern Mapping

- Invariant: A valid character/token mapping must be consistent in both directions -- check both maps, not just one.

Foundation:

1. [Word Pattern](https://leetcode.com/problems/word-pattern/)

Boss:

1. [Ransom Note](https://leetcode.com/problems/ransom-note/)


#### Rotation And Repetition Detection

- Invariant: Doubling a string turns rotation-containment into an ordinary substring search.

Foundation:

1. [Rotate String](https://leetcode.com/problems/rotate-string/)

Reinforcement:

1. [Repeated String Match](https://leetcode.com/problems/repeated-string-match/)

Boss:

1. [Minimal Rotation](https://cses.fi/problemset/task/1110)


#### Greedy String Construction/Balance

- Invariant: A running balance counter decides the greedy split or edit point without ever needing to backtrack.

Foundation:

1. [Split a String in Balanced Strings](https://leetcode.com/problems/split-a-string-in-balanced-strings/)

Reinforcement:

1. [Minimum Number of Swaps to Make the String Balanced](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/)
2. [Break a Palindrome](https://leetcode.com/problems/break-a-palindrome/)


#### Hashing / Window Substring Checks

- Invariant: A rolling hash or fixed window turns substring-existence or counting into O(1) work per shift.

Foundation:

1. [Check If a String Contains All Binary Codes of Size K](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/)

Boss:

1. [Minimum Window Subsequence](https://leetcode.com/problems/minimum-window-subsequence/)
2. [Count Unique Characters of All Substrings of a Given String](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/)


#### Exact Pattern Matching (KMP / Prefix Function)

- Invariant: The prefix function encodes the longest border ending at every position, letting matching resume without ever re-scanning.

Foundation:

1. [String Matching](https://cses.fi/problemset/task/1753)

Boss:

1. [Finding Borders](https://cses.fi/problemset/task/1732)
2. [String Matching in an Array](https://leetcode.com/problems/string-matching-in-an-array/)


#### Subsequence Matching At Scale

- Invariant: Advancing a single pointer per source character checks subsequence-membership against many patterns simultaneously.

Foundation:

1. [Number of Matching Subsequences](https://leetcode.com/problems/number-of-matching-subsequences/)


#### Structural/Layout String Problems

- Invariant: Some string problems are really about text layout and parsing rules, not a single classic algorithm.

Foundation:

1. [Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers/)

Boss:

1. [Text Justification](https://leetcode.com/problems/text-justification/)
2. [Unique Length-3 Palindromic Subsequences](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/)


### Graph Traversal

#### Grid Flood Fill / Connected Components

- Invariant: Marking visited cells during DFS/BFS prevents recounting the same connected region.

Foundation:

1. [Flood Fill](https://leetcode.com/problems/flood-fill/)
2. [Counting Rooms](https://cses.fi/problemset/task/1192)

Reinforcement:

1. [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/)
2. [Island Perimeter](https://leetcode.com/problems/island-perimeter/)

Boss:

1. [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/)
2. [Count Sub Islands](https://leetcode.com/problems/count-sub-islands/)
3. [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/)
4. [Number of Distinct Islands](https://www.geeksforgeeks.org/problems/number-of-distinct-islands/1)


#### Multi-Source BFS

- Invariant: Seeding a BFS queue with every source at once computes each cell's distance to its nearest source in a single pass.

Foundation:

1. [Distance of Nearest Cell Having 1](https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1/0)

Boss:

1. [Map of Highest Peak](https://leetcode.com/problems/map-of-highest-peak/)
2. [As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/)


#### Bipartiteness / 2-Coloring

- Invariant: 2-coloring via BFS/DFS succeeds iff no edge ever connects two same-colored nodes.

Foundation:

1. [Bipartite Graph](https://www.geeksforgeeks.org/problems/bipartite-graph/1)

Reinforcement:

1. [Building Teams](https://cses.fi/problemset/task/1668)

Boss:

1. [Divide Nodes Into the Maximum Number of Groups](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/)


#### Implicit Graph Construction

- Invariant: The hardest step is often recognizing that indices, values, or states ARE the graph's nodes, before any BFS/DFS runs.

Foundation:

1. [Jump Game III](https://leetcode.com/problems/jump-game-iii/)
2. [Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/)

Reinforcement:

1. [All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/)
2. [Employee Importance](https://leetcode.com/problems/employee-importance/)

Boss:

1. [Detonate the Maximum Bombs](https://leetcode.com/problems/detonate-the-maximum-bombs/)
2. [Coloring A Border](https://leetcode.com/problems/coloring-a-border/)


#### Connectivity Under Constraints

- Invariant: A huge but sparse grid needs an area-based cutoff or explicit adjacency, not a literal cell-by-cell visited scan.

Foundation:

1. [Building Roads](https://cses.fi/problemset/task/1666)
2. [Message Route](https://cses.fi/problemset/task/1667)

Boss:

1. [Escape a Large Maze](https://leetcode.com/problems/escape-a-large-maze/)


#### Grid/Char Connected Components (Non-Numeric Grid)

- Invariant: The same flood-fill/BFS machinery applies to character grids and abstract state graphs, not just 0/1 grids.

Foundation:

1. [Black Shapes](https://www.interviewbit.com/problems/black-shapes/)

Boss:

1. [Smallest Multiple With 0 and 1](https://www.interviewbit.com/problems/smallest-multiple-with-0-and-1/)
2. [Round Trip](https://cses.fi/problemset/task/1669)
3. [Labyrinth](https://cses.fi/problemset/task/1193)


#### Cycle Detection Meets Connectivity Check

- Invariant: A graph is a valid tree iff it has exactly n-1 edges AND is fully connected -- checking only one half of that lets a disconnected forest or an extra cycle slip through.

Foundation:

1. [Graph Valid Tree](https://www.geeksforgeeks.org/problems/is-it-a-tree/1)

#### Rolling-Ball Maze BFS And Dijkstra

- Invariant: A ball that keeps rolling until it hits a wall turns each BFS "move" into a whole line segment, not one cell -- and once moves have different lengths, plain BFS layers stop being distances and Dijkstra takes over.

Foundation:

1. [The Maze](https://www.naukri.com/code360/problem-details/ninja-and-the-maze_1262274)

Boss:

1. [The Maze II](https://www.naukri.com/code360/problems/maze-runner_3130881)

### Directed Graphs, Topological Sort, SCC

#### Topological Sort Fundamentals

- Invariant: A node can be safely ordered only after every one of its prerequisites has already been ordered.

Foundation:

1. [Alien Dictionary](https://www.geeksforgeeks.org/problems/alien-dictionary/1)
2. [Topological Sort](https://www.geeksforgeeks.org/problems/topological-sort/1)
3. [Detect Cycle in a Directed Graph](https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1)

Boss:

1. [Cycle in Directed Graph](https://www.interviewbit.com/problems/cycle-in-directed-graph/)
2. [Parallel Courses](https://www.naukri.com/code360/problems/parallel-courses_1376444)


#### Topological-Order DP

- Invariant: Processing nodes in topological order guarantees every predecessor's DP value is already final before it's needed.

Foundation:

1. [All Ancestors of a Node in a Directed Acyclic Graph](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/)

Reinforcement:

1. [Loud and Rich](https://leetcode.com/problems/loud-and-rich/)
2. [Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/)

Boss:

1. [Longest Flight Route](https://cses.fi/problemset/task/1680)
2. [Game Routes](https://cses.fi/problemset/task/1681)


#### Dependency Resolution (Kahn's Algorithm Applications)

- Invariant: Kahn's algorithm peels off zero-in-degree nodes layer by layer, which doubles as a dependency-resolution simulator.

Foundation:

1. [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/)

Boss:

1. [Find Champion II](https://leetcode.com/problems/find-champion-ii/)


#### Strongly Connected Components

- Invariant: Collapsing each SCC into a single node turns any directed graph into a DAG.

Foundation:

1. [Strongly Connected Components (Kosaraju's Algo)](https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1)

Reinforcement:

1. [Mother Vertex](https://practice.geeksforgeeks.org/problems/mother-vertex/0)

Boss:

1. [Planets and Kingdoms](https://cses.fi/problemset/task/1683)


#### SCC-Based 2-SAT

- Invariant: A 2-SAT instance reduces to building an implication graph and checking that no variable and its negation share an SCC.

Boss:

1. [Giant Pizza](https://cses.fi/problemset/task/1684)


#### Topological Sort Over Inferred Edges

- Invariant: The graph's edges are not given -- they must be inferred one at a time from adjacent-word comparisons before any topological sort can run, and a single edge inference bug silently produces a wrong order.

Foundation:

1. [Alien Dictionary](https://takeuforward.org/data-structure/alien-dictionary-topological-sort-g-26)

### DSU, MST, Offline Connectivity

#### DSU Fundamentals

- Invariant: Union-find with path compression and union-by-rank answers "are these in the same component?" in near-O(1).

Foundation:

1. [Disjoint Set (Union-Find)](https://practice.geeksforgeeks.org/problems/disjoint-set-union-find/1)
2. [Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)

Boss:

1. [Detect Cycle in an Undirected Graph](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1)


#### DSU-Grouped Aggregation

- Invariant: Once elements are unioned into a component, apply one aggregate operation (sort, min, size check) to the whole group at once.

Foundation:

1. [Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/)

Reinforcement:

1. [Lexicographically Smallest Equivalent String](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/)
2. [Minimum Score of a Path Between Two Cities](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/)

Boss:

1. [Count the Number of Complete Components](https://leetcode.com/problems/count-the-number-of-complete-components/)


#### DSU Union Trigger Beyond Direct Edges

- Invariant: Two elements can be unioned via a shared property, such as a common factor or a distance threshold, instead of an explicit edge list.

Foundation:

1. [Graph Connectivity With Threshold](https://leetcode.com/problems/graph-connectivity-with-threshold/)

Boss:

1. [GCD Sort of an Array](https://leetcode.com/problems/gcd-sort-of-an-array/)


#### Incremental / Online DSU

- Invariant: Process unions one at a time and answer a component-count or component-size query after each one.

Foundation:

1. [The Earliest Moment When Everyone Become Friends](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/)

Boss:

1. [Road Construction](https://cses.fi/problemset/task/1676)


#### Offline Reverse-Order DSU

- Invariant: When edges or nodes are being removed over time, process the queries backward and turn every removal into an addition.

Foundation:

1. [Find All People With Secret](https://leetcode.com/problems/find-all-people-with-secret/)

Reinforcement:

1. [Last Day Where You Can Still Cross](https://leetcode.com/problems/last-day-where-you-can-still-cross/)

Boss:

1. [Maximum Segment Sum After Removals](https://leetcode.com/problems/maximum-segment-sum-after-removals/)


#### DSU With Validity Constraints

- Invariant: Check a pre-union validity rule -- a restriction pair, a spread-impact estimate -- before or instead of performing the union.

Foundation:

1. [Process Restricted Friend Requests](https://leetcode.com/problems/process-restricted-friend-requests/)

Boss:

1. [Minimize Malware Spread II](https://leetcode.com/problems/minimize-malware-spread-ii/)


#### Minimum Spanning Tree

- Invariant: Kruskal's algorithm greedily adds the cheapest edge that doesn't create a cycle, verified by DSU on every step.

Foundation:

1. [Minimum Spanning Tree](https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1)
2. [Commutable Islands](https://www.interviewbit.com/problems/commutable-islands/)

Reinforcement:

1. [Road Reparation](https://cses.fi/problemset/task/1675)

Boss:

1. [Reverse Delete Algorithm for Minimum Spanning Tree](https://practice.geeksforgeeks.org/problems/reverse-delete-algorithm-for-minimum-spanning-tree/0)
2. [Kruskal's Minimum Spanning Tree Algorithm](https://www.naukri.com/code360/problem-details/kruskal-s-minimum-spanning-tree-algorithm_1082553)


#### Online Connectivity Queries

- Invariant: When land cells are added one at a time and you must report the live count of connected components after every addition, a fresh BFS per query is too slow -- DSU answers each query in near O(1) by unioning only the new cell with its already-land neighbors.

Foundation:

1. [Number of Islands II](https://takeuforward.org/graph/number-of-islands-ii-online-queries-dsu-g-51)

### Shortest Paths

#### Single-Source Dijkstra Fundamentals

- Invariant: Dijkstra greedily finalizes the closest unvisited node, which is provably correct when every edge weight is non-negative.

Foundation:

1. [Shortest Routes I](https://cses.fi/problemset/task/1671)

Boss:

1. [Path With Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/)


#### All-Pairs / Multi-Query Shortest Paths

- Invariant: Floyd-Warshall precomputes every pair's distance once so later point queries are O(1) lookups.

Foundation:

1. [Shortest Routes II](https://cses.fi/problemset/task/1672)

Boss:

1. [Flight Routes](https://cses.fi/problemset/task/1196)


#### Negative Edges / Bellman-Ford

- Invariant: Bellman-Ford relaxes every edge n-1 times; a further improvement on the nth pass means a negative cycle exists.

Foundation:

1. [High Score](https://cses.fi/problemset/task/1673)

Boss:

1. [Cycle Finding](https://cses.fi/problemset/task/1197)


#### State-Space Shortest Path (Augmented State)

- Invariant: When a plain (node) state isn't enough, expand the state to (node, extra resource) and run BFS/Dijkstra on that product graph.

Foundation:

1. [Flight Discount](https://cses.fi/problemset/task/1195)
2. [Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/)

Reinforcement:

1. [Number of Restricted Paths From First to Last Node](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/)
2. [Investigation](https://cses.fi/problemset/task/1202)

Boss:

1. [Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/)
2. [Minimum Time to Visit a Cell In a Grid](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/)
3. [Modify Graph Edge Weights](https://leetcode.com/problems/modify-graph-edge-weights/)


#### Multi-Source / Plain BFS Shortest Path

- Invariant: With uniform edge weights, plain BFS layer-by-layer expansion already computes shortest distance.

Foundation:

1. [01 Matrix](https://leetcode.com/problems/01-matrix/)
2. [Nearest Exit from Entrance in Maze](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/)

Reinforcement:

1. [Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/)
2. [Jump Game IV](https://leetcode.com/problems/jump-game-iv/)

Boss:

1. [Minimum Number of Visited Cells in a Grid](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/)


#### Maximin / Minimax (Bottleneck) Path

- Invariant: A bottleneck shortest path optimizes the worst edge on the path, solved with a Dijkstra-like priority queue on that criterion.

Foundation:

1. [Find the Safest Path in a Grid](https://leetcode.com/problems/find-the-safest-path-in-a-grid/)


#### Incremental Shortest-Path Recomputation

- Invariant: As shortcut edges are added one at a time, reuse prior distance work instead of rerunning shortest-path from scratch.

Foundation:

1. [Shortest Distance After Road Addition Queries I](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/)

Boss:

1. [Shortest Distance After Road Addition Queries II](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/)


### Flow and Matching

#### Bipartite Matching

- Invariant: An augmenting path alternates unmatched and matched edges to grow the current matching by exactly one.

Foundation:

1. [Maximum Bipartite Matching](https://www.geeksforgeeks.org/problems/maximum-bipartite-matching--170646/1)

Boss:

1. [School Dance](https://cses.fi/problemset/task/1696)


#### Max Flow Fundamentals

- Invariant: Repeatedly finding an augmenting path in the residual graph and saturating it computes the maximum flow.

Foundation:

1. [Find the Maximum Flow](https://www.geeksforgeeks.org/problems/find-the-maximum-flow2126/1)

Boss:

1. [Download Speed](https://cses.fi/problemset/task/1694)


#### Flow Duality (Min-Cut, Edge-Disjoint Paths)

- Invariant: The max-flow value equals the min-cut capacity, and the flow decomposes into edge-disjoint augmenting paths.

Foundation:

1. [Police Chases](https://cses.fi/problemset/task/1695)

Boss:

1. [Distinct Routes](https://cses.fi/problemset/task/1711)


#### Weighted Matching / Assignment

- Invariant: When matches carry different costs, the Hungarian algorithm finds the minimum-cost perfect assignment.

Foundation:

1. [Assignment Problem](https://www.geeksforgeeks.org/problems/assignment-problem3016/1)


#### Flow-Structure Recognition

- Invariant: Some problems are a flow/circulation problem in disguise even though they're solved with brute force at small scale.

Foundation:

1. [Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/)


### Greedy

#### Exchange-Argument Sort-Then-Greedy

- Invariant: Sorting by the right key makes the greedy choice at each step provably optimal -- no exchange of two elements can improve it.

Foundation:

1. [Minimum Deletion Cost to Avoid Repeating Letters](https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/)

Boss:

1. [Maximum Swap](https://leetcode.com/problems/maximum-swap/)


#### Reverse-Direction / Working-Backward Greedy

- Invariant: Some greedy choices are only obvious when you reason from the target backward to the start.

Foundation:

1. [Broken Calculator](https://leetcode.com/problems/broken-calculator/)


#### Bit/Sign-Level Greedy

- Invariant: Flipping the most impactful bit or sign first, greedily, dominates any other order.

Foundation:

1. [Score After Flipping Matrix](https://leetcode.com/problems/score-after-flipping-matrix/)

Boss:

1. [Maximize Sum of Array After K Negations](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/)


#### Frequency-Driven Greedy Construction

- Invariant: Adjusting the most/least frequent element first, greedily, resolves conflicts with the fewest total changes.

Foundation:

1. [Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)

Boss:

1. [Minimum Increment to Make Array Unique](https://leetcode.com/problems/minimum-increment-to-make-array-unique/)
2. [Divide Array in Sets of K Consecutive Numbers](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/)


#### Two-Pointer / Endpoint Greedy Trade

- Invariant: Trading the cheapest and most expensive remaining options against each other greedily is optimal at every step.

Foundation:

1. [Bag of Tokens](https://leetcode.com/problems/bag-of-tokens/)


#### Interval-Covering Greedy

- Invariant: Greedily extending the covered range as far as possible minimizes the total number of intervals used.

Foundation:

1. [Maximum Number of Non-Overlapping Substrings](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/)


#### Deadline/Scheduling Greedy

- Invariant: Sorting by deadline or arrival time and greedily assigning the next resource produces a provably optimal schedule.

Foundation:

1. [Job Sequencing Problem](https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1)
2. [Minimum Platforms](https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1)

Reinforcement:

1. [Tasks and Deadlines](https://cses.fi/problemset/task/1630)
2. [Room Allocation](https://cses.fi/problemset/task/1164)

Boss:

1. [Movie Festival II](https://cses.fi/problemset/task/1632)


#### Ratio/Value-Density Greedy

- Invariant: Sorting by value-per-unit-cost and taking greedily from the top is optimal whenever items are divisible.

Foundation:

1. [Fractional Knapsack](https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1)


### Backtracking and Branching Search

#### Backtracking With Seen-Set Pruning

- Invariant: A per-level seen-set dedupes branches without sorting, which matters when the original array order must be preserved.

Foundation:

1. [Non-decreasing Subsequences](https://leetcode.com/problems/non-decreasing-subsequences/)

Boss:

1. [Split a String Into the Max Number of Unique Substrings](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/)


#### Partition/Group Backtracking

- Invariant: Assigning each element to one of several groups, with running-sum pruning, is a backtracking partition search.

Foundation:

1. [Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/)

Boss:

1. [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)


#### Digit-by-Digit Branching Construction

- Invariant: Building a number one digit at a time, branching over valid next digits, turns number-theory counting into a search tree.

Foundation:

1. [Numbers With Same Consecutive Differences](https://leetcode.com/problems/numbers-with-same-consecutive-differences/)

Boss:

1. [Confusing Number II](https://leetcode.com/problems/confusing-number-ii/)


#### Grid Backtracking With Explicit Undo

- Invariant: Marking a cell visited on the way in and explicitly un-marking it on the way back is what makes backtracking, backtrack.

Foundation:

1. [Path with Maximum Gold](https://leetcode.com/problems/path-with-maximum-gold/)

Boss:

1. [Rat in a Maze](https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1)


#### Branch-and-Bound With Best-So-Far Pruning

- Invariant: Tracking the best solution found so far lets you cut off any branch that can no longer beat it.

Foundation:

1. [24 Game](https://leetcode.com/problems/24-game/)

Reinforcement:

1. [Additive Number](https://leetcode.com/problems/additive-number/)

Boss:

1. [Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/)
2. [Tiling a Rectangle with the Fewest Squares](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/)


#### Bitmask-Pruned Subset Backtracking

- Invariant: Encoding a partial choice as a bitmask makes conflict-checking (overlap, reuse) an O(1) AND operation during the search.

Foundation:

1. [Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)

Boss:

1. [Maximum Score Words Formed by Letters](https://leetcode.com/problems/maximum-score-words-formed-by-letters/)


#### Assignment/Distribution Backtracking

- Invariant: Distributing a limited resource among options, backtracking over how much goes where, prunes on remaining budget.

Foundation:

1. [Shopping Offers](https://leetcode.com/problems/shopping-offers/)

Boss:

1. [Number of Squareful Arrays](https://leetcode.com/problems/number-of-squareful-arrays/)


#### Constraint-Satisfaction Backtracking

- Invariant: Assign values one variable at a time, backtracking the instant any hard constraint is violated.

Foundation:

1. [M-Coloring Problem](https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1)


#### Constraint-Pruned Path Search

- Invariant: A phone-lock pattern's move graph has "jump" constraints (2-to-8 is only legal if 5 is already used), so the backtracking check is on the edge, not just the destination cell -- and the board's symmetry lets you compute one corner and multiply.

Foundation:

1. [Android Unlock Patterns](https://www.geeksforgeeks.org/dsa/number-of-ways-to-make-mobile-lock-pattern/)

#### Greedy Approximation Vs Exact Minimum-Transaction Search

- Invariant: A greedy match-the-largest-creditor-with-the-largest-debtor pass gives a valid, but not always minimal, transaction count -- the true minimum requires backtracking over which subsets of balances can be zeroed out together.

Foundation:

1. [Optimal Account Balancing](https://www.geeksforgeeks.org/dsa/minimize-cash-flow-among-given-set-friends-borrowed-money/)

#### Center-Outward Digit Construction

- Invariant: Strobogrammatic strings are built from the center outward in valid digit pairs (0-0, 1-1, 6-9, 8-8, 9-6), so the recursion's base case depends on parity of the remaining length, not just reaching zero.

Foundation:

1. [Strobogrammatic Number II](https://www.geeksforgeeks.org/dsa/strobogrammatic-number/)

### Dynamic Programming Foundations

#### Linear Recurrence Warm-Up

- Invariant: The answer at position i depends only on a small fixed window of previous answers, so O(1) rolling space suffices.

Foundation:

1. [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
2. [N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/)

Boss:

1. [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)


#### Climbing-Stairs-Shaped Counting/Decision DP

- Invariant: Every position offers a small fixed set of "step sizes"; sum or OR over the valid ones to get the recurrence.

Foundation:

1. [Count Ways to Build Good Strings](https://leetcode.com/problems/count-ways-to-build-good-strings/)
2. [Painting the Fence](https://www.geeksforgeeks.org/problems/painting-the-fence3727/1)

Boss:

1. [Check if There is a Valid Partition for the Array](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/)


#### House-Robber-Shaped Skip DP

- Invariant: Taking position i forces skipping a fixed window right after it, so dp[i] = value[i] + the best dp before that window.

Foundation:

1. [Solving Questions With Brainpower](https://leetcode.com/problems/solving-questions-with-brainpower/)

Boss:

1. [Count Number of Ways to Place Houses](https://leetcode.com/problems/count-number-of-ways-to-place-houses/)


#### Take-Or-Skip Running DP

- Invariant: At each element, decide independently whether to fold it into a running aggregate -- no skip-window bookkeeping needed.

Foundation:

1. [Reducing Dishes](https://leetcode.com/problems/reducing-dishes/)
2. [Maximum Alternating Subsequence Sum](https://leetcode.com/problems/maximum-alternating-subsequence-sum/)

Boss:

1. [Get the Maximum Score](https://leetcode.com/problems/get-the-maximum-score/)


#### Small Fixed-State Combinatorial DP

- Invariant: A handful of state variables (last value, count so far) is enough to count valid constructions position by position.

Foundation:

1. [Count Sorted Vowel Strings](https://leetcode.com/problems/count-sorted-vowel-strings/)
2. [Arithmetic Slices](https://leetcode.com/problems/arithmetic-slices/)

Boss:

1. [Number of Ways to Reach a Position After Exactly k Steps](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/)


#### Optimal Partitioning DP

- Invariant: Trying every split point and combining the best of each side is a classic partition-DP shape.

Foundation:

1. [Integer Break](https://leetcode.com/problems/integer-break/)

Boss:

1. [Divisor Game](https://leetcode.com/problems/divisor-game/)


#### Sequential Cost DP With Adjacency Constraint

- Invariant: Choosing option i at each step while forbidding the same choice as the previous step is a small-state running DP.

Foundation:

1. [Paint House](https://leetcode.com/problems/paint-house/)

Boss:

1. [Paint House II](https://leetcode.com/problems/paint-house-ii/)


#### Painting With Bounded Adjacent-Color State

- Invariant: With only 3 colors the DP state can just store the previous house's color, but once there are k colors, only tracking the running min and second-min cost (not all k values) keeps the transition O(1) instead of O(k) per house.

Foundation:

1. [Paint House II](https://www.geeksforgeeks.org/problems/walls-coloring-ii--170647/1)

### Knapsack, LIS, Stocks

#### 0/1 Knapsack Fundamentals

- Invariant: Each item is taken or skipped exactly once; the DP state is (items considered so far, capacity remaining).

Foundation:

1. [0 - 1 Knapsack Problem](https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1)
2. [Subset Sum Problem](https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1)

Boss:

1. [Perfect Sum Problem](https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1)


#### Unbounded Knapsack

- Invariant: Each item may be reused any number of times, so the recurrence stays on the same row/item when it's picked.

Foundation:

1. [Rod Cutting](https://www.geeksforgeeks.org/problems/rod-cutting0840/1)
2. [Knapsack with Duplicate Items](https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1)


#### LIS Fundamentals And Reductions

- Invariant: Many problems that look unrelated (box stacking, cuboid stacking) are LIS wearing a different ordering relation.

Foundation:

1. [Box Stacking](https://www.geeksforgeeks.org/problems/box-stacking/1)
2. [Longest Bitonic Subsequence](https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence/1)

Reinforcement:

1. [Max Sum Increasing Subsequence](https://www.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1)
2. [Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/)

Boss:

1. [Delete Columns to Make Sorted III](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/)
2. [Maximum Height by Stacking Cuboids](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/)


#### LIS-Family Two-State DP

- Invariant: Tracking an extra state bit (last direction, swapped-or-not) turns plain LIS into an alternating or paired-sequence DP.

Foundation:

1. [Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/)

Reinforcement:

1. [Minimum Swaps to Make Sequences Increasing](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/)

Boss:

1. [Minimum Number of Removals to Make Mountain Array](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/)
2. [Odd Even Jump](https://leetcode.com/problems/odd-even-jump/)


#### Subsequence-Keyed Hashmap DP

- Invariant: When the DP state depends on a derived key (a common difference) rather than a position, index the DP by that key.

Foundation:

1. [Arithmetic Slices II - Subsequence](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/)

Boss:

1. [Number of Sets of K Non-Overlapping Line Segments](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/)


#### Subset-Partition Knapsack

- Invariant: Splitting items into two groups to balance a target quantity is a subset-sum knapsack indexed by the difference.

Foundation:

1. [Tallest Billboard](https://leetcode.com/problems/tallest-billboard/)

Boss:

1. [Partition Array Into Two Arrays to Minimize Sum Difference](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/)


#### Grouped/Bounded-Choice Knapsack

- Invariant: When you choose a prefix count from each group rather than a single item, prefix sums combine with the knapsack DP.

Foundation:

1. [Maximum Value of K Coins From Piles](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/)

Boss:

1. [Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/)


#### Minimization Knapsack Variants

- Invariant: The same knapsack recurrence works in reverse to minimize cost/deficit instead of maximizing value.

Foundation:

1. [Tushar's Birthday Party](https://www.interviewbit.com/problems/tushars-birthday-party/)

Boss:

1. [Flip Array](https://www.interviewbit.com/problems/flip-array/)


### String DP

#### LCS Family (Two-String Alignment DP)

- Invariant: Aligning two strings character by character, keeping the best of match/skip-left/skip-right, generalizes to edit distance and beyond.

Foundation:

1. [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)
2. [Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)

Reinforcement:

1. [Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)
2. [Longest Repeating Subsequence](https://www.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1)

Boss:

1. [Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/)
2. [LCS of Three Strings](https://www.geeksforgeeks.org/problems/lcs-of-three-strings0028/1)


#### Near-Match / Counting-Differences DP

- Invariant: Track the number of mismatches allowed so far as an explicit DP dimension.

Foundation:

1. [Count Substrings That Differ by One Character](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/)


#### Palindrome-Partitioning DP

- Invariant: Precompute which substrings are palindromes, then DP over split points using that lookup table.

Foundation:

1. [Palindrome Partitioning III](https://leetcode.com/problems/palindrome-partitioning-iii/)

Boss:

1. [Palindrome Partitioning IV](https://leetcode.com/problems/palindrome-partitioning-iv/)
2. [Longest Chunked Palindrome Decomposition](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/)
3. [Maximum Product of the Length of Two Palindromic Subsequences](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/)


#### Run-Length / Compression DP

- Invariant: DP over (position, run-length-so-far) captures how compression output size grows as characters are grouped.

Foundation:

1. [String Compression II](https://leetcode.com/problems/string-compression-ii/)


#### Distinct-Subsequence Counting DP

- Invariant: Counting distinct subsequences requires subtracting off subsequences double-counted via the last-seen-character trick.

Foundation:

1. [Number of Unique Good Subsequences](https://leetcode.com/problems/number-of-unique-good-subsequences/)


#### Pattern-Consistency Counting DP

- Invariant: Count how many completions stay consistent with a given pattern (D/I sequence, digit bound) as you extend one position at a time.

Foundation:

1. [Count Number of Texts](https://leetcode.com/problems/count-number-of-texts/)

Boss:

1. [Valid Permutations for DI Sequence](https://leetcode.com/problems/valid-permutations-for-di-sequence/)
2. [Restore The Array](https://leetcode.com/problems/restore-the-array/)


#### Split-Point DP

- Invariant: DP over prefix/suffix distinct-character counts turns a "good split" counting problem into two precomputed arrays.

Foundation:

1. [Number of Good Ways to Split a String](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/)


#### Cyclic/Wraparound String DP

- Invariant: A running streak counter over a cyclic alphabet avoids re-deriving each substring's validity from scratch.

Foundation:

1. [Unique Substrings in Wraparound String](https://leetcode.com/problems/unique-substrings-in-wraparound-string/)


#### Rank/Permutation Counting DP

- Invariant: Counting reachable permutations under an operation is a combinatorial DP over relative rank, not the values themselves.

Foundation:

1. [Minimum Number of Operations to Make String Sorted](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/)


#### Text-Layout DP

- Invariant: Minimizing a "badness" cost across line breaks is an interval-style DP over split points in the word sequence.

Foundation:

1. [Word Wrap](https://www.geeksforgeeks.org/problems/word-wrap1646/1)


### Grid, Interval, Game DP

#### Grid DP: Row-to-Row Transitions

- Invariant: Each row's DP values depend only on the row directly above (or below), so the grid collapses to a rolling array.

Foundation:

1. [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/)
2. [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)

Reinforcement:

1. [Where Will the Ball Fall](https://leetcode.com/problems/where-will-the-ball-fall/)
2. [Minimum Path Cost in a Grid](https://leetcode.com/problems/minimum-path-cost-in-a-grid/)

Boss:

1. [Maximum Non-Negative Product in a Matrix](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/)
2. [Minimum Sideway Jumps](https://leetcode.com/problems/minimum-sideway-jumps/)


#### Grid DP: Path Existence/Counting Under Direction Constraints

- Invariant: Directional constraints (one-way streets, must-visit-every-cell) turn plain path counting into a connectivity-aware DP.

Foundation:

1. [Check if There is a Valid Path in a Grid](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/)

Boss:

1. [Number of Increasing Paths in a Grid](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/)
2. [Unique Paths III](https://leetcode.com/problems/unique-paths-iii/)


#### Grid DP: Resource Collection

- Invariant: Maximizing collected value while moving only in allowed directions is a grid DP with a value-not-cost objective.

Foundation:

1. [Gold Mine Problem](https://www.geeksforgeeks.org/problems/gold-mine-problem2608/1)

Boss:

1. [Painting the Walls](https://leetcode.com/problems/painting-the-walls/)


#### Interval DP: Matrix-Chain Family

- Invariant: Trying every last split point inside a range and combining both sides is the matrix-chain-multiplication DP shape.

Foundation:

1. [Boolean Parenthesization](https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1)

Reinforcement:

1. [Optimal Binary Search Tree](https://www.geeksforgeeks.org/problems/optimal-binary-search-tree1830/1)

Boss:

1. [Minimum Score Triangulation of Polygon](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/)


#### Two-Player Interval/Minimax Game DP

- Invariant: With optimal play from both sides, dp[range] alternates whose turn it is and each side tries to maximize its own score.

Foundation:

1. [Stone Game IV](https://leetcode.com/problems/stone-game-iv/)
2. [Stone Game V](https://leetcode.com/problems/stone-game-v/)

Reinforcement:

1. [Stone Game VI](https://leetcode.com/problems/stone-game-vi/)
2. [Stone Game VII](https://leetcode.com/problems/stone-game-vii/)

Boss:

1. [Stone Game VIII](https://leetcode.com/problems/stone-game-viii/)
2. [Stone Game IX](https://leetcode.com/problems/stone-game-ix/)
3. [Cat and Mouse II](https://leetcode.com/problems/cat-and-mouse-ii/)


#### State-Machine / Multi-Dimension Decision DP

- Invariant: When more than one axis of state matters at once (position, speed, last color), the DP key becomes a tuple, not a single index.

Foundation:

1. [Race Car](https://leetcode.com/problems/race-car/)
2. [Make Array Strictly Increasing](https://leetcode.com/problems/make-array-strictly-increasing/)

Boss:

1. [Paint House III](https://leetcode.com/problems/paint-house-iii/)
2. [Egg Dropping Puzzle](https://www.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1)


### Bitmask, Digit, Profile DP

#### Bitmask DP Over Subsets

- Invariant: The DP state is which subset of items/cities/courses has been handled so far; transitions add one more to the mask.

Foundation:

1. [Parallel Courses II](https://leetcode.com/problems/parallel-courses-ii/)

Boss:

1. [Elevator Rides](https://cses.fi/problemset/task/1653)
2. [Hamiltonian Flights](https://cses.fi/problemset/task/1690)


#### Bitmask Enumeration (Brute-Force Over Subsets)

- Invariant: When the universe is small (<=20-30), directly enumerating every subset mask is fast enough to just check each one.

Foundation:

1. [Maximum Rows Covered by Columns](https://leetcode.com/problems/maximum-rows-covered-by-columns/)

Boss:

1. [The Number of Good Subsets](https://leetcode.com/problems/the-number-of-good-subsets/)


#### Digit DP Fundamentals

- Invariant: DP over (position, tight-bound flag, extra constraint state) counts numbers with a property without enumerating them.

Foundation:

1. [Count Integers With Even Digit Sum](https://leetcode.com/problems/count-integers-with-even-digit-sum/)

Boss:

1. [Rotated Digits](https://leetcode.com/problems/rotated-digits/)
2. [Count of Integers](https://leetcode.com/problems/count-of-integers/)


#### Broken-Profile / Tiling DP

- Invariant: Sweeping cell by cell with a column-wide bitmask captures partially-placed tiles that span row boundaries.

Foundation:

1. [Chessboard and Queens](https://cses.fi/problemset/task/1624)

Boss:

1. [Counting Tilings](https://cses.fi/problemset/task/2181)


### Range Queries and Ordered Structures

#### Fenwick Tree / BIT Fundamentals

- Invariant: A Fenwick tree answers prefix-sum-style queries and point updates in O(log n) using only an implicit binary structure.

Foundation:

1. [Dynamic Range Sum Queries](https://cses.fi/problemset/task/1648)
2. [Count Good Triplets in an Array](https://leetcode.com/problems/count-good-triplets-in-an-array/)

Boss:

1. [Number of Pairs Satisfying Inequality](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/)
2. [Range Xor Queries](https://cses.fi/problemset/task/1650)


#### Segment Tree Fundamentals

- Invariant: A segment tree stores a merge-able aggregate per node, so any range query is a small number of node visits.

Foundation:

1. [Range Sum Query 2D - Mutable](https://leetcode.com/problems/range-sum-query-2d-mutable/)

Boss:

1. [Longest Substring of One Repeating Character](https://leetcode.com/problems/longest-substring-of-one-repeating-character/)


#### Segment/Fenwick Tree Binary Search

- Invariant: Walking down the tree toward the first index satisfying a condition turns a scan into an O(log n) descent.

Foundation:

1. [Range Update Queries](https://cses.fi/problemset/task/1651)

Boss:

1. [Booking Concert Tickets in Groups](https://leetcode.com/problems/booking-concert-tickets-in-groups/)
2. [Hotel Queries](https://cses.fi/problemset/task/1143)


#### Sparse Table (Static Idempotent Queries)

- Invariant: For queries that never update the array, precomputing power-of-two-length ranges answers min/max queries in O(1).

Foundation:

1. [Static Range Minimum Queries](https://cses.fi/problemset/task/1647)


#### Order-Statistics / Coordinate-Compressed BIT

- Invariant: Compressing values to ranks lets a BIT answer "how many elements are less than X" style order-statistics queries.

Foundation:

1. [Range Frequency Queries](https://leetcode.com/problems/range-frequency-queries/)
2. [Salary Queries](https://cses.fi/problemset/task/1144)

Boss:

1. [Online Majority Element In Subarray](https://leetcode.com/problems/online-majority-element-in-subarray/)


#### 2D Fenwick Tree

- Invariant: Nesting a BIT-of-BITs extends point-update/range-query to two dimensions at an extra log factor.

Foundation:

1. [Forest Queries II](https://cses.fi/problemset/task/1739)


#### Offline Query Structures For Distinctness

- Invariant: Sorting queries by right endpoint and adding elements incrementally turns distinct-count-in-range into a BIT problem.

Foundation:

1. [Distinct Values Queries](https://cses.fi/problemset/task/1734)


### Tree Algorithms Beyond Binary Trees

#### Subtree Aggregation DP

- Invariant: A post-order pass accumulates each subtree's aggregate from its children before the parent needs it.

Foundation:

1. [Subordinates](https://cses.fi/problemset/task/1674)

Boss:

1. [Tree Matching](https://cses.fi/problemset/task/1130)


#### Diameter And Two-Pass/Rerooting DP

- Invariant: Rerooting reuses the first DFS's results to answer the same question from every possible root in one extra pass.

Foundation:

1. [Tree Diameter](https://cses.fi/problemset/task/1131)

Boss:

1. [Tree Distances I](https://cses.fi/problemset/task/1132)
2. [Tree Distances II](https://cses.fi/problemset/task/1133)


#### Canonical Form / Isomorphism

- Invariant: Hashing each subtree's canonical (sorted-child-hash) form lets you compare tree shapes in linear time.

Foundation:

1. [Tree Isomorphism I](https://cses.fi/problemset/task/1700)


#### Binary Lifting For LCA On General Trees

- Invariant: Precomputing 2^k-th ancestors lets any LCA or k-th-ancestor query resolve in O(log n).

Foundation:

1. [Company Queries II](https://cses.fi/problemset/task/1688)


### Math, Bits, Randomization, Geometry

#### Number Theory: Primes, Divisors, Factorization

- Invariant: Sieving factorizations once up front turns many per-number number-theory queries into O(log) lookups.

Foundation:

1. [Counting Divisors](https://cses.fi/problemset/task/1713)
2. [Trailing Zeros](https://cses.fi/problemset/task/1618)

Reinforcement:

1. [Sum of Square Numbers](https://leetcode.com/problems/sum-of-square-numbers/)
2. [Divisor Analysis](https://cses.fi/problemset/task/2182)

Boss:

1. [Largest Component Size by Common Factor](https://leetcode.com/problems/largest-component-size-by-common-factor/)
2. [Bulb Switcher](https://leetcode.com/problems/bulb-switcher/)


#### Modular Exponentiation And Combinatorics

- Invariant: Fast exponentiation makes modular power/inverse computations O(log n) instead of O(n).

Foundation:

1. [Exponentiation II](https://cses.fi/problemset/task/1712)
2. [Combinations](https://leetcode.com/problems/combinations/)


#### Bit-Level Greedy/Insight

- Invariant: A single bit-level observation (trailing bit parity, doubling) often collapses an apparent-simulation problem to O(log n).

Foundation:

1. [Integer Replacement](https://leetcode.com/problems/integer-replacement/)
2. [Gray Code](https://leetcode.com/problems/gray-code/)

Boss:

1. [Concatenation of Consecutive Binary Numbers](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/)


#### XOR Identities And Prefix-XOR Tricks

- Invariant: XOR is its own inverse, so prefix-XOR equality tests replace what would otherwise be an O(n^2) pairwise comparison.

Foundation:

1. [Count Triplets That Can Form Two Arrays of Equal XOR](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)

Reinforcement:

1. [Minimum Number of Operations to Make Array XOR Equal to K](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/)
2. [Total Hamming Distance](https://leetcode.com/problems/total-hamming-distance/)

Boss:

1. [Find XOR Sum of All Pairs Bitwise AND](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/)
2. [Minimum Flips to Make a OR b Equal to c](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/)


#### Bitmask Encoding Of Sets

- Invariant: Encoding a set (letters used, cells flipped) as an integer bitmask makes disjointness/overlap an O(1) AND check.

Foundation:

1. [Maximum Product of Word Lengths](https://leetcode.com/problems/maximum-product-of-word-lengths/)

Boss:

1. [Minimum Number of Flips to Convert Binary Matrix to Zero Matrix](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/)


#### Bit-Pattern Validation / Parsing

- Invariant: Some encodings (UTF-8) are defined entirely by fixed bit-prefix rules, making validation a direct bit-pattern check.

Foundation:

1. [UTF-8 Validation](https://leetcode.com/problems/utf-8-validation/)


#### Randomization: Reservoir Sampling And Uniform Selection

- Invariant: Reservoir sampling picks a uniformly random match from a stream without knowing its length in advance.

Foundation:

1. [Random Pick Index](https://leetcode.com/problems/random-pick-index/)


#### Computational Geometry: Orientation And Intersection

- Invariant: The sign of a cross product classifies three points as a left turn, right turn, or collinear -- the basis of nearly all geometry algorithms.

Foundation:

1. [Point Location Test](https://cses.fi/problemset/task/2189)

Reinforcement:

1. [Line Segment Intersection](https://cses.fi/problemset/task/2190)

Boss:

1. [Point in Polygon](https://cses.fi/problemset/task/2192)


#### Computational Geometry: Area, Distance, Convex Hull

- Invariant: The shoelace formula, squared-distance grouping, and monotone-chain hull construction all avoid costly sqrt/float operations.

Foundation:

1. [Polygon Area](https://cses.fi/problemset/task/2191)

Reinforcement:

1. [Minimum Area Rectangle II](https://leetcode.com/problems/minimum-area-rectangle-ii/)
2. [Number of Boomerangs](https://leetcode.com/problems/number-of-boomerangs/)

Boss:

1. [Minimum Euclidean Distance](https://cses.fi/problemset/task/2194)
2. [Convex Hull](https://cses.fi/problemset/task/2195)


## Variant Ladder

Use this ladder after solving any problem. If you cannot adapt, you do not own the pattern yet.

1. Add duplicates.
2. Add negative numbers.
3. Make the graph disconnected.
4. Make the graph directed.
5. Make the input streaming.
6. Require online updates.
7. Require range queries.
8. Require memory under O(n).
9. Require lexicographically smallest answer.
10. Require counting the number of optimal answers.
11. Require reconstructing the actual path/subset/string.
12. Change from one answer to all answers.
13. Increase constraints by 10x.
14. Add weighted edges.
15. Add cycles.
16. Add deletion updates.
17. Add rollback or undo.
18. Make recursion depth unsafe.
19. Make values huge and require compression.
20. Make the answer modulo 1e9+7.

## Final Boss Checks

You are FAANG-ready in DSA if you can do this:

1. Pick 20 random problems from this doc.
2. Solve at least 15 without hints.
3. Include at least 3 DP, 3 graph, 2 tree, 2 range-query, 2 string, and 1 design problem.
4. Explain every failure and redo it after 3 days.
5. In mocks, communicate before coding and test out loud.

If you can only solve after recognizing the problem name, you are memorizing. If you can derive the solution from the constraints and invariants, you are interviewing.
