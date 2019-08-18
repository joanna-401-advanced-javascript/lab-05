'use strict';

const ProductsModel = require('./products-schema');
const Model = require('../mongo.js');

class Products extends Model {
  constructor(){
    super(ProductsModel);
  }
}

module.exports = Products;