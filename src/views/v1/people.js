const express = require("express");
const peopleData = require("../../data/people");
const models  = require('../../models');

const router = express.Router();

router.get("/people", (req, res) => {
  models.Person.findAll()
    .then(function(people) {
      res.status(200).send({
        success: "true",
        message: "People retrieved successfully",
        people: people
      });
  });
});

router.post("/person", (req, res) => {
  console.log(req.body);
  models.Person.create({
    name: req.body.name,
    description: req.body.description,
  })
  .then(person => {
    res.status(200).send({
      success: 'true',
      message: 'successfully created person',
      person
    });
  });
});


router.get("/person/:id", (req, res) => {
  // const id = parseInt(req.params.id, 10);
  models.Person.findByPk(req.params.id).then(person => {
    res.status(200).send({
      success: "true",
      message: "Person retrieved successfully",
      person
    });
  });
});

router.get("/people/:number", (req, res) => {
  const people = peopleData.slice(0, req.params.number);
  return res.status(200).send({
    success: "true",
    message: "people retrieved successfully",
    posts: people
  });
});

module.exports = router;
