package com.isadfrn.carinspection.services;

import com.isadfrn.carinspection.entities.Person;

import java.util.List;
import java.util.Optional;

public interface PersonService {
    Person save(Person person);
    Optional<Person> findById(Long id);
    List<Person> findAll();
}
