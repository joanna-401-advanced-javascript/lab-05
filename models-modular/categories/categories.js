'use strict';

const CategoryModel = require('./categories-schema');
const Model = require('../mongo.js');

// How can we connect ourselves to the mongo interface?
class Categories extends Model {
  constructor(){
    super(CategoryModel);
  }
}

// What do we export?
module.exports = Categories;