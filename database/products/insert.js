const repository = require('../');

/**
 * @returns {Promise}
 */
module.exports = product => {
    return new Promise((resolve, reject) => {
        repository.database.collection('products').insertOne(product, (err, result) => {
            if (err) return reject(err);
            
            resolve( result.insertedId );
        });
    })
}