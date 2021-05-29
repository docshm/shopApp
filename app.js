if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const seedDB = require("./seed");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

// Routes

const productRoutes = require("./routes/product");
const authRoutes = require("./routes/auth");
const cartRoutes = require("./routes/cart");

mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log("DB connected");
	})
	.catch((err) => {
		console.log("Error");
		console.log(err);
	});

// seedDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const sessionConfig = {
	secret: "weneedsomebettersecret",
	resave: false,
	saveUninitialized: true,
};

app.use(session(sessionConfig));
app.use(flash());

//  Initialising the passport and session for storing User Info

app.use(passport.initialize());
app.use(passport.session());

// configuring the passport to use local strategy

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
	res.locals.success = req.flash("success");
	res.locals.error = req.flash("error");
	res.locals.currentUser = req.user;
	next();
});

app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);

app.get("/", (req, res) => {
	res.render("home");
});

app.listen(process.env.Port || 3000, () => {
	console.log("server started at port 3000");
});
