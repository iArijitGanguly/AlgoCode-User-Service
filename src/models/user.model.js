const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'userName can not be empty']
    },

    email: {
        type: String,
        required: [true, 'email can not be empty']
    },

    password: {
        type: String,
        required: [true, 'password can not be empty']
    }
});

const User = model('User', userSchema);

module.exports = User;