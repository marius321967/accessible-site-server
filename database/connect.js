const MongoClient = require('mongodb').MongoClient;
const config = require('../config.json').database;

/**
 * @returns {Promise} Resolves with object { client, database }
 */
module.exports = () => {
    const url = `mongodb://${config.host}:${config.port}`;

    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
            if (err != null) return reject(err);

            console.log('Connected to database');
            resolve({ client, database: client.db(config.name) });
        });
    });
}