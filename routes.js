const auth = require('./routes/auth');
const admin = require('./routes/admin');
const user = require('./routes/user');
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
    app.post('/products', protected_admin, admin.products.create);
    app.get('/products/:id', admin.products.view);
    app.post('/products/:id', protected_admin, admin.products.update);
    app.post('/products/:id/images', protected_admin, admin.products.images.upload);
    app.get('/products/:id/images', admin.products.images.get_all);
    app.get('/products/:id/accessible-images', admin.products.images.get_accessible);
    app.get('/products/:id/nonaccessible-images', admin.products.images.get_nonaccessible);
    app.get('/products/:id/images/:imageId/file', admin.products.images.get_file);
    app.post('/products/:id/images/:imageId/delete', protected_admin, admin.products.images.delete);

    app.get('/categories', admin.categories.all);
    app.post('/categories', protected_admin, admin.categories.create);
    app.get('/categories/:id', admin.categories.view);
    app.post('/categories/:id', protected_admin, admin.categories.update);
    app.get('/category/:id/products', admin.categories.products.get_all);

    app.get('/cart', protected_user, user.cart.get_all);
    app.post('/cart', protected_user, user.cart.add);
    app.post('/cart/:itemId/amount', protected_user, user.cart.update_amount);
    app.post('/cart/:itemId/delete', protected_user, user.cart.delete);

    app.get('/admin/orders', protected_admin, user.order.get_all);
    app.get('/orders', protected_user, user.order.get_by_user);
    app.post('/orders', protected_user, user.order.create);
    
    app.get('/users', protected_admin, admin.users.all);
}