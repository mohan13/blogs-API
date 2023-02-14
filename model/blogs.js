const mongoose = require("mongoose");
const BlogsSchema = mongoose.Schema({
  title: String,
  description: String,
  images: String,
  time: String,
});

const BlogsModel = mongoose.model("Blogs", BlogsSchema);
module.exports = BlogsModel;
