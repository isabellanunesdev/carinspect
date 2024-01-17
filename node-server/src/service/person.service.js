const personRepository = require("../repositories/person.repository");

class PersonService {
  async createPerson(personData) {
    try {
      return await personRepository.create(personData);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAllPersons() {
    try {
      return await personRepository.findAll();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = new PersonService();
