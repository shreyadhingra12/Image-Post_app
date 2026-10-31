const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    image: String,
    caption: String
})

const postModel = mongoose.model("post",postSchema)
/*
- mongoose.model() creates a model.
- "post" is the model name.
- postSchema tells the model which structure to use.
- postModel is the variable holding the model. 
*/

module.exports = postModel;