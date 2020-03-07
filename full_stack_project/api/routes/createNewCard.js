var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    var q = "insert into card(title) values( '"+req.body.title+"' )";
    res.locals.connection.query( q, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;


/*
CREATE TABLE card ( id int NOT NULL AUTO_INCREMENT, title varchar(255) NOT NULL, PRIMARY KEY (id));
"insert into user(UserId,FirstName,LastName,Address,City) values('1','suresh', 'yadav', 'madhapur', 'hyderabad')"
`insert into members(name,email) values(''+req.body.userid+'',''+req.body.email+'')`
*/ 