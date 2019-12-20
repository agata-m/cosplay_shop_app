# COSCRAFTS
## Visit app on [Heroku](https://coscrafts.herokuapp.com/) or [Firebase](https://coscrafts-app.firebaseapp.com/)

## Final project for Web Developer Bootcamp.
Coscrafts is an online store platform selling cosplay materials and read-made props. The app was created with create-react-app and adopted to the PWA standards. 

## Structure of the app:
- front-end files are located in the `client/src` directory, built version in `client/build`
- back-end files are located in the `server` directory
- database is hosted on MongoDB Atlas Cluster (data is also available in `server/testData.js`)

## Technologies used for the project:
- Mongo.db (Mongoose)
- Express
- React (Redux, React Router)
- Node.js
- Webpack, Babel, Axios
- Bootstrap, Reactstrap

## Features
- page header with menu navigation and link to cart
- list of products (varying number of items and pagination displayed)
- function of sorting items by price or name
- single product page with items details
- adding, removing, and changing the number of items in cart
- calculating prices for each product and order total
- discount code functionality
- order summary with product list
- link to cloud database

## Scripts
1. To install the app clone the project and use `yarn install`
2. To run the development environment for the app use `yarn start:dev`
3. For production build of the app use `yarn build`
