// Express App
// src/app.js

const express = require('express');
const app = express();
console.log('Express App Starting...');
app.use(express.json());
console.log('JSON Middleware Enabled...');

module.exports = app;
