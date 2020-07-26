const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const methodOverride = require('method-override');
const MongoStore = require("connect-mongo")(session);
const exphbs = require("express-handlebars");

//load config file
dotenv.config({ path: "./config/config.env" });
connectDB();
const app = express();

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//method override
app.use(methodOverride(function (req, res) {
	if (req.body && typeof req.body === 'object' && '_method' in req.body) {
	  // look in urlencoded POST bodies and delete it
	  let method = req.body._method
	  delete req.body._method
	  return method
	}
  }))

//handlebars helpers
const { formatDate, stripTags, truncate, editIcon, select } = require("./helpers/hbs");

// handlebars
app.engine(
	".hbs",
	exphbs({ helpers: { formatDate, stripTags, truncate, editIcon, select }, defaultLayout: "main", extname: ".hbs" })
);
app.set("view engine", ".hbs");

//session
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
	})
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

// set global variables 
app.use(function(req, res, next) {
	res.locals.user = req.user || null
    next()
})

require("./config/passport")(passport);

//static folders
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));


//Logging
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

const PORT = process.env.PORT || 3000;

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);
