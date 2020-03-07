var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    var q = "insert into user(UserId,FirstName,LastName,Address,City) values( " + req.body.userid + ", '" +req.body.firstname+ "', '" +req.body.lastname+ "', '" +req.body.address+ "', '" +req.body.city+"' )";
    res.locals.connection.query( q, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;


/*
"insert into user(UserId,FirstName,LastName,Address,City) values('1','suresh', 'yadav', 'madhapur', 'hyderabad')"
`insert into members(name,email) values(''+req.body.userid+'',''+req.body.email+'')`
*/ 