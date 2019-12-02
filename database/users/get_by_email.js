const repository = require('../');

/**
 * @returns {Promise}
 */
module.exports = email => {
    return new Promise((resolve, reject) => {
        repository.database.collection('documents').find({ email }).toArray((err, records) => {
            if (err) return reject(err);
            
            resolve(records.length > 0 ? records[0] : null);
        });
    })
}