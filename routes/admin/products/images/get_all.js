const get_all_product_images = require('../../../../database/products/images/get_all');

module.exports = (req, res) => get_all_product_images(req.params.id).then(images => res.send(images));