
const express = require('express');
const routes = require('./routes');

const router = express.Router();

module.exports = (() => {
  router.use('/', routes);
  return router;
});
