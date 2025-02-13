---
sidebar_position: 2
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Insertion Sort

<ChatBaseBubble/>
Insertion sort is a comparison-based sorting algorithm that builds the final sorted array one element at a time by inserting each element into its correct position within the already sorted portion of the array.

### Goals

By the end of this lesson, you should be able to:
- Describe **insertion sort** algorithm and ways to optimise it.
- Implement insertion sort algorithm to **sort** a sequence of number.

:::keyword Keywords
`sorting`, `insertion sort`
:::

Insertion sort is another algorithm that solves the same problem as bubble sort. Let's start by looking at the same test case.

## Test case

Given the following input:

```python
# Python Code
numbers = [16, 14, 10, 8, 7, 8, 3, 2, 4, 1]
```

We want to write some steps that sort the numbers such that the output will be:

```python
[1, 2, 3, 4, 7, 8, 8, 10, 14, 16]
```

1. We start from the _second_ element in the list, i.e. 14.

   [16, **14**, 10, 8, 7, 8, 3, 2, 4, 1]

2. We then compare that number with the one on the left. If it is smaller, then we will swap. Since $14<16$, we do a swap.

   [**14, 16**, 10, 8, 7, 8, 3, 2, 4, 1]

3. Since 14 has reached its place, we now move to the _third_ element in the list, i.e. 10. Since $10 < 16$, we swap (16, 10).

   [14, **16, 10**, 8, 7, 8, 3, 2, 4, 1]

   [14, **10, 16**, 8, 7, 8, 3, 2, 4, 1]

   Now we continue comparing 10 with the one on its left, i.e. 14. Since $10<14$, we swap (14, 10).

   [**14, 10**, 16, 8, 7, 8, 3, 2, 4, 1]

   [**10, 14**, 16, 8, 7, 8, 3, 2, 4, 1]

   Now 10 has reached its position.

4. We now move to the _fourth_ element, i.e. 8, and compare it with the number on its left. Since $8 < 16$, we swap (16, 8). We then continue swapping until 8 reaches its position.

   [10, 14, **16, 8**, 7, 8, 3, 2, 4, 1]

   [10, 14, **8, 16**, 7, 8, 3, 2, 4, 1]

   ***

   [10, **14, 8**, 16, 7, 8, 3, 2, 4, 1]

   [10, **8, 14**, 16, 7, 8, 3, 2, 4, 1]

   ***

   [**10, 8**, 14, 16, 7, 8, 3, 2, 4, 1]

   [**8, 10**, 14, 16, 7, 8, 3, 2, 4, 1]

5. We now move to the _fifth_ element, i.e. 7. We then have the same swapping all the way until 7 reaches its place.

   [8, 10, 14, **16, 7**, 8, 3, 2, 4, 1]

   [8, 10, 14, **7, 16**, 8, 3, 2, 4, 1]

   ***

   [8, 10, **14, 7**, 16, 8, 3, 2, 4, 1]

   [8, 10, **7, 14**, 16, 8, 3, 2, 4, 1]

   ***

   [8, **10, 7**, 14, 16, 8, 3, 2, 4, 1]

   [8, **7, 10**, 14, 16, 8, 3, 2, 4, 1]

   ***

   [**8, 7**, 10, 14, 16, 8, 3, 2, 4, 1]

   [**7, 8**, 10, 14, 16, 8, 3, 2, 4, 1]

6. We now move to the _sixth_ element, i.e. 8. We will continue swapping until 8 encounters another 8 in the 2nd element. At this point, the swapping will stop.

   [7, 8, 10, 14, **16, 8**, 3, 2, 4, 1]

   [7, 8, 10, 14, **8, 16**, 3, 2, 4, 1]

   ***

   [7, 8, 10, **14, 8**, 16, 3, 2, 4, 1]

   [7, 8, 10, **8, 14**, 16, 3, 2, 4, 1]

   ***

   [7, 8, **10, 8**, 14, 16, 3, 2, 4, 1]

   [7, 8, **8, 10**, 14, 16, 3, 2, 4, 1]

   ***

   [7, **8, 8**, 10, 14, 16, 3, 2, 4, 1]

   no swapping occurs

7. We can now move to the _seventh_ element, i.e. 3. We will not show the swapping steps, and only show the final position of the seventh element.

   [**3**, 7, 8, 8, 10, 14, 16, 2, 4, 1]

8. We do the same with the _eighth_ element, i.e. 2.

   [**2**, 3, 7, 8, 8, 10, 14, 16, 4, 1]

9. Similarly, with the _nineth_ element, i.e. 4. However, this element will stop swapping when it sees the number lower than itself, so it will stop when it sees 3.

   [2, 3, **4**, 7, 8, 8, 10, 14, 16, 1]

10. Finally, the _tenth_ element, i.e. 1, will move all the way to the first position.

    [**1**, 2, 3, 4, 7, 8, 8, 10, 14, 16]

## Design of Algorithm

Looking at the above case, we can try to write down our algorithm in pseudocode. Several things to note.

