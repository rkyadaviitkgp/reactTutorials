const express = require('express');
const gp = require('express-graphql');
const schema = require('./schema.js');

if(typeof URLSearchParams === 'undefined'){
    URLSearchParams = require('url').URLSearchParams;
}

const app = express();
const {graphqlHTTP} = gp;
app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql: true
}));

//console.log(gp);

app.listen(4000, () => {
console.log("server is runing on port 4000 ...");
});