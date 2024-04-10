const express = require('express')
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router()
const tripsCtrl = require('../controllers/trips')

router.get('/', tripsCtrl.index)

router.get('/new', ensureLoggedIn, tripsCtrl.new)

router.post('/', tripsCtrl.create)

router.get('/:id', tripsCtrl.show)

router.delete('/:id', ensureLoggedIn, tripsCtrl.delete)



module.exports = router;