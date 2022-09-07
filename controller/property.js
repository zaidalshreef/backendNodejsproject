const Property = require("../model/property");
const { cloudinary } = require("../cloudinary");

module.exports.index = async (req, res, next) => {
  const propertys = await Property.find({ deleted: false }).sort({updatedAt: -1});

  res.json(propertys);
};

// module.exports.newproperty = (req, res, next) => res.render("property/new");

module.exports.propertyForRentOrSell = async (req, res, next) => {
  const propertys = await Property.find({
    sellingType: req.params.sellingType,
    deleted: false,
  }).sort({updatedAt: -1});

  res.json(propertys);
};

module.exports.propertyById = async (req, res, next) => {
  const property = await Property.findOne({
    _id: req.params.id,
    deleted: false,
  }).populate("agent");

  if (!property) {
    return res.json({property:"not found"});
  }

  res.json(property);
};

// module.exports.editPropertyForm = async (req, res, next) => {
//   const property = await Property.findOne({
//     _id: req.params.id,
//     deleted: false,
//   });

//   res.render("property/edit", { property });
// };

module.exports.editProperty = async (req, res, next) => {
  const property = await Property.findOneAndUpdate(
    { _id: req.params.id, deleted: false },
    req.body.property
  );

  const images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));

  property.images.push(...images);
  await property.save();

  if (req.body.deleteImages) {
    for (const image of req.body.deleteImages) {
      await cloudinary.uploader.destroy(image);
    }
    await property.updateOne({
      $pull: { images: { filename: { $in: req.body.deleteImages } } },
    });
  }
  res.json({"success": true});
};

module.exports.deleteProperty = async (req, res, next) => {
  const property = await Property.findByIdAndUpdate(req.params.id, {
    deleted: true,
  });

  res.json({"success": true});
};

// module.exports.create =  async (req, res, next) => {

//     const property = await Property.create(req.body.property)
//     console.log(property);

//     res.send(property)

// }

module.exports.create = async (req, res, next) => {
  const property = new Property(req.body.property);

  property.images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));
  // property.agent = req.user._id;
  await property.save();


  res.json({"success": true});
};
