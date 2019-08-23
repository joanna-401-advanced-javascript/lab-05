'use strict';

const CategoryModel = require('./categories-schema');
const Model = require('../mongo.js');

module.exports = new Model(CategoryModel);