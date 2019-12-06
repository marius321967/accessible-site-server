const get_all_users = require('../../../database/users/get_all')

module.exports = (req, res) => {
    get_all_users().then(users => res.send(users));
}