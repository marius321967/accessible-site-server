const repository = require('../');
const mongo = require('mongodb');

/**
 * @returns {Promise}
 */
module.exports = id => {
    return new Promise((resolve, reject) => {
        repository.database.collection('products').find({ '_id': new mongo.ObjectID(id) }).toArray((err, records) => {
            if (err) return reject(err);
            
            resolve(records.length > 0 ? records[0] : null);
        });
    })
}