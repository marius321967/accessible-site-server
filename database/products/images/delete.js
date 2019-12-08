const repository = require('../../');
const mongo = require('mongodb');

/**
 * @returns {Promise}
 */
module.exports = id => {
    return new Promise((resolve, reject) => {
        repository.database.collection('product_images').deleteMany({ '_id': new mongo.ObjectID(id) }, err => {
            if (err) return reject(err);
            
            resolve();
        });
    })
}