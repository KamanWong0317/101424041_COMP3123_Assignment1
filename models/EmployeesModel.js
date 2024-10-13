const mongoose = require('mongoose');

// Employee Collection Schema
const employeeSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    position: String,
    salary: Number,
    date_of_joining: Date,
    department: String,
    created_at:{
        type: Date,
        delete:Date.now
    },
    updated_at:{
        type: Date,
        delete:Date.now
    }
});

// Save model
const Employee = mongoose.model('Employee',employeeSchema);
module.exports = Employee
