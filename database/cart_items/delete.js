const repository = require('..');
const mongo = require('mongodb');

/**
 * @returns {Promise}
 */
module.exports = id => {
    return new Promise((resolve, reject) => {
        repository.database.collection('cart_items').deleteOne({ '_id': new mongo.ObjectID(id) }, (err, result) => {
            if (err) return reject(err);
            
            resolve();
        });
    })
}