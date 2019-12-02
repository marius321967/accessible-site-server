const get_user_by_email = require('../../database/users/get_by_email');
const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
    get_user_by_email( req.body.email )
    .then(user => {
        if (user === null) return res.status(400).send({ error: 'CREDENTIALS_INVALID' })
        if ( bcrypt.compareSync( req.body.password, user.password ) ) {
            const token = jwt.sign({ sub: user._id }, config.jwt_secret);
            res.send({ token });
        }
        else {
            res.status(400).send({ err: 'CREDENTIALS_INVALID' });
        }
    })
    .catch(e => res.status(400).send({ error: e.message }));
}