---
sidebar_position: 5
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";


# Mini Project 2: Math Quiz App

## Learning Objectives
In this mini project, you will develop a web app that evaluate math infix expressions using Streamlit. By the end of this assignment, you should be able to:
- Create a multi pages web app using Streamlit.
- Use OOP to process math infix expression.
- Read and Update tables in a Google Sheet from Streamlit.

Parts of the codes in this app uses Pandas library which you will learn on Week 9. You can ignore these lines of code or you can also search for more information of what it does. These parts of the code will be given for you.

## App Overview

The way that the app works is that users can create math questions which can be sent as a challenge to others users. So part of this application is that it allows you to create multiple users. You create your users in the page called "Users". 

The next feature is that the app allows you to create a math question. User will enter a math expression in infix notation and send this question to other users. The app allows you to send a single math challenge to *multiple* users. You create your questions in the page called "Questions".

The next feature is that one can select a user and try to attempt the challenge. We use a simple drop down list to select which user you are currently acting. Of course, in real world app, you need to implement an authentication system and this authentication will identify which user is attempting the challenge. You do this in the page called "Challenge".

Depending on which user you select, you will see different challenges that is sent to you. When you select one of the challenge, you will see the math questions and you can enter the answer. The app will record the elapsed time from when you select a challenge to the time you click the submit button for the answer. This time duration will be recorded and used to sort the Hall of Fame page.

The last feature is the Hall of Fame page where this page displays all the challenges created in the system. For each challenge, it displays the question, the correct answer and the top three users that answer this questions with the shortest duration. You can see this information in the "Hall of Fame" page.

## Expected Output

