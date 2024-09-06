---
sidebar_position: 1
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Working With Data

Python Pandas is a powerful open-source library that provides high-performance data structures and data analysis tools, making it a popular choice for data manipulation, cleaning, analysis, and visualization tasks.

<ChatBaseBubble/>

### Goals

By the end of this lesson, you should be able to:

- Give example of **linear regression and classification**
- Create a **Panda's DataFrame** and selecting data from DataFrame
- Using Panda's library to read `CSV` file
- **Split** data randomly into training set and testing set
- **Normalize** data using z-normalizatin and min-max normalization

:::keyword Keywords
`Data Frame`, `Series`, `index`, `column`, `vectorized operation`, `normalization`, `z-norm`, `min-max`, `dataset`, `test set`, `training set`, `validation set`
:::

# Short Introduction to Machine Learning

In the previous weeks we have discussed how various computation can be done. We begin by discussing computational complexity and divide and conquer strategy through recursion. We then discusses how data can have computation associated with it through object oriented programming. We discussed several data structures and algorithms associated with various problems. We then end up with offering a different perspective by looking at computation as a state machine.

In this second half of the course, we will look into how computation can learn from data in order to make a new computation. This new computation is often called a **prediction**. In these lessons, we focus on what is called as **supervised machine learning**. The word supervised machine learning indicates that the computer learns from some existing data on how to compute the prediction. An example of this would be given some images labelled as "cat" and "not a cat", the computer can learn to predict (or to compute) whether any a new image given to it is a cat or not a cat.

