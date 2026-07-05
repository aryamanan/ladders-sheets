# FAANG DSA Researched Interview Failure Map

This is a correction to the previous DSA sheets. A giant random problem bank is not enough. The real target is the intersection of:

1. What public interview-prep lists repeatedly recommend.
2. What pattern taxonomies say you must recognize.
3. What actually causes candidates to fail under interview pressure.
4. What advanced topics cover the rare but brutal interviewer follow-ups.

No prep document can honestly guarantee a 100% pass rate. But this map is built to make your prep much less random.

## Research Basis

I used these public sources as calibration, not as blind authority:

- [Tech Interview Handbook coding study plan](https://www.techinterviewhandbook.org/coding-interview-study-plan/) and [Grind 75](https://www.techinterviewhandbook.org/grind75/) for commonly recommended interview prep ordering.
- [LeetCode Top Interview 150](https://leetcode.com/studyplan/top-interview-150/) for classic interview coverage.
- [AlgoMonster patterns](https://algo.monster/problems/stats) for pattern taxonomy: binary search, two pointers, DFS, BFS, graph, heap, DP, DSU, trie, segment tree, monotonic stack, line sweep, and design.
- [CSES Problem Set](https://cses.fi/problemset/) for advanced gaps: graph algorithms, range queries, tree algorithms, string algorithms, geometry, bitwise operations, advanced graph problems, and advanced techniques.
- [cp-algorithms](https://cp-algorithms.com/) for theory coverage behind advanced algorithms.

Important limitation: exact FAANG frequency is not public. Company-tagged LeetCode data is often paywalled, stale, or anecdotal. So this document uses source overlap plus pattern coverage instead of pretending to know exact current internal question pools.

## What Was Wrong With A Normal List

A normal list fails because it hides the real skill. The interviewer does not care that you solved "Word Ladder" once. They care whether you can recognize:

- implicit graph construction,
- bidirectional BFS,
- shortest path layer semantics,
- parent reconstruction,
- duplicate path explosion,
- memory limits,
- edge-case handling.

So this document is organized by failure mode and pattern family, not just topic.

## The Four Layers

### Layer 1: High-Frequency Core

These are the patterns that show up constantly in public prep lists:

- arrays and hash maps,
- strings,
- two pointers,
- sliding window,
- sorting and intervals,
- binary search,
- stack and monotonic stack,
- linked lists,
- trees and BSTs,
- BFS and DFS,
- heaps,
- tries,
- backtracking,
- dynamic programming,
- greedy,
- graph basics,
- design data structures.

### Layer 2: Interview Killers

These are problems where candidates know the topic but still fail:

- hard sliding window,
- prefix-sum counting,
- monotonic deque,
- binary search on answer,
- parsing,
- tree path DP,
- graph state modeling,
- topological DP,
- 0-1 BFS,
- DSU reverse processing,
- interval DP,
- bitmask DP,
- segment tree and Fenwick tree,
- trie plus backtracking,
- string matching,
- randomized APIs,
- cache design.

### Layer 3: Advanced But Plausible

These are less common in ordinary interviews but important for strong Google/Meta-style algorithmic rounds, competitive candidates, or follow-ups:

- SCC,
- bridges and articulation points,
- Eulerian paths,
- max flow and matching,
- LCA and binary lifting,
- rerooting DP,
- heavy-light decomposition,
- lazy segment trees,
- persistent segment trees,
- suffix arrays,
- Manacher,
- Aho-Corasick conceptually,
- digit DP,
- profile DP,
- meet-in-the-middle,
- convex hull / geometry basics,
- Mo's algorithm / offline queries.

### Layer 4: Interview Execution

Most failures are not "I do not know Dijkstra." They are:

- no constraints analysis,
- no invariant,
- wrong edge cases,
- recursive stack overflow,
- poor testing,
- inability to recover after a wrong start,
- overcoding before clarifying,
- memorized solution that breaks under a variant.

## Candidate Failure Modes And Killer Drills

| Failure Mode | What It Looks Like | Killer Drills |
|---|---|---|
| Cannot state invariant | Window grows/shrinks randomly | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/), [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) |
| Misses monotonic predicate | Tries greedy/DP when answer search is needed | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/), [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) |
| Treats implicit graph as array problem | Cannot define nodes/edges | [Word Ladder](https://leetcode.com/problems/word-ladder/), [Open the Lock](https://leetcode.com/problems/open-the-lock/), [Sliding Puzzle](https://leetcode.com/problems/sliding-puzzle/) |
| Uses BFS when weights matter | Wrong shortest path | [Network Delay Time](https://leetcode.com/problems/network-delay-time/), [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) |
| Cannot model state | Visited set is incomplete | [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/), [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/) |
| Topological confusion | Cannot separate cycle detection from ordering | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/), [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/) |
| DP state is wrong | Memo table misses needed dimensions | [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/), [Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word/) |
| Interval DP not recognized | Recurses over wrong ranges | [Burst Balloons](https://leetcode.com/problems/burst-balloons/), [Remove Boxes](https://leetcode.com/problems/remove-boxes/) |
| Counts double or misses cases | Prefix/counting logic breaks | [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/), [Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/) |
| Tree recursion returns wrong thing | Local/global answer mixed | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/), [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/) |
| Trie pruning weak | TLE in board search | [Word Search II](https://leetcode.com/problems/word-search-ii/), [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/) |
| Range query data structure shaky | Index boundaries wrong | [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/), [Range Module](https://leetcode.com/problems/range-module/) |
| Lazy propagation not owned | Updates and queries interact incorrectly | [Handling Sum Queries After Update](https://leetcode.com/problems/handling-sum-queries-after-update/), [Range Updates and Sums](https://cses.fi/problemset/task/1735) |
| Cannot parse expressions | Stack/order precedence breaks | [Basic Calculator](https://leetcode.com/problems/basic-calculator/), [Number of Atoms](https://leetcode.com/problems/number-of-atoms/) |
| Cache design memorized | O(1) operations not actually O(1) | [LRU Cache](https://leetcode.com/problems/lru-cache/), [LFU Cache](https://leetcode.com/problems/lfu-cache/), [All O(1) Data Structure](https://leetcode.com/problems/all-oone-data-structure/) |

## Tier A: The Non-Negotiable Interview Core

These are the patterns that overlap strongly across LeetCode classic lists, Grind/Blind-style prep, and pattern-based courses.

### Arrays, Hashing, Prefix Sums

You must know:

- frequency map,
- index map,
- prefix sum,
- modulo prefix,
- XOR prefix,
- in-place marking,
- cyclic placement,
- Boyer-Moore majority vote,
- coordinate compression.

Problems:

1. [Two Sum](https://leetcode.com/problems/two-sum/)
2. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
3. [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
4. [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
5. [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
6. [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
7. [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
8. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
9. [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)
10. [Majority Element II](https://leetcode.com/problems/majority-element-ii/)
11. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
12. [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)
13. [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)
14. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
15. [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
16. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)

### Two Pointers, Sliding Window, Deque

You must know:

- same direction,
- opposite direction,
- fast/slow,
- fixed window,
- variable window,
- exact K by at-most K subtraction,
- monotonic deque,
- window with negative numbers.

Problems:

1. [Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
2. [3Sum](https://leetcode.com/problems/3sum/)
3. [4Sum](https://leetcode.com/problems/4sum/)
4. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
5. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
6. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
7. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
8. [Permutation in String](https://leetcode.com/problems/permutation-in-string/)
9. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
10. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
11. [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
12. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
13. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
14. [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)

### Sorting, Intervals, Sweep Line

You must know:

- custom sorting,
- merge intervals,
- min rooms,
- active set,
- event ordering,
- sweep line with deltas,
- coordinate compression.

Problems:

1. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
2. [Insert Interval](https://leetcode.com/problems/insert-interval/)
3. [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
4. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
5. [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
6. [Car Fleet](https://leetcode.com/problems/car-fleet/)
7. [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/)
8. [My Calendar II](https://leetcode.com/problems/my-calendar-ii/)
9. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
10. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
11. [Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)
12. [Falling Squares](https://leetcode.com/problems/falling-squares/)

### Binary Search

You must know:

- lower bound,
- upper bound,
- rotated search,
- first true,
- monotonic predicate,
- kth value search,
- binary search on answer,
- precision search.

Problems:

1. [Binary Search](https://leetcode.com/problems/binary-search/)
2. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
3. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
4. [Find Peak Element](https://leetcode.com/problems/find-peak-element/)
5. [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
6. [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)
7. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
8. [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
9. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
10. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
11. [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
12. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

### Stack, Monotonic Stack, Parsing

You must know:

- stack of indices,
- next greater/smaller,
- contribution counting,
- histogram,
- parentheses validation,
- expression parsing,
- operator precedence.

Problems:

1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
2. [Min Stack](https://leetcode.com/problems/min-stack/)
3. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
4. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
5. [Online Stock Span](https://leetcode.com/problems/online-stock-span/)
6. [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)
7. [Decode String](https://leetcode.com/problems/decode-string/)
8. [Remove K Digits](https://leetcode.com/problems/remove-k-digits/)
9. [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/)
10. [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/)
11. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
12. [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)
13. [Basic Calculator](https://leetcode.com/problems/basic-calculator/)
14. [Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/)
15. [Number of Atoms](https://leetcode.com/problems/number-of-atoms/)

### Heaps And Streaming

You must know:

- top K,
- k-way merge,
- two heaps,
- lazy deletion,
- greedy heap replacement,
- streaming order statistics.

Problems:

1. [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
2. [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)
3. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
4. [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
5. [Task Scheduler](https://leetcode.com/problems/task-scheduler/)
6. [Reorganize String](https://leetcode.com/problems/reorganize-string/)
7. [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/)
8. [IPO](https://leetcode.com/problems/ipo/)
9. [Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/)
10. [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)
11. [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)
12. [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)

### Linked Lists

You must know:

- dummy node,
- pointer rewiring,
- fast/slow,
- reverse sublist,
- k-group reversal,
- copy with random pointer.

Problems:

1. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
2. [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
3. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
4. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
5. [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
6. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
7. [Reorder List](https://leetcode.com/problems/reorder-list/)
8. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
9. [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)
10. [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

### Trees And BSTs

You must know:

- recursive return values,
- global answer updates,
- iterative DFS,
- BFS levels,
- BST bounds,
- LCA,
- serialization,
- subtree signatures,
- rerooting concept.

Problems:

1. [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
2. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
3. [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
4. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
5. [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
6. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
7. [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
8. [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
9. [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
10. [Path Sum III](https://leetcode.com/problems/path-sum-iii/)
11. [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)
12. [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)
13. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
14. [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
15. [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/)
16. [Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/)
17. [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)
18. [Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)
19. [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/)
20. [Sum of Distances in Tree](https://leetcode.com/problems/sum-of-distances-in-tree/)

### Tries And Search

You must know:

- prefix trie,
- wildcard DFS,
- trie plus board DFS,
- bit trie,
- reversed trie,
- pruning duplicate work.

Problems:

1. [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/)
2. [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
3. [Word Search](https://leetcode.com/problems/word-search/)
4. [Word Search II](https://leetcode.com/problems/word-search-ii/)
5. [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/)
6. [Stream of Characters](https://leetcode.com/problems/stream-of-characters/)
7. [Concatenated Words](https://leetcode.com/problems/concatenated-words/)
8. [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
9. [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)
10. [Maximum XOR With an Element From Array](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/)

### Backtracking

You must know:

- choose/explore/unchoose,
- duplicate skipping,
- pruning,
- constraint propagation,
- memoization boundary.

Problems:

1. [Permutations](https://leetcode.com/problems/permutations/)
2. [Permutations II](https://leetcode.com/problems/permutations-ii/)
3. [Subsets](https://leetcode.com/problems/subsets/)
4. [Subsets II](https://leetcode.com/problems/subsets-ii/)
5. [Combination Sum](https://leetcode.com/problems/combination-sum/)
6. [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
7. [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
8. [N-Queens](https://leetcode.com/problems/n-queens/)
9. [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
10. [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)
11. [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)
12. [Verbal Arithmetic Puzzle](https://leetcode.com/problems/verbal-arithmetic-puzzle/)

## Tier B: Graph Problems That Actually Expose Weakness

### BFS / DFS / Matrix As Graph

Problems:

1. [Number of Islands](https://leetcode.com/problems/number-of-islands/)
2. [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
3. [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
4. [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
5. [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
6. [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/)
7. [As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/)
8. [Walls and Gates](https://leetcode.com/problems/walls-and-gates/)
9. [Clone Graph](https://leetcode.com/problems/clone-graph/)
10. [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)

### Implicit Graph And State BFS

Problems:

1. [Open the Lock](https://leetcode.com/problems/open-the-lock/)
2. [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/)
3. [Bus Routes](https://leetcode.com/problems/bus-routes/)
4. [Word Ladder](https://leetcode.com/problems/word-ladder/)
5. [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)
6. [Sliding Puzzle](https://leetcode.com/problems/sliding-puzzle/)
7. [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
8. [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
9. [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/)
10. [Cut Off Trees for Golf Event](https://leetcode.com/problems/cut-off-trees-for-golf-event/)

### Directed Graph, Topological Sort, DAG DP

Problems:

1. [Course Schedule](https://leetcode.com/problems/course-schedule/)
2. [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
3. [Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/)
4. [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)
5. [Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/)
6. [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)
7. [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)
8. [Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/)
9. [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
10. [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)

### Shortest Path

Problems:

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

### DSU / MST / Reverse Processing

Problems:

1. [Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
2. [Redundant Connection](https://leetcode.com/problems/redundant-connection/)
3. [Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/)
4. [Accounts Merge](https://leetcode.com/problems/accounts-merge/)
5. [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)
6. [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
7. [Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/)
8. [Making A Large Island](https://leetcode.com/problems/making-a-large-island/)
9. [Bricks Falling When Hit](https://leetcode.com/problems/bricks-falling-when-hit/)
10. [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)
11. [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)
12. [Checking Existence of Edge Length Limited Paths](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/)
13. [Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/)

## Tier C: Dynamic Programming That Separates People

### Foundation DP

Problems:

1. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
2. [House Robber](https://leetcode.com/problems/house-robber/)
3. [House Robber II](https://leetcode.com/problems/house-robber-ii/)
4. [House Robber III](https://leetcode.com/problems/house-robber-iii/)
5. [Delete and Earn](https://leetcode.com/problems/delete-and-earn/)
6. [Coin Change](https://leetcode.com/problems/coin-change/)
7. [Coin Change II](https://leetcode.com/problems/coin-change-ii/)
8. [Decode Ways](https://leetcode.com/problems/decode-ways/)
9. [Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/)
10. [Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/)

### Knapsack / LIS / Stocks

Problems:

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
11. [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
12. [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)

### String DP

Problems:

1. [Word Break](https://leetcode.com/problems/word-break/)
2. [Word Break II](https://leetcode.com/problems/word-break-ii/)
3. [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
4. [Edit Distance](https://leetcode.com/problems/edit-distance/)
5. [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)
6. [Interleaving String](https://leetcode.com/problems/interleaving-string/)
7. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
8. [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)
9. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
10. [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
11. [Strange Printer](https://leetcode.com/problems/strange-printer/)
12. [Scramble String](https://leetcode.com/problems/scramble-string/)

### Grid / Interval / Game DP

Problems:

1. [Unique Paths](https://leetcode.com/problems/unique-paths/)
2. [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)
3. [Triangle](https://leetcode.com/problems/triangle/)
4. [Dungeon Game](https://leetcode.com/problems/dungeon-game/)
5. [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/)
6. [Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/)
7. [Maximal Square](https://leetcode.com/problems/maximal-square/)
8. [Burst Balloons](https://leetcode.com/problems/burst-balloons/)
9. [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)
10. [Stone Game II](https://leetcode.com/problems/stone-game-ii/)
11. [Stone Game III](https://leetcode.com/problems/stone-game-iii/)
12. [Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)
13. [Frog Jump](https://leetcode.com/problems/frog-jump/)
14. [Remove Boxes](https://leetcode.com/problems/remove-boxes/)
15. [Race Car](https://leetcode.com/problems/race-car/)
16. [Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/)

### Bitmask / Digit / Profile DP

Problems:

1. [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
2. [Can I Win](https://leetcode.com/problems/can-i-win/)
3. [Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word/)
4. [Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)
5. [Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/)
6. [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
7. [Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)
8. [Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)
9. [Minimum Incompatibility](https://leetcode.com/problems/minimum-incompatibility/)
10. [Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/)
11. [Number of Digit One](https://leetcode.com/problems/number-of-digit-one/)
12. [Hamiltonian Flights](https://cses.fi/problemset/task/1690)
13. [Counting Tilings](https://cses.fi/problemset/task/2181)
14. [Counting Numbers](https://cses.fi/problemset/task/2220)

## Tier D: Advanced Data Structures

### Fenwick / Segment Tree / Ordered Sets

Problems:

1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
2. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
3. [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)
4. [Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)
5. [Range Module](https://leetcode.com/problems/range-module/)
6. [Falling Squares](https://leetcode.com/problems/falling-squares/)
7. [Handling Sum Queries After Update](https://leetcode.com/problems/handling-sum-queries-after-update/)
8. [Longest Increasing Subsequence II](https://leetcode.com/problems/longest-increasing-subsequence-ii/)
9. [Maximum Sum Queries](https://leetcode.com/problems/maximum-sum-queries/)
10. [Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)
11. [Distinct Values Queries](https://cses.fi/problemset/task/1734)
12. [Range Updates and Sums](https://cses.fi/problemset/task/1735)
13. [Polynomial Queries](https://cses.fi/problemset/task/1736)
14. [Range Queries and Copies](https://cses.fi/problemset/task/1737)
15. [Subarray Sum Queries](https://cses.fi/problemset/task/1190)
16. [Sliding Window Median](https://cses.fi/problemset/task/1076)
17. [Sliding Window Cost](https://cses.fi/problemset/task/1077)

### Tree Algorithms Beyond Binary Trees

Problems:

1. [Tree Matching](https://cses.fi/problemset/task/1130)
2. [Tree Diameter](https://cses.fi/problemset/task/1131)
3. [Tree Distances I](https://cses.fi/problemset/task/1132)
4. [Tree Distances II](https://cses.fi/problemset/task/1133)
5. [Company Queries I](https://cses.fi/problemset/task/1687)
6. [Company Queries II](https://cses.fi/problemset/task/1688)
7. [Distance Queries](https://cses.fi/problemset/task/1135)
8. [Counting Paths](https://cses.fi/problemset/task/1136)
9. [Subtree Queries](https://cses.fi/problemset/task/1137)
10. [Path Queries](https://cses.fi/problemset/task/1138)
11. [Path Queries II](https://cses.fi/problemset/task/2134)
12. [Distinct Colors](https://cses.fi/problemset/task/1139)
13. [Finding a Centroid](https://cses.fi/problemset/task/2079)
14. [Fixed-Length Paths I](https://cses.fi/problemset/task/2080)
15. [Fixed-Length Paths II](https://cses.fi/problemset/task/2081)

### Advanced Graphs

Problems:

1. [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)
2. [Planets and Kingdoms](https://cses.fi/problemset/task/1683)
3. [Giant Pizza](https://cses.fi/problemset/task/1684)
4. [Coin Collector](https://cses.fi/problemset/task/1686)
5. [Mail Delivery](https://cses.fi/problemset/task/1691)
6. [De Bruijn Sequence](https://cses.fi/problemset/task/1692)
7. [Teleporters Path](https://cses.fi/problemset/task/1693)
8. [Download Speed](https://cses.fi/problemset/task/1694)
9. [Police Chase](https://cses.fi/problemset/task/1695)
10. [School Dance](https://cses.fi/problemset/task/1696)
11. [Distinct Routes](https://cses.fi/problemset/task/1711)
12. [Dynamic Connectivity](https://cses.fi/problemset/task/2133)

### String Algorithms

Problems:

1. [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
2. [Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)
3. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
4. [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
5. [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
6. [Word Combinations](https://cses.fi/problemset/task/1731)
7. [String Matching](https://cses.fi/problemset/task/1753)
8. [Finding Borders](https://cses.fi/problemset/task/1732)
9. [Finding Periods](https://cses.fi/problemset/task/1733)
10. [Minimal Rotation](https://cses.fi/problemset/task/1110)
11. [Longest Palindrome](https://cses.fi/problemset/task/1111)
12. [All Palindromes](https://cses.fi/problemset/task/3138)
13. [Finding Patterns](https://cses.fi/problemset/task/2102)
14. [Counting Patterns](https://cses.fi/problemset/task/2103)
15. [Pattern Positions](https://cses.fi/problemset/task/2104)
16. [Distinct Substrings](https://cses.fi/problemset/task/2105)
17. [Repeating Substring](https://cses.fi/problemset/task/2106)
18. [String Functions](https://cses.fi/problemset/task/2107)
19. [Substring Order I](https://cses.fi/problemset/task/2108)
20. [Substring Order II](https://cses.fi/problemset/task/2109)
21. [Substring Distribution](https://cses.fi/problemset/task/2110)

### Math, Bits, Geometry, Randomization

Problems:

1. [Single Number II](https://leetcode.com/problems/single-number-ii/)
2. [Single Number III](https://leetcode.com/problems/single-number-iii/)
3. [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/)
4. [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/)
5. [Pow(x, n)](https://leetcode.com/problems/powx-n/)
6. [Fraction to Recurring Decimal](https://leetcode.com/problems/fraction-to-recurring-decimal/)
7. [Integer to English Words](https://leetcode.com/problems/integer-to-english-words/)
8. [Valid Number](https://leetcode.com/problems/valid-number/)
9. [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/)
10. [Random Pick with Blacklist](https://leetcode.com/problems/random-pick-with-blacklist/)
11. [Implement Rand10() Using Rand7()](https://leetcode.com/problems/implement-rand10-using-rand7/)
12. [Linked List Random Node](https://leetcode.com/problems/linked-list-random-node/)
13. [Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/)
14. [Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)
15. [Erect the Fence](https://leetcode.com/problems/erect-the-fence/)
16. [Josephus Queries](https://cses.fi/problemset/task/2164)
17. [Binomial Coefficients](https://cses.fi/problemset/task/1079)
18. [Counting Coprime Pairs](https://cses.fi/problemset/task/2417)
19. [Point Location Test](https://cses.fi/problemset/task/2189)
20. [Line Segment Intersection](https://cses.fi/problemset/task/2190)
21. [Polygon Area](https://cses.fi/problemset/task/2191)
22. [Point in Polygon](https://cses.fi/problemset/task/2192)
23. [Convex Hull](https://cses.fi/problemset/task/2195)

## Design Data Structures

These are coding interviews disguised as API design.

Problems:

1. [LRU Cache](https://leetcode.com/problems/lru-cache/)
2. [LFU Cache](https://leetcode.com/problems/lfu-cache/)
3. [All O(1) Data Structure](https://leetcode.com/problems/all-oone-data-structure/)
4. [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)
5. [Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/)
6. [Snapshot Array](https://leetcode.com/problems/snapshot-array/)
7. [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)
8. [Design Twitter](https://leetcode.com/problems/design-twitter/)
9. [Design Hit Counter](https://leetcode.com/problems/design-hit-counter/)
10. [Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/)
11. [Design In-Memory File System](https://leetcode.com/problems/design-in-memory-file-system/)
12. [Design Skiplist](https://leetcode.com/problems/design-skiplist/)

## The "Actually Hard" 75

If you want the shortest brutal set, do these. This is not broad enough by itself, but it is excellent for exposing weakness.

1. [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)
2. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
3. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
4. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
5. [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
6. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
7. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
8. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)
9. [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
10. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
11. [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)
12. [Basic Calculator](https://leetcode.com/problems/basic-calculator/)
13. [Number of Atoms](https://leetcode.com/problems/number-of-atoms/)
14. [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)
15. [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)
16. [LFU Cache](https://leetcode.com/problems/lfu-cache/)
17. [All O(1) Data Structure](https://leetcode.com/problems/all-oone-data-structure/)
18. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
19. [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
20. [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)
21. [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/)
22. [Word Search II](https://leetcode.com/problems/word-search-ii/)
23. [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
24. [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
25. [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)
26. [Bus Routes](https://leetcode.com/problems/bus-routes/)
27. [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
28. [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/)
29. [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)
30. [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)
31. [Bricks Falling When Hit](https://leetcode.com/problems/bricks-falling-when-hit/)
32. [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)
33. [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)
34. [Reachable Nodes In Subdivided Graph](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/)
35. [Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/)
36. [Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)
37. [Set Intersection Size At Least Two](https://leetcode.com/problems/set-intersection-size-at-least-two/)
38. [Patching Array](https://leetcode.com/problems/patching-array/)
39. [Create Maximum Number](https://leetcode.com/problems/create-maximum-number/)
40. [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)
41. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
42. [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)
43. [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)
44. [Strange Printer](https://leetcode.com/problems/strange-printer/)
45. [Scramble String](https://leetcode.com/problems/scramble-string/)
46. [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/)
47. [Burst Balloons](https://leetcode.com/problems/burst-balloons/)
48. [Remove Boxes](https://leetcode.com/problems/remove-boxes/)
49. [Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)
50. [Frog Jump](https://leetcode.com/problems/frog-jump/)
51. [Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word/)
52. [Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)
53. [Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/)
54. [Minimum Incompatibility](https://leetcode.com/problems/minimum-incompatibility/)
55. [Range Module](https://leetcode.com/problems/range-module/)
56. [Handling Sum Queries After Update](https://leetcode.com/problems/handling-sum-queries-after-update/)
57. [Longest Increasing Subsequence II](https://leetcode.com/problems/longest-increasing-subsequence-ii/)
58. [Maximum Sum Queries](https://leetcode.com/problems/maximum-sum-queries/)
59. [Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/)
60. [Random Pick with Blacklist](https://leetcode.com/problems/random-pick-with-blacklist/)
61. [Valid Number](https://leetcode.com/problems/valid-number/)
62. [Erect the Fence](https://leetcode.com/problems/erect-the-fence/)
63. [Hamiltonian Flights](https://cses.fi/problemset/task/1690)
64. [Download Speed](https://cses.fi/problemset/task/1694)
65. [Police Chase](https://cses.fi/problemset/task/1695)
66. [Path Queries II](https://cses.fi/problemset/task/2134)
67. [Fixed-Length Paths II](https://cses.fi/problemset/task/2081)
68. [Range Queries and Copies](https://cses.fi/problemset/task/1737)
69. [String Functions](https://cses.fi/problemset/task/2107)
70. [Distinct Substrings](https://cses.fi/problemset/task/2105)
71. [Substring Order II](https://cses.fi/problemset/task/2109)
72. [Counting Tilings](https://cses.fi/problemset/task/2181)
73. [Dynamic Connectivity](https://cses.fi/problemset/task/2133)
74. [Convex Hull](https://cses.fi/problemset/task/2195)
75. [Meet in the Middle](https://cses.fi/problemset/task/1628)

## Final Exhaustiveness Checklist

You are not done until you can solve at least one hard example for every item:

- arrays,
- strings,
- hash maps,
- prefix sums,
- difference arrays,
- cyclic placement,
- two pointers,
- sliding window,
- monotonic queue,
- sorting,
- intervals,
- sweep line,
- binary search,
- answer search,
- matrix traversal,
- stack,
- monotonic stack,
- parser,
- heap,
- k-way merge,
- streaming median,
- linked list,
- cache design,
- tree recursion,
- BST,
- LCA,
- serialization,
- trie,
- bit trie,
- backtracking,
- BFS,
- DFS,
- multi-source BFS,
- bidirectional BFS,
- topological sort,
- DAG DP,
- shortest path,
- 0-1 BFS,
- Bellman-Ford,
- Floyd-Warshall,
- DSU,
- reverse DSU,
- MST,
- bridges,
- SCC,
- Euler path,
- max flow,
- matching,
- greedy,
- exchange argument,
- DP 1D,
- DP 2D,
- knapsack,
- LIS,
- stock DP,
- string DP,
- interval DP,
- tree DP,
- rerooting DP,
- bitmask DP,
- digit DP,
- profile DP,
- Fenwick tree,
- segment tree,
- lazy segment tree,
- persistent segment tree,
- ordered set,
- offline queries,
- KMP,
- Z-function,
- rolling hash,
- Manacher,
- suffix array,
- Aho-Corasick concept,
- bit manipulation,
- modular arithmetic,
- combinatorics,
- randomized algorithms,
- geometry,
- game theory.

## How To Prove You Are Ready

1. Solve the Tier A core without hints.
2. Solve at least 50 of the "Actually Hard 75."
3. Solve at least 15 advanced CSES problems across graph, range, tree, and strings.
4. For every failed problem, write the missed invariant or missed state variable.
5. Redo failed problems after 3 days and 14 days.
6. Run mixed mocks. Topic-by-topic practice is not enough.
7. Explain your solution before coding.
8. Test with adversarial cases, not just happy paths.

If you can derive the solution after reading constraints, you are ready. If you need to remember the exact LeetCode title, you are still memorizing.
