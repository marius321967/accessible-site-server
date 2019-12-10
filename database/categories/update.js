const repository = require('../');
const mongo = require('mongodb');

/**
 * @returns {Promise}
 */
module.exports = (id, properties) => {
    return new Promise((resolve, reject) => {
        repository.database.collection('categories').updateOne(
            { _id: new mongo.ObjectID(id) },
            { $set: properties }, 
            (err, result) => {
                if (err) return reject(err);
                
                resolve( result.insertedId );
            });
    })
}