const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    surname: {
        type: String,
        trim: true        
    },
    givenname: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    profilepic: {
        type: String,
        
    },
    gender: {
        type: String,
        trim: true
    },
    dob: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    residence: {
        type: String,
        trim: true
    },
    nation: {
        type: String,
        trim: true
    },
});

module.exports = mongoose.model('Formcollection', FormSchema);