package com.isadfrn.carinspection.services.impl;

import com.isadfrn.carinspection.entities.Person;
import com.isadfrn.carinspection.repositories.PersonRepository;
import com.isadfrn.carinspection.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonServiceImpl implements PersonService {
    @Autowired
    private final PersonRepository personRepository;
    public PersonServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }
    @Override
    public Person save(Person person) {
        return personRepository.save(person);
    }
    @Override
    public Optional<Person> findById(Long id) {
        return personRepository.findById(id);
    }
    public List<Person> findAll() {
        return personRepository.findAll();
    }
}
