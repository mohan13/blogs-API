const BlogsModel = require("../model/blogs");
module.exports.getBlogs = async (req, res) => {
  try {
    let data = await BlogsModel.find();
    res.status(200).json({
      message: "all the records",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getSingleBlog = async (req, res) => {
  console.log(req.params);
  try {
    let data = await BlogsModel.findById(req.params.id);
    res.status(200).json({
      message: "all the records",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.BlogsPost = async (req, res) => {
  console.log(req.body, req.files, req.file);
  try {
    const data = new BlogsModel({
      time: req.body.time,
      title: req.body.title,
      description: req.body.description,
      images: req.file.path,
    });
    await data.save();
    res.status(200).json({
      message: "worked",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
