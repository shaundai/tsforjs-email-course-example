## TS for JS - Migrating a React App to TypeScript

## Account-Based Selling with Salesloft - Front End

#### Web App using SalesLoft API

React Web App (front-end) with Node/Express proxy server (back-end) connected to SalesLoft API.  After using OAuth 2.0 to authorize an users, the SalesLoft REST API is accessed over HTTP to push and pull data from SalesLoft.

## Purpose
App allows SalesLoft users to take an account-based approach to their prospecting process.  In the app, reps see a dashboard with their top accounts organized by tier.  Reps can look at each account individually to see where they have the best account penetration by number of people in active cadences.  Users can also take action with the ability to add/remove users from cadences within the app.

#### Live project

Find the full live project on the [live app](https://shaundai-salesloft.surge.sh) or the [demo video of the authorization flow](https://share.vidyard.com/watch/SJDNmtNSmnPKhrdraGQTNM?)!  **Note that you will need a SalesLoft license in order to be authorized.**

## Installation
To run this app locally, clone this repository to your local machine.  Then follow the steps below:

#### Step 1:
Run npm install to get your package.json file

#### Step 1:
Get your SalesLoft client secret and ID.  Visit https://accounts.salesloft.com/oauth/applications and generate a client secret and ID

#### Step 2:
Create a file in the components folder called "Secrets" and copy the following code into the file:


    export const Secrets = {
        salesloftSecret: 'your-salesloft-secret',
        salesloftClientId:'your-salesloft-client-id',
    }


#### Step 3:
Replace 'your-salesloft-secret' and 'your-salesloft-client-id' with the Secret and Client ID that you generated in Step 1.

#### Step 4:
Change the *redirectUriPath* variable in Login.js from 'https://shaundai-salesloft.surge.sh' to 'http://localhost:3000' (or whichever local path you are using).  *redirectUriPath* should be a string with no slashes at the end.

#### Step 5:
Add the path that you use in Step 4 to your list of whitelisted Callback URLs in your [SalesLoft App Page](https://accounts.salesloft.com/oauth/applications).

#### Step 6:
Run the code locally by running 'npm start' in the terminal.


## Project Screen Shots

#### Homepage
![Homepage screenshot](./public/images/homepage.png?raw=true "Homepage")

#### Dashboard *(Actual Company Information Blurred)*
![Dashboard screenshot](./public/images/dashboard.png?raw=true "Dashboard")

#### Account Page *(Actual Company and Contact Information Blurred)*
![Account Page screenshot](./public/images/account-page.png?raw=true "Account Page")