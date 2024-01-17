const personService = require("../service/person.service");

class PersonController {
  async createPerson(req, res) {
    try {
      const person = await personService.createPerson(req.body);
      res.status(201).json(person);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllPersons(req, res) {
    try {
      const persons = await personService.getAllPersons();
      res.status(200).json(persons);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PersonController();
