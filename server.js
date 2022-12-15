const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();

// Use the sqlite3 module to open a database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    // Handle error
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Import the routes from the config/routes.js file
const routes = require('./config/routes');

// Use the imported routes to handle incoming requests
app.use('/', routes);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});
