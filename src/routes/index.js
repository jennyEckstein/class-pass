const express = require('express');
const getClasses = require('./get-classes');

const router = express.Router();

router.get('/', getClasses);

module.exports = router;
