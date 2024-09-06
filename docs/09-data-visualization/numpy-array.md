---
sidebar_position: 2
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# NumPy Array

In the subsequent lessons, we will work with NumPy array instead of Pandas dataframe. Pandas dataframe is based on Numpy's array and many of the operations are similar between the two. However, there are some differences as well.

<ChatBaseBubble/>

### Goals

By the end of this lesson, you should be able to:
- Convert Pandas Dataframe to NumPy Array
- Selecting data from NumPy Array
- Use mathematical, statistical and linear algebra functions on NumPy Array
- Creating new Numpy Arrays

:::keyword Keywords
`Data Frame`, `row`, `column`, `numpy array`, `zeros array`, `ones arrays`, `shape`, `axis`, `dimension`
:::

# Introduction to NumPy Array

NumPy array is more basic than Pandas' dataframe. In fact, Pandas' dataframe is based on NumPy array. At the same time, numpy array is more general and can be used for many other computations. Pandas' dataframe, on the other hand, is designed specifically to work with data in tabular format. 

## Converting Pandas' Dataframe to NumPy Array

We can convert Pandas dataframe easily to numpy array using `df.to_numpy()` function. For example, we can have the following code to read for a CSV file.

```python
df = pd.read_csv('mydata.csv')
array = df.to_numpy()
```

<><iframe src="https://trinket.io/embed/python3/3f36c796c05d" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

What is so different between Pandas dataframe and NumPy array. One obvious thing is that NumPy array is more plain. We no longer see any **row index** nor the **column names** in a NumPy array, unlike Pandas dataframe. We can still see a two dimensional data in NumPy array. This is because NumPy array can represent one dimensional, two-dimensional, or even higher dimensional arrays. Pandas makes use of NumPy array. For example, Pandas Series data type is based on a one-dimensional NumPy array. Similarly, Pandas dataframe is based on two-dimensional NumPy array. However, Pandas do not need higher dimension as most of its data is tabular similar to a spreadsheet. On the other hand, NumPy array is more general because it can represent higher dimensional array. This is useful, for example, when we deal with **tensors** such as in neural network and deep learning applications. This is one of the reason why we introduce NumPy array and makes use of NumPy array in our lessons here.

One of the properties that NumPy array has is its shape and we can obtain its shape in a similar way as we obtain Pandas dataframe shape. 

```python
print(array.shape)
```

Running the above code outputs the shape of our NumPy array which was converted from the Pandas dataframe.

```
(95858, 11)
```

The above output shows it has two dimensions since it is a two dimensional array. The first dimension is 95858 and the second dimension is 11. We can think of the first dimension as the *row* and the second dimension as the *column*. However, when we are moving to higher order array, the term row and column may lose its meaning. In NumPy, we prefer to use the word **axis**. The number of axes is the number of dimension of the array. In our case here, we have two axes. The first axis has 95858 data points and the second axis has 11 data points. The first axis is also indexed as **axis 0**. As you can guess, the second axis is **axis 1**. The numbering continues for higher dimensional array. This numbering is important because many NumPy's functions has an optional **axis** argument to specify. 

## Accessing NumPy Array Elements

We can access the elements of the array using the **get item operator**, i.e. the square bracket operator `[]`. For example, we can get the first row using the following code.

```python
print(array[0])
```

Another way to get the first row is to use the following.

```python
print(array[0, :])
```

NumPy use commas (`,`) to provide indices to access the elements at different axes. The first number before the first comma is for the first axis 0. The second number after the comma is to specify the elements to access in the second axis 1, and so on. In the code above, we access the first row (index 0) and all the columns (indicated by `:`).

This means that we can get the first column using a similar way as shown below.

```python
print(array[:, 0])
```

Notice that the output is printed as a one dimensional array.
```
['2017-01' '2017-01' '2017-01' ... '2021-04' '2021-04' '2021-04']
```
We get all the dates, because the first column is the date of the transaction of the resale house price. 

With this simple notation, we can get individual element in the array as well as sub-array within an array. For example, to get the element on the first row and second column, we can do the following.

```python
print(array[0, 1])
```

The output is
```
ANG MO KIO
```

