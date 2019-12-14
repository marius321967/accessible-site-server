const insert = require('../../../database/orders/insert');

module.exports = (req, res) => {
    const order = req.body;
    order.user_id = req.user._id;

    insert(order).then(id => res.send({ id }));
}