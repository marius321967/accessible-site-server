const auth = require('./routes/auth');
const admin = require('./routes/admin');
const protected_admin = require('./middleware/protected_admin');

/**
 * Register routes to an express app.
 */
module.exports = app => {
    app.post('/login', auth.login);
    app.post('/register', auth.register);
    app.get('/admin/products', protected_admin, admin.products.all);

}