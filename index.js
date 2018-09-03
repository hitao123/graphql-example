const express = require('express');
const graphQLHTTP = require('express-graphql');
const schema = require('./schema')();

const app = express();

app.use('/graphql', graphQLHTTP({
  schema,
  graphiql: true
}));

app.listen(30000, function() {
  console.log('Server start at port 20000\n');
})