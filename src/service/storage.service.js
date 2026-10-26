require("dotenv").config();
const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey: process.env.PRIVATE_KEY
})

async function uploadFile(buffer) {
    
    const result = await imagekit.client.upload({
        file: buffer,
        fileName: "image.jpg"
    })
}

module.exports = uploadFile;