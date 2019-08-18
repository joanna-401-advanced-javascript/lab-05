'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  ranking: {
    required: true,
    type: Number,
  },
  invisible: {
    required:true,
    type: Boolean,
  },
});

module.exports = mongoose.model('products ', products);
