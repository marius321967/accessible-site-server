const delete_item = require('../../../database/cart_items/delete');

module.exports = (req, res) => {
    delete_item(req.params.itemId).then(_ => res.send({ result: 'OK' }));
}