[See video of the expected output](https://sutdapac-my.sharepoint.com/:v:/g/personal/oka_kurniawan_sutd_edu_sg/EVg3IAggibhKu_E-x8wepoMBoRJ3fj20Qji83cKSgqBJ4A?e=KRaANl).

## Project Structure

Once you have downloaded the repository, you can go to the repository and to the folder for this mini project. The commands below assume you are working from Vocareum. If you work from your local computer, the path might be different depending on where you download the mini project directory.

Assuming you are at `/voc` folder in Vocareum, go to `mini-project-2-template` directory.

```shell
cd work/mini-project-2-template
ls
```

The last command should output the following:

```shell
Home.py		
README.md	
library.py
Pipfile		
pages
config.yaml
```

Notes:
- This handout can be found in the file `README.md`.
- `Home.py` is the main Python script that gives us the main home page for the Streamlit application. 
- `Pipfile` is a text file that describes the packages you need to create the virtual environment.
- `library.py` is the Python file for you to do your exercises.
- `pages` is a folder containing a few files which creates multiple pages in your web app.

## Creating a Virtual Environment 

**If you work on your local computer, you should open Anaconda Power Shell to do the following steps..**

In the following steps, we will only display the Unix/Linux commands which you can do in Vocareum:

Go to the root folder of mini project 2 template.

```shell
$ cd /voc/work/mini-project-2-template
```

First make sure that you have installed `pipenv` package. If not, run the following command in the terminal.

```shell
python -m pip install --user pipenv
```

We will call `mini-project-2-template` as the **root** folder of our application. 

From the root folder, install the packages specified in the `Pipfile`.
```shell
python -m pipenv install
```

The above steps will install Streamlit.


To activate the virtualenv, run
```shell
python -m pipenv shell
```

Alternatively, you can choose everytime you run a command to prepend that command with the following:
```shell
python -m pipenv run
```

Ok, so let's enter into the shell by typing:
```shell
python -m pipenv shell
```

You should see the word `(mini-project-2-template)` in your prompt something like:

```shell
(mini-project-2-template) user $
```

_To exit the virtual environment at the end of this mini project, simply type:_
```shell
exit
```

**All the subsequent exercises assumes you are in the virtualenv shell.**


## Multi Pages App

Similar to Mini Project 1, we have `Home.py` which is our home page for our Streamlit application. We only have a text to display here. One thing to note is that we use `st.write()` which supports Markdown syntax to create the HTML page.

```python
st.write("""
# Welcome to Mini Project 2

In this project, you will create a simple math game which you can send to different users.

To get started:
1. Click the User page and add a few users.
1. Click the Questions page and add some questions. Select which user you want to challenge.
1. Click the Challenge page and select that particular user. Choose the Challenge you want to attempt and put in the answer.
1. Click the Hall of Fame to see how you fare with other users.
""")
```

One important file in the root folder is the `library.py`. This is the file which you will put your OOP code to evaluate the math infix expression.

If you list the files under `pages` directory, you will see we have a few files which correspond to the different pages in our web app. 

```shell
ls pages
```

This will output the following:
```shell
1_Users.py		
2_Questions.py	
3_Challenge.py
4_Hall_of_Fame.py
```

You will need to modify some of these files in the subsequent exercises.

## Exercise 0: Creating Database using Google Sheet

You can watch the video to do this step at the end of the section. However, it is important that you read through the steps first before watching it.

Most application usually requires a persistent storage to store their data called a database. In this mini project, you will use Google Sheet as your database. For each team, you need to create one Google Sheet using the template given. Follow these steps.

1. [Open the Template for the Google Sheet database](https://docs.google.com/spreadsheets/d/15A6UP1_XBypiYmUtJ-z5AXqqHzn_vyFJjobjUc-HlYw/edit?usp=sharing).
1. Make a copy to your own Google Drive. Click "File"->"Make a copy". Save it to one of your teammates Google Drive.

Now, we are going to create a connection between our Streamlit app with the Google Sheet.

1. Make sure you are in your root directory.
1. [Enable API Access for a Project](https://docs.gspread.org/en/v5.7.1/oauth2.html#enable-api-access-for-a-project)
   * Head to [Google Developers Console](https://console.developers.google.com/) and create a new project (or select the one you already have).
   * In the box labeled “Search for APIs and Services”, search for “Google Drive API” and enable it.
   * In the box labeled “Search for APIs and Services”, search for “Google Sheets API” and enable it.
1. [Using Service Account](https://docs.gspread.org/en/v5.7.1/oauth2.html#for-bots-using-service-account)
   * Go to “APIs & Services > Credentials” and choose “Create credentials > Service account key”.
   * Fill out the form
   * Click “Create” and “Done”.
   * Press “Manage service accounts” above Service Accounts.
   * Press on ⋮ near recently created service account and select “Manage keys” and then click on “ADD KEY > Create new key”.
   * Select JSON key type and press “Create”.

You will automatically download a JSON file with credentials. It may look like this:
```json
{
    "type": "service_account",
    "project_id": "api-project-XXX",
    "private_key_id": "2cd … ba4",
    "private_key": "-----BEGIN PRIVATE KEY-----\nNrDyLw … jINQh/9\n-----END PRIVATE KEY-----\n",
    "client_email": "473000000000-yoursisdifferent@developer.gserviceaccount.com",
    "client_id": "473 … hd.apps.googleusercontent.com",
    ...
}
```

Remember the path to the downloaded credentials file. Also, in the next step you’ll need the value of client_email from this file.

**Very important!** Go to your spreadsheet and share it with a `client_email` from the step above. Just like you do with any other Google account. If you don’t do this, you’ll get a `gspread.exceptions.SpreadsheetNotFound` exception when trying to access this spreadsheet from your application or a script.

Inside `.streamlit/secrets.toml` place `service_account` configuration from downloaded JSON file, in the following format (where gsheets is your st.connection name):

```text
[connections.gsheets]
spreadsheet = "" # replace this with your sheet's URL
type = "service_account"
project_id = "" # replace this 
private_key_id = "" # replace this
private_key = "" # replace this
client_email = "" # replace this
client_id = "" # replace this
auth_uri = "" # replace this
token_uri = "" # replace this
auth_provider_x509_cert_url = "" # replace this
client_x509_cert_url = "" # replace this
universe_domain = "googleapis.com"
```

Videos:
* [Watch the video to setup the google sheet connection](https://sutdapac-my.sharepoint.com/:v:/g/personal/oka_kurniawan_sutd_edu_sg/EX8tM3QNTlVPpb9orbDE8EwBaHaU9Q_5ux_Td-vBcslSHw?e=eAhjRa&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D).
* [Watch the video to edit the secrets.toml](https://sutdapac-my.sharepoint.com/:v:/g/personal/oka_kurniawan_sutd_edu_sg/EajplxfT6V9Dm_K7oUiiFrUBzaZUluBbiFrgarvDj3fH4w?e=O31XwT&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

## Running Streamlit Application

We can try running the web app. In order to do that, make sure you are inside the virtual environment by typing the following command.
```shell
python -m pipenv shell
```

To run the web app, type the following in the terminal.
```shell
streamlit run Home.py
```

Streamlit will attempt to open a web browser at `localhost:8051` and you should be able to see the Home page with a sidebar menu. In vocareum, you can do a `CTRL-click` to the `localhost:8051` and it will open a new page in your browser.

Go to the page `Users` and check if you can see the user that was added to the Google Sheet. This ensures that your connection with the Google Sheet is successful.

To stop the web app, type `CTRL+C` in the terminal. 

## Users Page

The code for the `Users` page has been provided and you can see it under `pages/1_Users.py`. Let's dissect some of these so that you can use it for your subsequent pages.

```python
import streamlit as st
import pandas as pd
from streamlit_gsheets import GSheetsConnection
```

The only additional lines as compared to the first mini project is that we have imported `pandas` and `streamlit_gsheets`. The first package is used to deal with the data from the Google Sheet while the second package is used to make a connection to the Google Sheet.

```python
@st.cache_resource
def get_db_connection():
    conn = st.connection("gsheets", type=GSheetsConnection)
    return conn

conn = get_db_connection()
```

In the above lines, we create a function to get the connection object to the Google Sheet. The decorator `@st.cache_resource` is used so that the returned object is stored in the cache [^cacheresource]. This causes the Streamlit app to run this function only once even when the user reload the page. The reason for this is Streamlit's unique Data Flow.
[^cacheresource]: https://docs.streamlit.io/develop/api-reference/caching-and-state/st.cache_resource

Streamlit's architecture allows you to write apps the same way you write plain Python scripts [^dataflow]. To unlock this, Streamlit apps have a unique data flow: any time something must be updated on the screen, Streamlit reruns your entire Python script from top to bottom.
[^dataflow]: https://docs.streamlit.io/get-started/fundamentals/main-concepts#data-flow

This can happen in two situations:

1. Whenever you modify your app's source code.

1. Whenever a user interacts with widgets in the app. For example, when dragging a slider, entering text in an input box, or clicking a button.

And to make all of this fast and seamless, Streamlit does some heavy lifting for you behind the scenes. A big player in this story is the `@st.cache_data` and `@st.cache_resource` decorator, which allows developers to skip certain costly computations when their apps rerun. The difference between the two is that the first one is used to cache data while the second one is used to cache functions that return global resources, which in our case is the `conn` object. 

```python
users = conn.read(worksheet="Users")
users
```

The first line uses the connection object to read the data from the worksheet `Users`. Recall that our Google Sheet template has a few **sheets** and one of them is named `Users`. The sheets in the Google Sheets are as follows:

* Users
* Questions
* Challenges
* Challenge-Users
* Timerecord

Each sheet contains a table that stores our relational database. For example, the sheet `Users` contains `id`, `username` and `name` field in the table. 

In the second line of the Python code above, we have a single line `users`. This is called [Magic](https://docs.streamlit.io/develop/api-reference/write-magic/magic) command. Whenever we put a variable name, Streamlit will try to guess its data type and try to find the best widget to display this data. In this case `users` is a `DataFrame` and the users table will be displayed as a table in the Users page.

![](https://www.dropbox.com/scl/fi/ebwvnwmwpc3icd5meky9k/mp2_users_table.png?rlkey=mfgz1qcushwy3o3xbqlijo146&st=nkinm4bn&raw=1)

```python
with st.form("new_user", clear_on_submit=True):
    new_username = st.text_input("New Username:")
    new_name = st.text_input("Full Name:")

    submit = st.form_submit_button("Update User Table")
```

In the above code, we create a form for data submission when creating a user [^formsubmitbutton]. The form `new_user` contains three widgets:

* a Text Input widget which value is stored in a variable called `new_username`.
* another Text Input widget which value is stored into a variable called `new_name` .
* and a submit Button which return value is stored in a variable called `submit`. 

[^formsubmitbutton]: https://docs.streamlit.io/develop/api-reference/execution-flow/st.form_submit_button

Notice that the label for each widget is specified in the argument of these functions.

```python
if submit:
    if new_username and new_name:
        users.loc[len(users)] = [len(users), new_username,  new_name]
    conn.update(worksheet="Users",
                data=users)
    st.cache_data.clear()
    st.rerun()
```

Recall that `submit` is the variable that we assign `st.form_submit_button()`. The value that is returned by this function is a boolean. It will be `True` when the button is clicked. This means that all the codes under `if submit` line will be executed when the button "Update User Table" is clicked.

There are a few things happening here:

1. We check if the text input that stores username and name is empty or not. If it is not empty, we added one more row into the DataFrame `users` with three information: the id, the username and the name of the user. 
1. The code `users.loc[len(users)] = ...` is part of Pandas data frame library. Since you have not learnt it, you can skip this page. What it does is basically adding a new row into the data frame.
1. Since the id is just an integer that increases accordingly, we can use `len(users)` to get the next id (recall that the length of a list is always one greater than the index of the last element in the list). 
1. Next, we update the Google Sheet using `conn.update()` function. We specify which `worksheet` in the Google Sheet that we want to update and the data. The data to update is simply the DataFrame `users`.
1. The last two line is to clear the cache data and rerun the page. By clearing the cache, our app forces to read the Google Sheet connection again to display the updated table. You will see that the page refresh and the User table at the top of the page is updated with the latest user created.

You should test your app by adding new user using the form before moving on to the first exercise.

## Exercise 1: Infix Evaluation

Before proceeding, you need to write a class called `EvaluateExpression` which is the computation object used to evaluate the infix notation. In order to help you with this, we created a jupyter notebook to scaffold the problem into various steps. Do the task inside the jupyter notebook `mp2_exercises.ipynb`. 

[Watch the video of the how the infix evaluation works](https://sutdapac-my.sharepoint.com/:v:/g/personal/oka_kurniawan_sutd_edu_sg/EbLA8Ft2QyNFn6GzpoKcHUgBAvmyZkI2hNxrvuw9EKt5hA?e=UQ7PvZ)

Once you completed that task, copy paste your code inside youre `library.py` found in your root directory.

```python
class Stack:
    pass

class EvaluateExpression:
    pass
```

To test your `library.py`. Run the following command from the root directory.

```shell
pytest
```

It should get something like the following output. Make sure there is no Failure in the test before proceeding to the next exercise.

```shell
pytest
===================== test session starts ======================
platform darwin -- Python 3.11.5, pytest-8.3.5, pluggy-1.5.0
rootdir: /.../mini-project-2-template/
collected 4 items                                              

test_library.py ....                                     [100%]

====================== 4 passed in 0.02s =======================
(mp_calc) (py312) ➜  mp_calc git:(main) ✗ 
```

## Exercise 2: Questions Page

Now, we are ready to make use of the code for the infix notation evaluation. Open the file `pages/2_Questions.py` to do the following tasks.

```python
from library import EvaluateExpression
```

One thing to note is that, we imported the `EvaluateExpression` class into our Streamlit script here. The first few lines are familiar as they create the connection to the Google Sheet and read the Users table.

### Task 1

The first task to read another table which is stored in the sheet called `Questions` in the Google Sheet. Update the following code.

```python
# TODO: Task 1
# read the sheet with the name "Questions"
#
# question_data = None
```

Make sure you store the data frame to the variable `question_data` as it will be used in other parts of the script.

Hint: you can follow how we read the Users table from a few line above.

### Create New Question Form

The next few lines of the scripts is shown below.

```python
st.header("Questions List")
st.write(question_data)

st.header("Create New Question")
with st.form("new_question"):
    expression = st.text_input("Write a Math expression:")
    expression
```

What these lines of code do is the following:
* The first line creates a header called "Questions List".
* The next line display the data frame `question_data` which was read from the Google Sheet in Task 1.
* We then create another header called "Create New Questions".
* We then create a form called `new_question`. 
* Inside this form, we create a Text Input widget and store the value into a variable called `expression`.
* Then, we use the Magic command to display the `expression` data.

### Tasks 2 and 3

What you need to do in this part is to evaluate the math expression and get the resulting answer. To do this, we will do the following:

1. First, we will create an object instance of `EvaluateExpression` class and store is as `evaluatore`. This is to be done in Task 2. **Remember to pass on the `expression` variable to be evaluated.**
   ```python
    # TODO: Task 2
    # create an object instance of EvaluateExpression class
    # pass on the math expression to the object
    #
    # evaluator = None
    ```
1. Second, we need to call the method `evaluate()` to compute the result. Store the result as a number into `answer`. 
   ```python
    # TODO: Task 3
    # call the evaluate() method of the EvaluateExpression object
    # and store it
    #
    # answer = None
    ```

### Sending Challenges to Other Users

Part of the feature of this app is that you can send the math question to multiple users. To do this, we create a drop down list widget for you to select which users you want to send the question to.

```python
selected_users = st.multiselect("Select Users to answer this challenge.", users["username"])
submit = st.form_submit_button("Create Question")
```

### Tasks 4 

In this task, we need to read the Google Sheet again for two other tables. 

* Challenges table
* Challenge-Users table

These two tables are stored in the `Challenges` and `Challenge-Users` worksheets respectively. Modify the following code in your file.

```python
# TODO: Task 4
# read Challenges and Challenge-Users tables 
# from the Google Sheet to update
#
# read the Challenges worksheet into challenge_data variable
# challenge_data = None
#
# read the Challenge-Users worksheet into assoc_data variable
# assoc_data = None
```

Make sure you store the dataframe into these two variables `challenge_data` and `assoc_data` respectively.

The next few lines of the scripts update the data frames for the three tables:

* First, we create a new id for each of the tables.
  ```python
  question_id = len(question_data)
  challenge_id = len(challenge_data)
  assoc_id = len(assoc_data)
  ```
* Next, we update the Questions data frame and the Challenges data frame. Compare the variable inside the list on the right hand side with the field name of the Google Sheet in respective worksheet.
  ```python
  question_data.loc[question_id] = [question_id, expression, answer]
  challenge_data.loc[challenge_id] = [challenge_id, question_id]
  ```
* Lastly, for each user selected, we update the Challenge-User table. This table associates each challenge to individual users.
  ```python
  for user in selected_users:
      user_id = int(users.loc[users["username"] == user, "id"].iloc[0])
      assoc_data.loc[assoc_id] = [assoc_id, challenge_id, user_id]
  ```

### Task 5

Once the data frames have been udpated, we can store it back to the Google Sheet. In order to do these, ask the following questions:

* What are the names of the variables that store the data frame which we are to update?

Modify the following code in your file.

```python
# TODO: Task 5
# update the Google Sheet with the update dataframes
#
# update Questions worksheet
# conn.update(...)
#
# update the Challenges worksheet
# conn.update(...)
#
# update the Challenge-Users worksheet
# conn.update(...)
```

Hint: You can refer to `pages/1_Users.py` to see how to update a Google Sheet using the updated data frame.

Once you are done with this part, your web app should be working fine. The other two pages are written for you and you need not do anything. However, it is good if you try to understand what the code is doing and see if you can rewrite and modify this page to make it better.


## Apendix: Setup on Local Machine
### Install Git

You need to have Git to do the project in your local computer. Download and install the software according to your OS:

- Windows: [Git for Windows](https://git-scm.com/download/win)
- Mac OS: [Git for MacOS](https://git-scm.com/download/mac)

### Accepting an Assignment from Github Classroom

Find the link to accept the Github Classroom assignment from eDimension at the respective week. When you accept the Github Classroom assignments, it will create a private repository of the project in your Github account. 

If you do the project with more than one person, add your teammates when accepting the assignment in Github classroom. This allows your teammates to have access to the repository as well. 

Once you have your own local copy of the repository, you can clone the repository to your local machine.

### Downloading a Repository

Clone the mini project repository from Github. On your local computer's terminal or Git Bash, type the following:

```shell
git clone https://your-mini-project-2-repo-url
```

Replace the URL with your mini project 2 URL from the Github repository page.

### Setting Python Version

The `Pipfile` was tested in Vocareum with Python 3.10. If you use other version of Python that is higher than 3.10, you can edit `Pipfile` to your Python version.

```text
[requires]
python_version = "3.10" # edit this part to your Python version
```
