const express = require('express');
const router = express.Router();

/**
 * can also do
 * const app = express();
 * app.[verb]('/[endpoint]', (req, res) => {});
 * in this case, using render since we are using EJS to render
 * different routes in the layout.ejs
 */

// index route
router.get('/', (req, res) => {
    res.render('index');
});

// need to export the router for use in the server
module.exports = router;