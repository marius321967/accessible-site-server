const repository = require('..');

/**
 * @returns {Promise}
 */
module.exports = (categoryId) => {
    return new Promise((resolve, reject) => {
        repository.database.collection('products').find({ category_id: categoryId }).toArray((err, records) => {
            if (err) return reject(err);
            
            resolve(records);
        });
    })
}