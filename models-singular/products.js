'use strict';

const ProductModel = require('./products-schema');

class Products {

  constructor() {}

  get(_id) {
    if(_id){
      return ProductModel.findOne({_id});
    } else {
      return ProductModel.find({})
        .then(data => {
          return {count: data.length, results: data};
        });
    }
  }

  create(record) {
    const newRecord = new ProductModel(record);
    return newRecord.save();
  }

  update(_id, record) {
    return ProductModel.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) {
    return ProductModel.findByIdAndDelete(_id);
  }

}

module.exports = Products;
