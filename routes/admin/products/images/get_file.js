const get_product_image_by_id = require('../../../../database/products/images/get_by_id');
const path = require('path');

module.exports = (req, res) => {
    get_product_image_by_id(req.params.imageId)
    .then(imageRecord => {
        const localPath = path.resolve(__dirname + '/../../../../storage/images/' + imageRecord.filename);
        res.sendFile(localPath);
    })
    .catch(e => res.status(400).send({ err: e.message }));
}