const express = require("express");
const peopleData = require("../../data/people");

const router = express.Router();

router.get("/people", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "People retrieved successfully",
    people: peopleData
  });
});

router.get("/person/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  peopleData.map(person => {
    if (peopleData.id === id) {
      return res.status(200).send({
        success: "true",
        message: "Person retrieved successfully",
        person: [person]
      });
    }
  });
  return res.status(404).send({
    success: "false",
    message: "person does not exist"
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
