const initiate_db = require('./database/initiate');
const initiate_http = require('./http/initiate');

initiate_db()
.then(initiate_http)
