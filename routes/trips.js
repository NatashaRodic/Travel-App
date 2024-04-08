const express = require('express')
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router()
const tripsCtrl = require('../controllers/trips')

router.get('/', tripsCtrl.index)

router.get('/new', tripsCtrl.new)

router.post('/', tripsCtrl.create)

router.get('/:id', tripsCtrl.show)


module.exports = router;