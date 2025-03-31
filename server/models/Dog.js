const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;
