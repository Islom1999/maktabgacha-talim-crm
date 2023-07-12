const mongoose = require('mongoose');

const Childrens = mongoose.Schema({
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
    dateOld: {
        type: String,
        required: true,
        trim: true,
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
    },
    // relation 
    groups: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Groups'
    }
}, { timestamps: true })

module.exports = mongoose.model('Childrens', Childrens);

