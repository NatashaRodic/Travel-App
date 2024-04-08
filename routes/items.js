const express = require('express')
const router = express.Router();
const itemsCtrl = require('../controllers/items')

router.post('/trips/:id/items', itemsCtrl.create)


module.exports = router