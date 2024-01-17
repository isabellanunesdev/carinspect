const express = require("express");
const personController = require("../controllers/person.controller");
const router = express.Router();

router.post("/", (req, res) => personController.createPerson(req, res));

router.get("/", (req, res) => personController.getAllPersons(req, res));

module.exports = router;
