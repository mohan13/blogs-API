const express = require("express");
const BlogsController = require("../controller/blogs");
const multer = require("multer");
let router = express.Router();

router.get("/", BlogsController.getBlogs);
router.get("/:Id", BlogsController.getSingleBlog);
router.delete("/:id", BlogsController.getDeleteBlog);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req, file);
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    console.log(req, file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.patch("/:id", upload.single("image"), BlogsController.getUpdateBlog);

router.post("/", upload.single("image"), BlogsController.BlogsPost);

module.exports = router;
