const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    bookCover: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0.0,
        required: false
    },
    favoritesCount: {
        type: Array,
        default: []
    },
    downloads: {
        type: Array
    },
    downloadCount: {
        type: Number,
        default: 0
    },
    comment: {
        type: String,
        required: false,
        default: ""
    },
    rate: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },
    rateCount: {
        type: Number
    }
},
    { timestamps: true },
);

module.exports = mongoose.model("Book", BookSchema)