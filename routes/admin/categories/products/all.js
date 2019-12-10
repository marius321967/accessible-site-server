const get_by_category = require('../../../../database/products/get_by_category');

module.exports = (req, res) => get_by_category(req.params.id).then(products => res.send(products));