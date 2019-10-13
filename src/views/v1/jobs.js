const express = require('express');
const models = require('../../models');

const router = express.Router();

router.get('/jobs', (req, res) => {
  models.Job.findAll().then((jobs) => {
    res.status(200).send({
      success: 'true',
      message: 'Jobs retrieved successfully',
      jobs,
    });
  });
});

router.post('/job', (req, res) => {
  models.Job.create({
    name: req.body.name,
    address: req.body.address,
    lat: req.body.lat,
    long: req.body.long,
  }).then((job) => {
    res.status(200).send({
      success: 'true',
      message: 'successfully created job',
      job,
    });
  });
});

module.exports = router;
