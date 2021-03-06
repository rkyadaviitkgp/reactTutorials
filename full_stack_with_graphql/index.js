var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var mysql = require('mysql');
var cors = require('cors');
var app = express();

app.use((req, res, next) => {
  req.mysqlDb = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mytestdb'
  });
  req.mysqlDb.connect();
  next();
});

var schema = buildSchema(`
  type User {
   id: String
   name: String
   job_title: String
   email: String
 }
 type Query {
   getUsers: [User],
   getUserInfo(id: Int) : User
 }
 type Mutation {
    updateUserInfo(id: Int, name: String, email: String, job_title: String): Boolean
    createUser(name: String, email: String, job_title: String): Boolean
    deleteUser(id: Int): Boolean
  }
`);

const queryDB = (req, sql, args) => new Promise((resolve, reject) => {
    req.mysqlDb.query(sql, args, (err, rows) => {
        if (err)
            return reject(err);
        rows.changedRows || rows.affectedRows || rows.insertId ? resolve(true) : resolve(rows);
    });
});

var root = {
  getUsers: (args, req) => queryDB(req, "select * from User").then(data => data),
  getUserInfo: (args, req) => queryDB(req, "select * from User where id = ?", [args.id]).then(data => data[0]),
  updateUserInfo: (args, req) => queryDB(req, "update users SET ? where id = ?", [args, args.id]).then(data => data),
  createUser: (args, req) => queryDB(req, "insert into users SET ?", args).then(data => data),
  deleteUser: (args, req) => queryDB(req, "delete from users where id = ?", [args.id]).then(data => data)
};


app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));





app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');


/*
CREATE TABLE User ( id int,  name varchar(255),  job_title varchar(255),  email varchar(255));
insert into User values (1, "rajesh", "engineer", "rkyadav.iitkgp@gmail.com");
*/
