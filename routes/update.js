const express = require('express')
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router()

const updateCtrl = require('../controllers/update')


router.get('/:id', updateCtrl.show)

router.put('/:id', updateCtrl.update)


module.exports = router;