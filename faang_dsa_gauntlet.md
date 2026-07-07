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

1. [Two Sum](https://leetcode.com/problems/two-sum/) {Hash Map Complement}
2. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) {Hash Set}
3. [Valid Anagram](https://leetcode.com/problems/valid-anagram/) {Frequency Map}
4. [Group Anagrams](https://leetcode.com/problems/group-anagrams/) {Frequency Map Key}
5. [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) {Frequency Map + Bucket/Heap}
6. [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) {Prefix/Suffix Product}
7. [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) {Frequency Map (Grid)}
8. [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) {Hash Set Sequence Scan}
9. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) {Cyclic Placement / Floyd's}
10. [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) {In-Place Index Encoding}
11. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) {Prefix Sum + Hash Map}
12. [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) {Prefix Sum Modulo}
13. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) {Kadane's}
14. [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) {Running Max/Min Product}
15. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/) {Prefix Sum + Merge/BIT}

16. [Range Addition](https://www.geeksforgeeks.org/dsa/print-modified-array-multiple-array-range-increment-operations/) {Difference Array}
17. [Shortest Word Distance](https://www.geeksforgeeks.org/dsa/minimum-distance-between-words-of-a-string/) {Single-Pass Index Tracking}
18. [Wiggle Sort](https://www.geeksforgeeks.org/dsa/sort-array-wave-form-2/) {Wave Sort - One Pass}
19. [Missing Ranges](https://www.geeksforgeeks.org/problems/missing-ranges-of-numbers1019/1) {Range Gaps}
20. [Palindrome Permutation](https://www.geeksforgeeks.org/dsa/check-characters-given-string-can-rearranged-form-palindrome/) {Frequency Parity Check}
21. [Group Shifted Strings](https://www.geeksforgeeks.org/problems/group-shifted-string/1) {Hashing - Normalized Shift Pattern}
### Two Pointers and Sliding Window

1. [3Sum](https://leetcode.com/problems/3sum/) {Two Pointers After Sort}
2. [4Sum](https://leetcode.com/problems/4sum/) {Two Pointers After Sort (K-Sum)}
3. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) {Opposite-Direction Two Pointers}
4. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) {Two Pointers Running Max}
5. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) {Variable Window (Shrinkable)}
6. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) {Variable Window + Hash Set}
7. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) {Variable Window + Frequency Map}
8. [Permutation in String](https://leetcode.com/problems/permutation-in-string/) {Fixed Window + Frequency Map}
9. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) {Fixed Window + Frequency Map}
10. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) {Variable Window + Need/Have Counters}
11. [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) {Fixed Window Multi-Word}
12. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) {Monotonic Deque}
13. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) {Monotonic Deque + Prefix Sum}

