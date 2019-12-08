module.exports = {
    products: {
        all: require('./products/all'),
        view: require('./products/view'),
        create: require('./products/create'),
        images: {
            upload: require('./products/images/upload'),
            delete: require('./products/images/delete'),
            get_all: require('./products/images/get_all'),
            get_file: require('./products/images/get_file'),
        }
    },
    users: {
        all: require('./users/all'),
    },
}