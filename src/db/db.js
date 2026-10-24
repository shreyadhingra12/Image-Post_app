const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:Xptq8jgvNNiRQ9UE@backend-learning.ub3ohov.mongodb.net/image-file_app")
    console.log("Connected to DB")
}

module.exports = connectDB;