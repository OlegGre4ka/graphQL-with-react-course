const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');


var app = express();
app.use('/graphql',expressGraphQL({
  schema,
  graphiql:true
}))

app.listen(4001,()=>{
  console.log('Listening! Amazing!')
})


module.exports = app;
