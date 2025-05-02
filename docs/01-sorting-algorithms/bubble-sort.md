---
sidebar_position: 1
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Bubble Sort

<ChatBaseBubble/>
Bubble sort is a simple comparison-based sorting algorithm that repeatedly swaps adjacent elements until the list is sorted.

### Goals

By the end of this lesson, you should be able to:
- Describe the **bubble sort** algorithm and ways to optimize it.
- Implement the bubble sort algorithm to **sort** a sequence of numbers.

:::keyword Keywords
`sorting`, `bubble sort`
:::

The best way to practice your programming skills is by writing actual code. One of the common computation is to sort some items in some way. For example, sorting a number from smallest to biggest or names from A to Z. In this notebook, we will describe some sorting algorithms which you can implement in Python.

### A Note about Show Pseudocode Button

Throughout these notes, you will see a button that says **Show Pseudocode** as shown below. Go ahead and click it.

<DeepDive title="Show Pseudocode">

```
Steps:
1. Do this
2. Then do that
```

The purpose of this button is to show you the pseudocode of the algorithm. But more importantly, the button is placed there so that you **don't immediately** see the pseudocode. The purpose is for you to **write down your own pseudocode** and compare your pseudocode with what is provided in these notes.
</DeepDive>

Another thing about pseudocode is that it is <span style={{ "color":"red", "fontWeight": "bold" }}>not</span> Python code.

