---
sidebar_position: 2
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Heapsort

<ChatBaseBubble/>
Heapsort is a comparison-based sorting algorithm that builds a binary heap data structure and repeatedly extracts the maximum element to sort a given array.

### Goals

By the end of this lesson, you should be able to:
- Implement **heapsort** using iteration.

:::keyword Keywords
`binary heap`, `heap property`, `heapify`,`heapsort`
:::

## Introduction

Now, we can consider the Heapsort algorithm. The idea of heapsort is pretty simple. For any arbitrary array, we can sort the integers in the array by first building a _max-heap_. Once the max-heap is built, we know that the maximum is at the _root_ node. With this, we can swap the _root_ node with the last element and then exclude it from our heap. We then should restore the _max-heap property_ after this swap because now the _root_ node will be a small number. We can do this repetitively until there is no more element in the heap.

### (P)roblem Statement

Given an arbitrary array of integers, sort the element using heapsort algorithm.

```
Input: array of integers
Output: None
Process: Sort the elements of the array in place using heapsort
```

### Test (C)ases

Let's use the same example as in the previous section. Let's say we have the following array.

`[1, 2, 8, 7, 14, 9, 3, 10, 4, 16]`

We will sort the elements following these steps:

- Build a max-heap from this array. The previous section has shown that the final output of building a max-heap will be:

  [16, 14, 9, 10, 2, 8, 3, 7, 4, 1]

- Now, we will swap the largest element with the last element, and exclude it from the heap. We will put the excluded element in what we called as **sorted** of the list. This sorted section is separated by `||` in the list below.

  heap = [**1**, 14, 9, 10, 2, 8, 3, 7, 4 ,|| **16**]

- Notice, now, that the array does not satisfy the _max-heap property_. So we must _max-heapify_ the array to push the element 1 down to its place. The process of _max-heapify_ from the root node will result in:

  heap = [**1**, **14**, 9, 10, 2, 8, 3, 7, 4, || 16]

  heap = [**14**, **1**, 9, 10, 2, 8, 3, 7, 4, || 16]

  heap = [14, **10**, 9, **1**, 2, 8, 3, 7, 4, || 16]

  heap = [14, 10, 9, **7**, 2, 8, 3, **1**, 4, || 16]

- Once we have restored the _max-heap property_, we can take out the largest element from the first element and swap it with the last element in the heap.

  heap = [**4**, 10, 9, 7, 2, 8, 3, 1, || **14**, 16]

- We then _max-heapify_ the heap again to restore the _max-heap property_.

  heap = [**4**, **10**, 9, 7, 2, 8, 3, 1, || **14**, 16]

  heap = [**10**, **4**, 9, 7, 2, 8, 3, 1, || **14**, 16]

  heap = [10, **7**, 9, **4**, 2, 8, 3, 1, || **14**, 16]

- We then swap the largest element with the last element in the heap, and take it out from the heap.

  heap = [**1**, 7, 9, 4, 2, 8, 3, || **10**, 14, 16]

- The same process of _max-heapify_ happens again. We will now _remove_ the intermediate step and only show the first and the final state of the heaps.

  heap = [**1**, 7, 9, 4, 2, 8, 3, || **10**, 14, 16]

  heap = [9, 7, 8, 4, 2, **1**, 3, || **10**, 14, 16]

- We swap and take out again the largest element. The next iteration would be:

  heap = [**3**, 7, 8, 4, 2, **1**, || **9**, 10, 14, 16]

  then we max-heapify the array:

  heap = [8, 7, **3**, 4, 2, 1, || **9**, 10, 14, 16]

  Swapping and taking out the largest element:

  heap = [**1**, 7, 3, 4, 2, || **8**, 9, 10, 14, 16]

  and max-heapify:

  heap = [7, 4, 3, **1**, 2, || **8**, 9, 10, 14, 16]

  Swapping and taking out the largest element:

  heap = [**2**, 4, 3, 1, || **7**, 8, 9, 10, 14, 16]

  and max-heapify:

  heap = [4, **2**, 3, 1, || **7**, 8, 9, 10, 14, 16]

  Swapping and taking out the largest element:

  heap = [**1**, 2, 3, || **4**, 7, 8, 9, 10, 14, 16]

  and max-heapify:

  heap = [3, 2, **1**, || **4**, 7, 8, 9, 10, 14, 16]

  Swapping and taking out the largest element:

  heap = [**1**, 2, || **3**, 4, 7, 8, 9, 10, 14, 16]

  and max-heapify:

  heap = [2, **1**, || **3**, 4, 7, 8, 9, 10, 14, 16]

  Swapping and taking out the largest element:

  heap = [**1**, || **2**, 3, 4, 7, 8, 9, 10, 14, 16]

- At this point in time, the array is already sorted. If `heap` and `sorted` are not a separate array but rather one single array, we will have:

  result = [1, 2, 3, 4, 7, 8, 9, 10, 14, 16]

### (D)esign of Algorithm

Let's write down the steps in the previous section in a pseudocode.

<DeepDive title="Show Pseudocode">

```
def heapsort(array):
Input:
  - array: any arbitrary array
Output: None
Steps:
1. call build-max-heap(array)
2. heap_end_pos = length of array - 1 # index of the last element in the heap
3. As long as (heap_end_pos > 0), do:
    3.1 swap( array[0], array[heap_end_pos])
    3.2 heap_end_pos = heap_end_pos -1 # reduce heap size
    3.3 call max-heapify(array[from index 0 to heap_end_pos inclusive], 0)
```

</DeepDive>

We first call the procedure in the previous section called `build-max-heap` to create the _max-heap_ data structure. We then start from the last element in the heap and swap it with the largest element (always at index 0).

We reduce the variable `heap_end_pos` to reduce the heap size and exclude the largest element from the heap.

Then, we can call `max-heapify` on a subarray. The subarray starts from index 0 of the current array up to index `heap_end_pos`. In this way, we exclude the largest element from being _max-heapified_.

The second argument of `max-heapify` is the starting node where the process should begins. In this case, we always want to start `max-heapify` from index 0 because this is the node where we replace the largest element with some small element from the end of the heap.
