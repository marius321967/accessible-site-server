const jwt = require('jsonwebtoken');
const secret = require('../config.json').jwt_secret;
const get_user_by_id = require('../database/users/get_by_id');

module.exports = (req, res, next) => {
    const line = req.header('Authorization');

    if (!line) return res.status(401).send({ err: 'AUTH_HEADER_MISSING' });

    const match = line.match(/^Bearer (.+)$/);
    if (match === null) return res.status(401).send({ err: 'INCORRECT_HEADER_FORMAT_NON_BEARER' });

    const token = match[1];
    try { var body = jwt.verify(token, secret) }
    catch (e) { return res.status(401).send({ err: 'TOKEN_INVALID' }) }

    get_user_by_id(body.sub)
    .then(user => {
        if (user === null) return res.status(401).send({ err: 'USER_NOT_FOUND' });
        if ( !user.is_admin ) return res.status(403).send({ err: 'USER_NOT_ADMIN' });
    
        req.user = user;
        next();
    })
}