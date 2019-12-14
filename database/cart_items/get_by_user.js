const repository = require('..');

/**
 * @returns {Promise}
 */
module.exports = (userId) => {
    return new Promise((resolve, reject) => {
        repository.database.collection('cart_items').find({ user_id: userId }).toArray((err, records) => {
            if (err) return reject(err);
            
            resolve(records);
        });
    })
}