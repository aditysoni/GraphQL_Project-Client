const express = require('express');
const colors = require('colors');
const cors = require('cors');
// require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./db');


const app = express();

// Connect to database
connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: 'development',
  })
);

app.listen(6009, console.log("Server running on port "));