14. [Longest Substring with At Most Two Distinct Characters](https://www.geeksforgeeks.org/dsa/longest-substring-with-at-most-two-distinct-characters/) {Sliding Window - K Distinct Chars}
15. [3Sum Smaller](https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1) {Two Pointers - Count Triplets}
16. [Max Consecutive Ones II](https://www.geeksforgeeks.org/dsa/max-number-of-one-ii/) {Sliding Window - At Most One Zero}
17. [Sort Transformed Array](https://www.geeksforgeeks.org/problems/sort-the-given-array-after-applying-the-given-equation0304/1) {Two Pointers - Merge From Sorted Ends}
18. [Strobogrammatic Number](https://www.geeksforgeeks.org/dsa/strobogrammatic-number/) {Two Pointers - Digit Pair Mapping}
### Sorting, Intervals, Sweep Line

1. [Sort Colors](https://leetcode.com/problems/sort-colors/) {Three-Way Partition (Dutch Flag)}
2. [Merge Intervals](https://leetcode.com/problems/merge-intervals/) {Sort + Merge}
3. [Insert Interval](https://leetcode.com/problems/insert-interval/) {Sorted Insert Merge}
4. [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) {Interval Greedy (Erase Overlap)}
5. [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) {Interval Greedy (End Sort)}
6. [Car Fleet](https://leetcode.com/problems/car-fleet/) {Sort + Monotonic Stack}
7. [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/) {Greedy Insert by Height}
8. [My Calendar II](https://leetcode.com/problems/my-calendar-ii/) {Sweep Line (Double Booking)}
9. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/) {Sweep Line (Max Overlap)}
10. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/) {Sweep Line + Heap}
11. [Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/) {Sweep Line + Binary Search}
12. [Falling Squares](https://leetcode.com/problems/falling-squares/) {Coordinate Compression + Sweep}

13. [Meeting Rooms](https://www.geeksforgeeks.org/problems/attend-all-meetings/1) {Interval Scheduling}
14. [Meeting Rooms II](https://www.geeksforgeeks.org/problems/attend-all-meetings-ii/1) {Interval Scheduling - Min Rooms}
### Binary Search and Parametric Search

1. [Binary Search](https://leetcode.com/problems/binary-search/) {Classic Binary Search}
2. [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) {Boundary Binary Search}
3. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) {Rotated Array Search}
4. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) {Rotated Array Minimum}
5. [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) {Binary Search on Flattened Grid}
6. [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) {Staircase Search}
7. [Find Peak Element](https://leetcode.com/problems/find-peak-element/) {Binary Search on Slope}
8. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) {Binary Search on Answer}
9. [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) {Binary Search on Answer}
10. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) {Binary Search on Answer}
11. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) {Binary Search on Value}
12. [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) {Binary Search on Value + Two Pointers}
13. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) {Binary Search on Partition}

### Stack, Monotonic Stack, Parsing

1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) {Bracket Matching}
2. [Min Stack](https://leetcode.com/problems/min-stack/) {Auxiliary Min Stack}
3. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) {Postfix Evaluation}
4. [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) {Backtracking + Stack Validity}
5. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) {Monotonic Stack (Next Greater)}
6. [Online Stock Span](https://leetcode.com/problems/online-stock-span/) {Monotonic Stack (Span)}
7. [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) {Monotonic Stack (Simulation)}
8. [Decode String](https://leetcode.com/problems/decode-string/) {Nested Stack Decode}
9. [Remove K Digits](https://leetcode.com/problems/remove-k-digits/) {Monotonic Stack (Greedy Removal)}
10. [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/) {Monotonic Stack (Lexicographic Greedy)}
11. [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) {Monotonic Stack (Contribution)}
12. [Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/) {Monotonic Stack + Prefix Sum}
13. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) {Monotonic Stack (Area)}
14. [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) {Monotonic Stack per Row}
15. [Basic Calculator](https://leetcode.com/problems/basic-calculator/) {Stack-Based Expression Parser}

### Heaps and Streaming

1. [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) {Fixed-Size Heap}
2. [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) {Heap with Custom Comparator}
3. [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) {Two-Heap Median}
4. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) {K-Way Merge Heap}
5. [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) {K-Way Merge Heap}
6. [Task Scheduler](https://leetcode.com/problems/task-scheduler/) {Greedy + Max Heap}
7. [Reorganize String](https://leetcode.com/problems/reorganize-string/) {Greedy + Max Heap}
8. [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/) {Heap by Availability}
9. [IPO](https://leetcode.com/problems/ipo/) {Two Heaps (Greedy Unlock)}
10. [Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/) {Ratio Sort + Heap}
11. [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/) {Greedy + Max Heap}
12. [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) {K-Way Merge Heap (Range)}

### Linked Lists and DSA Design

1. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) {Pointer Reversal}
2. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) {Merge by Pointer}
3. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) {Fast/Slow Pointers}
4. [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) {Fast/Slow + Cycle Start}
5. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) {Two-Pointer Gap}
6. [Reorder List](https://leetcode.com/problems/reorder-list/) {Split + Reverse + Splice}
7. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) {Digit-by-Digit Carry}
8. [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) {Interleaved Clone}
9. [LRU Cache](https://leetcode.com/problems/lru-cache/) {Hash Map + Doubly Linked List}
10. [LFU Cache](https://leetcode.com/problems/lfu-cache/) {Hash Map + Frequency Buckets}
11. [All O(1) Data Structure](https://leetcode.com/problems/all-oone-data-structure/) {Hash Map + Bucket Linked List}
12. [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) {Hash Map + Swap-Pop Array}
13. [Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/) {Hash Map of Sets + Swap-Pop}
14. [Snapshot Array](https://leetcode.com/problems/snapshot-array/) {Versioned Binary Search}
15. [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) {Hash Map + Binary Search on Timestamp}
16. [Design Twitter](https://leetcode.com/problems/design-twitter/) {Heap + Hash Map Design}

17. [Design Snake Game](https://www.geeksforgeeks.org/advance-java/design-snake-game/) {Design: Simulation/Deque}
18. [Design Tic-Tac-Toe](https://www.geeksforgeeks.org/system-design/low-level-design-of-tic-tac-toe-system-design/) {Design: O(1) Row/Col/Diagonal Counters}
19. [Design Hit Counter](https://www.geeksforgeeks.org/system-design/design-a-hit-counter/) {Design: Rolling Buffer}
20. [Moving Average from Data Stream](https://www.geeksforgeeks.org/dsa/program-find-simple-moving-average/) {Design: Rolling Buffer}
21. [Shortest Word Distance II](https://www.geeksforgeeks.org/dsa/find-shortest-word-distance-ii/) {Design: Precomputed Index Map}
22. [Two Sum III - Data structure design](https://www.geeksforgeeks.org/dsa/data-structure-design-for-two-sum-iii/) {Design: HashMap Complement Lookup}
23. [Zigzag Iterator](https://www.tutorialspoint.com/practice/zigzag-iterator.htm) {Design: Round-Robin Queue Iterator}
### Trees, BST, LCA, Serialization

1. [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) {Recursive Swap}
2. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) {Height Recursion (Global Max)}
3. [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) {Height Recursion (Early Exit)}
4. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) {BFS by Level}
5. [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) {BFS Last-Per-Level}
6. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) {Range-Bound Recursion}
7. [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) {Inorder Traversal}
8. [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) {LCA (General Tree)}
9. [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) {LCA (BST Property)}
10. [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) {Tree Reconstruction}
11. [Path Sum III](https://leetcode.com/problems/path-sum-iii/) {Prefix Sum on Tree}
12. [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) {In-Place Preorder Flatten}
13. [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/) {Inorder Swap Detection}
14. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) {Tree DP (Through-Node)}
15. [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) {Preorder Serialization}
16. [Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) {BFS/DFS + Coordinate Sort}
17. [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/) {Tree DP (Greedy States)}
18. [Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/) {Tree to Graph BFS}
19. [Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/) {LCA + Path Reconstruction}
20. [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/) {Tree DP (Subtree Validity)}

21. [Nested List Weight Sum II](https://www.geeksforgeeks.org/dsa/find-nested-list-weight-sum-ii/) {Nested Structure DFS - Inverse-Depth Weighting}
### Tries and String Search

1. [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/) {Trie Basics}
2. [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) {Trie + Wildcard DFS}
3. [Word Search](https://leetcode.com/problems/word-search/) {Grid Backtracking}
4. [Word Search II](https://leetcode.com/problems/word-search-ii/) {Trie + Grid Backtracking}
5. [Replace Words](https://leetcode.com/problems/replace-words/) {Trie Prefix Lookup}
6. [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) {Trie + Sorted Prefix}
7. [Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/) {Trie with Prefix Sum}
8. [Stream of Characters](https://leetcode.com/problems/stream-of-characters/) {Reverse Trie}
9. [Concatenated Words](https://leetcode.com/problems/concatenated-words/) {Trie/DP Word Segmentation}
10. [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/) {Trie + Palindrome Check}
11. [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) {Bit Trie}
12. [Maximum XOR With an Element From Array](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/) {Bit Trie + Offline Queries}
13. [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) {String Matching (KMP-Class)}
14. [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/) {KMP Failure Function}
15. [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/) {Binary Search + Rolling Hash}

16. [Encode and Decode Strings](https://www.geeksforgeeks.org/problems/encode-and-decode-strings/1) {Design: Length-Prefixed Serialization}
17. [One Edit Distance](https://www.geeksforgeeks.org/dsa/check-if-two-given-strings-are-at-edit-distance-one/) {Edit Distance - O(1) Space Check}
### Graphs: BFS, DFS, Topological Sort

1. [Number of Islands](https://leetcode.com/problems/number-of-islands/) {Grid Flood Fill}
2. [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) {Grid Flood Fill (Size)}
3. [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) {Multi-Source BFS}
4. [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) {Boundary-Anchored DFS}
5. [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) {Multi-Source Reverse BFS}
6. [Clone Graph](https://leetcode.com/problems/clone-graph/) {Graph Clone (Visited Map)}
7. [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) {Two-Coloring BFS/DFS}
8. [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/) {Two-Coloring (Constraint Graph)}
9. [Course Schedule](https://leetcode.com/problems/course-schedule/) {Cycle Detection (Directed)}
10. [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) {Topological Sort}
11. [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) {Reverse Topological Sort}
12. [Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/) {Topological Sort + DAG DP}
13. [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/) {Topological Sort + DP}
14. [Open the Lock](https://leetcode.com/problems/open-the-lock/) {Implicit Graph BFS}
15. [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/) {Implicit Graph BFS}
16. [Bus Routes](https://leetcode.com/problems/bus-routes/) {Implicit Graph BFS (Meta-Nodes)}
17. [Word Ladder](https://leetcode.com/problems/word-ladder/) {Implicit Graph BFS (Word Graph)}
18. [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/) {BFS + Path Reconstruction}
19. [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) {Eulerian Path}
20. [Evaluate Division](https://leetcode.com/problems/evaluate-division/) {Weighted Graph BFS/DFS}

### Graphs: DSU, MST, Shortest Paths, Bridges

1. [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) {DSU (Connected Components)}
2. [Redundant Connection](https://leetcode.com/problems/redundant-connection/) {DSU (Cycle Edge)}
3. [Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/) {DSU (Directed Variant)}
4. [Accounts Merge](https://leetcode.com/problems/accounts-merge/) {DSU (Grouping)}
5. [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/) {DSU (Constraint Grouping)}
6. [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) {DSU (Row/Column Union)}
7. [Similar String Groups](https://leetcode.com/problems/similar-string-groups/) {DSU (Pairwise Similarity)}
8. [Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/) {DSU (Grid Subdivision)}
9. [Making A Large Island](https://leetcode.com/problems/making-a-large-island/) {DSU / Flood Fill Hybrid}
10. [Bricks Falling When Hit](https://leetcode.com/problems/bricks-falling-when-hit/) {Reverse DSU (Offline)}
11. [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) {MST (Prim/Kruskal)}
12. [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/) {MST Edge Sensitivity}
13. [Network Delay Time](https://leetcode.com/problems/network-delay-time/) {Dijkstra}
14. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) {Bellman-Ford (Bounded Hops)}
15. [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) {Dijkstra (Minimax Weight)}
16. [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) {Dijkstra / Binary Search + Union}
17. [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) {0-1 BFS (Grid)}
18. [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) {Bitmask BFS}
19. [Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/) {0-1 BFS}
20. [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) {0-1 BFS (Direction Cost)}
21. [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) {Dijkstra + Counting}
22. [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/) {Bridges (Tarjan)}

23. [Number of Connected Components in an Undirected Graph](https://www.geeksforgeeks.org/problems/connected-components-in-an-undirected-graph/1) {Union-Find - Count Components}
### Greedy and Exchange Arguments

1. [Jump Game](https://leetcode.com/problems/jump-game/) {Greedy Reachability}
2. [Jump Game II](https://leetcode.com/problems/jump-game-ii/) {Greedy BFS-Layer Jump}
3. [Gas Station](https://leetcode.com/problems/gas-station/) {Greedy (Prefix Deficit)}
4. [Candy](https://leetcode.com/problems/candy/) {Greedy Two-Pass}
5. [Partition Labels](https://leetcode.com/problems/partition-labels/) {Greedy Interval Merge}
6. [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) {Greedy + Multiset}
7. [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) {Greedy Range Tracking}
8. [Merge Triplets to Form Target Triplet](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/) {Greedy Componentwise Max}
9. [Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/) {Interval Greedy (End Sort)}
10. [Course Schedule III](https://leetcode.com/problems/course-schedule-iii/) {Greedy + Max Heap}
11. [Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/) {Greedy Jump Game Variant}
12. [Set Intersection Size At Least Two](https://leetcode.com/problems/set-intersection-size-at-least-two/) {Greedy Interval (End Sort)}
13. [Patching Array](https://leetcode.com/problems/patching-array/) {Greedy Reach Extension}
14. [Create Maximum Number](https://leetcode.com/problems/create-maximum-number/) {Greedy Monotonic Stack + Merge}

15. [Find Permutation](https://www.interviewbit.com/problems/find-permutation/) {Greedy - D/I Sequence Reconstruction}
### Backtracking and Search

1. [Permutations](https://leetcode.com/problems/permutations/) {Backtracking (Swap/Visited)}
2. [Permutations II](https://leetcode.com/problems/permutations-ii/) {Backtracking + Duplicate Skip}
3. [Subsets](https://leetcode.com/problems/subsets/) {Backtracking (Include/Exclude)}
4. [Subsets II](https://leetcode.com/problems/subsets-ii/) {Backtracking + Duplicate Skip}
5. [Combination Sum](https://leetcode.com/problems/combination-sum/) {Backtracking (Reuse Allowed)}
6. [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) {Backtracking + Duplicate Skip}
7. [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) {Backtracking (Cartesian Product)}
8. [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) {Backtracking + Palindrome Check}
9. [N-Queens](https://leetcode.com/problems/n-queens/) {Backtracking (Constraint Board)}
10. [N-Queens II](https://leetcode.com/problems/n-queens-ii/) {Backtracking (Count Only)}
11. [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) {Backtracking (Constraint Grid)}
12. [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/) {Backtracking + Overflow Care}
13. [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) {Backtracking (Segment Slicing)}
14. [Split Array into Fibonacci Sequence](https://leetcode.com/problems/split-array-into-fibonacci-sequence/) {Backtracking + Overflow Care}
15. [Verbal Arithmetic Puzzle](https://leetcode.com/problems/verbal-arithmetic-puzzle/) {Backtracking (Digit Assignment)}

16. [Palindrome Permutation II](https://www.geeksforgeeks.org/dsa/print-all-palindrome-permutations-of-a-string/) {Backtracking - Half-String Permutation}
### Dynamic Programming: Foundations

1. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) {DP 1D (Fibonacci-Style)}
2. [House Robber](https://leetcode.com/problems/house-robber/) {DP 1D (Skip/Take)}
3. [House Robber II](https://leetcode.com/problems/house-robber-ii/) {DP 1D (Circular)}
4. [House Robber III](https://leetcode.com/problems/house-robber-iii/) {Tree DP (Skip/Take)}
5. [Delete and Earn](https://leetcode.com/problems/delete-and-earn/) {DP 1D (Bucket Transform)}
6. [Coin Change](https://leetcode.com/problems/coin-change/) {Unbounded Knapsack (Min Count)}
7. [Coin Change II](https://leetcode.com/problems/coin-change-ii/) {Unbounded Knapsack (Count Ways)}
8. [Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) {DP (Ordered Count)}
9. [Perfect Squares](https://leetcode.com/problems/perfect-squares/) {Unbounded Knapsack}
10. [Decode Ways](https://leetcode.com/problems/decode-ways/) {DP 1D (String Segmentation)}
11. [Decode Ways II](https://leetcode.com/problems/decode-ways-ii/) {DP 1D (Wildcard Segmentation)}
12. [Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/) {DP 1D (Choice Window)}

13. [Paint House](https://www.geeksforgeeks.org/dsa/minimize-cost-of-painting-n-houses-such-that-adjacent-houses-have-different-colors/) {DP - State Machine Coloring}
14. [Paint Fence](https://www.geeksforgeeks.org/dsa/painting-fence-algorithm/) {DP - Combinatorics Recurrence}
### Dynamic Programming: Knapsack, LIS, Stocks

1. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) {0/1 Knapsack (Feasibility)}
2. [Target Sum](https://leetcode.com/problems/target-sum/) {0/1 Knapsack (Sign Assignment)}
3. [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) {0/1 Knapsack (Difference Minimization)}
4. [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) {0/1 Knapsack (2D Capacity)}
5. [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/) {0/1 Knapsack (2D Capacity + Count)}
6. [Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/) {Bounded Knapsack (Count)}
7. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) {LIS (Patience/Binary Search)}
8. [Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) {LIS + Count Tracking}
9. [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/) {LIS (2D Sort + Reduce)}
10. [Longest Arithmetic Subsequence](https://leetcode.com/problems/longest-arithmetic-subsequence/) {DP (Difference Keyed)}
11. [Longest String Chain](https://leetcode.com/problems/longest-string-chain/) {DP (Sorted by Length)}
12. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) {Stock DP (Single Transaction)}
13. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) {Stock DP (Unlimited Transactions)}
14. [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) {Stock DP (Two Transactions)}
15. [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) {Stock DP (K Transactions)}
16. [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) {Stock DP (State Machine)}
17. [Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) {Stock DP (Fee State Machine)}

### Dynamic Programming: Strings, Grids, Intervals

1. [Word Break](https://leetcode.com/problems/word-break/) {String DP (Segmentation)}
2. [Word Break II](https://leetcode.com/problems/word-break-ii/) {String DP + Backtracking}
3. [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) {String DP (LCS)}
4. [Uncrossed Lines](https://leetcode.com/problems/uncrossed-lines/) {String DP (LCS Framing)}
5. [Edit Distance](https://leetcode.com/problems/edit-distance/) {String DP (Edit Operations)}
6. [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) {String DP (Subsequence Count)}
7. [Interleaving String](https://leetcode.com/problems/interleaving-string/) {String DP (Two-Pointer State)}
8. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) {String DP (Pattern Matching)}
9. [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) {String DP (Pattern Matching)}
10. [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) {String DP (Expand/Interval)}
11. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) {Interval DP (Palindrome)}
12. [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) {Interval DP (Palindrome)}
13. [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/) {DP + Palindrome Precompute}
14. [Strange Printer](https://leetcode.com/problems/strange-printer/) {Interval DP (Merge Cost)}
15. [Unique Paths](https://leetcode.com/problems/unique-paths/) {Grid DP (Path Count)}
16. [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) {Grid DP (Path Cost)}
17. [Triangle](https://leetcode.com/problems/triangle/) {Grid DP (Bottom-Up)}
18. [Dungeon Game](https://leetcode.com/problems/dungeon-game/) {Grid DP (Reverse Direction)}
19. [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/) {Grid DP (Dual Path)}
20. [Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/) {Grid DP (Dual Path, Two Robots)}
21. [Maximal Square](https://leetcode.com/problems/maximal-square/) {Grid DP (Square Expansion)}
22. [Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/) {Grid DP (Square Count)}
23. [Burst Balloons](https://leetcode.com/problems/burst-balloons/) {Interval DP (Last Action)}
24. [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) {Interval DP (Cut Order)}
25. [Stone Game II](https://leetcode.com/problems/stone-game-ii/) {Interval/Minimax DP}
26. [Stone Game III](https://leetcode.com/problems/stone-game-iii/) {Minimax DP}
27. [Scramble String](https://leetcode.com/problems/scramble-string/) {Interval DP (Tree Partition)}
28. [Super Egg Drop](https://leetcode.com/problems/super-egg-drop/) {DP + Binary Search Optimization}
29. [Frog Jump](https://leetcode.com/problems/frog-jump/) {DP (State = Position + Step)}
30. [Remove Boxes](https://leetcode.com/problems/remove-boxes/) {Interval DP (Extra State)}

### Dynamic Programming: Bitmask, Digit, State Compression

1. [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) {Bitmask DP (Subset Assignment)}
2. [Can I Win](https://leetcode.com/problems/can-i-win/) {Bitmask DP (Game State)}
3. [Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word/) {Bitmask DP (Coverage)}
4. [Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/) {Bitmask DP (Set Cover)}
5. [Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/) {Bitmask DP (TSP-Style)}
6. [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/) {Bitmask DP (Row Compatibility)}
7. [Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/) {Bitmask DP (Assignment)}
8. [Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/) {Bitmask DP (Bipartite Cover)}
9. [Minimum Incompatibility](https://leetcode.com/problems/minimum-incompatibility/) {Bitmask DP (Subset Partition)}
10. [Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/) {Bitmask DP (Load Balancing)}
11. [Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/) {Digit DP (Counting)}
12. [Number of Digit One](https://leetcode.com/problems/number-of-digit-one/) {Digit DP (Digit Counting)}

### Range Queries, Fenwick, Segment Tree, Ordered Structures

1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/) {Fenwick Tree (Point Update)}
2. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) {Fenwick Tree (Inversion Count)}
3. [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/) {Merge Sort / BIT (Inversion Variant)}
4. [Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/) {Fenwick Tree (Rank Query)}
5. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/) {Prefix Sum + Merge/BIT}
6. [Range Module](https://leetcode.com/problems/range-module/) {Segment Tree (Interval Set)}
7. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/) {Sweep Line (Max Overlap)}
8. [Falling Squares](https://leetcode.com/problems/falling-squares/) {Coordinate Compression + Sweep}
9. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/) {Sweep Line + Heap}
10. [Handling Sum Queries After Update](https://leetcode.com/problems/handling-sum-queries-after-update/) {Segment Tree (Lazy Flip)}
11. [Longest Increasing Subsequence II](https://leetcode.com/problems/longest-increasing-subsequence-ii/) {Segment Tree (Range Max)}
12. [Maximum Sum Queries](https://leetcode.com/problems/maximum-sum-queries/) {Segment Tree + Offline Sort}
13. [Plates Between Candles](https://leetcode.com/problems/plates-between-candles/) {Prefix Count + Binary Search}
14. [Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/) {Ordered Set (Interval Merge)}

### Math, Bit Manipulation, Randomization, Geometry

1. [Single Number](https://leetcode.com/problems/single-number/) {XOR Cancellation}
2. [Single Number II](https://leetcode.com/problems/single-number-ii/) {Bit Counting mod 3}
3. [Single Number III](https://leetcode.com/problems/single-number-iii/) {XOR Partition}
4. [Counting Bits](https://leetcode.com/problems/counting-bits/) {DP + Bit Trick}
5. [Reverse Bits](https://leetcode.com/problems/reverse-bits/) {Bit Reversal}
6. [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/) {Common Prefix Shift}
7. [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) {Bitwise Add (No + Operator)}
8. [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) {Bit-Shift Division}
9. [Pow(x, n)](https://leetcode.com/problems/powx-n/) {Fast Exponentiation}
10. [Sqrt(x)](https://leetcode.com/problems/sqrtx/) {Binary Search / Newton's Method}
11. [Happy Number](https://leetcode.com/problems/happy-number/) {Cycle Detection (Number Sequence)}
12. [Fraction to Recurring Decimal](https://leetcode.com/problems/fraction-to-recurring-decimal/) {Long Division + Cycle Detection}
13. [Integer to English Words](https://leetcode.com/problems/integer-to-english-words/) {Recursive Number Formatting}
14. [Valid Number](https://leetcode.com/problems/valid-number/) {String State Machine}
15. [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) {Prefix Sum + Binary Search}
16. [Random Pick with Blacklist](https://leetcode.com/problems/random-pick-with-blacklist/) {Randomization + Remapping}
17. [Implement Rand10() Using Rand7()](https://leetcode.com/problems/implement-rand10-using-rand7/) {Rejection Sampling}
18. [Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/) {Slope Hash Counting}
19. [Rectangle Area](https://leetcode.com/problems/rectangle-area/) {Geometry (Overlap Area)}
20. [Erect the Fence](https://leetcode.com/problems/erect-the-fence/) {Convex Hull}

21. [Best Meeting Point](https://www.geeksforgeeks.org/dsa/best-meeting-point-2d-binary-array/) {Median Minimizes Manhattan Distance}
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
