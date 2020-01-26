# Recommender system frontend part  
## client app (react)  

Server application is hosted with github pages: https://kacperkk2.github.io/recommender-client-app/  
To run client app locally: 'npm start' or with creating production build: 'npm run build', 'npm install -g serve', 'serve -s build'  
Client app requirements:  
node v8.10.0  
npm v6.13.4  

## Functionalities  
App consists of several sections:  
1) Algorithms: choosing algorithm to use in recommendation process, app presents algorithm name with short description and optionally link to implementation.  
2) Data sets: choosing data set for algorithm input, app presents data set name, number of users, number of items, density, and optionally short description.  
3) User id and Number of recommendations: place to choose user id from data set, to make recommendation for. It's also place to specify the length of ranking list from 3 values: 10, 20, 50.
4) Recommendations list and User history: after clicking button for getting recommendation, it's a place where will be presented results of algorithm work. There are two tables which present climbing routes that are recommended and climbing route which user ever visited.    

## Code files description  
src/App.js - main file, runs whole app  
src/components - all components app uses  
