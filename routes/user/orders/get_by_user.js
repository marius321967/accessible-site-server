const get_by_user = require('../../../database/orders/get_by_user');

/**
 * @returns {Promise}
 */
module.exports = (req, res) => {
    get_by_user(req.user._id)
        .then(records => res.send(records))
        .catch(e => res.status(400).send({ error: e.message }));
}