### Outer and Inner Iteration

There are **two** iterations in the steps above:

1. <span style={{ "color":"red", "fontWeight": "bold" }}>outer</span> iteration is moving from the <span><i>second</i></span> element to the last element in the list. What the outer iteration does is to place that n-th element into its position.
2. <span style={{ "color":"red", "fontWeight": "bold" }}>inner</span> iteration is swapping the n-th element until either: a) it reaches the most left position, or b) the number on its left is smaller

### Fixed Outer Iteration

The number of _outer_ iteration is fixed, which is $n-1$. This is because it starts from the second element to the last element. So if there are $n$ elements, it will repeat itself $n-1$ times.

The _outer_ iteration starts from the second element, which is index 1.

### Non-Fixed Inner Iteration

The number of _inner_ iteration is not fixed since it depends on the two cases stated above. The **maximum** number of iteration is when the number reaches the most left position. In this case for element at position $i$, it will repeat $i$ times. If it sees a number that is smaller than itself, the number of iteration for the element at position $i$ will be less than $i$.

### Insertion Sort v1

Let's write it down.

<DeepDive title="Show Pseudocode">

```
Insertion Sort
Version: 1
Input: array
Output: None, sort in place
Steps:

1. n = length of array
2. For outer_index in Range(from 1 to n-1), do:
   2.1 inner_index = outer_index # start with the i-th element
   2.2 As long as (inner_index > 0) AND (array[inner_index] < array[inner_index - 1]), do:
   2.2.1 swap(array[inner_index - 1], array[inner_index])
   2.2.2 inner_index = inner_index - 1 # move to the left
```

</DeepDive>

## Optimised Insertion Sort

We can improve the algorithm slightly by reducing the number of assignment in the inner loop. This means that instead of swapping and assigning elements in the _inner_ iteration, we only assign the element once it finds its final position. To do this, we store the element we are going to move into a temporary variable.

### Test Case

1. Let's illustrate this when the _outer_ iteration is moving the _sixth_ element, i.e. 8.

   [7, 8, 10, 14, 16, **8**, 3, 2, 4, 1]

2. Instead of swapping (16, 8) pair, we store 8 into a temporary variable. Then we compare the temporary variable with 16. Since $8 < 16$, we simply shift 16 to the right. We indicate the position to be replaced with an underscore below. Since no swap is being done, the old value remains after the shift.

   [7, 8, 10, 14, **16**, `_8_`, 3, 2, 4, 1] , temporary = 8

   [7, 8, 10, 14, `_16_`, **16**, 3, 2, 4, 1] , temporary = 8

3. We then now compare, the temporary variable with 14. Since $8 < 14$, we shift 14 to the right.

   [7, 8, 10, **14**, `_16_`, 16, 3, 2, 4, 1] , temporary = 8

   [7, 8, 10, `_14_`, **14**, 16, 3, 2, 4, 1] , temporary = 8

4. We do the same with 10.

   [7, 8, **10**, `_14_`, 14, 16, 3, 2, 4, 1] , temporary = 8

   [7, 8, `_10_`, **10**, 14, 16, 3, 2, 4, 1] , temporary = 8

5. Now, we compare the temporary variable with 8. But since 8 is not less than the value in the temporary variable, we do not swap, and store the temporary value to element on the right of it. We can then stop the _inner_ iteration, and move to the next pass of _outer_ iteration.

   [7, **8**, `_10_`, 10, 14, 16, 3, 2, 4, 1] , temporary = 8

   [7, 8, **8**, 10, 14, 16, 3, 2, 4, 1] , temporary = 8

This is an animation example for a different sequence of number from Wikipedia.

![Animation for Insertion Sort](https://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif)

### Insertion Sort v2

We can then modify the pseudocode as follows.

<DeepDive title="Show Pseudocode">

```
Insertion Sort
Version: 2
Input: array
Output: None, sort in place
Steps:
1. n = length of array
2. For outer_index in Range(from 1 to n-1), do:
    2.1 inner_index = outer_index  # start with the i-th element
    2.2 temporary = array[inner_index]
    2.3 As long as (inner_index > 0) AND (temporary < array[inner_index - 1]), do:
        2.3.1 array[inner_index] = array[inner_index - 1]) # shift to the right
        2.3.2 inner_index = inner_index - 1  # move to the left
    2.4 array[inner_index] = temporary # save temporary to its final position
```

</DeepDive>

:::note Note
The additional step is on 2.2 where we store the $i$-th element to a temporary variable.

- Step 2.3 condition is modified to compare the temporary variable with the element pointed by `inner_index - 1`.
- Step 2.3.1 now only have **one** assignment instead of **two**.

We only assign the temporary to the final position in step 2.4. The position stored in 2.4 is `inner_index` instead of `inner_index - 1`. The reason is that in the last iteration, we have executed 2.3.2 which reduces the index by one.

Assignment from temporary variable to the array only happens at the end of _inner_ iteration.
:::
