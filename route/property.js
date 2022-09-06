const express = require("express");
const router = express.Router();
const catchAsync = require("../util/catchasync");
const { index, create,propertyById,editProperty,deleteProperty,propertyForRentOrSell,newproperty,editPropertyForm } = require('../controller/property');
const multer = require("multer");
const {storage} = require("../cloudinary");
const upload = multer({ storage });
const { isLoggedIn, isAuthor,validateProperty } = require("../middleware");


router.route('/').get(catchAsync(index)).post(isLoggedIn,upload.array("image"),validateProperty,catchAsync(create))

router.get("/new", isLoggedIn,newproperty);

router.route('/:sellingType').get(catchAsync(propertyForRentOrSell))

router.route('/id/:id')
.get(catchAsync(propertyById))
.put(isLoggedIn,isAuthor,upload.array("image"),validateProperty ,catchAsync(editProperty))
.delete(isLoggedIn,isAuthor,catchAsync(deleteProperty))

router.route('/id/:id/edit').get(isLoggedIn,isAuthor,catchAsync(editPropertyForm))














module.exports = router;

