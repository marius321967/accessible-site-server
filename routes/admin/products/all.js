get_all_products = require('../../../database/products/get_all');

module.exports = (req, res) => get_all_products().then(products => res.send(products));