const get_product_by_id = require('../../../database/products/get_by_id');

module.exports = (req, res) => {
    get_product_by_id(req.params.id).then(product => {
        if (product === null) return res.status(404).send();
        else return res.send(product);
    })
}