module.exports = {
    cart: {
        get_all: require('./cart/get_all'),
        add: require('./cart/add'),
        update_amount: require('./cart/update_amount'),
        delete: require('./cart/delete')
    },
    order: {
        get_all: require('./orders/get_all'),
        get_by_user: require('./orders/get_by_user'),
        create: require('./orders/create'),
    }
}