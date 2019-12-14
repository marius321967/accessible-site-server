const insert = require('../../../database/cart_items/insert');

module.exports = (req, res) => {
    const item = req.body;
    item.user_id = req.user._id;

    insert(item).then(id => res.send({ id }));
}