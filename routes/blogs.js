const express = require("express");
const BlogsController = require("../controller/blogs");
const multer = require("multer");
let router = express.Router();

router.get("/", BlogsController.getBlogs);
router.get("/:id", BlogsController.getSingleBlog);


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req,file)
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    console.log(req,file)
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), BlogsController.BlogsPost);

module.exports = router;
