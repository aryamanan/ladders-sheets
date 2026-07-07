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

## Tier A: Trap Taxonomy -- Where Candidates Actually Break

These are not organized by data structure. They are organized by the specific, well-known way a competent candidate gets each one wrong -- the same axis gauntlet.md and extreme_mastery_map.md deliberately don't use. Each sub-pattern names its trap as one sentence you should be able to recite before you start coding, then gives a Foundation -> Reinforcement -> Boss run of problems that all share it.

### Numeric And Search Traps

#### Integer Overflow / Numeric Edge Traps

- Invariant: the trap is that an operation like multiply, add, or repeated doubling can silently overflow a fixed-width integer (or flip sign under negative operands / negative-mod semantics) while the algorithm's logic stays correct; survive it by reasoning in a wider type or an early-exit bound before the overflow point, and treating the sign/edge case (MIN_INT negation, negative operands) as a first-class branch, not an afterthought.

Foundation:

1. [Reverse Integer](https://leetcode.com/problems/reverse-integer/)
2. [String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/)
3. [Palindrome Number](https://leetcode.com/problems/palindrome-number/)

Reinforcement:

1. [Pow(x, n)](https://leetcode.com/problems/powx-n/)
2. [Sqrt(x)](https://leetcode.com/problems/sqrtx/)

Boss:

1. [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) (the INT_MIN / -1 overflow edge case is the canonical version of this trap)


#### Off-By-One / Boundary Traps In Binary Search

- Invariant: the trap is that a binary search invariant proven correct for strictly-distinct, non-rotated data quietly breaks when duplicates or a rotation point are introduced, because `arr[mid] == arr[lo]` or `arr[mid] == arr[hi]` stops being decisive; survive it by naming, before you code, exactly which half the invariant still guarantees is sorted when a tie occurs, and shrinking the search space by one instead of guessing.

Foundation:

1. [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
2. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
3. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

Reinforcement:

1. [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) (duplicates break the "one half is always sorted" invariant)

Boss:

1. [Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) (the boundary condition is an index-parity invariant, not a value comparison)


### Greedy And Recursion Traps

#### Greedy That Looks Provably Right But Isn't

- Invariant: the trap is trusting an intuitive greedy rule (always take the biggest/closest/cheapest option) without an exchange-argument proof, so it passes the examples you thought of and fails on a case where the "obviously correct" local choice forecloses a better global one; survive it by stating out loud why swapping any two adjacent choices can't improve the answer before you trust the greedy.

Foundation:

1. [Jump Game](https://leetcode.com/problems/jump-game/)
2. [Gas Station](https://leetcode.com/problems/gas-station/)

Reinforcement:

1. [Jump Game II](https://leetcode.com/problems/jump-game-ii/)
2. [Task Scheduler](https://leetcode.com/problems/task-scheduler/)

Boss:

1. [Candy](https://leetcode.com/problems/candy/) (the two-pass greedy needs an exchange-argument proof most candidates never actually construct)


#### Missing Memoization -> Silent TLE

- Invariant: the trap is recursion that looks like simple branching but actually revisits the same sub-state exponentially many times, so it "works" on the sample input and times out only once the input is large enough to expose the blow-up; survive it by identifying the full state that repeats (not just one parameter of it) and caching on that exact state before the first optimization pass, not after a TLE forces it.

Foundation:

1. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
2. [Word Break](https://leetcode.com/problems/word-break/)

Reinforcement:

1. [Decode Ways](https://leetcode.com/problems/decode-ways/)
2. [Friends Pairing Problem (GeeksforGeeks -- naive recursion re-explores the same sub-count from two different branches; genuinely distinct from any LC problem already used elsewhere)](https://www.geeksforgeeks.org/problems/friends-pairing-problem5425/1)

Boss:

1. [Word Break II](https://leetcode.com/problems/word-break-ii/) (memoizing the boolean sub-question is not enough once you must also collect and return every valid sentence)


#### DP Iteration-Direction / State-Reuse Traps

- Invariant: the trap is that the loop order over items vs. capacity silently decides whether an item can be reused (unbounded knapsack) or used once (0/1 knapsack), and a 1-D in-place array can silently read a value this same iteration already overwrote; survive it by iterating the capacity dimension in decreasing order when items must not repeat and in increasing order when they may, and by naming, for every cell, whether you intend to read "last row's" or "this row's" value.

Foundation:

1. [0/1 Knapsack (Naukri Code360 -- the base template isn't its own standalone LeetCode problem)](https://www.naukri.com/code360/problems/code-0-1-knapsack_8717)
2. [Unbounded Knapsack (Naukri Code360 -- same, no standalone LeetCode equivalent)](https://www.naukri.com/code360/problems/unbounded-knapsack_1215029)
3. [Coin Change](https://leetcode.com/problems/coin-change/)

Reinforcement:

1. [Coin Change II](https://leetcode.com/problems/coin-change-ii/) (combinations vs. permutations loop-order trap)
2. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
3. [House Robber](https://leetcode.com/problems/house-robber/)
4. [House Robber II](https://leetcode.com/problems/house-robber-ii/) (circular disguise of the same adjacency constraint)

Boss:

1. [Target Sum](https://leetcode.com/problems/target-sum/) (assign +/- signs, disguised subset-sum reduction)
2. [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)
3. [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)


### Structural And Duplicate Traps

#### Duplicate-Handling Traps

- Invariant: the trap is that an algorithm designed for distinct elements silently produces repeated or missing results once duplicate values enter the input; survive it by sorting first and explicitly skipping over an equal value at the *same recursion level / same binary-search half*, not banning the value everywhere.

Foundation:

1. [3Sum](https://leetcode.com/problems/3sum/)
2. [Subsets II](https://leetcode.com/problems/subsets-ii/)
3. [Permutations II](https://leetcode.com/problems/permutations-ii/)

Reinforcement:

1. [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
2. [4Sum](https://leetcode.com/problems/4sum/)

Boss:

1. [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) (duplicates break the "one half is always sorted" invariant that made the distinct-element version easy)


#### Backtracking State-Restoration Traps

- Invariant: the trap is mutating shared state (a path list, a visited grid, a used-digits set) on the way down and forgetting to undo that exact mutation on the way back up -- survive it by pairing every mutate-before-recursion with an identical undo-after-recursion in the same stack frame, so the container returns to the caller in the state it was handed.

Foundation:

1. [Permutations](https://leetcode.com/problems/permutations/)
2. [Combination Sum](https://leetcode.com/problems/combination-sum/)
3. [Subsets](https://leetcode.com/problems/subsets/)

Reinforcement:

1. [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
2. [N-Queens](https://leetcode.com/problems/n-queens/)
3. [Word Search](https://leetcode.com/problems/word-search/)
4. [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)

Boss:

1. [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) (restoring both a cell value and per-row/col/box constraint state)


#### Mutable/Aliasing Reference Traps

- Invariant: the trap is sharing one mutable object (a node, a list, a reference) across recursive branches or forgetting to break aliasing when "copying," so the clone silently points back into the original structure and corrupts it on the next mutation; survive it by explicitly tracking a visited/cloned map from old node to new node before you follow a single additional pointer.

Foundation:

1. [Clone Graph](https://leetcode.com/problems/clone-graph/) (recursing without a visited map infinite-loops on any cycle)
2. [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)

Reinforcement:

1. [Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator/)

Boss:

1. [Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) (O(1)-space variant: the next-pointers you rely on to traverse the next level are exactly the ones you're still constructing on this level)


### Graph And Cycle Traps

#### Cycle-Detection Math/Logic Traps

- Invariant: the trap is treating "a cycle exists" and "this is the correct notion of cycle for this structure" as interchangeable facts; survive it by matching the detection rule to the actual semantics -- directed graphs need a recursion-stack/color check (not just a visited set), undirected graphs must ignore the immediate parent edge, and Floyd's meeting point is not the cycle's start until you reset one pointer to the head and walk both one step at a time.

Foundation:

1. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
2. [Course Schedule](https://leetcode.com/problems/course-schedule/)
3. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)

Reinforcement:

1. [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) (meeting point is not the cycle start)
2. [Graph Valid Tree (GeeksforGeeks/Naukri clone -- LC 261 is a real problem but premium-locked on leetcode.com)](https://www.naukri.com/code360/problems/graph-valid-tree_1376618)
3. [Redundant Connection](https://leetcode.com/problems/redundant-connection/)

Boss:

1. [Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/) (directed rooted tree: cycle detection entangled with a two-parent conflict)


#### Multi-Source vs Single-Source BFS Confusion

- Invariant: the trap is seeding the BFS queue with only one start node (or only "the" obvious source) when the grid actually has many simultaneous sources whose frontiers must expand together -- survive it by pushing every source cell into the queue at distance 0 *before* the first BFS step, so each queue "pop layer" represents one true global time-tick, not one node's personal distance.

Foundation:

1. [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
2. [01 Matrix](https://leetcode.com/problems/01-matrix/)
3. [Walls and Gates (Naukri Code360 -- LC 286 is a real problem but premium-locked on leetcode.com)](https://www.naukri.com/code360/problems/walls-and-gates_1092887)

Reinforcement:

1. [As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/)
2. [Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/) (single-source BFS where "layer = dice throw" is the trap)
3. [Find Shortest Safe Route in a Matrix (GeeksforGeeks -- landmine danger-zone BFS, no direct LeetCode equivalent)](https://www.geeksforgeeks.org/problems/find-shortest-safe-route-in-a-matrix/1)

Boss:

1. [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/) (DFS to find island one, then multi-source BFS from every cell of it)
2. [Minimum Knight Moves (GeeksforGeeks "Steps by Knight" -- LC 1197 is premium-locked on leetcode.com)](https://www.geeksforgeeks.org/problems/steps-by-knight5927/1)


#### Union-Find Without Path Compression/Union-By-Rank -> Silent TLE

- Invariant: the trap is a naive DSU (no path compression, no union by rank) that returns correct answers on small inputs and only reveals its near-linear-chain worst case once the graph is large enough to make every `find` walk a long parent chain; survive it by building path compression and union-by-rank into the very first version you write, not as a later optimization pass.

Foundation:

1. [Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
2. [Accounts Merge](https://leetcode.com/problems/accounts-merge/)
3. [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)

Reinforcement:

1. [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) (union happens on a shared row/column, not a direct edge -- easy to union the wrong pair of indices)

Boss:

1. [Bricks Falling When Hit](https://leetcode.com/problems/bricks-falling-when-hit/) (reverse-DSU: the naive forward simulation is the trap; the fix requires processing hits backward)


#### Directed vs Undirected Graph Confusion

- Invariant: the trap is applying an undirected-graph algorithm (plain two-coloring, plain Union-Find cycle check) to a directed graph, where a "back edge" to an already-visited node isn't automatically a cycle unless that node is still on the current recursion stack; survive it by tracking three node states (unvisited / in-progress / done) for directed graphs instead of the two states (visited / unvisited) that suffice for undirected ones.

Foundation:

1. [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
2. [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)

Boss:

1. [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) (a node is only "unsafe" if it can reach a cycle -- which requires the three-state directed-graph coloring, not a plain visited set)


### Data Structure Usage Traps

#### Heap/Comparator Tie-Breaking Traps

- Invariant: the trap is a comparator that is correct on the primary key but produces a valid-looking, wrong answer once two elements tie, because the problem's real constraint (adjacency, distance, recency) only bites on the tie-break; survive it by writing the tie-break rule as an explicit second comparator key before you trust the heap's output.

Foundation:

1. [Reorganize String](https://leetcode.com/problems/reorganize-string/) (tie-breaking on frequency alone isn't enough to guarantee no two adjacent characters match)
2. [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) (frequency ties must break lexicographically, not arbitrarily)

Boss:

1. [Super Ugly Number](https://leetcode.com/problems/super-ugly-number/) (a heap without duplicate-suppression re-inserts the same value from multiple prime multipliers)


#### Interval Boundary Traps

- Invariant: the trap is silently treating "end of A equals start of B" as either always-merge or always-separate without checking which the problem actually wants -- survive it by writing the merge/overlap test as an explicit inequality (`<=` for touching-counts-as-overlap, `<` for touching-is-fine) and unit-testing the exact boundary case before trusting the sort-and-sweep.

Foundation:

1. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
2. [Insert Interval](https://leetcode.com/problems/insert-interval/)
3. [Teemo Attacking](https://leetcode.com/problems/teemo-attacking/) (poison-duration overlap/reset boundary)

Reinforcement:

1. [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
2. [Meeting Rooms II (Naukri Code360 "Minimum Number of Platforms" -- LC is premium-locked on leetcode.com)](https://www.naukri.com/code360/problems/minimum-number-of-platforms_799400)

Boss:

1. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/) (k-overlap sweep, boundary error compounds across many events)


#### Sliding Window Invariant Traps

- Invariant: the trap is picking a shrink condition that is correct for "at most K" but then trying to reuse that same window logic directly for "exactly K" -- survive it by remembering exactly(K) = atMost(K) - atMost(K-1), and by re-deriving the shrink-while condition from scratch for every new constraint instead of copy-pasting the last problem's window.

Foundation:

1. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
2. [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)
3. [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)

Reinforcement:

1. [Longest Substring with At Most K Distinct Characters (Naukri Code360 -- LC 340 is premium-locked on leetcode.com)](https://www.naukri.com/code360/problems/longest-sub-string-with-at-most-k-distinct-characters_699944)
2. [Longest K Unique Characters Substring (GeeksforGeeks -- "exactly K", not "at most K"; must return -1 if impossible, no direct LeetCode equivalent)](https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1)

Boss:

1. [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) (the canonical atMost(K)-atMost(K-1) boss problem)


### Tree And Parsing Traps

#### Tree Recursion Return-Value Conflation

- Invariant: the trap is conflating "the best value achievable through this node as a bridge between two of its branches" with "the single best value this node is allowed to hand up to its parent"; survive it by having the recursive call return only the one-sided, parent-usable value while a separate outer/global variable is updated with the two-sided (through-node) combination at every node.

Foundation:

1. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
2. [House Robber III](https://leetcode.com/problems/house-robber-iii/)
3. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

Reinforcement:

1. [Longest Univalue Path](https://leetcode.com/problems/longest-univalue-path/)
2. [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)
3. [Diameter of N-Ary Tree](https://leetcode.com/problems/diameter-of-n-ary-tree/)

Boss:

1. [Longest Path With Different Adjacent Characters](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/)


#### Expression-Parsing Operator-Precedence Traps

- Invariant: the trap is evaluating strictly left-to-right and only discovering precedence rules exist once `*`/`/` binds tighter than `+`/`-`, or once nested parentheses require a stack frame per depth level rather than one global state; survive it by deciding up front whether you need a two-stack (operator/operand) parser or a recursive-descent parser, and never trying to patch precedence into a single flat left-to-right scan.

Foundation:

1. [Basic Calculator](https://leetcode.com/problems/basic-calculator/)
2. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

Reinforcement:

1. [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/) (no parentheses, but now precedence between `*`/`/` and `+`/`-` is the entire problem)

Boss:

1. [Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/) (every possible precedence grouping simultaneously, via divide-and-conquer)


### Low-Level Correctness Traps

#### Wrong-Complexity Brute Force That Passes Small Tests But Fails At Scale

- Invariant: the trap is an O(n^2) approach that looks correct and passes every example you hand-check, so the failure only shows up against the judge's large hidden tests; survive it by stating the target complexity from the problem's constraints *before* writing code, not after a TLE.

Foundation:

1. [Two Sum](https://leetcode.com/problems/two-sum/) (nested-loop brute force vs. one-pass hash map)
2. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) (checking every pair vs. the two-pointer argument for why the shorter side can always be discarded)

Reinforcement:

1. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) (per-index brute force recomputes both directions' max on every step)

Boss:

1. [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) (sort-and-scan looks like the "obvious" O(n log n) fix, but the real target is O(n) via a hash set and only expanding from sequence starts)


#### Modulo Arithmetic Sign/Negative Traps

- Invariant: the trap is that a prefix sum, running total, or intermediate result can go negative, and languages differ on what `%` returns for negative operands, so a remainder-equality check silently misses valid answers; survive it by normalizing every modulo result into `[0, k)` with `((x % k) + k) % k` before comparing or using it as a hash-map key.

Foundation:

1. [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) (negative prefix sums must still map to the same remainder bucket as their positive counterparts)
2. [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)

Boss:

1. [K-Concatenation Maximum Sum](https://leetcode.com/problems/k-concatenation-maximum-sum/) (combines Kadane's with a mod-10^9+7 output on a value that can be enormous before the mod is applied)


#### Bit Manipulation Sign-Extension / Shift Traps

- Invariant: the trap is that right-shifting a negative number, or treating a language's fixed-width integer as if it had infinite bits, silently changes which bit ends up where; survive it by masking to the exact bit width the problem specifies (`& 0xFFFFFFFF`) before any shift, and reasoning about the sign bit as data, not noise.

Foundation:

1. [Reverse Bits](https://leetcode.com/problems/reverse-bits/)
2. [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) (bitwise add without `+`; carry propagation on negative operands is the whole difficulty)

Boss:

1. [Single Number II](https://leetcode.com/problems/single-number-ii/) (bit-counting mod 3 across 32 bit positions; sign bit must be handled the same as any other bit)


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
