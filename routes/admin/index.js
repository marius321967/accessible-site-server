module.exports = {
    products: {
        all: require('./products/all'),
        view: require('./products/view'),
        create: require('./products/create'),
        update: require('./products/update'),
        images: {
            upload: require('./products/images/upload'),
            delete: require('./products/images/delete'),
            get_all: require('./products/images/get_all'),
            get_accessible: require('./products/images/get_accessible'),
            get_nonaccessible: require('./products/images/get_nonaccessible'),
            get_file: require('./products/images/get_file'),
        }
    },
    categories: {
        all: require('./categories/all'),
        view: require('./categories/view'),
        create: require('./categories/create'),
        update: require('./categories/update'),
        products: {
            get_all: require('./categories/products/all')
        }
    },
    users: {
        all: require('./users/all'),
    },
}