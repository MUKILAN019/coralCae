
const express = require('express');
const path = require('path');

export function addMiddlewares(app) {
  app.use('/assets', express.static(path.join(__dirname, '../src/static/VideoBackground')));
}