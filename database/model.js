const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataModel = new Schema({
    ultrasonic: {
        type: Number,
        required: true
    },
},{timestamps: true});

module.exports = mongoose.model('data', dataModel);