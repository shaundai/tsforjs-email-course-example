## Account-Based Selling with SalesLoft

#### SalesLoft Web App

React Web App connected to SalesLoft API.  Allows SalesLoft users to see the accounts in their name and the people who are currently in active cadences at each of those accounts.

#### Live project

Find the full live project on the [live app](https://shaundai-salesloft.surge.sh) or the [demo video of the authorization flow](https://share.vidyard.com/watch/SJDNmtNSmnPKhrdraGQTNM?)!  **Note that you will need a SalesLoft license in order to be authorized.**

Check out the [back-end Node/Express code here](https://github.com/shaundai/shaundai-salesloft-node).

## Installation
To run the front-end locally, clone this git repository to your local machine.  Then follow 6 easy steps:

#### Step 1: Get a client secret and ID
Visit https://accounts.salesloft.com/oauth/applications and generate a client secret and ID

#### Step 2:
Create a file in the components folder called "Secrets" and copy the following code into the file:

---

    export const Secrets = {
        salesloftSecret: 'your-salesloft-secret',
        salesloftClientId:'your-salesloft-client-id',
    }

---

#### Step 3:
Replace 'your-salesloft-secret' and 'your-salesloft-client-id' with the Secret and Client ID that you generated in Step 1.

#### Step 4:
Change the redirectUriPath variable in Login.js from 'https://shaundai-salesloft.surge.sh' to http://localhost:3000 (or whichever local path you are using)


#### Step 5:
Add the path that you use in Step 4 to your list of whitelisted Callback URLs in your [SalesLoft App Page](https://accounts.salesloft.com/oauth/applications).

#### Step 6:
Run the code locally by running 'npm start' in the terminal.


## Project Screen Shots
![Homepage screenshot](./public/images/homepage.png?raw=true "Homepage")

## Reflection
