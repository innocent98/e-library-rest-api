const mongoose = require("mongoose");

const PublisherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    desc: {
        type: String,
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
    phoneNumber: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    currency:{
        type: String
    },
    accountName: {
        type: String
    },
    accountNumber: {
        type: Number
    },
    bankName: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    myUploads: {
        type: Array,
        default: []
    },
    uploads: {
        type: Number,
        default: 0
    },
    totalBalance: {
        type: Number,
        default: 0.0
    },
    availableBalance: {
        type: Number,
        default: 0.0
    },
    withdraw: {
        type: String
    },
    totalWithdraw: {
        type: Number,
        default: 0
    }
},
    { timestamps: true },
);

module.exports = mongoose.model("Publisher", PublisherSchema)