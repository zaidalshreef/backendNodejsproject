if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  const express = require("express");
  const { join } = require("path");
  const mongoose = require("mongoose");
  const methodoverride = require("method-override");
  const ejsMate = require("ejs-mate");
  const session = require("express-session");
  const flash = require("connect-flash");
  const expressError = require("./util/expressError");
  const property = require("./route/property");
  const users = require("./route/user");
  const passport = require("passport");
  const localStrategy = require("passport-local");
  const User = require("./model/user");
  const mongoSanitize = require('express-mongo-sanitize');
  const helmet = require("helmet");
  const MongoStore = require('connect-mongo');
  
  
  
  
  
  
  
  const dburl = process.env.dburl
  
  // connect to the database
  mongoose.connect(dburl, {
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    // we're connected!
    console.log("connected");
  });
  
  // create express app
  const app = express();
  app.use(express.json());
  
  // set view engine to ejs
  app.engine("ejs", ejsMate);
  app.set("view engine", "ejs");
  app.set("views", join(__dirname, "./views"));
  
  // use middleware urlencoded and method override
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(methodoverride("_method"));
  
  // use middleware for static files
  app.use(express.static(join(__dirname, "public")));
  app.use(mongoSanitize());
  
  
  const store = new MongoStore({
    mongoUrl: dburl,
    collection: 'sessions',
    touchAfter: 24 * 3600,
  
  });
  
  store.on('error', function(error) {
    console.log(error);
  });
  
  
  // use middleware for session and flash
  app.use(
    session({
      // name: "session",
      secret: process.env.secret,
      resave: false,
      saveUninitialized: true,
      store: store,
      cookie: {
        // secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    })
  );
  app.use(flash());
  
  
  
  // use middleware for passport
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new localStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  
  // middleware  for locals
  app.use((req, res, next) => {
    if (
      req.originalUrl !== "/login" &&
      req.originalUrl !== "/register" &&
      req.originalUrl !== "/logout"
    ) {
      req.session.returnTo = req.originalUrl;
    }
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
  });
  
  // routes for the app (in order of priority)
  app.use("/", users);
  app.use("/property", property);
  
  // home page routes
  app.get("/", (req, res) => res.redirect("/property"));
  
  // ------------------------------------------------- //
  app.all("*", (req, res, next) => {
    next(new expressError("Page not found", 404));
  });
  
  // error handling middleware
  app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = "Something went wrong";
    res.status(status).render("error", {
      err,
    });
  });
  
  // ------------------------------------------------- //
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));