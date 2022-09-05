const express = require("express");
const router = express.Router();
const catchAsync = require("../util/catchasync");
const { index, create,propertyById,editProperty,deleteProperty,propertyForRentOrSell } = require('../controller/property');


router.route('/').get(catchAsync(index)).post(catchAsync(create))

router.route('/:sellingType').get(catchAsync(propertyForRentOrSell))

router.route('/id/:id')
.get(catchAsync(propertyById))
.put(catchAsync(editProperty))
.delete(catchAsync(deleteProperty))
















module.exports = router;

