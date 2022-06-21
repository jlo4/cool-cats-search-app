# Cool cats search app
An app to list and search for cat breeds using https://api.thecatapi.com

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup
Install packages in client and server folders `npm install`

The server requires the following environment variables
`PORT`, `CAT_API_ROUTE=https://api.thecatapi.com/v1/`, and `CAT_API_KEY` which is an API key from [https://thecatapi.com](The Cat API)

Run the project from the main project folder with
`cd server && npm run start`

## Some useful scripts
In the server directory, you can run:

### `npm start`
The default settings run the client app on http://localhost:3000 and the server on http://localhost:4000

### `npm tsc-check`
This will run Typescript type checking for both the client and server.

In the client directory, you can run:
### `npm start`

Launches the client app only. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## The project prefers using
- [x] Typescript
- [x] Sass

## Project implements at least the following
- [x] Create-React-App with Typescript
- [x] Frontend unit tests
- [x] Lists all cat breeds (frontend / backend)
- [x] Gets a cat by name (backend)
- [x] Allows searching on the frontend
- [x] Allows sorting on the frontend