We can also get a sub-array of the current array. Let's say, we want to get the first 10 rows of the second and third columns. We can write the following code.

```python
print(array[:10, 1:3])
```

The output is shown as follows.

```
[['ANG MO KIO' '2 ROOM']
 ['ANG MO KIO' '3 ROOM']
 ['ANG MO KIO' '3 ROOM']
 ['ANG MO KIO' '3 ROOM']
 ['ANG MO KIO' '3 ROOM']
 ['ANG MO KIO' '3 ROOM']
 ['ANG MO KIO' '3 ROOM']
 ['ANG MO KIO' '3 ROOM']
 ['ANG MO KIO' '3 ROOM']
 ['ANG MO KIO' '3 ROOM']]
 ```
 
 Notice that we used **slicing** similar to Python's list slicing. The column indices were `1:3` to get the second and third column. The last number, i.e. 3, which is column 4 is excluded. Similarly, the row takes from index 0 to 9 and excludes row index 10. We also utilizes the feature that if we do not specify any number before the `:` operator, by default, it will be from the beginning which is row 0. 

## Creating NumPy Array From Scratch

In this lesson, we started creating NumPy array by converting Pandas Dataframe. However, there are times when it is useful to create NumPy array from scratch. In this section, we will show some simple ways to create NumPy arrays. 

The first simple array is an array of zeros. This can be used when you know the size of your data and you want to initialize them all to zeros. NumPy has a function for this, i.e. `np.zeros()`. The argument to this function is the shape of the array. For example, to create an array of ten zeros, you can write the following.

```python
zeros = np.zeros(5)
```

Notice that if we print the shape using `zeros.shape`, it gives us the following.
```
(5, )
```

Notice that there is only one number because it is a one-dimensional array. If we print out this array, we will get the following.

```
array([0., 0., 0., 0., 0.])
```

We can create two dimensional array by providing a tuple for the argument of the function `np.zeros()`. For example, the following creates a 2x3 array which all elements are zero.

```python
>>> zero_matrix = np.zeros((2,3))
>>> zero_matrix
array([[0., 0., 0.],
       [0., 0., 0.]])
>>> zero_matrix.shape
(2, 3)
```

Notice the parenthesis `(2,3)` inside the argument of `np.zeros()`. With this, we can create a *row vector* or a *column vector*. For example, we can create a column vector of zeros with 10 elements using the following code.

```python
>>> col_vector = np.zeros((10,1))
>>> col_vector
array([[0.],
       [0.],
       [0.],
       [0.],
       [0.],
       [0.],
       [0.],
       [0.],
       [0.],
       [0.]])
```

Notice that our column vector is a two-dimensional array with one column. 

We also have another function `np.ones()` to create a NumPy array which all elements are ones. For example, we can use the following code to create a column vector of one.

```python
>>> col_vector_one = np.ones((10,1))
>>> col_vector_one
array([[1.],
       [1.],
       [1.],
       [1.],
       [1.],
       [1.],
       [1.],
       [1.],
       [1.],
       [1.]])
```

Sometimes, what we have is just a Python's list. NumPy allow us to convert Python's built-in list to NumPy array using `np.array()` function. For example, let's say we have a list of lists representing a matrix. We can convert this into a NumPy array using this function. Below is an example of how we can do so.

```python
>>> list_matrix = [[1, 2, 3],
...                [4,5,6]]
>>> array_matrix = np.array(list_matrix)
>>> array_matrix
array([[1, 2, 3],
       [4, 5, 6]])
```

## Operations on Array Elements

We can do various operations on the elements of the array. In the following section, we will show some of them. You should explore the NumPy documentation for more detail.

### Summation of Elements

One of the useful function is to sum the elements of the array. NumPy provides `np.sum()` to do this. 

```python
>>> array_matrix
array([[1, 2, 3],
       [4, 5, 6]])
>>> np.sum(array_matrix)
21
```

We can see that `np.sum()` sums all the elements into a single number. We can change the behaviour if we want to sum across the rows or the columns by providing the optional argument `axis`. For example, to sum across the rows, we do the following.

```python
>>> np.sum(array_matrix, axis=0)
array([5, 7, 9])
```

