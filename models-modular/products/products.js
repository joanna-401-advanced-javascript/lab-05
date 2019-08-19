'use strict';

const ProductsModel = require('./products-schema');
const Model = require('../mongo.js');

module.exports = new Model(ProductsModel);