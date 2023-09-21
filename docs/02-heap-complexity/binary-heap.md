---
sidebar_position: 1
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Binary Heap

<ChatBaseBubble/>

Binary heap is a complete binary tree-based data structure that satisfies the heap property, where the key of each parent node is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) the keys of its child nodes.

### Goals

By the end of this lesson, you should be able to:
- Implement **binary heap** using Python's built-in list
- Describe **heap property**
- Describe the steps to **build heap**
- Implement algorithm to restore **heap property**
- Write functions to do **binary heap** data structure operation

:::keyword Keywords
`tree`, `binary tree`, `root`, `binary heap`, `heap property`, `heapify`, `node`, `leaf`, `parent node`, `child node`
:::

## Introduction

Previously, we discussed two sorting algorithms called [Bubble Sort](/notes/sorting-algorithms/bubble-sort) and [Insertion Sort](/notes/sorting-algorithms/bubble-sort). In this section we will apply our programming skills to investigate another sorting algorithm called the Heapsort. We will then compare the performance of Heapsort with the previous sorting algorithms. We will discuss some notations on how to analyze these performance.

:::tip Why so many sorting algorithms?
One reason why we introduce different sorting algorithms is to show you that there are many ways to solve the same problems. At the same time, these different ways may have different performances. After we introduce binary heap and heapsort algorithm, we will begin to introduce you how to analyze these different algorithms in terms of computation time. You will notice that Heapsort algorithm is a much better sorting algorithm as compared to Bubble sort and Insertion sort algorithms.
:::

## Binary Heap

Before discussing the Heapsort algorithm, we have to introduce a new data structure called _binary heap_ or simply called _heap_.

:::info Heap
The heap is an array of object that we can view as a nearly perfect binary tree (or we can call it a _complete_ binary tree).
:::

> A perfect binary tree is a full binary tree which **all** leaf nodes are at the same level. Complete binary trees are nearly perfect **except** the last level and all the leaves at the last level are packed towards the left.

You are familiar with the concept of array. But what is a binary tree? The easiest way to explain it is using some examples. The image below shows you an array of integers.

<ImageCard path={require("./images/Binary_Heap_Array.png").default} widthPercentage="80%"/>

### Binary Tree

We have indicated the indices of each element in the array, which starts from 0. We can visualize the elements in this array in a form of a _tree_ as shown below.

<ImageCard path={require("./images/Binary_Heap.png").default} widthPercentage="70%"/>

A _tree_ in computer science is up-side down. It consists of _nodes_ and it has one _root_ node, which is at the top. In a _binary_ tree, each node has only _two_ children, which we will call the _left_ child and the _right_ child. Every node, except the root, has a _parent_ node. The node without children is what we called a _leaf_.

Let's take a look at the example above and put in all the terms we have mentioned:

- In the above tree, we have 10 nodes, where each node is each element in the array.
- The _root_ node is the element 16, which has an index 0 in the array.
- Node with element 16 (root node) has two children. The _left_ child is a node with the element 14, while the _right_ child is a node with the element 10.
- Elements 9, 3, 2, 4, and 1 are all _leaves_ because they do not have any children.
- The node with element 7 (index 4) has only one child, which is the node with element 1 (index 9).
- The node with element 1 (index 9) has node with index 4 as its _parent_.

Now, let's go back to our definition of a _heap_. The heap is an array of object that we can view as a nearly perfect binary tree.

- A binary tree is a tree where all the nodes have only a maximum of two children, which you can call _left_ child and _right_ child.
- A _full_ binary tree is a tree where all the nodes except the leaves have _two_ children. In our case, heap is a _complete_ binary tree and not a _full_ binary tree. A _complete_ binary tree is a binary tree in which every level, except possibly the last, is _completely filled_, and all nodes are as far left as possible. A _complete_ binary tree is similar to a full binary tree with two major differences: all the leaf elements must lean toward the left and the last leaf element may not have the right sibling.
- The _root_ of the tree is the node with index 0.
- We put the elements of our array into our _tree_ from top to bottom and left to right sequence. With this, we can calculate the index of the children and the parent for every node.

### Indices of Children and Parent in a Heap

Let's start by considering how to calculate the index of the parent node. Let's take a look at the example tree we have considered.

