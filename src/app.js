const express = require("express");
const multer = require("multer");
const uploadFile = require("./service/storage.service");
const postModel = require("./model/post.model")

const app = express();
app.use(express.json()); //in-build middleware

const upload = multer({storage: multer.memoryStorage() })//middleware -> image 

app.post("/create-post",upload.single("image"), async (req, res) => {
//post api creation
  const result = await uploadFile(req.file.buffer) 

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })

  return res.status(201).json({
    message: "Post created successfully",
    post
  })
});
module.exports = app;
