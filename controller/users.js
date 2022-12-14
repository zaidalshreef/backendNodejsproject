const User = require("../model/user");

module.exports.registerForm = (req, res, next) => {
  res.render("users/register");
};

module.exports.createNewUser = async (req, res, next) => {
  try {
    const { username, email, password, phoneNumber } = req.body;
    const user = new User({
      username,
      email,
      phoneNumber,
    });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "You are now registered and logged in");
      res.redirect("/property");
    });
  } catch (e) {
    if (e.message.includes("phoneNumber")) {
      req.flash("error", "PhoneNumber already in use");
    } else if (e.message.includes("email")) {
      req.flash("error", "Email already in use");
    } else {
      req.flash("error", e.message);
    }
    return res.redirect("/register");
  }
};

module.exports.loginForm = (req, res, next) => {
  res.render("users/login");
};

module.exports.login = (req, res, next) => {
  const url = req.session.returnTo || "/property";
  delete req.session.returnTo;
  res.redirect(url);
};

module.exports.logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  req.flash("success", "You are logged out");
  const url = req.session.returnTo || "/property";
  delete req.session.returnTo;
  res.redirect(url);
};
