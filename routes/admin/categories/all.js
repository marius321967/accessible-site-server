const get_all = require('../../../database/categories/get_all');

module.exports = (req, res) => get_all().then(categories => res.send(categories));