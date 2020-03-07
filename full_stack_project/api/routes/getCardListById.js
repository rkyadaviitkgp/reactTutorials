var express = require('express');
var router = express.Router();


router.get('/:id', function(req, res, next) {
    //res.send('API is working properly');
    //var queryString = 'SELECT * from list where id=?'
    res.locals.connection.query('SELECT * from list where cardid=?', req.params.id, function (error, results, fields) {
    	if (error) throw error;
         res.send(JSON.stringify(results));
         
     });
});

module.exports = router;