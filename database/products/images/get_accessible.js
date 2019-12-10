const repository = require('../../');

/**
 * @returns {Promise}
 */
module.exports = productId => {
    return new Promise((resolve, reject) => {
        repository.database.collection('product_images').find({ product_id: productId, accessible: true }).toArray((err, records) => {
            if (err) return reject(err);
            
            resolve(records);
        });
    })
}