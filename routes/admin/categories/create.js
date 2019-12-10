const insert = require('../../../database/categories/insert');

module.exports = (req, res) => {
    insert(req.body).then(id => res.send({ id }));
};