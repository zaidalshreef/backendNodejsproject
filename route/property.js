const express = require("express");
const router = express.Router();
const catchAsync = require("../util/catchasync");
const { index, create,propertyById,editProperty,deleteProperty,propertyForRentOrSell,newproperty } = require('../controller/property');
const multer = require("multer");
const {storage} = require("../cloudinary");
const upload = multer({ storage });

router.route('/').get(catchAsync(index)).post(upload.array("image"),catchAsync(create))

router.get("/new", newproperty);

router.route('/:sellingType').get(catchAsync(propertyForRentOrSell))

router.route('/id/:id')
.get(catchAsync(propertyById))
.put(catchAsync(editProperty))
.delete(catchAsync(deleteProperty))
















module.exports = router;

