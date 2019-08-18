'use strict';

/** Class representing a generic mongo model. */
class Model {
  /**
   * Model Constructor
   * @param schema {object} - mongo schema
   */
  constructor(schema) {
    this.schema = schema;
  }

  //  constructor(modelName) {
  //     this.dbFileName = `data/${modelName}.db`;
  //   }

  // /**
  //  * Retrieves one or more records
  //  * @param _id {string} optional mongo record id
  //  * @returns {count:#,results:[{*}]} | {*}
  //  */
  // get(_id) {
  //   if(_id){
  //     return Model.schema.findOne({_id});
  //   } else {
  //     return Model.schema.find({})
  //       .then(data => {
  //         return {count: data.length, results: data}
  //       });
  //   }
  //   return Promise.reject(new Error('-- invalid ID --'));
  // }

  /**
   * Create a new record
   * @param record {object} matches the format of the schema
   * @returns {*}
   */
  create(record) {
    const newRecord = new this.schema(record);
    return newRecord.save();
  }

  // /**
  //  * Replaces a record in the database
  //  * @param _id {string} Mongo Record ID
  //  * @param record {object} The record data to replace. ID is a required field
  //  * @returns {*}
  //  */
  // update(_id, record) {
  //   return Model.schema.findByIdAndUpdate(_id, record, {new: true});
  // }
  //
  // /**
  //  * Deletes a record in the model
  //  * @param _id {string} Mongo Record ID
  //  * @returns {*}
  //  */
  // delete(_id) {
  //   return Model.schema.findByIdAndDelete(_id);
  // }

}

module.exports = Model;
