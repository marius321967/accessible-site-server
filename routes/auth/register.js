const get_user_by_email = require('../../database/users/get_by_email');
const insert_user = require('../../database/users/insert');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    get_user_by_email(email)
    .then(user => {
        if (user !== null) return res.status(400).send({ err: 'EMAIL_TAKEN' });
        if (password.length < 4) return res.status(400).send({ err: 'PASSWORD_TOO_SHORT' });

        insert_user({ email, password: bcrypt.hashSync(password, 10), is_admin: false });
        res.send({ result: 'OK' });
    })
}