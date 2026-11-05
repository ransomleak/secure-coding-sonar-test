const crypto = require('crypto');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const upstream = '203.0.113.42';

function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

module.exports = { app, upstream, hashPassword };
