'use strict';

const products = require('../../models-modular/products/products');

const supergoose = require('../supergoose.js');

describe('Products Model (Modular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new product', () => {
    const testProduct = {
      name: 'Ginger Beer',
      ranking: 50,
      invisible: false,
    };

    return products.create(testProduct)
      .then(savedProduct => {
        Object.keys(testProduct).forEach(key => {
          expect(savedProduct[key]).toEqual(testProduct[key]);
        });
      });
  });

  it('can get() a product', () => {
    const testProduct = {
      name: 'Bravery',
      ranking: 100,
      invisible: true,
    };

    return products.create(testProduct)
      .then(savedProduct => products.get(savedProduct._id))
      .then(resolvedProduct => {
        Object.keys(testProduct).forEach(key => {
          expect(resolvedProduct[key]).toEqual(testProduct[key]);
        });
      })
      .catch(console.log);
  });

  it('can get() all product', () => {
    const testProduct = {
      name: 'Wind',
      ranking: -2,
      invisible: true,
    };

    return products.create(testProduct)
      .then(() => products.get())
      .then(allProducts => {
        expect(allProducts.count).toEqual(3);
        Object.keys(testProduct).forEach(key => {
          expect(allProducts.results[2][key]).toEqual(testProduct[key]);
        });
      })
      .catch(console.log);
  });

  it('can update() a product', () => {
    const testProduct = {
      name: 'Gummy Bears',
      ranking: 22,
      invisible: false,
    };

    return products.get()
      .then(allProducts => {
        return products.update(allProducts.results[0]._id, testProduct);
      })
      .then(updatedProduct => {
        Object.keys(testProduct).forEach(key => {
          expect(updatedProduct[key]).toEqual(testProduct[key]);
        });
      })
      .catch(console.log);
  });

  it('can delete() a product', () => {
    const testProduct = {
      name: 'Scabs',
      ranking: -80,
      invisible: false,
    };

    return products.create(testProduct)
      .then(savedProduct => products.delete(savedProduct._id))
      .then(deletedProduct => {
        Object.keys(testProduct).forEach(key => {
          expect(deletedProduct[key]).toEqual(testProduct[key]);
        });
      })
      .catch(console.log);
  });
});