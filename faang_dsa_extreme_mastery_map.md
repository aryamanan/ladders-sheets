# FAANG DSA Extreme Mastery Map

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

| Round | Core Pattern | Problem 1 | Problem 2 |
|---|---|---|---|
| 1 | Array invariants | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) |
| 2 | Prefix sums | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/) |
| 3 | Difference arrays | [Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/) | [Car Pooling](https://leetcode.com/problems/car-pooling/) |
| 4 | Sliding window | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) |
| 5 | Monotonic deque | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) |
| 6 | Two pointers | [3Sum](https://leetcode.com/problems/3sum/) | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) |
| 7 | Binary search on answer | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) |
| 8 | Matrix search | [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) | [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) |
| 9 | Monotonic stack | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) |
| 10 | Heap scheduling | [Task Scheduler](https://leetcode.com/problems/task-scheduler/) | [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/) |
| 11 | Streaming | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | [Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/) |
| 12 | Linked list + design | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | [LFU Cache](https://leetcode.com/problems/lfu-cache/) |
| 13 | Tree recursion | [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |
| 14 | Tree serialization | [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/) |
| 15 | BST surgery | [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/) | [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) |
| 16 | Trie | [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | [Word Search II](https://leetcode.com/problems/word-search-ii/) |
| 17 | String algorithms | [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/) | [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/) |
| 18 | Backtracking | [N-Queens](https://leetcode.com/problems/n-queens/) | [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/) |
| 19 | Graph traversal | [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) | [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/) |
| 20 | Topological DP | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/) |
| 21 | DSU | [Accounts Merge](https://leetcode.com/problems/accounts-merge/) | [Bricks Falling When Hit](https://leetcode.com/problems/bricks-falling-when-hit/) |
| 22 | MST | [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/) |
| 23 | Dijkstra / 0-1 BFS | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) |
| 24 | Bitmask BFS | [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) | [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/) |
| 25 | Knapsack DP | [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/) |
| 26 | String DP | [Edit Distance](https://leetcode.com/problems/edit-distance/) | [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) |
| 27 | Interval DP | [Burst Balloons](https://leetcode.com/problems/burst-balloons/) | [Remove Boxes](https://leetcode.com/problems/remove-boxes/) |
| 28 | Bitmask DP | [Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/) | [Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/) |
| 29 | Segment tree | [Range Module](https://leetcode.com/problems/range-module/) | [Handling Sum Queries After Update](https://leetcode.com/problems/handling-sum-queries-after-update/) |
| 30 | Advanced contest-style | [Download Speed](https://cses.fi/problemset/task/1694) | [Path Queries II](https://cses.fi/problemset/task/2134) |

## Mastery Rubric

- Bronze: solve 120 problems from this doc without hints.
- Silver: solve 220 problems, including at least 60 hard problems.
- Gold: solve 320 problems, including all mock rounds and all weak-topic retries.
- Black belt: solve the advanced CSES section too, explain each algorithm from first principles, and pass random mixed mocks under time.

## Topic Taxonomy

### Arrays, Hashing, Counting

Know: frequency maps, set membership, index maps, cyclic placement, in-place marking, majority vote, coordinate compression, matrix indexing.

1. [Two Sum](https://leetcode.com/problems/two-sum/)
2. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
3. [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
4. [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
5. [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
6. [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)
7. [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
8. [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)
9. [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
10. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
11. [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
12. [Missing Number](https://leetcode.com/problems/missing-number/)
13. [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)
14. [Majority Element](https://leetcode.com/problems/majority-element/)
15. [Majority Element II](https://leetcode.com/problems/majority-element-ii/)
16. [Sort Colors](https://leetcode.com/problems/sort-colors/)
17. [Next Permutation](https://leetcode.com/problems/next-permutation/)
18. [Rotate Array](https://leetcode.com/problems/rotate-array/)
19. [Move Zeroes](https://leetcode.com/problems/move-zeroes/)
20. [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)
21. [Rotate Image](https://leetcode.com/problems/rotate-image/)
22. [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)
23. [Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)
24. [Game of Life](https://leetcode.com/problems/game-of-life/)
25. [H-Index](https://leetcode.com/problems/h-index/)
26. [H-Index II](https://leetcode.com/problems/h-index-ii/)

### Prefix Sums, Difference Arrays, Subarray Counting

Know: prefix hash maps, modulo prefix, XOR prefix, 2D prefix, difference array, range compression, divide-and-conquer counting.

1. [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)
2. [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)
3. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
4. [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)
5. [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)
6. [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/)
7. [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)
8. [Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/)
9. [Maximum Size Subarray Sum Equals k](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/)
10. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
11. [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
12. [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/)
13. [Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)
14. [Car Pooling](https://leetcode.com/problems/car-pooling/)
15. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
16. [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)
17. [Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)

### Two Pointers

Know: sorted pair search, palindrome cleanup, partitioning, opposite-direction scans, fast/slow pointers, water reasoning.

1. [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
2. [3Sum](https://leetcode.com/problems/3sum/)
3. [3Sum Closest](https://leetcode.com/problems/3sum-closest/)
4. [4Sum](https://leetcode.com/problems/4sum/)
5. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
6. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
7. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
8. [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)
9. [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
10. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
11. [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)
12. [Partition Labels](https://leetcode.com/problems/partition-labels/)
13. [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)
14. [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)
15. [Minimum Number of Moves to Make Palindrome](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/)

### Sliding Window and Deques

Know: fixed window, variable window, at-most K trick, exact K via subtraction, multiset window, monotonic queue.

1. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
2. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
3. [Permutation in String](https://leetcode.com/problems/permutation-in-string/)
4. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
5. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
6. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
7. [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)
8. [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
9. [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)
10. [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
11. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
12. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
13. [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)
14. [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)
15. [Maximum Erasure Value](https://leetcode.com/problems/maximum-erasure-value/)

### Sorting, Intervals, Sweep Line

Know: sorting by custom keys, stable interval merge, min rooms, line sweep, active sets, event ordering, coordinate compression.

1. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
2. [Insert Interval](https://leetcode.com/problems/insert-interval/)
3. [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
4. [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
5. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
6. [Car Fleet](https://leetcode.com/problems/car-fleet/)
7. [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/)
8. [My Calendar I](https://leetcode.com/problems/my-calendar-i/)
9. [My Calendar II](https://leetcode.com/problems/my-calendar-ii/)
10. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
11. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
12. [Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)
13. [Falling Squares](https://leetcode.com/problems/falling-squares/)
14. [Employee Free Time](https://leetcode.com/problems/employee-free-time/)
15. [Meeting Scheduler](https://leetcode.com/problems/meeting-scheduler/)
16. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
17. [Amount of New Area Painted Each Day](https://leetcode.com/problems/amount-of-new-area-painted-each-day/)

### Binary Search

Know: lower bound, upper bound, predicate search, answer search, rotated arrays, matrix search, kth-value search, precision search.

1. [Binary Search](https://leetcode.com/problems/binary-search/)
2. [Search Insert Position](https://leetcode.com/problems/search-insert-position/)
3. [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
4. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
5. [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)
6. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
7. [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)
8. [Find Peak Element](https://leetcode.com/problems/find-peak-element/)
9. [Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/)
10. [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
11. [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)
12. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
13. [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
14. [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)
15. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
16. [Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/)
17. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
18. [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
19. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)
20. [Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/)
21. [Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/)

### Stack, Monotonic Stack, Parsing

Know: next greater/smaller, contribution counting, histogram stack, expression stack, operator precedence.

1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
2. [Min Stack](https://leetcode.com/problems/min-stack/)
3. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
4. [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)
5. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
6. [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)
7. [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)
8. [Online Stock Span](https://leetcode.com/problems/online-stock-span/)
9. [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)
10. [Decode String](https://leetcode.com/problems/decode-string/)
11. [Remove K Digits](https://leetcode.com/problems/remove-k-digits/)
12. [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/)
13. [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/)
14. [Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/)
15. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
16. [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)
17. [Basic Calculator](https://leetcode.com/problems/basic-calculator/)
18. [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/)
19. [Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/)
20. [Number of Atoms](https://leetcode.com/problems/number-of-atoms/)
21. [Parsing A Boolean Expression](https://leetcode.com/problems/parsing-a-boolean-expression/)

### Heaps, Priority Queues, Streaming

Know: top-k, lazy deletion, two heaps, k-way merge, scheduling, greedy with heap, streaming order statistics.

1. [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
2. [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)
3. [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)
4. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
5. [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
6. [Task Scheduler](https://leetcode.com/problems/task-scheduler/)
7. [Reorganize String](https://leetcode.com/problems/reorganize-string/)
8. [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/)
9. [IPO](https://leetcode.com/problems/ipo/)
10. [Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/)
11. [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)
12. [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)
13. [Maximum Performance of a Team](https://leetcode.com/problems/maximum-performance-of-a-team/)
14. [Process Tasks Using Servers](https://leetcode.com/problems/process-tasks-using-servers/)
15. [Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/)
16. [The Number of the Smallest Unoccupied Chair](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/)

### Linked Lists and Pointer Manipulation

Know: dummy node, sentinel, fast/slow, reversal, splicing, cycle detection, random pointers.

1. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
2. [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
3. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
4. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
5. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
6. [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
7. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
8. [Reorder List](https://leetcode.com/problems/reorder-list/)
9. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
10. [Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/)
11. [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)
12. [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
13. [Rotate List](https://leetcode.com/problems/rotate-list/)
14. [Partition List](https://leetcode.com/problems/partition-list/)
15. [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)
16. [Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/)
17. [Design Browser History](https://leetcode.com/problems/design-browser-history/)

### DSA Design

Know: API contracts, hash map plus linked list, heap plus map, balanced ordered structure, snapshotting, lazy cleanup.

1. [LRU Cache](https://leetcode.com/problems/lru-cache/)
2. [LFU Cache](https://leetcode.com/problems/lfu-cache/)
3. [All O(1) Data Structure](https://leetcode.com/problems/all-oone-data-structure/)
4. [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)
5. [Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/)
6. [Snapshot Array](https://leetcode.com/problems/snapshot-array/)
7. [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)
8. [Design Twitter](https://leetcode.com/problems/design-twitter/)
9. [Design Hit Counter](https://leetcode.com/problems/design-hit-counter/)
10. [Design Underground System](https://leetcode.com/problems/design-underground-system/)
11. [Design Browser History](https://leetcode.com/problems/design-browser-history/)
12. [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)
13. [Design Circular Deque](https://leetcode.com/problems/design-circular-deque/)
14. [Design Skiplist](https://leetcode.com/problems/design-skiplist/)
15. [Design In-Memory File System](https://leetcode.com/problems/design-in-memory-file-system/)
16. [Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/)
17. [Design Log Storage System](https://leetcode.com/problems/design-log-storage-system/)

### Binary Trees and BSTs

Know: preorder/inorder/postorder, recursion returns, iterative stack traversal, path state, serialization, LCA, BST bounds, subtree signatures.

1. [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
2. [Same Tree](https://leetcode.com/problems/same-tree/)
3. [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)
4. [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)
5. [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
6. [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
7. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
8. [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
9. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
10. [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)
11. [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
12. [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/)
13. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
14. [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
15. [BST Iterator](https://leetcode.com/problems/binary-search-tree-iterator/)
16. [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
17. [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
18. [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
19. [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
20. [Path Sum](https://leetcode.com/problems/path-sum/)
21. [Path Sum II](https://leetcode.com/problems/path-sum-ii/)
22. [Path Sum III](https://leetcode.com/problems/path-sum-iii/)
23. [Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
24. [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)
25. [Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/)
26. [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)
27. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
28. [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
29. [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/)
30. [Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/)
31. [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)
32. [Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/)
33. [Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)
34. [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/)
35. [Height of Binary Tree After Subtree Removal Queries](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/)
36. [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)
37. [Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/)
38. [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)
39. [Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/)
40. [Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/)

### Tries and Word Search

Know: prefix tree layout, wildcard DFS, compressed tries, bit tries, board DFS pruning.

1. [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/)
2. [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
3. [Word Search](https://leetcode.com/problems/word-search/)
4. [Word Search II](https://leetcode.com/problems/word-search-ii/)
5. [Replace Words](https://leetcode.com/problems/replace-words/)
6. [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/)
7. [Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/)
8. [Stream of Characters](https://leetcode.com/problems/stream-of-characters/)
9. [Concatenated Words](https://leetcode.com/problems/concatenated-words/)
10. [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
11. [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)
12. [Maximum XOR With an Element From Array](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/)
13. [Count Pairs With XOR in a Range](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/)

### String Algorithms

Know: KMP prefix function, Z-function, rolling hash, Manacher, suffix array/LCP basics, Aho-Corasick conceptually.

1. [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
2. [Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)
3. [Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/)
4. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
5. [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)
6. [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
7. [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
8. [Distinct Echo Substrings](https://leetcode.com/problems/distinct-echo-substrings/)
9. [Number of Matching Subsequences](https://leetcode.com/problems/number-of-matching-subsequences/)
10. [Unique Length-3 Palindromic Subsequences](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/)
11. [Count Unique Characters of All Substrings of a Given String](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/)
12. [Sum of Scores of Built Strings](https://leetcode.com/problems/sum-of-scores-of-built-strings/)
13. [Distinct Subsequences II](https://leetcode.com/problems/distinct-subsequences-ii/)
14. [Minimum Window Subsequence](https://leetcode.com/problems/minimum-window-subsequence/)
15. [Text Justification](https://leetcode.com/problems/text-justification/)

### Graph Traversal

Know: DFS/BFS, multi-source BFS, reverse traversal, implicit graph modeling, state compression in BFS, cycle detection.

1. [Number of Islands](https://leetcode.com/problems/number-of-islands/)
2. [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
3. [Island Perimeter](https://leetcode.com/problems/island-perimeter/)
4. [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/)
5. [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
6. [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
7. [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
8. [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/)
9. [As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/)
10. [Clone Graph](https://leetcode.com/problems/clone-graph/)
11. [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
12. [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)
13. [Open the Lock](https://leetcode.com/problems/open-the-lock/)
14. [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/)
15. [Bus Routes](https://leetcode.com/problems/bus-routes/)
16. [Word Ladder](https://leetcode.com/problems/word-ladder/)
17. [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)
18. [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
19. [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
20. [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/)
21. [Cut Off Trees for Golf Event](https://leetcode.com/problems/cut-off-trees-for-golf-event/)
22. [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
23. [Evaluate Division](https://leetcode.com/problems/evaluate-division/)
24. [All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/)
25. [Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/)

### Directed Graphs, Topological Sort, SCC

Know: indegree BFS, DFS color cycle detection, DAG DP, SCC condensation, 2-SAT basics.

1. [Course Schedule](https://leetcode.com/problems/course-schedule/)
2. [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
3. [Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/)
4. [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)
5. [Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/)
6. [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)
7. [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)
8. [Minimum Number of Vertices to Reach All Nodes](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/)
9. [Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)
10. [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)
11. [Planets and Kingdoms](https://cses.fi/problemset/task/1683)
12. [Giant Pizza](https://cses.fi/problemset/task/1684)
13. [Coin Collector](https://cses.fi/problemset/task/1686)

### DSU, MST, Offline Connectivity

Know: path compression, union by size/rank, component metadata, reverse processing, Kruskal, edge classification.

1. [Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
2. [Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)
3. [Redundant Connection](https://leetcode.com/problems/redundant-connection/)
4. [Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/)
5. [Accounts Merge](https://leetcode.com/problems/accounts-merge/)
6. [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)
7. [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
8. [Similar String Groups](https://leetcode.com/problems/similar-string-groups/)
9. [Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/)
10. [Making A Large Island](https://leetcode.com/problems/making-a-large-island/)
11. [Bricks Falling When Hit](https://leetcode.com/problems/bricks-falling-when-hit/)
12. [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)
13. [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)
14. [Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/)
15. [Checking Existence of Edge Length Limited Paths](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/)
16. [Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/)
17. [Lexicographically Smallest Equivalent String](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/)
18. [Road Reparation](https://cses.fi/problemset/task/1675)

### Shortest Paths

Know: BFS, 0-1 BFS, Dijkstra, Bellman-Ford, Floyd-Warshall, state-expanded shortest path.

1. [Network Delay Time](https://leetcode.com/problems/network-delay-time/)
2. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
3. [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
4. [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)
5. [Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/)
6. [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)
7. [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)
8. [Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)
9. [Reachable Nodes In Subdivided Graph](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/)
10. [Second Minimum Time to Reach Destination](https://leetcode.com/problems/second-minimum-time-to-reach-destination/)
11. [Minimum Weighted Subgraph With the Required Paths](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/)
12. [Shortest Routes I](https://cses.fi/problemset/task/1671)
13. [Shortest Routes II](https://cses.fi/problemset/task/1672)
14. [High Score](https://cses.fi/problemset/task/1673)
15. [Flight Discount](https://cses.fi/problemset/task/1195)
16. [Investigation](https://cses.fi/problemset/task/1202)

### Flow and Matching

Know: residual graph, augmenting paths, min cut, bipartite matching reduction, path decomposition.

1. [Download Speed](https://cses.fi/problemset/task/1694)
2. [Police Chase](https://cses.fi/problemset/task/1695)
3. [School Dance](https://cses.fi/problemset/task/1696)
4. [Distinct Routes](https://cses.fi/problemset/task/1711)
5. [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
6. [Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)

### Greedy

Know: exchange arguments, earliest finish, heap replacement, interval coverage, local choice proof.

1. [Jump Game](https://leetcode.com/problems/jump-game/)
2. [Jump Game II](https://leetcode.com/problems/jump-game-ii/)
3. [Gas Station](https://leetcode.com/problems/gas-station/)
4. [Candy](https://leetcode.com/problems/candy/)
5. [Partition Labels](https://leetcode.com/problems/partition-labels/)
6. [Hand of Straights](https://leetcode.com/problems/hand-of-straights/)
7. [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/)
8. [Merge Triplets to Form Target Triplet](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/)
9. [Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)
10. [Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)
11. [Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/)
12. [Set Intersection Size At Least Two](https://leetcode.com/problems/set-intersection-size-at-least-two/)
13. [Patching Array](https://leetcode.com/problems/patching-array/)
14. [Create Maximum Number](https://leetcode.com/problems/create-maximum-number/)
15. [Maximum Swap](https://leetcode.com/problems/maximum-swap/)
16. [Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)

### Backtracking and Branching Search

Know: choice tree, duplicate skipping, constraint propagation, pruning, state restoration.

1. [Permutations](https://leetcode.com/problems/permutations/)
2. [Permutations II](https://leetcode.com/problems/permutations-ii/)
3. [Subsets](https://leetcode.com/problems/subsets/)
4. [Subsets II](https://leetcode.com/problems/subsets-ii/)
5. [Combination Sum](https://leetcode.com/problems/combination-sum/)
6. [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
7. [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)
8. [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
9. [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
10. [N-Queens](https://leetcode.com/problems/n-queens/)
11. [N-Queens II](https://leetcode.com/problems/n-queens-ii/)
12. [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
13. [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)
14. [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)
15. [Split Array into Fibonacci Sequence](https://leetcode.com/problems/split-array-into-fibonacci-sequence/)
16. [Verbal Arithmetic Puzzle](https://leetcode.com/problems/verbal-arithmetic-puzzle/)

### Dynamic Programming Foundations

Know: state, transition, base cases, memoization, tabulation, space compression, impossible states.

1. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
2. [House Robber](https://leetcode.com/problems/house-robber/)
3. [House Robber II](https://leetcode.com/problems/house-robber-ii/)
4. [House Robber III](https://leetcode.com/problems/house-robber-iii/)
5. [Delete and Earn](https://leetcode.com/problems/delete-and-earn/)
6. [Coin Change](https://leetcode.com/problems/coin-change/)
7. [Coin Change II](https://leetcode.com/problems/coin-change-ii/)
8. [Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)
9. [Perfect Squares](https://leetcode.com/problems/perfect-squares/)
10. [Decode Ways](https://leetcode.com/problems/decode-ways/)
11. [Decode Ways II](https://leetcode.com/problems/decode-ways-ii/)
12. [Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/)
13. [Paint House](https://leetcode.com/problems/paint-house/)
14. [Paint House II](https://leetcode.com/problems/paint-house-ii/)
15. [Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/)

### Knapsack, LIS, Stocks

Know: 0/1 knapsack, unbounded knapsack, target-sum transform, patience sorting, transaction-state DP.

1. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
2. [Target Sum](https://leetcode.com/problems/target-sum/)
3. [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)
4. [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)
5. [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/)
6. [Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/)
7. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
8. [Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)
9. [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)
10. [Longest Arithmetic Subsequence](https://leetcode.com/problems/longest-arithmetic-subsequence/)
11. [Longest String Chain](https://leetcode.com/problems/longest-string-chain/)
12. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
13. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
14. [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
15. [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)
16. [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
17. [Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)
18. [Split Array With Same Average](https://leetcode.com/problems/split-array-with-same-average/)

### String DP

Know: LCS family, edit distance, regex wildcard matching, palindrome intervals, subsequence counting, dictionary segmentation.

1. [Word Break](https://leetcode.com/problems/word-break/)
2. [Word Break II](https://leetcode.com/problems/word-break-ii/)
3. [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
4. [Uncrossed Lines](https://leetcode.com/problems/uncrossed-lines/)
5. [Edit Distance](https://leetcode.com/problems/edit-distance/)
6. [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)
7. [Distinct Subsequences II](https://leetcode.com/problems/distinct-subsequences-ii/)
8. [Interleaving String](https://leetcode.com/problems/interleaving-string/)
9. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
10. [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)
11. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
12. [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)
13. [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
14. [Strange Printer](https://leetcode.com/problems/strange-printer/)
15. [Scramble String](https://leetcode.com/problems/scramble-string/)
16. [Count Different Palindromic Subsequences](https://leetcode.com/problems/count-different-palindromic-subsequences/)
17. [K Inverse Pairs Array](https://leetcode.com/problems/k-inverse-pairs-array/)

### Grid, Interval, Game DP

Know: grid transitions, reverse DP, interval split, minimax DP, memoized recursion over ranges.

1. [Unique Paths](https://leetcode.com/problems/unique-paths/)
2. [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)
3. [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)
4. [Triangle](https://leetcode.com/problems/triangle/)
5. [Dungeon Game](https://leetcode.com/problems/dungeon-game/)
6. [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/)
7. [Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/)
8. [Maximal Square](https://leetcode.com/problems/maximal-square/)
9. [Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)
10. [Burst Balloons](https://leetcode.com/problems/burst-balloons/)
11. [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)
12. [Stone Game](https://leetcode.com/problems/stone-game/)
13. [Stone Game II](https://leetcode.com/problems/stone-game-ii/)
14. [Stone Game III](https://leetcode.com/problems/stone-game-iii/)
15. [Predict the Winner](https://leetcode.com/problems/predict-the-winner/)
16. [Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)
17. [Frog Jump](https://leetcode.com/problems/frog-jump/)
18. [Remove Boxes](https://leetcode.com/problems/remove-boxes/)
19. [Race Car](https://leetcode.com/problems/race-car/)
20. [Freedom Trail](https://leetcode.com/problems/freedom-trail/)
21. [Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/)
22. [Make Array Strictly Increasing](https://leetcode.com/problems/make-array-strictly-increasing/)
23. [Painting the Walls](https://leetcode.com/problems/painting-the-walls/)

### Bitmask, Digit, Profile DP

Know: subset masks, Hamiltonian DP, assignment DP, digit tight flag, profile transitions.

1. [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
2. [Can I Win](https://leetcode.com/problems/can-i-win/)
3. [Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word/)
4. [Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)
5. [Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/)
6. [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
7. [Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)
8. [Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)
9. [Minimum Incompatibility](https://leetcode.com/problems/minimum-incompatibility/)
10. [Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/)
11. [Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/)
12. [Number of Digit One](https://leetcode.com/problems/number-of-digit-one/)
13. [Elevator Rides](https://cses.fi/problemset/task/1653)
14. [Counting Tilings](https://cses.fi/problemset/task/2181)
15. [Counting Numbers](https://cses.fi/problemset/task/2220)
16. [Hamiltonian Flights](https://cses.fi/problemset/task/1690)

### Range Queries and Ordered Structures

Know: Fenwick tree, segment tree, lazy propagation, sparse table, persistent segment tree, order statistics, offline queries.

1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
2. [Range Sum Query 2D - Mutable](https://leetcode.com/problems/range-sum-query-2d-mutable/)
3. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
4. [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)
5. [Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)
6. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
7. [Range Module](https://leetcode.com/problems/range-module/)
8. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
9. [Falling Squares](https://leetcode.com/problems/falling-squares/)
10. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
11. [Handling Sum Queries After Update](https://leetcode.com/problems/handling-sum-queries-after-update/)
12. [Longest Increasing Subsequence II](https://leetcode.com/problems/longest-increasing-subsequence-ii/)
13. [Maximum Sum Queries](https://leetcode.com/problems/maximum-sum-queries/)
14. [Plates Between Candles](https://leetcode.com/problems/plates-between-candles/)
15. [Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)
16. [Distinct Values Queries](https://cses.fi/problemset/task/1734)
17. [Range Updates and Sums](https://cses.fi/problemset/task/1735)
18. [Polynomial Queries](https://cses.fi/problemset/task/1736)
19. [Range Queries and Copies](https://cses.fi/problemset/task/1737)
20. [Pizzeria Queries](https://cses.fi/problemset/task/2206)
21. [Subarray Sum Queries](https://cses.fi/problemset/task/1190)
22. [Prefix Sum Queries](https://cses.fi/problemset/task/2166)
23. [List Removals](https://cses.fi/problemset/task/1749)

### Tree Algorithms Beyond Binary Trees

Know: Euler tour, binary lifting, LCA, rerooting, HLD, centroid ideas, subtree aggregation.

1. [Tree Matching](https://cses.fi/problemset/task/1130)
2. [Tree Distances I](https://cses.fi/problemset/task/1132)
3. [Tree Distances II](https://cses.fi/problemset/task/1133)
4. [Distance Queries](https://cses.fi/problemset/task/1135)
5. [Counting Paths](https://cses.fi/problemset/task/1136)
6. [Subtree Queries](https://cses.fi/problemset/task/1137)
7. [Path Queries](https://cses.fi/problemset/task/1138)
8. [Path Queries II](https://cses.fi/problemset/task/2134)
9. [Finding a Centroid](https://cses.fi/problemset/task/2079)
10. [Fixed-Length Paths I](https://cses.fi/problemset/task/2080)
11. [Fixed-Length Paths II](https://cses.fi/problemset/task/2081)
12. [Sum of Distances in Tree](https://leetcode.com/problems/sum-of-distances-in-tree/)
13. [Count Subtrees With Max Distance Between Cities](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/)

### Math, Bits, Randomization, Geometry

Know: bit masks, modular arithmetic, GCD, combinatorics, reservoir sampling, prefix probability, orientation tests.

1. [Single Number](https://leetcode.com/problems/single-number/)
2. [Single Number II](https://leetcode.com/problems/single-number-ii/)
3. [Single Number III](https://leetcode.com/problems/single-number-iii/)
4. [Counting Bits](https://leetcode.com/problems/counting-bits/)
5. [Reverse Bits](https://leetcode.com/problems/reverse-bits/)
6. [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/)
7. [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)
8. [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/)
9. [Pow(x, n)](https://leetcode.com/problems/powx-n/)
10. [Sqrt(x)](https://leetcode.com/problems/sqrtx/)
11. [Happy Number](https://leetcode.com/problems/happy-number/)
12. [Fraction to Recurring Decimal](https://leetcode.com/problems/fraction-to-recurring-decimal/)
13. [Integer to English Words](https://leetcode.com/problems/integer-to-english-words/)
14. [Valid Number](https://leetcode.com/problems/valid-number/)
15. [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/)
16. [Random Pick with Blacklist](https://leetcode.com/problems/random-pick-with-blacklist/)
17. [Implement Rand10() Using Rand7()](https://leetcode.com/problems/implement-rand10-using-rand7/)
18. [Reservoir Sampling](https://leetcode.com/problems/linked-list-random-node/)
19. [Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/)
20. [Rectangle Area](https://leetcode.com/problems/rectangle-area/)
21. [Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)
22. [Erect the Fence](https://leetcode.com/problems/erect-the-fence/)
23. [Convex Hull](https://cses.fi/problemset/task/2195)

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
