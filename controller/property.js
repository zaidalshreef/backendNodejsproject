const Property = require("../model/property");
const { cloudinary } = require("../cloudinary");

module.exports.index = async (req, res, next) => {
  const property = await Property.find({});

  res.send(property);
};

module.exports.newproperty = (req, res, next) => res.render("property/new");

module.exports.propertyForRentOrSell = async (req, res, next) => {
  const property = await Property.find({
    sellingType: req.params.sellingType,
    deleted: false,
  });

  res.render("property");
};

module.exports.propertyById = async (req, res, next) => {
  const property = await Property.findOne({
    _id: req.params.id,
    deleted: false,
  }).populate("agent");

  res.render("./property/show", { property});
};
module.exports.editPropertyForm = async (req, res, next) => {
  const property = await Property.findOne({
    _id: req.params.id,
    deleted: false,
  });

  res.send(property);
};

module.exports.editProperty = async (req, res, next) => {
  const property = await Property.findOneAndUpdate(
    { _id: req.params.id, deleted: false },
    req.body.property
  );

  res.send(property);
};

module.exports.deleteProperty = async (req, res, next) => {
  const property = await Property.findByIdAndUpdate(req.params.id, {
    deleted: true,
  });

  res.send(property);
};

// module.exports.create =  async (req, res, next) => {

//     const property = await Property.create(req.body.property)
//     console.log(property);

//     res.send(property)

// }

module.exports.create = async (req, res, next) => {
  const property =  new Property(req.body.property);

  property.images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));
  property.agent = req.user._id;
  await property.save();


  res.redirect("/property/id/" + property._id)
};
