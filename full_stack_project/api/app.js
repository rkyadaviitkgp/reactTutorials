var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var port = 9000;
//var etag = require('etag');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var createUserRouter = require('./routes/createUser');
var createNewCardRouter = require('./routes/createNewCard');
var cardsRouter = require('./routes/cards');
var newListRouter = require('./routes/newList');
var newModifyList = require('./routes/modifyList');

var app = express();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var mysql = require('mysql');
//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'mytestdb'
	});
	res.locals.connection.connect();
	next();
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.disable('etag');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/createUser", createUserRouter);
app.use("/createNewCard", createNewCardRouter);
app.use("/cards", cardsRouter);
app.use("/newList", newListRouter);
//app.use("/getCardListById/:id", newGetCardListById);
app.use("/modifyList/", newModifyList);
app.get('/*', function(req, res, next){ 
	res.setHeader('Last-Modified', (new Date()).toUTCString());
	next(); 
  });
app.get("/getCardListById/:id", function(req, res, next) {
    //res.send('API is working properly');
    //var queryString = 'SELECT * from list where id=?'
    res.locals.connection.query('SELECT * from list where cardid=?', [req.params.id], function (error, results, fields) {
		if (error) throw error;
		
		//res.setHeader('Last-Modified', (new Date()).toUTCString());
        res.send(JSON.stringify(results));
         
     });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
