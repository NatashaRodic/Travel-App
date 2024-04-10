const express = require('express')
const router = express.Router();
const itemsCtrl = require('../controllers/items')

router.post('/trips/:id/items', itemsCtrl.create)

router.put('/items/:id', itemsCtrl.update)


module.exports = router;