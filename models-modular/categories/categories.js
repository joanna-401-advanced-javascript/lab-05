'use strict';

const CategoryModel = require('./categories-schema');
const Model = require('../mongo.js');

class Categories extends Model {
  constructor(){
    super(CategoryModel);
  }
}

module.exports = Categories;