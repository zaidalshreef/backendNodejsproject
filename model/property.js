const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
    url: String,
    filename: String,
  }
  );

  imagesSchema.virtual('thumbnail').get(function () {
    return this.url.replace("/upload", "/upload/w_150,h_150,c_scale");
  }
  );

const propertySchema = new Schema({
    title: {type:String, required:true},
    price: {type:Number, required:true},
    sellingType: {type:String, required:true ,enum:["sell","rent"]},
    rentType: {type:String,enum:["day","month","year"]},
    propertyType:{type:String, required:true},
    propertySize:{type:String, required:true},
    description: {type:String},
    rooms: {type:Number, default:0},
    agent: {type:Schema.Types.ObjectId, ref:"user"},
    available: {type:Boolean, default:true},
    deleted: {type:Boolean,default:false},
    images: [imagesSchema],
    
},{timestamps : true})

module.exports = mongoose.model("property",propertySchema)