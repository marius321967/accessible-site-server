const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const fileUpload = require('express-fileupload');

/**
 * Helper for initiating the HTTP service.
 */
module.exports = () => {
    const app = express();
    const port = process.env.PORT || 8080;

    app.use(express.json());
    app.use(cors());
    app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));

    routes(app);

    console.log('Listening on port ['+port+']');
    app.listen(port);
}