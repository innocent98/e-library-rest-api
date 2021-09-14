const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
    publisherId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: false
    },
    bookTitle: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    bookDescription: {
        type: String,
        required: false,
        min: 50,
        max: 200
    },
    bookCover: {
        type: String,
        default: "",
        required: false
    },
    price: {
        type: Number,
        default: 0.0,
        required: false
    },
    uploadBook: {
        type: String,
        default: ""
    },
    purchaseCount: {
        type: Number,
        default: 0
    }
},
    { timestamps: true },
);

module.exports = mongoose.model("Upload", UploadSchema)