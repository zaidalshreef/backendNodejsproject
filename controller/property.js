const Property = require("../model/property");


module.exports.index =  async (req, res, next) => {
    const property = await Property.find({})

    res.send(property)


}

module.exports.propertyForSell =  async (req, res, next) => {

    const property = await Property.find({sellingType:"sell",deleted:false})

    res.send(property)

}

module.exports.propertyForRent =  async (req, res, next) => {

    const property = await Property.find({sellingType:"rent",deleted:false})

    res.send(property)

}

module.exports.propertyById = async (req, res, next) => {

    const property = await Property.findOne({_id:req.params.id,deleted:false}).populate("agent")

    res.send(property)


}

module.exports.editProperty = async (req, res, next) => { 

    const property = await Property.findOneAndUpdate({_id:req.params.id,deleted:false},req.body.property)


    res.send(property)

}

module.exports.deleteProperty = async (req, res, next) => {

    const property = await Property.findByIdAndUpdate(req.params.id,{deleted:true})

    res.send(property)


}

module.exports.create =  async (req, res, next) => {

    const property =  Property.create(req.body.property)

    res.send(property)

}