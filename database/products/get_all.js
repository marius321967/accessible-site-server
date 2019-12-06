const repository = require('../');

/**
 * @returns {Promise}
 */
module.exports = () => {
    return new Promise((resolve, reject) => {
        repository.database.collection('products').find({}).toArray((err, records) => {
            if (err) return reject(err);
            
            resolve(records);
        });
    })
}