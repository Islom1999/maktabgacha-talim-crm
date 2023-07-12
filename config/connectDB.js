const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${process.env.MONGO_URI}`);
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = connectDB;