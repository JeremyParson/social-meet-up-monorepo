# Social Meet Up App

## Description
The Social Meet Up App is a web application where users setup events at public locations and can find events associated with certain hobbies. The app was made to promote outdoor activities and leaving the house after the pandemic.

## Demo
You can visit the site here.

## Technologies
The app's frontend was built using React.js for client side rendering and Tailwind CSS for styling.

The backend uses Node JS and Express JS to handle api calls.

## Setup
Follow the instructions below to get an instance of the app working on your setup.

Prerequisites:
- Must have PGAdmin4 installed
- Must have Node JS installed

### Backend
1. In PGAdmin4 create a new database for the app
2. First fork this repository and clone it to your computer
3. CD into the backend folder and run `npm install`
4. Open `config.js` in the configuration folder and under the "development" configuration fill in your database configuration info.
4. Run `npx sequelize db:migrate:all` to migrate the necessary tables database
5. The backend is now ready, run `npm run dev` to start your app using the development configuration.

### Frontend
1. CD into the frontend folder and run `npm install`
2. Create a `.env` file with the variable `REACT_APP_SERVER_URL` and set it to the url of the backend server (by default it's http://localhost:3001)
3. Run `npm run start` to start the react app
