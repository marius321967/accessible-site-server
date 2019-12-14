const get_by_user = require('../../../database/cart_items/get_by_user');

/**
 * @returns {Promise}
 */
module.exports = (req, res) => {
    get_by_user(req.user._id)
        .then(items => res.send(items))
        .catch(e => res.status(400).send({ error: e.message }));
}