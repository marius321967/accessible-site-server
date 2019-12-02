const repository = require('../');

/**
 * @returns {Promise} Resolves with ID.
 */
module.exports = user => {
    return new Promise((resolve, reject) => {
        repository.database.collection('users').insertOne(user, (err, result) => {
            if (err) return reject(err);
            
            resolve( result.insertedId );
        });
    })
}