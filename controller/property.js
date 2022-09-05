const Property = require("../model/property");
const { login } = require("./users");


module.exports.index =  async (req, res, next) => {
    const property = await Property.find({})

    res.send(property)


}


module.exports.propertyForRentOrSell =  async (req, res, next) => {

    const property = await Property.find({sellingType:req.params.sellingType,deleted:false})

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

    const property = await Property.create(req.body.property)
    console.log(property);

    res.send(property)

}