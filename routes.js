const auth = require('./routes/auth');
const admin = require('./routes/admin');
const protected_admin = require('./middleware/protected_admin');
const protected_user = require('./middleware/protected_user');

/**
 * Register routes to an express app.
 */
module.exports = app => {
    app.get('/me', protected_user, auth.me);
    app.post('/login', auth.login);
    app.post('/register', auth.register);
    app.get('/products', protected_admin, admin.products.all);
    app.get('/users', protected_admin, admin.users.all);
}