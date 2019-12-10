const get_product_images = require('../../../../database/products/images/get_accessible');

module.exports = (req, res) => get_product_images(req.params.id).then(images => res.send(images));