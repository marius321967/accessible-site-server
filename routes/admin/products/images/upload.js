const insert_image = require('../../../../database/products/images/insert');
const uuid = require('uuid/v1');
const path = require('path')

module.exports = (req, res) => {
    const file = req.files.file;
    if (!file) return res.status(400).send({ err: 'FILE_MISSING' });

    const filename = uuid() + path.extname(file.name);
    file.mv('./storage/images/' + filename);
    
    insert_image({ filename, product_id: req.params.id, accessible: req.body.accessible == 'true' }).then(id => res.send({ id }));
}