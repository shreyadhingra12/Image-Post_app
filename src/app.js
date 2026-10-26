const express = require("express");
const multer = require("multer");


const app = express();
app.use(express.json()); //in-build middleware

const upload = multer({storage: multer.memoryStorage() })//middleware -> image 

app.post("/create-post",upload.single("image"), async (req, res) => {
  console.log(req.body);
});
module.exports = app;
