const repository = require('../');
const mongo = require('mongodb');

/**
 * @returns {Promise}
 */
module.exports = (id, amount) => {
    return new Promise((resolve, reject) => {
        repository.database.collection('cart_items').updateOne(
            { _id: new mongo.ObjectID(id) }, 
            { $set: { amount } })
            .toArray((err, records) => {
            if (err) return reject(err);
            
            resolve(records);
        });
    })
}