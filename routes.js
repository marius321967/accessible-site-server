const auth = require('./routes/auth');

/**
 * Register routes to an express app.
 */
module.exports = app => {
    app.post('/login', auth.login);
}