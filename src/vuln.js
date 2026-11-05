const express = require('express');
const { exec } = require('child_process');
const mysql = require('mysql');

const router = express.Router();
const db = mysql.createConnection({ host: 'localhost', user: 'app', database: 'app' });

router.get('/user', (req, res) => {
  const query = 'SELECT * FROM users WHERE id = ' + req.query.id;
  db.query(query, (err, rows) => {
    if (err) return res.status(500).send('error');
    res.json(rows);
  });
});

router.get('/ping', (req, res) => {
  exec('ping -c 1 ' + req.query.cmd, (err, stdout) => {
    res.send(stdout);
  });
});

router.get('/token', (req, res) => {
  const token = Math.random().toString(36).slice(2);
  res.send(token);
});

module.exports = router;
