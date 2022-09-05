const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const propertySchema = new Schema({
    title: {type:String, required:true},
    price: {type:Number, required:true},
    sellingType: {type:String, required:true ,enum:["sell","rent"]},
    rentType: {type:String,enum:["day","month","year"]},
    propertyType:{type:String, required:true},
    propertySize:{type:String, required:true},
    propertyAge: {type:Number},
    streetWidth:{type:Number},
    streetDirection: {type:String},
    description: {type:String},
    bedrooms: {type:Number, required:true},
    bathrooms: {type:Number, required:true},
    agent: {type:Schema.Types.ObjectId, ref:"user"},
    available: {type:Boolean, default:true},
    deleted: {type:Boolean,default:false},
    plotWidth : {type:Number},
    plotLength: {type:Number},
    images: [String],
    geometry: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    
},{timestamps : true})

module.exports = mongoose.model("property",propertySchema)