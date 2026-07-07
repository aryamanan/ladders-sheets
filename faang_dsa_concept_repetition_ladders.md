# Concept Repetition Ladders

This document is not another "big list." It is a repetition system. The goal is to make every important concept survive small tweaks, different constraints, and unfamiliar wording.

Use this together with:

- [FAANG DSA Researched Interview Failure Map](faang_dsa_researched_interview_failure_map.md)
- [FAANG DSA Extreme Mastery Map](faang_dsa_extreme_mastery_map.md)

## How To Use This

For each concept:

1. Solve the foundation problems until the invariant is automatic.
2. Solve the reinforcement problems to see the same idea in disguise.
3. Solve the boss problems under time.
4. Do the tweak drills without looking at editorials.
5. Write one sentence: "The invariant is..."

If you cannot write the invariant, you do not own the pattern yet.

## Spaced Repetition Rule

For every failed problem:

1. Redo it after 24 hours.
2. Redo it after 3 days.
3. Redo it after 10 days.
4. Redo a sibling problem from the same concept.
5. Redo it with a small tweak.

## Concept 1: Hash Lookup And Complement

Invariant: store exactly the past information needed to answer the current item.

Foundation:

1. [Two Sum](https://leetcode.com/problems/two-sum/)
2. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
3. [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
4. [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)

Reinforcement:

1. [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
2. [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
3. [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
4. [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

Boss:

1. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
2. [4Sum II](https://leetcode.com/problems/4sum-ii/)

Tweak drills:

1. Return all pairs, not one pair.
2. Return count instead of values.
3. Allow duplicates and require unique output.
4. Make the input streaming.
5. Minimize memory.

## Concept 2: Frequency Maps And Counting State

Invariant: the frequency map represents the exact multiset inside the current scope.

Foundation:

1. [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
2. [Ransom Note](https://leetcode.com/problems/ransom-note/)
3. [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)
4. [Majority Element](https://leetcode.com/problems/majority-element/)

Reinforcement:

1. [Majority Element II](https://leetcode.com/problems/majority-element-ii/)
2. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
3. [Permutation in String](https://leetcode.com/problems/permutation-in-string/)
4. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

Boss:

1. [Count Unique Characters of All Substrings of a Given String](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/)
2. [Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)

Tweak drills:

1. Replace lowercase letters with Unicode strings.
2. Require lexicographically smallest answer.
3. Return shortest valid window.
4. Return number of valid windows.
5. Update frequencies online.

## Concept 3: Prefix Sum Counting

Invariant: a subarray sum is the difference between two prefix sums.

Foundation:

1. [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)
2. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
3. [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)
4. [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)

Reinforcement:

1. [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/)
2. [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)
3. [Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)
4. [Maximum Size Subarray Sum Equals k](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/)

Boss:

1. [Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/)
2. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)

Tweak drills:

1. Allow negative numbers.
2. Count subarrays instead of returning length.
3. Change exact K to divisible by K.
4. Upgrade 1D to 2D.
5. Add online updates and explain why prefix-only breaks.

## Concept 4: Difference Arrays And Range Updates

Invariant: range updates can be represented by boundary changes, then recovered by prefix sums.

Foundation:

1. [Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)
2. [Car Pooling](https://leetcode.com/problems/car-pooling/)
3. [Range Addition](https://leetcode.com/problems/range-addition/)

Reinforcement:

1. [Shifting Letters II](https://leetcode.com/problems/shifting-letters-ii/)
2. [Minimum Moves to Make Array Complementary](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/)
3. [Describe the Painting](https://leetcode.com/problems/describe-the-painting/)

Boss:

1. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
2. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/)

Tweak drills:

1. Make updates online.
2. Add range minimum query.
3. Add range assignment instead of addition.
4. Compress huge coordinates.
5. Return all overloaded intervals, not just max load.

## Concept 5: In-Place Index Encoding And Cyclic Placement

Invariant: when values map to indices, the array itself can encode visited/placed state.

Foundation:

1. [Missing Number](https://leetcode.com/problems/missing-number/)
2. [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)
3. [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

Reinforcement:

1. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
2. [Set Mismatch](https://leetcode.com/problems/set-mismatch/)
3. [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)

Boss:

1. [Couples Holding Hands](https://leetcode.com/problems/couples-holding-hands/)
2. [Smallest Missing Genetic Value in Each Subtree](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/)

Tweak drills:

1. Values are 0-indexed instead of 1-indexed.
2. Values may be out of range.
3. Array is read-only.
4. Need O(1) memory.
5. Need all missing and all duplicate values.

## Concept 6: Kadane And Linear Array DP

Invariant: the best answer ending at i is enough to build the best answer ending at i + 1.

Foundation:

1. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
2. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
3. [House Robber](https://leetcode.com/problems/house-robber/)

Reinforcement:

1. [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
2. [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/)
3. [Best Sightseeing Pair](https://leetcode.com/problems/best-sightseeing-pair/)
4. [Delete and Earn](https://leetcode.com/problems/delete-and-earn/)

Boss:

1. [Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/)
2. [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)

Tweak drills:

1. Return indices, not value.
2. Require non-empty subarray.
3. Make array circular.
4. Track max and min states.
5. Add distance constraint.

## Concept 7: Sorting And Custom Ordering

Invariant: once the right order is chosen, local decisions become valid.

Foundation:

1. [Sort Colors](https://leetcode.com/problems/sort-colors/)
2. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
3. [Largest Number](https://leetcode.com/problems/largest-number/)
4. [Meeting Rooms](https://leetcode.com/problems/meeting-rooms/)

Reinforcement:

1. [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
2. [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
3. [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/)
4. [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)

Boss:

1. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
2. [Create Maximum Number](https://leetcode.com/problems/create-maximum-number/)

Tweak drills:

1. Sort by end instead of start.
2. Sort descending tie-breaker.
3. Return actual chosen intervals.
4. Count minimum removals.
5. Add weights to intervals.

## Concept 8: Sweep Line And Event Ordering

Invariant: convert intervals into ordered events and update active state at boundaries.

Foundation:

1. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
2. [Car Pooling](https://leetcode.com/problems/car-pooling/)
3. [My Calendar I](https://leetcode.com/problems/my-calendar-i/)

Reinforcement:

1. [My Calendar II](https://leetcode.com/problems/my-calendar-ii/)
2. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
3. [Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)
4. [Employee Free Time](https://leetcode.com/problems/employee-free-time/)

Boss:

1. [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
2. [Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)

Tweak drills:

1. Inclusive vs exclusive interval endpoints.
2. Return max overlap and intervals where it happens.
3. Coordinates up to 1e9.
4. Add deletion.
5. Move from 1D to 2D.

## Concept 9: Sorted Two Pointers And K-Sum

Invariant: sorted order tells which pointer movement cannot miss an optimal pair.

Foundation:

1. [Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
2. [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
3. [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)

Reinforcement:

1. [3Sum](https://leetcode.com/problems/3sum/)
2. [3Sum Closest](https://leetcode.com/problems/3sum-closest/)
3. [4Sum](https://leetcode.com/problems/4sum/)
4. [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)

Boss:

1. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
2. [Minimum Number of Moves to Make Palindrome](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/)

Tweak drills:

1. Return unique tuples.
2. Return count only.
3. Add duplicates.
4. Generalize 3Sum to kSum.
5. Require closest instead of exact.

## Concept 10: Fast And Slow Pointers

Invariant: two pointers moving at different speeds expose cycles, middles, and offset positions.

Foundation:

1. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
2. [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
3. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

Reinforcement:

1. [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
2. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
3. [Happy Number](https://leetcode.com/problems/happy-number/)

Boss:

1. [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)
2. [Reorder List](https://leetcode.com/problems/reorder-list/)

Tweak drills:

1. Find cycle length.
2. Find cycle entry.
3. Remove cycle.
4. Need one-pass solution.
5. Input is array-as-linked-list.

## Concept 11: Sliding Window With A Validity Predicate

Invariant: the window is the largest or smallest interval satisfying a tracked condition.

Foundation:

1. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
2. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
3. [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)

Reinforcement:

1. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
2. [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)
3. [Permutation in String](https://leetcode.com/problems/permutation-in-string/)
4. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

Boss:

1. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
2. [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)

Tweak drills:

1. Longest valid window.
2. Shortest valid window.
3. Count all valid windows.
4. Allow at most K distinct.
5. Exact K via atMost(K) - atMost(K - 1).

## Concept 12: Sliding Window With Negative Numbers

Invariant: if sums are not monotonic, normal shrink-while-valid logic may fail.

Foundation:

1. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
2. [Maximum Erasure Value](https://leetcode.com/problems/maximum-erasure-value/)

Reinforcement:

1. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
2. [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)
3. [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)

Boss:

1. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
2. [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)

Tweak drills:

1. Add negative values.
2. Require min window length.
3. Require max and min in window.
4. Track median.
5. Make window dynamic.

## Concept 13: Monotonic Queue

Invariant: keep only candidates that can still become optimal.

Foundation:

1. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
2. [Jump Game VI](https://leetcode.com/problems/jump-game-vi/)
3. [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)

Reinforcement:

1. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
2. [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)
3. [Minimum Number of K Consecutive Bit Flips](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/)

Boss:

1. [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)
2. [Pizzeria Queries](https://cses.fi/problemset/task/2206)

Tweak drills:

1. Max becomes min.
2. Fixed window becomes variable window.
3. Return indices.
4. Support stale candidate removal.
5. Explain why heap is slower or needs lazy deletion.

## Concept 14: Binary Search In Sorted Spaces

Invariant: after each comparison, one side of the search space cannot contain the answer.

Foundation:

1. [Binary Search](https://leetcode.com/problems/binary-search/)
2. [Search Insert Position](https://leetcode.com/problems/search-insert-position/)
3. [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

Reinforcement:

1. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
2. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
3. [Find Peak Element](https://leetcode.com/problems/find-peak-element/)
4. [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)

Boss:

1. [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)
2. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

Tweak drills:

1. First true vs last false.
2. Duplicates exist.
3. Rotated array.
4. Matrix is row-sorted only.
5. Return insertion position.

## Concept 15: Binary Search On Answer

Invariant: if a candidate answer works, all larger or smaller candidates also work.

Foundation:

1. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
2. [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
3. [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)

Reinforcement:

1. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
2. [Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/)
3. [Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/)

Boss:

1. [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
2. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)

Tweak drills:

1. Minimize maximum.
2. Maximize minimum.
3. Count items <= mid.
4. Feasibility check becomes greedy.
5. Feasibility check becomes two pointers.

## Concept 16: Stack For Structure And Parsing

Invariant: the stack contains unfinished structures in the order they must close.

Foundation:

1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
2. [Min Stack](https://leetcode.com/problems/min-stack/)
3. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

Reinforcement:

1. [Decode String](https://leetcode.com/problems/decode-string/)
2. [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)
3. [Simplify Path](https://leetcode.com/problems/simplify-path/)
4. [Exclusive Time of Functions](https://leetcode.com/problems/exclusive-time-of-functions/)

Boss:

1. [Basic Calculator](https://leetcode.com/problems/basic-calculator/)
2. [Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/)
3. [Number of Atoms](https://leetcode.com/problems/number-of-atoms/)

Tweak drills:

1. Add nested parentheses.
2. Add unary minus.
3. Add precedence.
4. Add variables.
5. Return parse tree instead of value.

## Concept 17: Monotonic Stack

Invariant: popped elements have just found their next boundary.

Foundation:

1. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
2. [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)
3. [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)

Reinforcement:

1. [Online Stock Span](https://leetcode.com/problems/online-stock-span/)
2. [Remove K Digits](https://leetcode.com/problems/remove-k-digits/)
3. [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/)
4. [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/)

Boss:

1. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
2. [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)
3. [Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/)

Tweak drills:

1. Next greater becomes previous smaller.
2. Strict vs non-strict comparisons.
3. Circular array.
4. Count contribution.
5. Convert matrix to histogram per row.

## Concept 18: Heap Top-K And K-Way Merge

Invariant: the heap stores the current best frontier candidates.

Foundation:

1. [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
2. [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)
3. [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

Reinforcement:

1. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
2. [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
3. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)

Boss:

1. [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)
2. [IPO](https://leetcode.com/problems/ipo/)

Tweak drills:

1. Min heap vs max heap.
2. Stream instead of batch.
3. Tie-break lexicographically.
4. K lists become K matrices.
5. Avoid pushing duplicate states.

## Concept 19: Two Heaps And Lazy Deletion

Invariant: split the data into lower and upper halves while keeping sizes balanced.

Foundation:

1. [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)
2. [Moving Average from Data Stream](https://leetcode.com/problems/moving-average-from-data-stream/)

Reinforcement:

1. [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)
2. [Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/)
3. [Maximum Performance of a Team](https://leetcode.com/problems/maximum-performance-of-a-team/)

Boss:

1. [Sliding Window Cost](https://cses.fi/problemset/task/1077)
2. [Movie Festival II](https://cses.fi/problemset/task/1632)

Tweak drills:

1. Support deletion.
2. Support duplicates.
3. Return median as integer or float.
4. Balance sizes after every operation.
5. Explain lazy deletion.

## Concept 20: Greedy With Heap Scheduling

Invariant: process events in sorted order and use heap to keep the best active choice.

Foundation:

1. [Task Scheduler](https://leetcode.com/problems/task-scheduler/)
2. [Reorganize String](https://leetcode.com/problems/reorganize-string/)
3. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)

Reinforcement:

1. [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/)
2. [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)
3. [Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)

Boss:

1. [Process Tasks Using Servers](https://leetcode.com/problems/process-tasks-using-servers/)
2. [Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/)

Tweak drills:

1. Need stable tie-breaking.
2. Need max profit instead of min time.
3. Jobs arrive online.
4. Cooldown exists.
5. Replace chosen worst item with better item.

## Concept 21: Linked List Rewiring

Invariant: keep references to nodes before breaking or changing links.

Foundation:

1. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
2. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
3. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

Reinforcement:

1. [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
2. [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)
3. [Rotate List](https://leetcode.com/problems/rotate-list/)
4. [Partition List](https://leetcode.com/problems/partition-list/)

Boss:

1. [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
2. [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)

Tweak drills:

1. Reverse between positions.
2. Reverse in groups.
3. Preserve relative order.
4. Use O(1) extra space.
5. Handle random pointers.

## Concept 22: O(1) API Data Structures

Invariant: each operation must update all linked indexes consistently.

Foundation:

1. [LRU Cache](https://leetcode.com/problems/lru-cache/)
2. [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)
3. [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)

Reinforcement:

1. [Snapshot Array](https://leetcode.com/problems/snapshot-array/)
2. [Design Twitter](https://leetcode.com/problems/design-twitter/)
3. [Design Hit Counter](https://leetcode.com/problems/design-hit-counter/)

Boss:

1. [LFU Cache](https://leetcode.com/problems/lfu-cache/)
2. [All O(1) Data Structure](https://leetcode.com/problems/all-oone-data-structure/)
3. [Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/)

Tweak drills:

1. Add duplicates.
2. Add TTL.
3. Add capacity.
4. Add timestamp ordering.
5. Explain every pointer/map update.

## Concept 23: Tree Traversal And Return Values

Invariant: each recursive call returns one useful fact to its parent.

Foundation:

1. [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
2. [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
3. [Same Tree](https://leetcode.com/problems/same-tree/)
4. [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)

Reinforcement:

1. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
2. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
3. [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
4. [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/)

Boss:

1. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
2. [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)

Tweak drills:

1. Return height and validity.
2. Track global answer.
3. Convert recursion to iteration.
4. Handle null node carefully.
5. Return path, not just value.

## Concept 24: Tree Path State And Prefix Sums

Invariant: path state changes on entry and must be undone on exit.

Foundation:

1. [Path Sum](https://leetcode.com/problems/path-sum/)
2. [Path Sum II](https://leetcode.com/problems/path-sum-ii/)
3. [Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

Reinforcement:

1. [Path Sum III](https://leetcode.com/problems/path-sum-iii/)
2. [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
3. [Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)

Boss:

1. [Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/)
2. [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/)

Tweak drills:

1. Path can start anywhere.
2. Need count of paths.
3. Need actual path.
4. Need parent pointers.
5. Need infection distance.

## Concept 25: BST Bounds And Inorder

Invariant: inorder traversal of a BST is sorted, and every subtree has value bounds.

Foundation:

1. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
2. [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
3. [Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/)

Reinforcement:

1. [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
2. [Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/)
3. [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

Boss:

1. [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)
2. [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/)

Tweak drills:

1. Duplicates go left or right.
2. Need iterative inorder.
3. Need O(h) iterator.
4. Recover swapped nodes.
5. Return largest BST subtree.

## Concept 26: Tree Construction And Serialization

Invariant: traversal order or encoded markers must uniquely preserve structure.

Foundation:

1. [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
2. [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
3. [Serialize and Deserialize BST](https://leetcode.com/problems/serialize-and-deserialize-bst/)

Reinforcement:

1. [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
2. [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/)
3. [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

Boss:

1. [Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/)
2. [Recover a Tree From Preorder Traversal](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/)

Tweak drills:

1. Duplicate values exist.
2. Null markers omitted.
3. Use BFS serialization.
4. Use preorder serialization.
5. Minimize serialized size.

## Concept 27: Trie And Prefix Search

Invariant: each prefix maps to a node that summarizes all words below it.

Foundation:

1. [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/)
2. [Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/)
3. [Replace Words](https://leetcode.com/problems/replace-words/)

Reinforcement:

1. [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
2. [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/)
3. [Stream of Characters](https://leetcode.com/problems/stream-of-characters/)

Boss:

1. [Word Search II](https://leetcode.com/problems/word-search-ii/)
2. [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)

Tweak drills:

1. Wildcard search.
2. Top K suggestions per prefix.
3. Reverse trie.
4. Delete words.
5. Board DFS with pruning.

## Concept 28: Bit Trie And XOR

Invariant: greedily choose the opposite bit when maximizing XOR.

Foundation:

1. [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)
2. [Single Number III](https://leetcode.com/problems/single-number-iii/)

Reinforcement:

1. [Maximum XOR With an Element From Array](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/)
2. [Count Pairs With XOR in a Range](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/)

Boss:

1. [Find Maximum XOR With an Element From Array](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/)
2. [Maximum Genetic Difference Query](https://leetcode.com/problems/maximum-genetic-difference-query/)

Tweak drills:

1. Add query limit.
2. Count pairs instead of maximum.
3. Online insert.
4. Online delete.
5. Use bit DP instead of trie.

## Concept 29: Backtracking Search Tree

Invariant: every recursive level represents one decision, and state is restored after exploring it.

Foundation:

1. [Subsets](https://leetcode.com/problems/subsets/)
2. [Permutations](https://leetcode.com/problems/permutations/)
3. [Combination Sum](https://leetcode.com/problems/combination-sum/)

Reinforcement:

1. [Subsets II](https://leetcode.com/problems/subsets-ii/)
2. [Permutations II](https://leetcode.com/problems/permutations-ii/)
3. [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
4. [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

Boss:

1. [N-Queens](https://leetcode.com/problems/n-queens/)
2. [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
3. [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)

Tweak drills:

1. Add duplicates.
2. Return count only.
3. Return lexicographic order.
4. Add pruning.
5. Add memoization and explain boundary.

## Concept 30: Grid DFS/BFS

Invariant: mark visited exactly once when a cell becomes owned by a component or layer.

Foundation:

1. [Number of Islands](https://leetcode.com/problems/number-of-islands/)
2. [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
3. [Flood Fill](https://leetcode.com/problems/flood-fill/)

Reinforcement:

1. [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
2. [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
3. [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
4. [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/)

Boss:

1. [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/)
2. [Making A Large Island](https://leetcode.com/problems/making-a-large-island/)

Tweak drills:

1. Start BFS from all sources.
2. Reverse the flow direction.
3. Mutate grid vs visited set.
4. Count components.
5. Connect two components.

## Concept 31: Implicit Graph BFS

Invariant: define state completely; two states are equal only if all future possibilities match.

Foundation:

1. [Open the Lock](https://leetcode.com/problems/open-the-lock/)
2. [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/)
3. [Word Ladder](https://leetcode.com/problems/word-ladder/)

Reinforcement:

1. [Bus Routes](https://leetcode.com/problems/bus-routes/)
2. [Sliding Puzzle](https://leetcode.com/problems/sliding-puzzle/)
3. [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)

Boss:

1. [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
2. [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/)
3. [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)

Tweak drills:

1. Add bitmask to visited.
2. Need path reconstruction.
3. Need all shortest paths.
4. Use bidirectional BFS.
5. State includes position plus inventory.

## Concept 32: Topological Sort And DAG DP

Invariant: process a node only after all prerequisites that affect it are known.

Foundation:

1. [Course Schedule](https://leetcode.com/problems/course-schedule/)
2. [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
3. [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)

Reinforcement:

1. [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)
2. [Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/)
3. [Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/)

Boss:

1. [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)
2. [Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)
3. [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)

Tweak drills:

1. Return any order.
2. Return unique order or detect ambiguity.
3. Count reachable prerequisites.
4. Add duration to nodes.
5. Add cycle handling.

## Concept 33: Shortest Paths

Invariant: choose the algorithm that matches edge weights and state space.

Foundation:

1. [Network Delay Time](https://leetcode.com/problems/network-delay-time/)
2. [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
3. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)

Reinforcement:

1. [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)
2. [Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/)
3. [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)
4. [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)

Boss:

1. [Reachable Nodes In Subdivided Graph](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/)
2. [Second Minimum Time to Reach Destination](https://leetcode.com/problems/second-minimum-time-to-reach-destination/)
3. [Investigation](https://cses.fi/problemset/task/1202)

Tweak drills:

1. Edges are unweighted.
2. Edges are 0/1.
3. Edges have negative weights.
4. Need number of shortest paths.
5. Need second shortest path.

## Concept 34: DSU And Component Metadata

Invariant: each set representative owns all metadata for the component.

Foundation:

1. [Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
2. [Redundant Connection](https://leetcode.com/problems/redundant-connection/)
3. [Accounts Merge](https://leetcode.com/problems/accounts-merge/)

Reinforcement:

1. [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)
2. [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
3. [Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/)
4. [Making A Large Island](https://leetcode.com/problems/making-a-large-island/)

Boss:

1. [Bricks Falling When Hit](https://leetcode.com/problems/bricks-falling-when-hit/)
2. [Checking Existence of Edge Length Limited Paths](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/)
3. [Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/)

Tweak drills:

1. Process offline queries.
2. Reverse deletions into additions.
3. Maintain component size.
4. Maintain component value counts.
5. Sort edges before union.

## Concept 35: MST And Edge Classification

Invariant: MST greedily accepts the cheapest edge that connects different components.

Foundation:

1. [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)
2. [Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/)
3. [Road Reparation](https://cses.fi/problemset/task/1675)

Reinforcement:

1. [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)
2. [Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/)

Boss:

1. [Building Roads](https://cses.fi/problemset/task/1666)
2. [Road Construction](https://cses.fi/problemset/task/1676)

Tweak drills:

1. Graph is disconnected.
2. Need critical edges.
3. Need second-best MST.
4. Edges have types.
5. Need online connectivity after additions.

## Concept 36: Bridges, SCC, Euler Paths

Invariant: discovery times, low links, and degree constraints reveal global graph structure.

Foundation:

1. [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)
2. [Planets and Kingdoms](https://cses.fi/problemset/task/1683)
3. [Mail Delivery](https://cses.fi/problemset/task/1691)

Reinforcement:

1. [Giant Pizza](https://cses.fi/problemset/task/1684)
2. [Coin Collector](https://cses.fi/problemset/task/1686)
3. [Teleporters Path](https://cses.fi/problemset/task/1693)

Boss:

1. [De Bruijn Sequence](https://cses.fi/problemset/task/1692)
2. [Dynamic Connectivity](https://cses.fi/problemset/task/2133)

Tweak drills:

1. Directed vs undirected.
2. Find bridges.
3. Find SCCs.
4. Condense graph to DAG.
5. Check Euler path degree conditions.

## Concept 37: Max Flow And Matching

Invariant: residual capacity tells which additional flow can still be pushed.

Foundation:

1. [Download Speed](https://cses.fi/problemset/task/1694)
2. [School Dance](https://cses.fi/problemset/task/1696)
3. [Police Chase](https://cses.fi/problemset/task/1695)

Reinforcement:

1. [Distinct Routes](https://cses.fi/problemset/task/1711)
2. [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
3. [Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)

Boss:

1. [Grid Puzzle I](https://cses.fi/problemset/task/2131)
2. [Grid Puzzle II](https://cses.fi/problemset/task/2132)

Tweak drills:

1. Convert matching to flow.
2. Extract min cut.
3. Extract actual paths.
4. Add capacities greater than 1.
5. Explain residual graph.

## Concept 38: Greedy Exchange Arguments

Invariant: prove that a local choice can be swapped into an optimal solution.

Foundation:

1. [Jump Game](https://leetcode.com/problems/jump-game/)
2. [Jump Game II](https://leetcode.com/problems/jump-game-ii/)
3. [Gas Station](https://leetcode.com/problems/gas-station/)
4. [Partition Labels](https://leetcode.com/problems/partition-labels/)

Reinforcement:

1. [Candy](https://leetcode.com/problems/candy/)
2. [Hand of Straights](https://leetcode.com/problems/hand-of-straights/)
3. [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/)
4. [Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)

Boss:

1. [Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)
2. [Set Intersection Size At Least Two](https://leetcode.com/problems/set-intersection-size-at-least-two/)
3. [Patching Array](https://leetcode.com/problems/patching-array/)

Tweak drills:

1. Write exchange argument.
2. Return construction.
3. Add weights.
4. Add cooldown.
5. Explain why DP is unnecessary.

## Concept 39: Knapsack DP

Invariant: dp capacity state represents the best or count using processed items.

Foundation:

1. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
2. [Target Sum](https://leetcode.com/problems/target-sum/)
3. [Coin Change](https://leetcode.com/problems/coin-change/)

Reinforcement:

1. [Coin Change II](https://leetcode.com/problems/coin-change-ii/)
2. [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)
3. [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)
4. [Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)

Boss:

1. [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/)
2. [Split Array With Same Average](https://leetcode.com/problems/split-array-with-same-average/)
3. [Money Sums](https://cses.fi/problemset/task/1745)

Tweak drills:

1. 0/1 vs unbounded.
2. Min coins vs count ways.
3. Order matters vs order does not matter.
4. Add two capacities.
5. Compress space safely.

## Concept 40: LIS And Ordered DP

Invariant: maintain the best possible tail value for each subsequence length.

Foundation:

1. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
2. [Increasing Subsequence](https://cses.fi/problemset/task/1145)
3. [Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)

Reinforcement:

1. [Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)
2. [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)
3. [Longest String Chain](https://leetcode.com/problems/longest-string-chain/)
4. [Longest Arithmetic Subsequence](https://leetcode.com/problems/longest-arithmetic-subsequence/)

Boss:

1. [Longest Increasing Subsequence II](https://leetcode.com/problems/longest-increasing-subsequence-ii/)
2. [Minimum Operations to Make the Array K-Increasing](https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/)

Tweak drills:

1. Strict vs non-decreasing.
2. Need number of LIS.
3. Need reconstruct sequence.
4. 2D sorting plus LIS.
5. Add max difference constraint.

## Concept 41: Stock And State Machine DP

Invariant: each state describes whether you hold stock, can buy, or are cooling down.

Foundation:

1. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
2. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
3. [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

Reinforcement:

1. [Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)
2. [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
3. [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)

Boss:

1. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
2. [Sell Diminishing-Valued Colored Balls](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/)

Tweak drills:

1. Add transaction fee.
2. Add cooldown.
3. Limit transactions.
4. Unlimited transactions.
5. Compress state.

## Concept 42: String DP

Invariant: dp[i][j] means a precise relationship between prefixes or substrings.

Foundation:

1. [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
2. [Edit Distance](https://leetcode.com/problems/edit-distance/)
3. [Word Break](https://leetcode.com/problems/word-break/)

Reinforcement:

1. [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)
2. [Interleaving String](https://leetcode.com/problems/interleaving-string/)
3. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
4. [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)

Boss:

1. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
2. [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)
3. [Strange Printer](https://leetcode.com/problems/strange-printer/)
4. [Scramble String](https://leetcode.com/problems/scramble-string/)

Tweak drills:

1. Prefix DP vs interval DP.
2. Count ways vs boolean.
3. Need reconstruction.
4. Pattern has wildcard.
5. Space-compress 2D DP.

## Concept 43: Grid DP

Invariant: each cell's answer comes from allowed predecessor cells.

Foundation:

1. [Unique Paths](https://leetcode.com/problems/unique-paths/)
2. [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)
3. [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)

Reinforcement:

1. [Triangle](https://leetcode.com/problems/triangle/)
2. [Maximal Square](https://leetcode.com/problems/maximal-square/)
3. [Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)
4. [Dungeon Game](https://leetcode.com/problems/dungeon-game/)

Boss:

1. [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/)
2. [Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/)
3. [Grid Paths](https://cses.fi/problemset/task/1638)

Tweak drills:

1. Obstacles.
2. Min path vs count paths.
3. Reverse DP from destination.
4. Two agents.
5. Modulo count.

## Concept 44: Interval DP

Invariant: solve every smaller interval before combining into a larger interval.

Foundation:

1. [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
2. [Predict the Winner](https://leetcode.com/problems/predict-the-winner/)
3. [Stone Game](https://leetcode.com/problems/stone-game/)

Reinforcement:

1. [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)
2. [Stone Game II](https://leetcode.com/problems/stone-game-ii/)
3. [Stone Game III](https://leetcode.com/problems/stone-game-iii/)
4. [Burst Balloons](https://leetcode.com/problems/burst-balloons/)

Boss:

1. [Remove Boxes](https://leetcode.com/problems/remove-boxes/)
2. [Strange Printer](https://leetcode.com/problems/strange-printer/)
3. [Rectangle Cutting](https://cses.fi/problemset/task/1744)

Tweak drills:

1. Choose first vs choose last.
2. Add outside sentinels.
3. Add third state dimension.
4. Min cost vs max score.
5. Game DP with opponent.

## Concept 45: Bitmask DP

Invariant: mask represents exactly the subset of completed choices.

Foundation:

1. [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
2. [Can I Win](https://leetcode.com/problems/can-i-win/)
3. [Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/)

Reinforcement:

1. [Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word/)
2. [Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)
3. [Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)

Boss:

1. [Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/)
2. [Minimum Incompatibility](https://leetcode.com/problems/minimum-incompatibility/)
3. [Hamiltonian Flights](https://cses.fi/problemset/task/1690)

Tweak drills:

1. Need reconstruct subset.
2. Minimize cost.
3. Count ways.
4. Precompute transitions.
5. Mask over skills instead of people.

## Concept 46: Digit DP And Profile DP

Invariant: state includes position, tightness, leading-zero status, and any needed summary.

Foundation:

1. [Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/)
2. [Number of Digit One](https://leetcode.com/problems/number-of-digit-one/)
3. [Counting Numbers](https://cses.fi/problemset/task/2220)

Reinforcement:

1. [Non-negative Integers without Consecutive Ones](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/)
2. [Numbers With Repeated Digits](https://leetcode.com/problems/numbers-with-repeated-digits/)
3. [Digit Queries](https://cses.fi/problemset/task/2431)

Boss:

1. [Counting Tilings](https://cses.fi/problemset/task/2181)
2. [Elevator Rides](https://cses.fi/problemset/task/1653)

Tweak drills:

1. Add tight flag.
2. Add leading zero handling.
3. Count not construct.
4. Add previous digit.
5. Profile mask row by row.

## Concept 47: Fenwick Tree

Invariant: each tree index stores a power-of-two suffix block of prefix information.

Foundation:

1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
2. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
3. [List Removals](https://cses.fi/problemset/task/1749)

Reinforcement:

1. [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)
2. [Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)
3. [Distinct Values Queries](https://cses.fi/problemset/task/1734)

Boss:

1. [Salary Queries](https://cses.fi/problemset/task/1144)
2. [Nested Ranges Count](https://cses.fi/problemset/task/2169)

Tweak drills:

1. Coordinate compress values.
2. Query prefix.
3. Query range.
4. Update point.
5. Find kth by binary lifting.

## Concept 48: Segment Tree And Lazy Propagation

Invariant: each node summarizes an interval, and lazy tags represent deferred updates.

Foundation:

1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
2. [Range Minimum Queries II](https://cses.fi/problemset/task/1649)
3. [Dynamic Range Sum Queries](https://cses.fi/problemset/task/1648)

Reinforcement:

1. [Range Updates and Sums](https://cses.fi/problemset/task/1735)
2. [Polynomial Queries](https://cses.fi/problemset/task/1736)
3. [Subarray Sum Queries](https://cses.fi/problemset/task/1190)
4. [Prefix Sum Queries](https://cses.fi/problemset/task/2166)

Boss:

1. [Range Queries and Copies](https://cses.fi/problemset/task/1737)
2. [Handling Sum Queries After Update](https://leetcode.com/problems/handling-sum-queries-after-update/)
3. [Range Module](https://leetcode.com/problems/range-module/)

Tweak drills:

1. Point update/range query.
2. Range update/point query.
3. Range update/range query.
4. Range assignment vs range add.
5. Persistent versions.

## Concept 49: Tree Algorithms Beyond Binary Trees

Invariant: root the tree, then use Euler order, binary lifting, rerooting, or decomposition to answer queries.

Foundation:

1. [Tree Diameter](https://cses.fi/problemset/task/1131)
2. [Tree Matching](https://cses.fi/problemset/task/1130)
3. [Subordinates](https://cses.fi/problemset/task/1674)

Reinforcement:

1. [Tree Distances I](https://cses.fi/problemset/task/1132)
2. [Tree Distances II](https://cses.fi/problemset/task/1133)
3. [Company Queries I](https://cses.fi/problemset/task/1687)
4. [Company Queries II](https://cses.fi/problemset/task/1688)

Boss:

1. [Counting Paths](https://cses.fi/problemset/task/1136)
2. [Path Queries II](https://cses.fi/problemset/task/2134)
3. [Fixed-Length Paths II](https://cses.fi/problemset/task/2081)

Tweak drills:

1. Subtree query via Euler tour.
2. LCA via binary lifting.
3. Reroot DP.
4. Path query via HLD.
5. Count paths through nodes.

## Concept 50: String Algorithms

Invariant: reuse prefix/suffix/palindrome structure instead of comparing substrings repeatedly.

Foundation:

1. [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
2. [Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)
3. [String Matching](https://cses.fi/problemset/task/1753)

Reinforcement:

1. [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
2. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
3. [Finding Borders](https://cses.fi/problemset/task/1732)
4. [Finding Periods](https://cses.fi/problemset/task/1733)

Boss:

1. [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
2. [Distinct Substrings](https://cses.fi/problemset/task/2105)
3. [String Functions](https://cses.fi/problemset/task/2107)
4. [Substring Order II](https://cses.fi/problemset/task/2109)

Tweak drills:

1. Implement KMP prefix function.
2. Implement Z-function.
3. Implement rolling hash with collision discussion.
4. Implement Manacher.
5. Build suffix array conceptually.

## Concept 51: Bit Manipulation

Invariant: reason at the bit level; each bit can often be solved independently.

Foundation:

1. [Single Number](https://leetcode.com/problems/single-number/)
2. [Counting Bits](https://leetcode.com/problems/counting-bits/)
3. [Reverse Bits](https://leetcode.com/problems/reverse-bits/)

Reinforcement:

1. [Single Number II](https://leetcode.com/problems/single-number-ii/)
2. [Single Number III](https://leetcode.com/problems/single-number-iii/)
3. [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/)
4. [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)

Boss:

1. [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/)
2. [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)

Tweak drills:

1. Use XOR cancellation.
2. Isolate lowest set bit.
3. Count set bits.
4. Simulate addition.
5. Handle signed overflow.

## Concept 52: Math, Randomization, Geometry

Invariant: transform the problem into a known mathematical object and preserve edge cases.

Foundation:

1. [Pow(x, n)](https://leetcode.com/problems/powx-n/)
2. [Sqrt(x)](https://leetcode.com/problems/sqrtx/)
3. [Happy Number](https://leetcode.com/problems/happy-number/)
4. [Plus One](https://leetcode.com/problems/plus-one/)

Reinforcement:

1. [Fraction to Recurring Decimal](https://leetcode.com/problems/fraction-to-recurring-decimal/)
2. [Integer to English Words](https://leetcode.com/problems/integer-to-english-words/)
3. [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/)
4. [Linked List Random Node](https://leetcode.com/problems/linked-list-random-node/)

Boss:

1. [Random Pick with Blacklist](https://leetcode.com/problems/random-pick-with-blacklist/)
2. [Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/)
3. [Erect the Fence](https://leetcode.com/problems/erect-the-fence/)
4. [Line Segment Intersection](https://cses.fi/problemset/task/2190)

Tweak drills:

1. Avoid floating precision.
2. Normalize slopes.
3. Use reservoir sampling.
4. Use prefix probability.
5. Handle collinear points.

## Concept 53: Multi-Source BFS

Invariant: seeding every source into the BFS queue at distance 0 before the first step makes each expansion layer represent one global time-tick, not one node's personal distance.

Foundation:

1. [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
2. [01 Matrix](https://leetcode.com/problems/01-matrix/)
3. [Walls and Gates](https://leetcode.com/problems/walls-and-gates/)

Reinforcement:

1. [As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/)
2. [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
3. [Map of Highest Peak](https://leetcode.com/problems/map-of-highest-peak/)

Boss:

1. [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/)
2. [Find Shortest Safe Route in a Matrix](https://www.geeksforgeeks.org/problems/find-shortest-safe-route-in-a-matrix/1)

Tweak drills:

1. Reverse the direction (single target, many sources becomes many targets, one source).
2. Add weighted cells so distances are no longer uniform per step.
3. Cut off the search at a maximum radius.
4. Sources arrive over time instead of all at once.
5. Track which source reached each cell first, not just the distance.

## Concept 54: Bidirectional BFS

Invariant: growing two frontiers toward each other and stopping the moment they meet cuts the explored state space from roughly b^d to roughly 2*b^(d/2).

Foundation:

1. [Word Ladder](https://leetcode.com/problems/word-ladder/)
2. [Open the Lock](https://leetcode.com/problems/open-the-lock/)
3. [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/)

Reinforcement:

1. [Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/)
2. [Sliding Puzzle](https://leetcode.com/problems/sliding-puzzle/)

Boss:

1. [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)

Tweak drills:

1. Always expand the smaller frontier first, not a fixed side.
2. Reconstruct the actual path across both frontiers' parent maps.
3. Detect the meeting point with a shared visited set instead of two separate ones.
4. Weighted edges turn this into bidirectional Dijkstra.
5. Support multiple simultaneous target nodes.

## Concept 55: Lowest Common Ancestor (Binary Lifting And Beyond)

Invariant: precomputing each node's 2^k-th ancestor lets any ancestor-jump or LCA query resolve in O(log n) by decomposing the jump distance into powers of two, instead of walking one edge at a time.

Foundation:

1. [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
2. [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
3. [Company Queries I](https://cses.fi/problemset/task/1687)

Reinforcement:

1. [Company Queries II](https://cses.fi/problemset/task/1688)
2. [Kth Ancestor of a Tree Node](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/)
3. [Distance Queries](https://cses.fi/problemset/task/1135)

Boss:

1. [Planets Queries II](https://cses.fi/problemset/task/1160)
2. [Tree Distances II](https://cses.fi/problemset/task/1133)

Tweak drills:

1. Switch from binary lifting to Euler tour plus sparse table for O(1) queries.
2. Weight the edges and turn "ancestor jump" into "distance to ancestor."
3. Support online node insertion, not just a fixed static tree.
4. Find the LCA of more than two nodes at once.
5. Apply the same jump table to a functional graph instead of a tree.

## Concept 56: Rerooting DP

Invariant: a tree DP computed once for an arbitrary root only answers the question for that root -- rerooting reuses that first pass to answer the identical question for every node as root in one more linear pass, instead of re-running the DP n times.

Foundation:

1. [Tree Diameter](https://cses.fi/problemset/task/1131)
2. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

Reinforcement:

1. [Sum of Distances in Tree](https://leetcode.com/problems/sum-of-distances-in-tree/)
2. [Count Subtrees With Max Distance Between Cities](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/)

Boss:

1. [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)
2. [Diameter of N-Ary Tree](https://leetcode.com/problems/diameter-of-n-ary-tree/)

Tweak drills:

1. Reroot to find the maximum distance instead of the sum.
2. Weight the edges instead of counting unit steps.
3. Combine two DP values (a count and a sum) through the same reroot pass.
4. Reroot to answer a counting question instead of an optimization question.
5. Support one edge-weight update between reroot queries.

## Concept 57: Reverse DSU (Offline Deletion To Addition)

Invariant: DSU can union components but can never un-union them -- so when queries delete edges or nodes over time, replaying the queries in reverse turns every deletion into an addition, which plain forward DSU can process.

Foundation:

1. [Redundant Connection](https://leetcode.com/problems/redundant-connection/)
2. [Bricks Falling When Hit](https://leetcode.com/problems/bricks-falling-when-hit/)

Reinforcement:

1. [Checking Existence of Edge Length Limited Paths](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/)
2. [Road Construction](https://cses.fi/problemset/task/1676)

Boss:

1. [Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/)

Tweak drills:

1. Process the same queries forward and compare why it fails.
2. Maintain component max/min value alongside the reverse-processed DSU.
3. Count the total number of connected pairs after each reverse step.
4. Combine reverse DSU with small-to-large merging for component metadata.
5. Recognize when queries are already in a usable order and reversal is unnecessary.

## Concept 58: Persistent Segment Tree And Ordered Set

Invariant: a persistent segment tree creates a new O(log n)-sized path of nodes per update while sharing every unchanged subtree with the previous version, so any past version stays fully queryable forever.

Foundation:

1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
2. [Range Queries and Copies](https://cses.fi/problemset/task/1737)

Reinforcement:

1. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
2. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)

Boss:

1. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
2. [My Calendar III](https://leetcode.com/problems/my-calendar-iii/)

Tweak drills:

1. Query a past version instead of only the latest one.
2. Support "undo the last update" as a version rollback.
3. Maintain the k-th smallest value across every historical version.
4. Replace the ordered set with a Fenwick-tree-of-versions for a lighter alternative.
5. Combine with offline query sorting instead of persistence when versions aren't actually needed.

## Concept 59: Offline Queries And Mo's Algorithm

Invariant: sorting queries by block-of-left-endpoint (then by right endpoint within the block) lets a two-pointer sweep answer every range query in roughly O((n+q) sqrt n) total, instead of recomputing each range's answer from scratch.

Foundation:

1. [Distinct Values Queries](https://cses.fi/problemset/task/1734)
2. [Subarray Sum Queries](https://cses.fi/problemset/task/1190)

Reinforcement:

1. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
2. [Range Queries and Copies](https://cses.fi/problemset/task/1737)

Boss:

1. [Range Updates and Sums](https://cses.fi/problemset/task/1735)

Tweak drills:

1. Add point updates, turning ordinary Mo's into Mo's with an extra time dimension.
2. Apply Mo's algorithm to tree paths via an Euler-tour flattening.
3. Tune the block size and explain the resulting complexity tradeoff.
4. Process removals as well as additions when the pointer moves.
5. Compare against a persistent-segment-tree or offline-DSU solution for the same query set.

## Concept 60: KMP And Prefix Function

Invariant: the prefix function at position i is the length of the longest proper prefix of the pattern that is also a suffix ending at i, so a failed character match can jump forward using already-proven information instead of rescanning from the start.

Foundation:

1. [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
2. [Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)
3. [Finding Borders](https://cses.fi/problemset/task/1732)

Reinforcement:

1. [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
2. [Finding Periods](https://cses.fi/problemset/task/1733)
3. [Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/)

Boss:

1. [Distinct Echo Substrings](https://leetcode.com/problems/distinct-echo-substrings/)

Tweak drills:

1. Build the automaton once and stream-match against arbitrary future input.
2. Count total occurrences instead of finding just the first one.
3. Extend to matching several patterns at once (bridge to Aho-Corasick).
4. Find every border of the string, not just the longest one.
5. Find the string's shortest period from its prefix function.

## Concept 61: Z-Function

Invariant: Z[i] is the length of the longest substring starting at i that matches a prefix of the whole string, and maintaining a running [l, r] match window lets every Z[i] be computed in O(n) total.

Foundation:

1. [Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)
2. [Finding Borders](https://cses.fi/problemset/task/1732)

Reinforcement:

1. [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
2. [String Matching](https://cses.fi/problemset/task/1753)

Boss:

1. [Distinct Echo Substrings](https://leetcode.com/problems/distinct-echo-substrings/)

Tweak drills:

1. Concatenate pattern + separator + text and read matches directly off the Z-array.
2. Derive all periods of the string from the Z-array instead of the prefix function.
3. Use the Z-array for multi-pattern matching by concatenating several patterns.
4. Compare the Z-function's approach against KMP's for the same matching problem.
5. Build the Z-array of the reversed string to answer suffix-side questions.

## Concept 62: Rolling Hash

Invariant: precomputed prefix hashes with modular powers of the base let any substring's hash be produced in O(1), turning substring-equality checks into O(1) integer comparisons instead of O(length) character comparisons.

Foundation:

1. [Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)
2. [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)

Reinforcement:

1. [Distinct Echo Substrings](https://leetcode.com/problems/distinct-echo-substrings/)
2. [Distinct Substrings](https://cses.fi/problemset/task/2105)

Boss:

1. [Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/)

Tweak drills:

1. Use double hashing (two moduli/bases) to make collisions practically impossible.
2. Hash 2D grids for pattern matching in a matrix.
3. Compare a rolling-hash solution against the equivalent suffix-array solution.
4. Support a rolling hash under point updates to individual characters.
5. Normalize case or whitespace before hashing when the match should be fuzzy.

## Concept 63: Manacher And Palindrome Structure

Invariant: transforming the string with separator characters between every letter lets one unified sweep find the longest palindrome centered at every position in O(n), handling even- and odd-length palindromes with the same code path.

Foundation:

1. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
2. [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)

Reinforcement:

1. [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
2. [Longest Palindrome](https://cses.fi/problemset/task/1111)

Boss:

1. [All Palindromes](https://cses.fi/problemset/task/3138)
2. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)

Tweak drills:

1. Count every palindromic substring, not just report the longest.
2. Contrast the "substring" (contiguous) version against the "subsequence" (DP) version.
3. Support palindrome-radius queries after single-character updates.
4. Find the minimum insertions needed to make the whole string a palindrome.
5. Explain why Manacher's transformed string needs distinct sentinel characters at both ends.

## Concept 64: Suffix Array

Invariant: sorting every suffix of the string lexicographically (built via a doubling technique in O(n log n)), plus an LCP array between lexicographically adjacent suffixes, answers most substring-comparison questions without ever comparing two substrings character by character.

Foundation:

1. [Distinct Substrings](https://cses.fi/problemset/task/2105)
2. [String Functions](https://cses.fi/problemset/task/2107)

Reinforcement:

1. [Substring Order I](https://cses.fi/problemset/task/2108)
2. [Repeating Substring](https://cses.fi/problemset/task/2106)

Boss:

1. [Substring Order II](https://cses.fi/problemset/task/2109)
2. [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)

Tweak drills:

1. Build the LCP array alongside the suffix array via Kasai's algorithm.
2. Answer "k-th distinct substring" queries using the sorted suffixes plus LCP.
3. Find the longest common substring of two strings by merging their suffix arrays.
4. Find the longest repeated substring as the maximum value in the LCP array.
5. Compare the suffix array's tradeoffs against a suffix automaton for the same query.

## Concept 65: Aho-Corasick (Multi-Pattern Matching)

Invariant: building a trie of every pattern and adding KMP-style failure links between trie nodes lets one linear scan of the text match all patterns simultaneously, instead of running KMP once per pattern.

Foundation:

1. [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/)
2. [String Matching](https://cses.fi/problemset/task/1753)

Reinforcement:

1. [Stream of Characters](https://leetcode.com/problems/stream-of-characters/)

Boss:

1. [Word Search II](https://leetcode.com/problems/word-search-ii/)

Tweak drills:

1. Sketch the failure-link automaton by hand for 3 short overlapping patterns.
2. Combine the automaton with a DP over "current automaton state" (bridge to automaton-guided string DP).
3. Count total pattern occurrences versus just which patterns matched at least once.
4. Compare against running KMP separately for each pattern and explain the crossover point.
5. Handle patterns being added incrementally instead of all upfront.

## Concept 66: Combinatorics And Modular Arithmetic

Invariant: precomputing factorials and modular inverses up front turns nCr mod p into an O(1) lookup, instead of a per-query O(r) or O(log p) computation.

Foundation:

1. [Exponentiation](https://cses.fi/problemset/task/1095)
2. [Binomial Coefficients](https://cses.fi/problemset/task/1079)

Reinforcement:

1. [Creating Strings II](https://cses.fi/problemset/task/1715)
2. [Counting Coprime Pairs](https://cses.fi/problemset/task/2417)

Boss:

1. [Permutation Sequence](https://leetcode.com/problems/permutation-sequence/)

Tweak drills:

1. Precompute factorials and inverse factorials mod p before answering any query.
2. Apply Lucas' theorem when n is far larger than p.
3. Use inclusion-exclusion to count arrangements avoiding certain patterns.
4. Derive the Catalan numbers from a binomial-coefficient identity.
5. Handle an intermediate negative value correctly under modulo (the mod must be normalized into [0, p)).

## Concept 67: Game Theory (Nim And Grundy Numbers)

Invariant: a position is losing for the player about to move exactly when every move available from it leads to a winning position for the opponent -- Grundy numbers reduce a compound game made of independent sub-games to the XOR of each sub-game's value.

Foundation:

1. [Nim Game](https://leetcode.com/problems/nim-game/)
2. [Stone Game](https://leetcode.com/problems/stone-game/)

Reinforcement:

1. [Divisor Game](https://leetcode.com/problems/divisor-game/)
2. [Predict the Winner](https://leetcode.com/problems/predict-the-winner/)

Boss:

1. [Can I Win](https://leetcode.com/problems/can-i-win/)
2. [Stone Game II](https://leetcode.com/problems/stone-game-ii/)

Tweak drills:

1. Compute a compound game's Grundy number as the XOR of its independent parts.
2. Brute-force the first few small cases by hand before trusting a closed-form pattern.
3. Distinguish a "must move" game from one where passing is allowed.
4. Convert the misere variant (last player to move loses) and check whether the same strategy still holds.
5. Add alpha-beta pruning to a minimax search that was previously exhaustive.

## The 300-Rep Rule

To lock the concepts in:

1. Pick 30 concepts.
2. Solve 5 foundation problems per concept.
3. Solve 3 reinforcement problems per concept.
4. Solve 1 boss problem per concept.
5. Do 1 tweak drill per concept.

That is roughly 300 reps. After that, the pattern should feel like a tool, not a remembered answer.

## Mixed Retention Tests

Do these after every 50 problems:

1. Pick 5 random concepts.
2. Pick 1 unseen problem from each.
3. Solve in 2 hours.
4. For each, write the invariant.
5. For each, invent one tweak.
6. Redo the weakest concept next day.

## What "I Understand It" Means

You understand a concept when:

1. You can recognize it from constraints.
2. You can derive the invariant.
3. You can solve a sibling problem.
4. You can explain why the brute force fails.
5. You can adapt to a small tweak.
6. You can test edge cases without prompting.
7. You can teach it in 3 minutes.
