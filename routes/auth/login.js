const get_user_by_email = require('../../database/users/get_by_email');
const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
    get_user_by_email( req.body.email )
    .then(user => {
        if (user === null) return res.send({ error: 'CREDENTIALS_INVALID' })
        
        if ( bcrypt.compareSync( req.body.password, user.password ) ) {
            const token = jwt.sign({ sub: user.id }, config.jwt_secret);
            res.send({ token });
        }
        else {
            res.send({ err: 'CREDENTIALS_INVALID' });
        }
    })
    .catch(e => res.send({ error: e.message }));
}