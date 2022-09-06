const { PropertySchema } = require("./schemajoi");
const Property = require("./model/property");
const expressError = require("./util/expressError");

module.exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  req.flash("error", "You must be logged in");
  res.redirect("/login");
};

module.exports.validateProperty = (req, res, next) => {
  const { error } = PropertySchema.validate(req.body);
  if (error) {
    const msg = error.details.map((d) => d.message).join(", ");
    throw new expressError(msg, 400);
  } else {
    next();
  }
};


module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params;
    const property = await Property.findById(id)
    if (property.agent.equals(req.user._id)) {
        next();
    } else {
        req.flash("error", "You don't have permission to do that");
        res.redirect("/property/id/"+id);
    }
}




