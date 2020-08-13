# Assignmet 1

## Objective:
The Objective of this application is to understand the fundamentals of React.

### The estimated effort to complete this assignment is 3-4 hours

## Things to do
- Fork the boilerplate
- Clone the repo in your local directory
- Start coding in your local copy
- Push the code in git
- Submit the solution in Hobbes

## Boilerplate

React-Level-1-Assignment

## Expected Outcome:
By the end of the assignment you should be able to understand

1. Modules
2. Components
3. React with bootstrap
4. Data Binding
5. Dependency Injection
6. Services

## Prerequisites

1. Fork this boilerplate repository
2. Clone the boilerplate repository and cd into it
3. Install dependencies npm install
4. Run the backend json-server server/db.json which shall run on port:3000
5. Run the frontend npm run start which shall run on port:4200

## The NEWS API to be used as data source
- To get category wise news use the following end point. [Category News endpoint]
(https://newsapi.org/v2/top-headlines?category=<<news_category>>&apikey=<<api_key>>&page=1)
- To get trending news use the following endpoint. [Top Headlines endpoint]
(https://newsapi.org/v2/top-headlines?country=in&apikey=<<api_key>>&page=1)
- To search for any news based on serach text . [News search endpoint]
(https://newsapi.org/v2/everything?q=<<search_text>>&apiKey=<<api_key>>&language=en&page=1)
## To register for an API key, follow these steps:
- You need to signup to [NEWSAPI] (https://newsapi.org/register).

- After registration, API key is generated for you.

## Assignment:
This case study is about showing current and old News. Also give you an option to read any news later

1. News Manager should use Bootstrap Design for it’s UI
2. It should be able to get the news from newsapi.org.
3. It should be able to load the heading and image of all current news in the form of card.
4. Every card should have read later button.
5. As soon as user click on readlater button the full discription as well as link of that news should be stored into db.json


## Instructions 

1. To run Application use "npm start".
2. The application will run on the port 3000
3. To run json server use "npm run json-start" 
4. The json-server will run on the port 3001.
5. The appliation should contain 4 components.
    - Card
    - Dashboard
    - Footer
    - Header
6. All the test cases should be written in the test folder inside Src test folder
7. Install all the dependencies using npm install
8. To test your application please user command npm run test
9. To run the application use command npm start.
10. Each and every component should have atlest 5 unit test cases each.
11. Add data folder in src to keep your data.json
12. Add Component folder in src to keep your components

### Card component:-
- Used to display the news card which contains {urlToImage,title author}.

### Dashboard Component:-

- This component is responsoble to get the information from news api and pass it to card component as a prop.

- Header and Footer component is used to define the header and footer of the application.

Note:-

please recheck the name and the case of the component.



