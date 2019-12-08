const update = require('../../../database/products/update');

module.exports = (req, res) => {
    update(req.params.id, req.body).then(_ => res.send({ result: 'OK' }));
};