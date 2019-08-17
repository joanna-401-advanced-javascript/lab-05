'use strict';

const CategoryModel = require('./categories-schema');

class Categories {

  constructor() {}

  get(_id) {
    if(_id){
      return CategoryModel.findOne({_id});
    } else {
      return CategoryModel.find({})
        .then(data => {
          return {count: data.length, results: data}
        });
    }
    return Promise.reject(new Error('-- invalid ID --'));
  }

  create(record) {
    const newRecord = new CategoryModel(record);
    return newRecord.save();
  }

  update(_id, record) {
    return CategoryModel.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) {
    return CategoryModel.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
