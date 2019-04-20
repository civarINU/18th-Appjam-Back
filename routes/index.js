const express = require('express');
const router = express.Router();

const auth = require('./auth');
const create = require('./create');
const receive = require('./receive');

router.use('/auth', auth);
router.use('/create', create);
router.use('/receive', receive);

module.exports = router;
