const express = require('express');
const path = require('path');

module.exports = function(app) {
  // Configure Express
  app.use(express.static(path.join(__dirname, '..', '..', 'public')));
};