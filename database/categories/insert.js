const repository = require('../');

/**
 * @returns {Promise}
 */
module.exports = record => {
    return new Promise((resolve, reject) => {
        repository.database.collection('categories').insertOne(record, (err, result) => {
            if (err) return reject(err);
            
            resolve( result.insertedId );
        });
    })
}