const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  secure: process.env.CLOUDINARY_SECRET,
});

module.exports = cloudinary;
