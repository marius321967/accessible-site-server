const connect = require('./connect');
const database = require('./');

/**
 * Helper for initiating the database connection. After promise resolves the object properties
 * in /database/index.js will be filled.
 * @returns {Promise}
 */
module.exports = () => {
    return connect()
        .then(result => {
            database.client = result.client;
            database.database = result.database;
        })
}