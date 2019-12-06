const express = require('express');
const cors = require('cors');
const routes = require('../routes');

/**
 * Helper for initiating the HTTP service.
 */
module.exports = () => {
    const app = express();
    const port = process.env.PORT || 8080;

    app.use(express.json());
    app.use(cors());

    routes(app);

    console.log('Listening on port ['+port+']');
    app.listen(port);
}