<ImageCard path={require("./images/Binary_Heap.png").default} widthPercentage="70%"/>

:::caution index $\neq$ node content
The parent of node index 1 is 0. Similarly, the parent of node index 2 is also 0. The parent of node index 3 and 4 is 1, while the parent of node index 5 and 6 is 2.
:::

How do we get index 0 from both indices 1 and 2? And how do we get index 1 from indices 3 and 4? Or index 2 from indices 5 and 6?

```python live_py
def parent(index):
    # Input: index of current node
    # Output: index of the parent node
    # Steps: return integer((index-1) / 2)
    return int((index-1) / 2)

# Test
print(parent(0))
print(parent(6))
print(parent(8))
```

:::info Test

Test the above pseudocode and ensure it gives the correct left child nodes. You can directly edit the live codeblock above and run it on your browser.
:::

We can test the above pseudocode. $(1-1)/2 = 0$ and $(2-1)/2 = 0$ for the second level nodes. Similarly, $(3-1)/2 = 1$ and $(4-1)/2 = 1$ for the third level nodes with the parent index 1. And $(5-1)/2 =2$ together with $(6-1)/2= 2$ for the third level nodes with the parent index 2. Note that we use _integer_ division to get the correct parent node.

#### Left Child Index

In order to get the index of the _left_ child, let's observe the following:

- The left child of node 0 is index 1.
- The left child of node 1 is index 3.
- The left child of node 2 is index 5.
- and so on.

We can get the left child index using the following:

```python live_py
# @args: index (int)
def left(index):
    # Input: index of current node
    # Output: index of the left child node
    # Steps:
    # 1. return (index * 2) + 1
    return (index * 2) + 1

# Test
print(left(0))
print(left(2))
print(left(3))
```

#### Right Child Index

Similarly, we can observe the following for the indices of the _right_ child nodes:

- The right child of node 0 is index 2.
- The right child of node 1 is index 4.
- The right child of node 2 is index 6.
- and so on.

```python live_py
# @args: index (int)
def right(index):
    # Input: index of current node
    # Output: index of the right child node
    # Steps:
    # 1. return (index + 1) * 2
    return (index + 1) * 2

# Test
print(right(0))
print(right(2))
print(right(3))
```

## Heap Property

There are two kinds of _heap_: max-heaps and min-heaps. In this case we will discuss only _max-heaps_. Both heaps must satisfy the **heap property**, which specifies the kind of heap we are dealing with. The **max-heap property** is specified as follows:

:::note Max Heap Property
For all nodes except the root:

    A[parent(i)] >= A[i]

:::

This means that in a max-heap, the parent nodes are always greater that their children. This also implies that the largest node is at the _root_. The figure below is an example of a max-heap because it satisfies the condition above.

<ImageCard path={require("./images/Binary_Heap.png").default} widthPercentage="70%"/>

## Maintaining The Heap Property with `Heapify`

We will now describe an algorithm on how to maintain the _heap property_ and in this example is the _max-heap property_. We will call this procedures to maintain the _max-heap property_ as max-heapify. The idea is that for a given node, we will push down this node in such a way that the _max-heap property is satisfied_. This assumes that the _left_ child of the given node forms a tree that satisfies _max-heap property_. Similarly, the _right_ child of the given node forms a tree that satisfies _max-heap property_. The only part that does not satisfy the _max-heap property_ is the current node and its two children.

### (P)roblem Statement

Given an index of a node in a binary tree, where the left and the right children of that node satisfies the _max-heap property_, restore the _max-heap property_ of the tree starting from the current node.

```
    Input: index of the current node in a heap
    Output: None
    Process: re-order the elements in the heap
             in such a way that the max-heap property is satisfied
             from the current index node.
    assumption:
        - left child forms a tree that satisfies max-heap property
        - right child forms a tree that satisfies max-heap property
        - current node with its children may not satisfy max-heap property
```

### Test (C)ase

Let's take a look at the tree below.

<ImageCard path={require("./images/Heapify_1.png").default} widthPercentage="70%"/>

Note the following:

