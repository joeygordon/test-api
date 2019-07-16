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
  models.Person.findAndCountAll({
    limit: req.params.number,
  })
  .then(function(people) {
    res.status(200).send({
      success: "true",
      message: "people retrieved successfully",
      people: people.rows
    });
  });
});

router.delete("/person/:id", (req, res) => {
  models.Person.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: "Person successfully deleted"
    })
  })
});

module.exports = router;
