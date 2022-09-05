const Property = require("../model/property");


module.exports.index =  async (req, res, next) => {
    const property = await Property.find({})

    res.send(property)


}

module.exports.propertyForSell =  async (req, res, next) => {

    const property = await Property.find({sellingType:"sell"})

    res.send(property)

}

module.exports.propertyForRent =  async (req, res, next) => {

    const property = await Property.find({sellingType:"rent"})

    res.send(property)

}

module.exports.propertyById = async (req, res, next) => {

    const property = await Property.findById(req.params.id).populate("agent")

    res.send(property)


}

module.exports.editProperty = async (req, res, next) => { 

    const property = await Property.findByIdAndUpdate(req.params.id,req.body.property)


    res.send(property)

}

module.exports.deleteProperty = async (req, res, next) => {

    const property = await Property.findByIdAndUpdate(req.params.id,{deleted:true})

    res.send(property)


}