- The current node is index 1, which has the element of 4.
- The current with its children does not satisfy the _max-heap_ property because $4 < 14$ and $4 < 7$.
- The left child, i.e. tree starting from index 3 (elements 14, with children of 2 and 8), forms a tree that satisfies the _max-heap property_.
- The right child, i.e. tree starting from index 4 (element 7, with one children of 1), forms a tree that satisfies the _max-heap property_.

The procedure of _max-heapify_ will push the current node by swapping with the largest node along the way to satisfy the _max-heap property_. To do that, in the process of pushing the nodes, we will swap that node with the _largest_ child. In this way, we satisfy the _max-heap property_.

Let's look at the particular example above. Given the tree above, we do the folloing:

- We first find the largest child of the current node. The current node is element 4 (index 1). The largest child is element 14 (index 3), which is the left child of the current node.

  <ImageCard path={require("./images/Heapify_1.png").default} widthPercentage="70%"/>

- We then swap the current node with the largest child, i.e. element 4 (index 1) with element 14 (index 3).

  <ImageCard path={require("./images/Heapify_2.png").default} widthPercentage="70%"/>

- We, then, move our current index to the place where we swap, i.e. old index of element 14. So we are now at index 3.
- We do the same thing by looking if any of the children is larger than the current node. Since $8 > 4$, we swap 4 (index 3) with 8 (index 8).

  <ImageCard path={require("./images/Heapify_3.png").default} widthPercentage="70%"/>

- We, then, move our current index to the place where we swap, i.e. old index of element 8. So we are now at index 8.
- Since this node has no more children, we stop. We can check whether the node has more children by calculating the index of the _left_ child and see if it is still within the length of the array minus one, i.e. $left(i) < n$ if the node has at least one child, where $i$ is the current node index and $n$ is the number of element in the array.

### (D)esign of Algorithm

#### Max-Heapify v1

We can write down the steps we did in the previous section as follows.
<DeepDive title="Show Pseudocode">

```
def max-heapify(A, i):
version: 1
Input:
  - A = array storing the heap
  - i = index of the current node to restore max-heap property
Output: None, restore the element in place
Steps:
1. current_i = i # current index starting from input i
2. As long as ( left(current_i) < length of array), do:
    2.1 max_child_i = get the index of largest child of the node current_i
    2.2 if array[max_child_i] > array[current_i], do:
        2.2.1 swap( array[max_child_i], array[current_i])
    2.3 current_i = max_child_i # move to the index of the largest child
```

</DeepDive>

Note that the above steps will continue iterating down even if the current node already satisfies _max-heap_ property. This means that we can stop iterating if the largest children is already less than the current node. We can do this by checking if any swap is happening. If no swap is needed then we are done. This is because we assumes that the left child and the right child already satisfies _max-heap property_.

#### Max-Heapify v2

<DeepDive title="Show Pseudocode">

```
def max-heapify(A, i):
version: 2
Input:
  - A = array storing the heap
  - i = index of the current node to restore max-heap property
Output: None, restore the element in place
Steps:
1. current_i = i # current index starting from input i
2. swapped = True
3. As long as ( left(current_i) < length of array) AND swapped, do:
    3.1 swapped = False
    3.2 max_child_i = get the index of largest child of the node current_i
    3.3 if array[max_child_i] > array[current_i], do:
        3.3.1 swap( array[max_child_i], array[current_i])
        3.3.2 swapped = True
    3.3 current_i = max_child_i # move to the index of the largest child
```

</DeepDive>

We introduced a boolean variable called `swapped`. At every iteration, we set `swapped` to `False`. If there is a swap, we set this boolean variable to `True` and continues to the next iteration. If there is no swap, the boolean variable is still `False` and so it will stop the iteration.

## Building A Heap

We can then use the previous procedure _max-heapify_ to build a _binary heap_ data structure from any arbitrary array. The idea is to go through every nodes in the tree and _heapify_ them. However, we need not do for all the nodes, but rather only _half_ of those nodes. The reason is that we do not need to heapify the _leaves_.

We can show that the elements in the array from index $n/2$ to $n-1$ are all leaves. We do not need to push down these nodes as they do not have any children. So we can stry from element at position $n/2 - 1$ and move up to element at position 0.

### (P)roblem Statement

Given an arbitrary array, re-order the elements in such a way that it satisfies _max-heap property_.

