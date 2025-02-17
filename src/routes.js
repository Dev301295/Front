const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Tom' }, { id: 2, name: 'Jerry' }]);
});

module.exports = router;
