const mongoose = require('mongoose');

// Users Collection Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    created_at:{
        type:Date,
        delete: Date.now
    },
    updated_at:{
        type: Date,
        delete:Date.now
    }
});

// Save model
const User = mongoose.model('User',userSchema);
module.exports = User
