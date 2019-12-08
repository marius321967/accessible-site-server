const insert = require('../../../database/products/insert');

module.exports = (req, res) => {
    insert(req.body).then(id => res.send({ id }));
};