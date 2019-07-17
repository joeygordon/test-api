const express = require('express');

const router = express.Router();

/* status checks */
router.get('/status/ready', (_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('ok');
});

router.get('/status/live', (_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('ok');
});

module.exports = router;
