# Directables
## An Instructables Clone
## by Kirin Agcaoili

## Link to Live Site:
https://directables.onrender.com/

## Description:
This clone of the Instructables website has create, read, update, and delete features for project instruction pages, posting comments on instruction pages, asking questions on instruction pages, answering the questions on instruction pages, and create, read, and delete features for favoriting a project instruction page.

## Tachnologies used:
The backend uses SqlAlchemy, Flask, and Faker in Python. The frontend uses Reach and Redux in JavaScript. The live site is hosted on Render and uses PostgresSQL. Locally, the database is SQLite.

## Usage description of features

## Home Page:
Here a user can see a list of up to 5 of the most recent project instructions posted in each of the site's seven categories as cards. Each card contains the instructions cover image, title, the creator's username, and functions as a link to the full instructions page.
![](/react-app/src/images/homepage.PNG)

## Project Instruction Page:
This page lists the title, author, number of favorites the page has received, a box with the author's name, and images and links to their 3 most recently made other instructions pages, an introduction to the instructions, supplies, and a list of steps for completing the project. If the logged in user is the creator of the page, there will be a button at the bottom right to make changes to the page.
![](/react-app/src/images/instructionspage1.PNG)
![](/react-app/src/images/instructionspage2.PNG)

## Comments Section:
This feature is at the bottom of each instruction page. Users must be logged in in order to leave a comment. Comments are listed in order of when they were posted and will show the user's username, how many days ago the comment was posted, the comment itself, and if the comment belongs to the logged in user, edit and delete buttons. If the user who left the comment is the creator of the instruction page, there will be an "(author)" tag next to their username.
![](/react-app/src/images/comments1.PNG)

## Favorites:
The amount of favorites an instructions page has received is listed at the top of each instruction page. Instructions that a logged in user has favorited are listed in the top right dropdown modal in the navigation bar. A logged in user can click a "Favorite" button on each instruction page to add it to their list of favorites and click it again in order to remove it from their favorites.
![](/react-app/src/images/favorites.PNG)

## Questions Section:
This feature is at the bottom of each instruction page and can be toggled into view by either clicking "Ask Question" throughout the page or clicking the large "Questions" button near the bottom of the page. Questions are listed in order of when they were posted and will show the user's username, how many days ago the question was posted, a "Question" tag, the question itself, and if the question belongs to the logged in user, edit and delete buttons. If the logged in user is not the creator of a question, they will be able to click an "Answer" button to open a similar input box to the question, comment, and edits to post an answer. Answers are listed in order of most recently posted underneath the question, with similar information to the question, except with an "Answer" tag. If the user who left the question or answer is the creator of the instruction page, there will be an "(author)" tag next to their username.
![](/react-app/src/images/questions.PNG)

## Create Project Instruction Page:
A logged in user can fill in data to create their own page of instructions to complete a project. A similar page is used in order to make changes to a project instruction page.
![](/react-app/src/images/create.PNG)

## User Info Dropdown:
When logged in, the top right of the navigation bar shows a "+New" button to create a new project instruction page and a button that opens a dropdown menu when clicked. The menu shows the logged in user's username, the amount of pages they've favorited, a list of links to each favorite, a list of links to each project instruction page the user has created, and a logout button.
![](/react-app/src/images/dropdown.PNG)

## Road Map
I would like to implement search and category features, as well as a profile page in order to hold user data, rather than putting it in the dropdown modal.

## Get started using my repo locally
Once downloading the repo in the top level run:
pipenv install
pipenv shell
pipenv install Faker
flask db upgrade
flask seed all
flask run

In the frontend folder run:
npm install
npm start

## Contact Us:
Kirin Agcaoili
[Email]: kirinagcaoili@gmail.com
[LinkedIn]: https://www.linkedin.com/in/kirin-agcaoili-a84a10187/
[GitHub]: https://github.com/kagc