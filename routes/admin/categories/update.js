const update = require('../../../database/categories/update');

module.exports = (req, res) => {
    update(req.params.id, req.body).then(_ => res.send({ result: 'OK' }));
};