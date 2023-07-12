const mongoose = require('mongoose');

const Workers = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
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
    // relation groups
    groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Groups'
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model('Workers', Workers);

