const mongoose = require('mongoose');

const Orders = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    dateBirth: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    descr: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('Orders', Orders);

