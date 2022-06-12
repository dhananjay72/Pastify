const mongoose = require('mongoose');
const config = require('config');

require('dotenv').config();

// Get password from env and replace within mongoURI
db = "mongodb+srv://Dhananjay:Pass12345@nodeexpressprojects.45xv5.mongodb.net/test?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('DB error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
