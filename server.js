const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;

// import employee, user Routes
const userRoutes = require('./routes/UserRoutes.js');
const empRoutes = require('./routes/EmployeesRoutes.js');

//my mongodb address
const DB_URL = "mongodb+srv://wk020317:xtW0EQQJcvypqzA8@cluster0.jakp6.mongodb.net/comp3123_assignment1?retryWrites=true&w=majority";
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Register the routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', empRoutes);

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL)
.then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>COMP3123 Assignment 1</h1>");
});

app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send({
            status: false,
            message: 'Internal Server Error'});
  });

app.listen(port, () => {
    console.log("Server is listening on port 8081");
});