|                                            cat                                             |                               not a cat                               |
| :----------------------------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| ![](https://upload.wikimedia.org/wikipedia/commons/f/ff/Cat_on_laptop_-_Just_Browsing.jpg) | ![](https://upload.wikimedia.org/wikipedia/commons/4/49/Catfish.jpeg) |

Another example would be given a some data of housing prices in Singapore with the year of sale, area, number of rooms, and its floor hight, the computer can predict the price of another house. One other example would be given data of breast cancer cell and its measurements, one can predict whether the cell is malignant or benight. Supervised machine learning assumes that we have some existing data **labelled** with this category "malignant" and "benign". Using this labelled data (supervised), the computer can predict the category given some new data.

## Reading Data

The first step in machine learning would be to understand the data itself. In order to do that we need to be able to read data from some source. One common source is a text file in the form of CSV format (comma separated value). Another common format is Excel spreadsheet. The data can be from some databases or some server. Different data sources will require different ways of handling it. But in all those cases we will need to know how to read those data.

For this purpose we will use [Pandas](https://pandas.pydata.org/) library to read our data. We import the data into our Python code by typing the following code.

```python
import pandas as pd
```

Now we can use Pandas functions to read the data. For example, if we want to read a CSV file, we can simply type:

```python
df = pd.read_csv('mydata.csv')
```

Let's take an example of Singapore housing prices. We can get some of these data from [Data.gov.sg](https://data.gov.sg/). We have downloaded the CSV file so that you can access it simply from the following [dropbox link](https://www.dropbox.com/s/jz8ck0obu9u1rng/resale-flat-prices-based-on-registration-date-from-jan-2017-onwards.csv?raw=1). We can use the url to the raw file to open the CSV in our Python code.

<><iframe src="https://trinket.io/embed/python3/83a9aa0665?start=result" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

:::tip
We can also treat this data frame as a kind of matrix to find its shape using `df.shape`.
:::

As we can see, the data contains 95858 rows and 11 columns. One of the column names is called `resale_price`. Since our aim is to predict the house price, this column is usually called the **target**. The rest of the columns is called the **features**. This means that we have about 10 feature columns.

The idea supervised machine learning is that using the given data such as shown above, the computer would like to predict what is the _target_ give a new set of _features_. The computer does this by _learning_ the existing labelled data. The label in this case is the resale price from the historical sales data.

In order to understand the data, it is important to be able to manipulate and work on the data frame.

## Data Frame Operations

It is important to know how to manipulate the data. Pandas has two data structures:

- [Series](https://pandas.pydata.org/docs/user_guide/dsintro.html#series)
- [DataFrame](https://pandas.pydata.org/docs/user_guide/dsintro.html#dataframe)

You can consider `Series` data as one-dimensional labelled array while `DataFrame` data as two-dimensional labelled data structure. For example, the table that we saw previously, which is the output of `read_csv()` function, is a `DataFrame` because it has both rows and columns and, therefore, two dimensional. On the other hand, we can access just one of the columns from the data frame to get a `Series` data.

### Getting a Column or a Row as a Series

You can access the column data as series using the square bracket operator.

```python
df[column_name]
```

```python
print(df['resale_price'])
print(type(df['resale_price']))
```

The code above prints the column `resale_price` and its type.

> It can be seen that the type of the output is a `Series` data type.

You can also get some particular row by specifying its `index`.

You can access the column using the `.loc[index, column]` method. In this method, you need to specify the labels of the index. For example, to access all the rows for a particular column called `resale_price`, we can do as follows. Notice that we use `:` to access all the rows. Moreover, we specify the name of the columns in the code below.

```python
print(df.loc[:, 'resale_price'])
print(type(df.loc[:, 'resale_price']))
```

In the above code, we set the index to access all rows by using `:`. Recall that in Python's list slicing, we also use `:` to access all the element. Similarly here, we use `:` to access all the rows. In a similar way, we can use `:` to access all the columns, e.g. `df.loc[:, :]` will copy the whole data frame.

This also gives you a hint how to access a particular row. Let's say, you only want to access the first row, you can type the following.

```python
print(df.loc[0, :])
print(type(df.loc[0, :]))
```

In the above code, we access the first row, which is at index 0, and all the columns.

Recall that all these data are of the type `Series`. You can create a Data Frame from an existing series just like when you create any other object by instantiating a `DataFrame` object and passing on an argument as shown below.

```python
df_row0 = pd.DataFrame(df.loc[0, :])
df_row0
```

Here's all the code so far in action regarding extracting a col or a row as `Series`:

<><iframe src="https://trinket.io/embed/python3/b96543051f?start=result" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

### Getting Rows and Columns as DataFrame

The operator `:` works similar to Python's slicing but with some difference in behaviour depending you are using `.loc` or `.iloc`. For example, you can access the first 10 rows as follows.

```python
df_new = df.loc[0:9, :]
```

Notice that the rows included are from 0 to 9 inclusive with a total of 10 rows. The ending number after the `:` character is included by `.loc` object. This is unlike slicing in Python which is exclusive of the ending index. 

:::think
What would be the datatype of `df_new`?
:::

If you want to select the column, you can pass on a list of columns as follows:

```python
columns = ['town', 'block', 'resale_price']
df.loc[:, columns]
```

A similar output can be obtained without `.loc`:

```python
df[columns]
```

You can also combine specifying the rows and the columns as usual using `.loc`:

```python
df.loc[0:10, columns]
```

The index is not always necessarily be an integer. Pandas can take strings as the index of a data frame. But there are times, even when the index is not an integer, we still prefer to locate using the position of the rows to select. In this case, we can use `.iloc[position_index, position_column]`.

```python
columns = [1, 3, -1]
df.iloc[0:10, columns]
```

The above code gives the same data frame but it uses different input to specifies. By using `.iloc[]`, we specify the position of the index and the columns instead of the label of the index and the columns. It happens that for the index, the position numbering is exactly the same as the label.

For `.iloc` the ending index is exclusive similar to Python slicing. For example, if we want to get the first 10 rows, we would use the following.

```python
df.iloc[0:10, columns]
```

This will extract row position 0 to 9 which results in 10 rows in total. Compare this with the following code.

```python
df.loc[0:9, columns]
```

Here's all the code so far in action to get rows and columns as `Dataframe`:
<><iframe src="https://trinket.io/embed/python3/cc9d867b98?start=result" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

### Selecting Data Using Conditions

We can use conditions with Pandas' data frame to select particular rows and columns using either `.loc[]` or `.iloc[]`. The reason is that these methods can take in boolean arrays.

Let's see some examples below. First, let's list down the resale price by focusing on the block at a given town.

```python
columns = ['town', 'block', 'resale_price']
df.loc[:, columns]
```

Let's say we want to see those sales where the price is greater than \$500k. We can put in this condition in filtering the rows.

```python
df.loc[df['resale_price'] > 500_000, columns]
```

:::note
Python ignores the underscores in between numeric literals and you can use it to make it easier to read.
:::

Let's say if we want to find all those sales between \\$500k and \\$600k only, we can use the AND operator `&` to have more than one conditions.

```python
df.loc[(df['resale_price'] >= 500_000) & (df['resale_price'] <= 600_000), columns]
```

:::note
The parenthesis separating the two AND conditions are <span style={{ "color":"red", "fontWeight": "bold" }}>compulsory</span>. [You can read further details here](https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#boolean-indexing).
:::

We can also specify more conditions. For example, we are only interested in ANG MO KIO area. We can have the following code:

```python
df.loc[(df['resale_price'] >= 500_000) & (df['resale_price'] <= 600_000) &
       (df['town'] == 'ANG MO KIO'), columns]
```

If you are interested only in blocks 300s and 400s, you can add this conditions further.

```python
df.loc[(df['resale_price'] >= 500_000) & (df['resale_price'] <= 600_000) &
       (df['town'] == 'ANG MO KIO') &
       (df['block'] >= '300') & (df['block'] < '500'), columns]
```

Here's all the code so far in action to select data using conditions:
<><iframe src="https://trinket.io/embed/python3/ed73c912ad?start=result" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

## Series and DataFrame Functions

Pandas also provides several functions that can be useful in understanding the data. In this section, we will explore some of these.

### Creating DataFrame and Series

We can create a new DataFrame from other data type such as dictionary, list-like objects, or Series. For example, given a `Series`, you can convert into a `DataFrame` as shown below.

```python
price = df['resale_price']
print(isinstance(price, pd.Series)) # True
price_df = pd.DataFrame(price)
print(isinstance(price_df, pd.DataFrame)) # True
print(price_df)
```

Similarly, you can convert other data to a `Series` by using its contructor. In the example below, we create a new series from a list of integers from 2 to 100.

```python
new_series = pd.Series(list(range(2,101)))
print(isinstance(new_series, pd.Series)) # True
print(new_series)
```

### Copying

One useful function is to copy a data frame to another dataframe. We can use `df.copy()`. This function has an argument `deep` which by default is `True`. If it is true, it will do a deep copy of the Data Frame. Otherwise, it will just do a **shallow** copy. See [Pandas documentation here](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.copy.html).

```python
df_1 = df  # shallow copy of df
df_2 = df.copy # deep copy of df
print(df_1 is df) # True
print(df_2 is df) # False
```

### Statistical Functions

We can get some descriptive statistics about the data using some of Pandas functions. For example, we can get the five point summary using `.describe()` method.

```python
df.describe()
```

<><iframe src="https://trinket.io/embed/python3/c08518ee22?start=result" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

The above code only shows a few columns because the other columns are not numbers. Pandas will only try to get the statistics of the columns that contain numeric numbers. We can also get the individual statistical functions as shown below.

```python
print(df['resale_price'].mean()) # 446724.22886801313
print(df['resale_price'].std()) #  155297.43748684428
print(df['resale_price'].min()) # 140000.0
print(df['resale_price'].max()) # 1258000.0
print(df['resale_price'].quantile(q=0.75)) # 525000.0
```

You can change the way the statistics is computed. Currently, the statistics is calculated over all the rows in the vertical dimension. This is what is considered as `axis=0` in Pandas. You can change it to compute over all the columns by specifying `axis=1`.

```python
df.mean(axis=1)
```

<><iframe src="https://trinket.io/embed/python3/3a822b0659?start=result" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

:::warning
In the future, Pandas only want to compute the mean from the numeric data across the columns, so you need to select only valid columns before calling `mean`.
:::

### Transposing Data Frame

You can also change the rows into the column and the column into the rows. For example, previously we have this data frame we created from a `Series` when extracting row 0.

```python
df_row0 = pd.DataFrame(df.loc[0, :])
```

In the above code, the column is row 0 and the rows are the different column names. You can transpose the data using the `.T` property.

```python
df_row0_transposed = df_row0.T
```

<><iframe src="https://trinket.io/embed/python3/4d0ebfa1ce?start=result" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

### Vector Operations

One useful function in Pandas is `.apply()` (see [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.apply.html)) where we can apply some function to all the data in the column or row or Series in a vectorized manner. In this way, we need not iterate or loop the data one at a time to apply this computation.

For example, if we want to create a column for resale price in terms of $1000, we can use the `.apply()` method by dividing the `resale_price` column with 1000.

```python
def divide_by_1000(data):
    return data / 1000

df['resale_price_in1000'] = df['resale_price'].apply(divide_by_1000)
df['resale_price_in1000']
```

The method `.apply()` takes in a function that will be processed for every data in that Series. Instead of creating a named function, we can make use of Python's **lambda** function to do the same.

```python
df['resale_price_in1000'] = df['resale_price'].apply(lambda data: data/1000)
df['resale_price_in1000']
```

:::info
Lambdas are Python's anonymous function. It is convenient to declare inline function without the need to **name** them if we are going to use it just once.
[Read more about it here.](https://realpython.com/python-lambda/)
:::

Notice that the argument in `divide_by_1000()` becomes the first token after the keyword `lambda`. The return value of the function is provided after the colon, i.e. `:`.

You can use this to process and create any other kind of data. For example, we can create a new categorical column called "Pricey" and set any sales above \$500k is considered as pricey otherwise is not. If it is pricey, we will label it as 1, otherwise, as 0.

```python
df['pricey'] = df['resale_price_in1000'].apply(lambda price: 1 if price > 500 else 0 )
df[['resale_price_in1000', 'pricey']]
```

In the above function, we use the if _expression_ to specify the return value for the lambda function. It follows the following format:

```python
expression_if_true if condition else expression_if_false
```

There are many other Pandas functions and methods. It is recommended that you look into the documentation for **further references**.

Here's all the code we have so far regarding vector operations:

<><iframe src="https://trinket.io/embed/python3/b7050f714a?start=result" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

### More References

- [Pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html)
- [Pandas API Reference](https://pandas.pydata.org/docs/reference/index.html)

## Normalization

Many times, we will need to normalize the data, both the features and the target. The reason is that each column in the dataset may have different scales. For example, the column `floor_area_sqm` is in between 33 to 249 while `lease_commense_date` is actually in a range between 1966 and 2019. Try the code below to obtain statistics for these two columns.

```python
display(df['floor_area_sqm'].describe())
display(df['lease_commence_date'].describe())
```

<><iframe src="https://trinket.io/embed/python3/5b7ed336ab?start=result" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

As we will see later in subsequent weeks, we usually need to normalize the data before doing any training for our machine learning model. There are two common normalization:

- z normalization
- minmax normalization

> You will work on the functions to calculate these normalization in your problem sets.

### Z Normalization

This is also called as standardization. In this tranformation, we move the mean of the data distribution to 0 and its standard deviation to 1. The equation is given as follows.

$$
normalized = \frac{data - \mu}{\sigma}
$$

### Min-Max Normalization

In this transformation, we scale the data in such a way that the maximum value in the distribution is 1 and its minimum value is 0. We can scale it using the following equation.

$$
normalized = \frac{data - min}{max - min}
$$

## Splitting Dataset

One common pre-processing operations that we normally do in machine learning is to split the data into:

- **training** dataset
- **test** dataset

The idea of splitting the dataset is simply because we should **NOT** use the same data to verify the model which we train. Let's illustrate this using our HDB resale price dataset. We have this HDB resale price dataset with 95858 entries. In our machine learning process, we would like to use this data to do the following:

1. Train the model using the dataset
1. Verify the accuracy of the model

If we only have one dataset, we cannot use the same data to verify the accuracy with the ones we use to train the model. This bias would obviously create high accuracy. The analogy is like when a teacher giving exactly the same question during the exam as the ones during the practice session.

To overcome this, we should split the data into two. One set is used to train the model while the other one is used to verify the model. Coming back to the analogy of the teacher giving the exam, if the teacher has a bank of questions, he or she should separate the questions into two. Some questions can be used for practice before the exam, while the rest can be used as exam questions.

If we illustrate this using our HDB resale price dataset, this means that we have to split the table into two. Out of 95868 entries, we will take some entries as out training dataset and leave the rest for out test dataset. The common proportion is either 70% or 80% for the training dataset and leave the other 30% or 20% for the test dataset.

One important note is that the split must be done **randomly**. This is to avoid systematic bias in the split of the dataset. For example, one may enter the data according to the flat type and so flat with smaller rooms and smaller floor area will be on the top rows and those with the larger flats will be somewhere at the end of the rows. If we do not split the data randomly, we may not have any larger flats in our training set and only use the smaller flats. Similarly it can happen with any other column such as the block or the town area.

There are times in machine learning, we need to experiment with different parameters and find the optimum parameters. In these cases, the dataset is usually split into three:

- **training** dataset, which is used to build the model
- **validation** dataset, which is used to evaluate the model for various parameters and to choose the optimum parameter
- **test** dataset, which is used to evaluate the model built with the optimum parameter found previously

You will see some of these application in the subsequent weeks.
