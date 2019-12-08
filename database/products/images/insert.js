const repository = require('../../');

/**
 * @returns {Promise}
 */
module.exports = image => {
    return new Promise((resolve, reject) => {
        repository.database.collection('product_images').insertOne(image, (err, result) => {
            if (err) return reject(err);
            
            resolve( result.insertedId );
        });
    })
}