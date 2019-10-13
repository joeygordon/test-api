const express = require('express');
const models = require('../../models');

const router = express.Router();

router.get('/timers', (req, res) => {
  models.Timer.findAll()
    .then((timers) => {
      res.status(200).send({
        success: 'true',
        message: 'Timers retrieved successfully',
        timers,
      });
    });
});

router.post('/timer', (req, res) => {
  console.log(req.body);
  models.Timer.create({
    title: req.body.title,
    duration: req.body.duration,
  })
    .then((timer) => {
      res.status(200).send({
        success: 'true',
        message: 'successfully created timer',
        timer,
      });
    });
});

module.exports = router;
