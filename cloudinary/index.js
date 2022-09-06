const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({ 
  cloud_name: 'doh1l2ew2', 
  api_key: '143569415171541', 
  api_secret: 'oZ7wexQqKWcEiQh2fV3Tha43PH8' 
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
  folder: "Property",
  allowedFormats: ["jpg", "png", "jpeg"]
    }
});

module.exports = {
    cloudinary,
    storage
}