const express = require('express');
const router = express.Router();
// Define a GET route for retrieving users
router.get('/users', (req, res) => {
res.json([{ id: 1, name: 'Ret' }, { id: 2, name: 'Paul' }]);
});
module.exports = router;