```
Input: any arbitrary array of integers
Output: None
Process: Re-order the elements such that the whole array satisfies max-heap property
```

### Test (C)ases

Let's consider an array as shown below.

`[1, 2, 8, 7, 14, 9, 3, 10, 4, 16]`

We first visualize this array as a binary tree as shown below. Note that this tree does not satisfy _max-heap property_.

<ImageCard path={require("./images/Build_Heap_1.png").default} widthPercentage="70%"/>

We will start from the middle index, i.e. $n/2 - 1 = 10/2 - 1 = 4$, which is the fifth element, i.e. 14. Notice that all the elements after 14 are all _leaves_. We call _max-heapify_ on 14 and the result is a swap between 14 and 16. We only have one iteration because now 14 has reached the end of the array and cannot be compared with any other nodes. In the figure below, we indicate the next element to consider with a _dotted_ circle.

[1, 2, 8, 7, **14**, 9, 3, 10, 4, 16]

<ImageCard path={require("./images/Build_Heap_2.png").default} widthPercentage="70%"/>

[1, 2, 8, 7, **16**, 9, 3, 10, 4, **14**]

Now we move to the element on the left of 16, which is 7. The result of _max-heapify_ will swap 7 with 10.

[1, 2, 8, **7**, 16, 9, 3, 10, 4, 14]

<ImageCard path={require("./images/Build_Heap_3.png").default} widthPercentage="70%"/>

[1, 2, 8, **10**, 16, 9, 3, **7**, 4, 14]

Now, we move to the next element, which is 8. The result of _max-heapify_ will swap 8 with 9.

[1, 2, **8**, 10, 16, 9, 3, 7, 4, 14]

<ImageCard path={require("./images/Build_Heap_4.png").default} widthPercentage="70%"/>

[1, 2, **9**, 10, 16, **8**, 3, 7, 4, 14]

We move on to the next element, which is 2. The result of _max-heapify_ will swap 2 with 16, and then 2 with 14.

[1, **2**, 9, 10, **16**, 8, 3, 7, 4, 14]

<ImageCard path={require("./images/Build_Heap_5.png").default} widthPercentage="70%"/>

[1, **16**, 9, 10, **2**, 8, 3, 7, 4, 14]

and then,

[1, 16, 9, 10, **2**, 8, 3, 7, 4, **14**]

<ImageCard path={require("./images/Build_Heap_6.png").default} widthPercentage="70%"/>

[1, 16, 9, 10, **14**, 8, 3, 7, 4, **2**]

And now we move to the last element, which is 1. The result of _max-heapify_ will swap 1 with 16, and then 1 with 14, and finally 1 with 2.

[**1**, **16**, 9, 10, 14, 8, 3, 7, 4, 2]

<ImageCard path={require("./images/Build_Heap_7.png").default} widthPercentage="70%"/>

[**16**, **1**, 9, 10, 14, 8, 3, 7, 4, 2]

next,

[16, **1**, 9, 10, **14**, 8, 3, 7, 4, 2]

<ImageCard path={require("./images/Build_Heap_8.png").default} widthPercentage="70%"/>

[16, **14**, 9, 10, **1**, 8, 3, 7, 4, 2]

Finally,

[16, 14, 9, 10, **1**, 8, 3, 7, 4, **2**]

<ImageCard path={require("./images/Build_Heap_9.png").default} widthPercentage="70%"/>

[16, 14, 9, 10, **2**, 8, 3, 7, 4, **1**]

:::note
Once we reach the last element, the whole array now satisfies the _max-heap property_.
:::

### (D)esign of Algorithm

We can then write down the steps above as a pseudocode as follows:
<DeepDive title="Show Pseudocode">

```
def build-max-heap(array):
Input:
  - array: arbitrary array of integers
Output: None, sort the element in place
Steps:
1. n = length of array
2. starting_index = integer(n / 2) - 1 # start from the middle or non-leaf node
3. For current_index in Range(from starting_index down to 0), do:
    3.1 call max-heapify(array, current_index)
```

</DeepDive>

:::caution
The pseudo simply says, we start from the middle node as our `starting_index`, and call the function max-heapify on that node. We then move to the left and continues calling max-heapify until we reach the first element at index 0.
:::
