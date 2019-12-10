const get_by_id = require('../../../database/categories/get_by_id');

module.exports = (req, res) => {
    get_by_id(req.params.id).then(category => {
        if (category === null) return res.status(404).send();
        else return res.send(category);
    })
}