Recall that axis 0 is the dimension across the row. By providing `axis=0`, we sum the elements across the rows and we get three numbers for each of the column. We can also sum across the columns by specifying `axis=1`.

```python
>>> np.sum(array_matrix, axis=1)
array([ 6, 15])
```

Notice that we only have two numbers because we only have two rows. We get `6` from summing `[1, 2, 3]` which is the first row. We get `15` from summing `[4, 5, 6]`. 

### Statistical Functions

Similar to sum, we can also get some descriptive statistics of the elements. For example, we can get the mean or median using `np.mean()` and `np.median()`.

```python
>>> np.mean(array_matrix)
3.5
```

Similar to `np.sum()`, we can provide the `axis` information. 

```python
>>> np.mean(array_matrix, axis=0)
array([2.5, 3.5, 4.5])
>>> np.mean(array_matrix, axis=1)
array([2., 5.])
```

There are other statistical functions besides mean, such as standard deviation.

```python
>>> np.std(array_matrix, axis=0)
array([1.5, 1.5, 1.5])
>>> np.std(array_matrix, axis=1)
array([0.81649658, 0.81649658])
>>> 
```

For a more complete list of available functions, please refer to [NumPy statistics documentation](https://NumPy.org/doc/stable/reference/routines.statistics.html).

### Matrix Operations and Broadcasting

We will use matrix operations when we build our machine learning model and it is good to review some of these operations using NumPy array. NumPy makes it easy to work with vector and matrices. One powerful way is the concept of broadcasting. For example, we can add a scalar value to every element in a vector by just adding the vector with an integer as shown below.

```python
>>> ones = np.ones((5,1))
>>> ones + 1
array([[2.],
       [2.],
       [2.],
       [2.],
       [2.]])
```

In the example above, the scalar value `1` is broadcasted to every element of the vector `ones`. We also can multiply every element using the `*` operator and a scalar value. Below is another example of multiplying every element in a matrix with a scalar value.

```python
>>> array_matrix * 2
array([[ 2,  4,  6],
       [ 8, 10, 12]])
```

On top of that, NumPy allows you to do some common matrix operation such as vector addition with another vector and matrix multiplication. Let's give an example of a vector addition with another vector.

```python
>>> np.ones((5,1)) + np.ones((5,1))
array([[2.],
       [2.],
       [2.],
       [2.],
       [2.]])
```

Notice that we have created two column vectors which elements are all ones and we add them. For this addition  operation to work, the shape must be correct. In this case, we must have the same shape. If the shape is not the same, it will give an error.

```python
>>> np.ones((5,1)) + np.ones((7,1))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: operands could not be broadcast together with shapes (5,1) (7,1) 
```

However, due to broadcasting, you can actually add if the number of columns is different. For examples, see below code.

```pytthon
>>> np.ones((2,1)) + array_matrix
array([[2., 3., 4.],
       [5., 6., 7.]])
```

In the above example, the column vector of ones with length two is broadcasted to every column in the `array_matrix`. 

One common operation is matrix multiplication. For matrix multiplication, the dimension must be consistent. This means that the column size of the left matrix must be the same as the number of rows in the right matrix. To do matrix multiplication, we can use `np.matmul()`.

```python
>>> np.matmul(np.array([[1, 2]]) , array_matrix)
array([[ 9, 12, 15]])
```

Recall that `array_matrix` is as follows.

```python
>>> list_matrix = [[1, 2, 3],
...                [4,5,6]]
>>> array_matrix = np.array(list_matrix)
```

In the above example, we have, $1 \times 2$ matrix multiplied by $2 \times 3$ matrix, which results in a $1 \times 1$ matrix. 

## Summary

In this lesson, we have reviewed NumPy array and some operations that maybe useful for doing machine learning. Machine learning uses a significant operation of linear algebra. It is good that you review your matrix operation and get comfortable on doing those operations using NumPy. Some common operations that you will need to know is how to create a NumPy array, how to get its shape and access its elements. Moreover, there are some functions that is useful for you when working with NumPy arrays such as mathematical functions, statistical functions and lastly matrix operations.
