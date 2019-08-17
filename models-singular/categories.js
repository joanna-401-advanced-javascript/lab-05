'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
const CategoryModel = require('./categories-schema');

class Categories {

  constructor() {}

  get(_id) {
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }

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
    // Call the appropriate mongoose method to delete a record
  }

}

module.exports = Categories;
