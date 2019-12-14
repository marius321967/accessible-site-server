const update_amount = require('../../../database/cart_items/update_amount');

module.exports = (req, res) => {
    update_amount(req.params.itemId, req.body.amount).then(_ => res.send({ result: 'OK' }));
}