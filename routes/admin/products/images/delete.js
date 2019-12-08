const get_product_image_by_id = require('../../../../database/products/images/get_by_id');
const delete_product_image = require('../../../../database/products/images/delete');
const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
    get_product_image_by_id(req.params.imageId)
    .then(imageRecord => {
        const localPath = path.resolve(__dirname + '/../../../../storage/images/' + imageRecord.filename);
        fs.unlinkSync(localPath);
        
        return delete_product_image(imageRecord._id);
    })
    .then(_ => res.send({ result: 'OK' }))
    .catch(e => res.status(400).send({ err: e.message }));
}