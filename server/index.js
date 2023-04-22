const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(express.json());

//Port 
const PORT = 5500;

app.use(cors());

const TodoItemRoute = require('./routes/todoItems');


mongoose.connect('mongodb://127.0.0.1:27017/todo_list')
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err))


app.use('/', TodoItemRoute);


app.listen(PORT, () => console.log(`Server connected to PORT ${PORT}`));