:::warning Pseudocode ≠ Code
**Do not copy and paste the pseudocode** into any Python interpreter or Jupyter notebook cell and expect it to work. There is a good reason why it is called _pseudocode_ and not _pythoncode_. See [definition of pseudo](https://www.google.com/search?client=opera&q=define%3A+pseudo&sourceid=opera&ie=UTF-8&oe=UTF-8).
:::

## Bubble Sort

Bubble sort is one of the simplest sorting algorithms. We will be following the PCDIT framework (**P**roblem statement, Test **C**ases, **D**esign of Algorithm, **I**mplementation, and **T**esting) in describing the steps of these algorithms.

### Problem Statement

The problem is specified as follows. Given a sequence of numbers, write some steps to sort the sequence in some order. Usually, we will sort the sequence from the smallest to the largest.

### Test Case

For example, given the following input:

```python
# Python Code
numbers = [16, 14, 10, 8, 7, 8, 3, 2, 4, 1]
```

We want to write some steps that sort the numbers, such that the output will be:

```python
[1, 2, 3, 4, 7, 8, 8, 10, 14, 16]
```

We can intuitively try to sort the numbers by comparing two numbers (a pair) at a time. If the order is incorrect, we will swap the two numbers. Let's illustrate the steps!

1. We start from the input:

   [**16, 14**, 10, 8, 7, 8, 3, 2, 4, 1]

2. We compare the first two numbers (16, 14), i.e. **positions 0 and 1** in the list. Since 16 is bigger than 14, we will swap them.

   [**14, 16**, 10, 8, 7, 8, 3, 2, 4, 1]

3. Now we move to the next pair (16, 10), i.e. **positions 1 and 2** in the list. Since 16 is bigger than 10, we will swap them again.

   [14, **16, 10**, 8, 7, 8, 3, 2, 4, 1]

   [14, **10, 16**, 8, 7, 8, 3, 2, 4, 1]

4. And next pair (16, 8), i.e. **positions 2 and 3**. Since 16 is bigger than 8, we will swap.

   [14, 10, **16, 8**, 7, 8, 3, 2, 4, 1]

   [14, 10, **8, 16**, 7, 8, 3, 2, 4, 1]

5. We continue until 16 reaches the last position.

   [14, 10, 8, **16, 7**, 8, 3, 2, 4, 1]

   [14, 10, 8, **7, 16**, 8, 3, 2, 4, 1]

   --

   [14, 10, 8, 7, **16, 8**, 3, 2, 4, 1]

   [14, 10, 8, 7, **8, 16**, 3, 2, 4, 1]

   --

   [14, 10, 8, 7, 8, **16, 3**, 2, 4, 1]

   [14, 10, 8, 7, 8, **3, 16**, 2, 4, 1]

   --

   [14, 10, 8, 7, 8, 3, **16, 2**, 4, 1]

   [14, 10, 8, 7, 8, 3, **2, 16**, 4, 1]

   --

   [14, 10, 8, 7, 8, 3, 2, **16, 4**, 1]

   [14, 10, 8, 7, 8, 3, 2, **4, 16**, 1]

   --

   [14, 10, 8, 7, 8, 3, 2, 4, **16, 1**]

   [14, 10, 8, 7, 8, 3, 2, 4, **1, 16**]

So now the largest number has occupied its place in the last position. But the other numbers are still not in the right order. Therefore, we have to repeat the steps starting from the beginning again. We start from the pair (14, 10). This will repeat the **pair-wise** comparison and move 14 to the second last position. Similarly, we can see how 10 and 8 will reach their final position. Here, we no longer show the pair-wise comparison and swapping for brevity.

- [10, 8, 7, 8, 3, 2, 4, 1, **14, 16**]
- [8, 7, 8, 3, 2, 4, 1, **10, 14, 16**]
- [7, 8, 3, 2, 4, 1, **8, 10, 14, 16**]

At this point, we will start comparing the pair (7, 8). **But since 7 is not greater than 8, there is no swap**.

- [**7, 8**, 3, 2, 4, 1, **8, 10, 14, 16**]

Afterward, we will compare the pair (8, 3).

- [7, **8, 3**, 2, 4, 1, **8, 10, 14, 16**]

Since 8 is greater than 3, **there will be a swap**, and these **pair-wise swaps** will continue to push 8 to its final position.

- [7, 3, 2, 4, 1, **8, 8, 10, 14, 16**]

Now we begin again with the pair (7, 3) and push 7 to its final position. The detailed pair-wise swapping is not shown below, but the final arrangement at the end of this iteration will be as the one below.

- [3, 2, 4, 1, **7, 8, 8, 10, 14, 16**]

At this point, we will start a new iteration by comparing the pair (3, 2). Since 3 is greater than 2, there will be a swap. The next comparison will fall on the pair (3, 4), i.e. [2, **3, 4**, 1, 7, 8, 8, 10, 14, 16]. But since 3 is less than 4, there is no swap happening. And the rest of the comparison will push 4 to its final position.

- [2, 3, 1, **4, 7, 8, 8, 10, 14, 16**]

A similar situation occurs. There is no swap between (2, 3), but then it will swap (3, 1).

- [2, 1, **3, 4, 7, 8, 8, 10, 14, 16**]

In the last iteration, it wil swap (2, 1).

- [**1, 2, 3, 4, 7, 8, 8, 10, 14, 16**]

Here's an animated example from Wikipedia,sorting a different sequence of numbers.

![Animation for Bubble Sort](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

### Design of Algorithm

After we work on the test cases, we can now write down the steps in pseudocode. Several things to note from the above test cases:

- There are two iteration levels:
  1. the _inner_ iteration is when we compare the pairs (a, b) and do a swap if $a>b$,
  1. the _outer_ iteration is when repeat the inner iteration pass starting from the first pair again.
- The number of _inner_ iterations is $n-1$, where $n$ is the number of elements in the list. This is because the inner iteration compares a pair. So if there is $n$ elements, there will be $n-1$ pairs to compare.
- The number of _outer_ iterations is also $n-1$. You can refer back to the case above that there were 9 _outer_ iterations for the 10 elements.

Let's write down what we did in the above case. Note that in this algorithm we chose not to return the sorted list as a new object, but rather _sort the list in place_. This means that the input list is modified and the sorted list exists in the object pointed by the input list. The advantage of this is that the list need not be duplicated and the memory is saved as we deal only with one list.

<DeepDive title="Show Pseudocode">

```
Bubble Sort
Version: 1
Input: array
Output: None, sort in place
Steps:
1. n = length of array
2. For outer_index from 1 to n-1, do:
    2.1 For inner_index from 1 to n-1, do:
        2.1.1 first_number = array[inner_index - 1]
        2.1.2 second_number = array[inner_index]
        2.1.3 if first_number > second_number, do:
            2.1.3.1 swap(first_number, second_number)
```

</DeepDive>

## Optimized Bubble Sort

### Bubble Sort v2

We can optimize bubble sort by noting that:

> If the sequence is already in order, we can stop the _outer_ iteration.

For example, if the input is

[16, 1, 2, 3, 4, 5]

The first iteration will push 16 to the last position.

[1, 2, 3, 4, 5, **16**]

In the second iteration, no swap is made since all the numbers are already in the correct order. However, in v1, the outer iteration will still repeat for $n-1$ times. We can conclude therefore that if no swap is made in one pass of _outer_ iteration, the sequence is already in order, and we can stop the _outer_ iteration. Thus in this example, the number of _outer_ iterations is much less in v2 compared to v1. We can then modify the pseudocode as follows.

<DeepDive title="Show Pseudocode">

```
Bubble Sort
Version: 2
Input: array
Output: None, sort in place
Steps:
1. n = length of array
2. swapped = True
3. As long as swapped is True, do:
  3.1 swapped = False
  3.2 For inner_index from 1 to n-1, do:
      3.2.1 first_number = array[inner_index - 1]
      3.2.2 second_number = array[inner_index]
      3.2.3 if first_number > second_number, do:
          3.2.3.1 swap(first_number, second_number)
          3.2.3.2 swapped = True
```

</DeepDive>

### Bubble Sort v3

The n-th pass of the _outer_ iteration will always place the n-th largest number to its final position. For example, in the given input below,

[16, 14, 10, 8, 7, 8, 3, 2, 4, 1]

In the 1-st _outer_ pass, the 1-st largest number (i.e. 16) will be placed to its final position.

[14, 10, 8, 7, 8, 3, 2, 4, 1, **16**]

This means that we can reduce the number of _inner_ iterations. Instead of comparing $n-1$ pairs for each _inner_ iteration, we can reduce the number of _inner_ iteration after each pass of _outer_ iteration is done. For example, in the above example, we have 10 elements. In the first _outer_ iteration, we have 9 comparisons in the _inner_ iteration. In the next _outer_ iteration, we can simply do 8 comparisons instead of 9. In the third _outer_ iteration, we can do just 7 comparisons instead of 9, and so on.

We can further optimize and re-write the pseudocode:

<DeepDive title="Show Pseudocode">

```
Bubble Sort
Version: 3
Input: array
Output: None, sort in place
Steps:
1. n = length of array
2. swapped = True
3. As long as swapped is True, do:
  3.1 swapped = False
  3.2 For inner_index from 1 to n-1, do:
      3.2.1 first_number = array[inner_index - 1]
      3.2.2 second_number = array[inner_index]
      3.2.3 if first_number > second_number, do:
          3.2.3.1 swap(first_number, second_number)
          3.2.3.2 swapped = True
  3.3 n = n -1
```

</DeepDive>

The additional step is 3.3 which is to reduce the number of $n$. With this, Step 3.2 will decrease by one in the next _outer_ iteration.

### Bubble Sort v4

It can happen that more than one elements are in their final positions in one _outer_ iteration pass. This means that we don't have to decrease the number of _inner_ iteration by 1 on each step of _outer_ iteration. We can record down which position was the last swap at, and on the next _outer_ iteration, we can do comparison up to that last position. To illustrate this, consider the following input.

[1000, 1, 4, 7, 3, 10, 100]

In the first _outer_ pass, we push 1000 to its final position. This means we have $n-1$ comparisons and swaps.

[1, 4, 7, 3, 10, 100, 1000]

In the second _outer_ pass, we first compare the pair (1, 4), but no swap happens. Similarly with (4, 7). Now, when comparing the pair (7, 3), we do a swap to result in.

[1, 4, **3, 7**, 10, 100, 1000]

When we have a swap, we will record down our position. In this case, it is at the position of the **4th element in the list, or index 3** (if our index starts from 0). Subsequently, we compare (7, 10), but no swap happens. Similarly with (10, 100). We stop at this point because the second iteration only compares up to the second last element in the above algorithm.

Now, if we follow the previous algorithm, the next _outer_ pass will compare up to the third last element, which is 10. However, we note that the last five elements are already ordered. We know this because in the last pass, the last swap happens at (7, 3) to (3, 7) pair. In this case, we just need to run our _inner_ iteration up to this position, i.e. **4th position, or index 3**.

We can modify our pseudocode as follows.

<DeepDive title="Show Pseudocode">

```
Bubble Sort
Version: 4
Input: array
Output: None, sort in place
Steps:
1. n = length of array
2. swapped = True
3. As long as swapped is True, do:
  3.1 swapped = False
  3.2 new_n = 0
  3.3 For inner_index from 1 to n-1, do:
      3.3.1 first_number = array[inner_index - 1]
      3.3.2 second_number = array[inner_index]
      3.3.3 if first_number > second_number, do:
          3.3.3.1 swap(first_number, second_number)
          3.3.3.2 swapped = True
          3.3.3.3 new_n = inner_index
  3.4 n = new_n
```

</DeepDive>

In the above pseudocode, we set record down the position of the element on the last swap (step 3.3.3.3), and we assign this as the new ending position for the next _outer_ pass (step 3.4).
