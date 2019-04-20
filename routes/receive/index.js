const express = require('express');
const router = express.Router();

const envirodata = require('./envirodata');
const introdata = require('./introdata');

router.use('/denvirodata', envirodata);
router.use('/introdata', introdata);

module.exports = router;
