# FAANG DSA Gauntlet

This is intentionally overbuilt. No list can guarantee an offer, because real interviews also test communication, speed, debugging, and judgment, but if you can solve this bank cold, explain tradeoffs cleanly, and implement without hints, you are very strongly prepared for FAANG-style DSA rounds.

Sources used for calibration: [LeetCode Top Interview 150](https://leetcode.com/studyplan/top-interview-150/), [LeetCode Problemset](https://leetcode.com/problemset/), [NeetCode Roadmap](https://neetcode.io/roadmap), [CSES Problem Set](https://cses.fi/problemset/), and [cp-algorithms](https://cp-algorithms.com/).

## How to Use This

1. Do the mock rounds first. Each round is 75 to 90 minutes, no hints, no editorials, no AI.
2. For every problem, write brute force, optimized idea, proof sketch, complexity, edge cases, then code.
3. After the mock rounds, finish the master bank by topic.
4. You pass only if you can solve at least 80% cold and can explain why the algorithm is correct.
5. For hard graph, DP, range-query, and string problems, redo each failed problem after 3 days and again after 14 days.

## Minimum Passing Bar

- Mid-level FAANG readiness: solve all mock rounds plus 100 master-bank problems cold.
- Senior or strong new-grad readiness: solve all mock rounds plus 150 master-bank problems cold.
- "They can throw almost anything DSA at me" readiness: solve everything here, including the CSES advanced section.

## 16 Mock Interview Rounds

Each round has one "expected" FAANG-style problem and one "pressure" problem.

| Round | Theme | Expected Problem | Pressure Problem |
|---|---|---|---|
| 1 | Arrays, hashing, invariants | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) |
| 2 | Prefix sums, subarrays | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/) |
| 3 | Sliding window, deque | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) |
| 4 | Two pointers, water, sorting | [3Sum](https://leetcode.com/problems/3sum/) | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) |
| 5 | Binary search on answer | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) |
| 6 | Monotonic stack | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) |
| 7 | Heaps, streaming | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) |
| 8 | Linked list plus cache design | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | [LFU Cache](https://leetcode.com/problems/lfu-cache/) |
| 9 | Trees, recursion, postorder | [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |
| 10 | BST, serialization | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) |
| 11 | Trie and backtracking | [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | [Word Search II](https://leetcode.com/problems/word-search-ii/) |
| 12 | Graph traversal | [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) | [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/) |
| 13 | Topological graph DP | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/) |
| 14 | Shortest paths | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) |
| 15 | Dynamic programming | [Edit Distance](https://leetcode.com/problems/edit-distance/) | [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) |
| 16 | Range queries, offline logic | [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | [Range Queries and Copies](https://cses.fi/problemset/task/1737) |

## Topic Coverage Checklist

- Arrays, hashing, prefix sums, difference arrays, cyclic placement.
- Two pointers, sliding window, deque optimization.
- Sorting, intervals, sweep line, coordinate compression.
- Binary search on index, value, answer, real numbers, and matrix spaces.
- Stacks, monotonic stacks, monotonic queues, expression parsing.
- Heaps, top-k, k-way merge, streaming medians.
- Linked lists, pointer manipulation, cycle detection, cache designs.
- Trees, BSTs, recursion, iterative traversal, serialization, LCA, rerooting.
- Tries, bit tries, wildcard search, word search, autocomplete-style lookup.
- BFS, DFS, topological sort, bipartite checks, SCC, bridges, articulation points.
- Union-find, rollback-style thinking, offline connectivity, Kruskal.
- Dijkstra, 0-1 BFS, Bellman-Ford, Floyd-Warshall, A*, state-space BFS.
- MST, second-best MST, min-cut, max-flow, bipartite matching.
- Greedy proofs, exchange arguments, interval scheduling, heap greedy.
- DP: 1D, 2D, knapsack, LIS, LCS, string DP, interval DP, tree DP, rerooting DP, digit DP, bitmask DP, DP optimization.
- Segment tree, lazy propagation, Fenwick tree, sparse table, ordered set, persistent segment tree.
- String algorithms: KMP, Z-function, rolling hash, Manacher, suffix array, Aho-Corasick.
- Backtracking, branch and bound, meet-in-the-middle.
- Bit manipulation, combinatorics, modular arithmetic, probability, randomization.
- Geometry basics, line sweep, convex hull.
- DSA-heavy design: LRU, LFU, AllOne, Twitter, MedianFinder, SnapshotArray.

## Master Bank: Core FAANG Problems

### Arrays, Hashing, Prefix Sums

1. [Two Sum](https://leetcode.com/problems/two-sum/)
2. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
3. [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
4. [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
5. [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
6. [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
7. [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)
8. [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
9. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
10. [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)
11. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
12. [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)
13. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
14. [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
15. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)

### Two Pointers and Sliding Window

1. [3Sum](https://leetcode.com/problems/3sum/)
2. [4Sum](https://leetcode.com/problems/4sum/)
3. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
4. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
5. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
6. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
7. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
8. [Permutation in String](https://leetcode.com/problems/permutation-in-string/)
9. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
10. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
11. [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
12. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
13. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)

### Sorting, Intervals, Sweep Line

1. [Sort Colors](https://leetcode.com/problems/sort-colors/)
2. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
3. [Insert Interval](https://leetcode.com/problems/insert-interval/)
4. [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
5. [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
6. [Car Fleet](https://leetcode.com/problems/car-fleet/)
7. [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/)
8. [My Calendar II](https://leetcode.com/problems/my-calendar-ii/)
9. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
10. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
11. [Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)
12. [Falling Squares](https://leetcode.com/problems/falling-squares/)

### Binary Search and Parametric Search

1. [Binary Search](https://leetcode.com/problems/binary-search/)
2. [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
3. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
4. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
5. [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
6. [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)
7. [Find Peak Element](https://leetcode.com/problems/find-peak-element/)
8. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
9. [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
10. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
11. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
12. [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
13. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

### Stack, Monotonic Stack, Parsing

1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
2. [Min Stack](https://leetcode.com/problems/min-stack/)
3. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
4. [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)
5. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
6. [Online Stock Span](https://leetcode.com/problems/online-stock-span/)
7. [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)
8. [Decode String](https://leetcode.com/problems/decode-string/)
9. [Remove K Digits](https://leetcode.com/problems/remove-k-digits/)
10. [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/)
11. [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/)
12. [Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/)
13. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
14. [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)
15. [Basic Calculator](https://leetcode.com/problems/basic-calculator/)

### Heaps and Streaming

1. [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
2. [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)
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

### Linked Lists and DSA Design

1. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
2. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
3. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
4. [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
5. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
6. [Reorder List](https://leetcode.com/problems/reorder-list/)
7. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
8. [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)
9. [LRU Cache](https://leetcode.com/problems/lru-cache/)
10. [LFU Cache](https://leetcode.com/problems/lfu-cache/)
11. [All O(1) Data Structure](https://leetcode.com/problems/all-oone-data-structure/)
12. [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)
13. [Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/)
14. [Snapshot Array](https://leetcode.com/problems/snapshot-array/)
15. [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)
16. [Design Twitter](https://leetcode.com/problems/design-twitter/)

### Trees, BST, LCA, Serialization

1. [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
2. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
3. [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
4. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
5. [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
6. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
7. [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
8. [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
9. [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
10. [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
11. [Path Sum III](https://leetcode.com/problems/path-sum-iii/)
12. [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)
13. [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)
14. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
15. [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
16. [Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/)
17. [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)
18. [Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/)
19. [Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)
20. [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/)

### Tries and String Search

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
13. [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
14. [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
15. [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)

### Graphs: BFS, DFS, Topological Sort

1. [Number of Islands](https://leetcode.com/problems/number-of-islands/)
2. [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
3. [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
4. [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
5. [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
6. [Clone Graph](https://leetcode.com/problems/clone-graph/)
7. [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
8. [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)
9. [Course Schedule](https://leetcode.com/problems/course-schedule/)
10. [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
11. [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)
12. [Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/)
13. [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)
14. [Open the Lock](https://leetcode.com/problems/open-the-lock/)
15. [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/)
16. [Bus Routes](https://leetcode.com/problems/bus-routes/)
17. [Word Ladder](https://leetcode.com/problems/word-ladder/)
18. [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)
19. [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
20. [Evaluate Division](https://leetcode.com/problems/evaluate-division/)

### Graphs: DSU, MST, Shortest Paths, Bridges

1. [Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
2. [Redundant Connection](https://leetcode.com/problems/redundant-connection/)
3. [Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/)
4. [Accounts Merge](https://leetcode.com/problems/accounts-merge/)
5. [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)
6. [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
7. [Similar String Groups](https://leetcode.com/problems/similar-string-groups/)
8. [Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/)
9. [Making A Large Island](https://leetcode.com/problems/making-a-large-island/)
10. [Bricks Falling When Hit](https://leetcode.com/problems/bricks-falling-when-hit/)
11. [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)
12. [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)
13. [Network Delay Time](https://leetcode.com/problems/network-delay-time/)
14. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
15. [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
16. [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)
17. [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
18. [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
19. [Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/)
20. [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)
21. [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)
22. [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)

### Greedy and Exchange Arguments

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

### Backtracking and Search

1. [Permutations](https://leetcode.com/problems/permutations/)
2. [Permutations II](https://leetcode.com/problems/permutations-ii/)
3. [Subsets](https://leetcode.com/problems/subsets/)
4. [Subsets II](https://leetcode.com/problems/subsets-ii/)
5. [Combination Sum](https://leetcode.com/problems/combination-sum/)
6. [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
7. [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
8. [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
9. [N-Queens](https://leetcode.com/problems/n-queens/)
10. [N-Queens II](https://leetcode.com/problems/n-queens-ii/)
11. [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
12. [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)
13. [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)
14. [Split Array into Fibonacci Sequence](https://leetcode.com/problems/split-array-into-fibonacci-sequence/)
15. [Verbal Arithmetic Puzzle](https://leetcode.com/problems/verbal-arithmetic-puzzle/)

### Dynamic Programming: Foundations

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

### Dynamic Programming: Knapsack, LIS, Stocks

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

### Dynamic Programming: Strings, Grids, Intervals

1. [Word Break](https://leetcode.com/problems/word-break/)
2. [Word Break II](https://leetcode.com/problems/word-break-ii/)
3. [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
4. [Uncrossed Lines](https://leetcode.com/problems/uncrossed-lines/)
5. [Edit Distance](https://leetcode.com/problems/edit-distance/)
6. [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)
7. [Interleaving String](https://leetcode.com/problems/interleaving-string/)
8. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
9. [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)
10. [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)
11. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
12. [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)
13. [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
14. [Strange Printer](https://leetcode.com/problems/strange-printer/)
15. [Unique Paths](https://leetcode.com/problems/unique-paths/)
16. [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)
17. [Triangle](https://leetcode.com/problems/triangle/)
18. [Dungeon Game](https://leetcode.com/problems/dungeon-game/)
19. [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/)
20. [Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/)
21. [Maximal Square](https://leetcode.com/problems/maximal-square/)
22. [Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)
23. [Burst Balloons](https://leetcode.com/problems/burst-balloons/)
24. [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)
25. [Stone Game II](https://leetcode.com/problems/stone-game-ii/)
26. [Stone Game III](https://leetcode.com/problems/stone-game-iii/)
27. [Scramble String](https://leetcode.com/problems/scramble-string/)
28. [Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)
29. [Frog Jump](https://leetcode.com/problems/frog-jump/)
30. [Remove Boxes](https://leetcode.com/problems/remove-boxes/)

### Dynamic Programming: Bitmask, Digit, State Compression

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

### Range Queries, Fenwick, Segment Tree, Ordered Structures

1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
2. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
3. [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)
4. [Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)
5. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
6. [Range Module](https://leetcode.com/problems/range-module/)
7. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
8. [Falling Squares](https://leetcode.com/problems/falling-squares/)
9. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
10. [Handling Sum Queries After Update](https://leetcode.com/problems/handling-sum-queries-after-update/)
11. [Longest Increasing Subsequence II](https://leetcode.com/problems/longest-increasing-subsequence-ii/)
12. [Maximum Sum Queries](https://leetcode.com/problems/maximum-sum-queries/)
13. [Plates Between Candles](https://leetcode.com/problems/plates-between-candles/)
14. [Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)

### Math, Bit Manipulation, Randomization, Geometry

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
18. [Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/)
19. [Rectangle Area](https://leetcode.com/problems/rectangle-area/)
20. [Erect the Fence](https://leetcode.com/problems/erect-the-fence/)

## What You Must Be Able to Explain

For every accepted solution, be able to answer:

1. What invariant makes this correct?
2. Why does this avoid double-counting or missing cases?
3. What is the tight time and space complexity?
4. What breaks if inputs are empty, duplicated, negative, cyclic, disconnected, or huge?
5. Can this be made iterative instead of recursive?
6. Can this be optimized with sorting, hashing, binary search, a heap, DSU, a segment tree, or DP?
7. What alternative algorithm would you use if constraints changed by 10x?

## Final Boss Rule

Pick any 12 problems from the hard sections randomly. If you can solve 9 of them in 2 weeks without hints, including at least:

- 2 graph problems,
- 2 DP problems,
- 1 string algorithm problem,
- 1 range-query problem,
- 1 tree problem,
- 1 design problem,

then your DSA base is genuinely strong.
