const express = require('express');
const router = express.Router();

const data = require('./data');
const device = require('./device');
const user = require('./user');

router.use('/data', data);
router.use('/device', device);
router.use('/user', user);

module.exports = router;
