const get_all = require('../../../database/orders/get_all');

/**
 * @returns {Promise}
 */
module.exports = (req, res) => {
    get_all()
        .then(records => res.send(records))
        .catch(e => res.status(400).send({ error: e.message }));
}