---
sidebar_position: 2
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Numpy Array

In the subsequent lessons, we will work with Numpy's array instead of Pandas' dataframe. Pandas' dataframe is based on Numpy's array and many of the operations are similar between the two. However, there are some differences as well.

<ChatBaseBubble/>

### Goals

By the end of this lesson, you should be able to:
- Convert Panda's DataFrame to Numpy Array
- Selecting data from Numpy Array
- Creating new Numpy Arrays

:::keyword Keywords
`Data Frame`, `row`, `column`, `numpy array`, `zeros array`, `ones arrays`
:::

# Introduction to Numpy Array

Numpy array is more basic than Pandas' dataframe. In fact, Pandas' dataframe is based on Numpy's array. At the same time, numpy array is more general and can be used for many other computations. Pandas' dataframe, on the other hand, is designed specifically to work with data in tabular format. 

## Converting Pandas' Dataframe to Numpy Array

We can convert Pandas' dataframe easily to numpy array using `df.to_numpy()` function. For example, we can have the following code to read for a CSV file.

```python
df = pd.read_csv('mydata.csv')
array = df.to_numpy()
```

<><iframe src="https://trinket.io/embed/python3/3f36c796c05d" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

What is so different between Pandas' dataframe and Numpy's array. One obvious thing is that numpy array is more plain. We no longer see any **row index** nor the **column names** in a numpy array, unlike Pandas' dataframe. We can still see a two dimensional data in numpy array. This is because numpy array can represent one dimensional, two-dimensional, or even higher dimensional arrays. Pandas makes use of numpy array. For example, Pandas' Series data type is based on a one-dimensional numpy array. Similarly, Pandas' dataframe is based on two-dimensional numpy array. However, Pandas do not need higher dimension as most of its data is tabular similar to a spreadsheet. On the other hand, numpy array is more general because it can represent higher dimensional array. This is useful, for example, when we deal with **tensors** such as in neural network and deep learning applications. This is one of the reason why we introduce numpy array and makes use of numpy array in our lessons here.

One of the properties that Numpy array has is its shape and we can obtain its shape in a similar way as we obtain Pandas' dataframe shape. 

```python
print(array.shape)
```

Running the above code outputs the shape of our numpy array which was converted from the Pandas' dataframe.

```
(95858, 11)
```

The above output shows it has two dimensions since it is a two dimensional array. The first dimension is 95858 and the second dimension is 11. We can think of the first dimension as the *row* and the second dimension as the *column*. However, when we are moving to higher order array, the term row and column may lose its meaning. In Numpy, we prefer to use the word **axis**. The number of axes is the number of dimension of the array. In our case here, we have two axes. The first axis has 95858 data points and the second axis has 11 data points. The first axis is also indexed as **axis 0**. As you can guess, the second axis is **axis 1**. The numbering continues for higher dimensional array. This numbering is important because many Numpy's functions has an optional **axis** argument to specify. 

## Accessing Numpy Array Elements

We can access the elements of the array using the **get item operator**, i.e. the square bracket operator `[]`. For example, we can get the first row using the following code.

```python
print(array[0])
```

Another way to get the first row is to use the following.

```python
print(array[0, :])
```

Numpy use commas (`,`) to provide indices to access the elements at different axes. The first number before the first comma is for the first axis 0. The second number after the comma is to specify the elements to access in the second axis 1, and so on. In the code above, we access the first row (index 0) and all the columns (indicated by `:`).

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

## Creating Numpy Array From Scratch


