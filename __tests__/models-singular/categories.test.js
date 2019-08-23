'use strict';

const Categories = require('../../models-singular/categories');

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    const categories = new Categories();
    const testCategory = {
      name: 'Food',
      description: 'Delicious',
    };

    return categories.create(testCategory)
      .then(savedCategory => {
        Object.keys(testCategory).forEach(key => {
          expect(savedCategory[key]).toEqual(testCategory[key]);
        });
      });
  });

  it('can get() a category', () => {
    const categories = new Categories();
    const testCategory = {
      name: 'banana',
      description: 'yellow',
    };

    return categories.create(testCategory)
      .then(savedCategory => categories.get(savedCategory._id))
      .then(resolvedCategory => {
        Object.keys(testCategory).forEach(key => {
          expect(resolvedCategory[key]).toEqual(testCategory[key]);
        });
      })
      .catch(console.log);
  });

  it('can get() all categories', () => {
    const categories = new Categories();
    const testCategory = {
      name: 'berries',
      description: 'sweet',
    };

    return categories.create(testCategory)
      .then(() => categories.get())
      .then(allCategories => {
        expect(allCategories.count).toEqual(3);
        Object.keys(testCategory).forEach(key => {
          expect(allCategories.results[2][key]).toEqual(testCategory[key]);
        });
      })
      .catch(console.log);
  });

  it('can update() a category', () => {
    const categories = new Categories();
    const testCategory = {
      name: 'apple',
      description: 'crunchy',
    };

    return categories.get()
      .then(allCategories => {
        return categories.update(allCategories.results[0]._id, testCategory);
      })
      .then(updatedCategory => {
        Object.keys(testCategory).forEach(key => {
          expect(updatedCategory[key]).toEqual(testCategory[key]);
        });
      })
      .catch(console.log);
  });

  it('can delete() a category', () => {
    const categories = new Categories();
    const testCategory = {
      name: 'tofu',
      description: 'smelly',
    };

    return categories.create(testCategory)
      .then(savedCategory => categories.delete(savedCategory._id))
      .then(deletedCategory => {
        Object.keys(testCategory).forEach(key => {
          expect(deletedCategory[key]).toEqual(testCategory[key]);
        });
      })
      .catch(console.log);
  });
});