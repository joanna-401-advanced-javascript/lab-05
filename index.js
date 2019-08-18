'use strict';

const mongoose = require('mongoose');

// Require your model
const Categories = require('./models-singular/categories');

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost/lab-05';

// Connect
mongoose.connect(MONGOOSE_URI, {useNewUrlParser: true} );

// Do some work
const doWork = async () => {
  const categories = new Categories;

  let printOut = await categories.create({
    name: 'dandelion',
    description: 'floaty fur ball',
  })
    .then(savedCategory => {
      console.log('SAVED', savedCategory);
      return categories.create({
        name: 'seal',
        description: 'sea puppy',
      });
    })
    .then(savedCategory => {
      console.log('SAVED AGAIN', savedCategory);
      return categories.get();
    })
    .then(allCategories => {
      console.log('ALL CATEGORIES', allCategories);
      return categories.update(allCategories.results[0]._id, {
        name: 'pizza',
        description: 'happiness on a plate',
      });
    })
    .then(updatedCategory => {
      console.log('UPDATED', updatedCategory);
    })
    .catch(console.log);

  console.log(printOut);

  // Disconnect
  mongoose.disconnect();
};

doWork();

