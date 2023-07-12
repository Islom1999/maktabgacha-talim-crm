const mongoose = require('mongoose');

const Groups = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    descr: {
        type: String,
        required: true,
        trim: true,
    },
    // relation xodim
    workers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workers'
    },
    children: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Childrens'
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model('Groups', Groups);

