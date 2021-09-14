const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Book = require("./Book");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    coverPicture: {
        type: String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    favorites: {
        type: Array,
        default: []
    },
    library: {
        type: Array,
        default: [],
        ref: Book
    }
},
    { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema)