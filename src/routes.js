const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Tom' }, { id: 2, name: 'Jerry' }]);
});

router.get('/users1', (req, res) => {
  res.json([{ id: 1, name: 'Bob' }, { id: 2, name: 'Zen' }]);
});

module.exports = router;
