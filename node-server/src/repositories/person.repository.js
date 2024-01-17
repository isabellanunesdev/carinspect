const Person = require("../models/person.model");

class PersonRepository {
  async create(personData) {
    const person = new Person(personData);
    return await person.save();
  }

  async findAll() {
    return await Person.find({});
  }
}

module.exports = new PersonRepository();
