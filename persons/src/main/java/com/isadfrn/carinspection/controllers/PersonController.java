package com.isadfrn.carinspection.controllers;

import com.isadfrn.carinspection.entities.Person;
import com.isadfrn.carinspection.entities.dto.PersonDTO;
import com.isadfrn.carinspection.services.PersonService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/persons")
public class PersonController {
    @Autowired
    public final PersonService personService;
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Person> save(@Valid @RequestBody PersonDTO personDTO) {
        Person person = Person.builder()
                .name(personDTO.getName())
                .email(personDTO.getEmail())
                .cpf(personDTO.getCpf())
                .phone(personDTO.getPhone())
                .role(personDTO.getRole())
                .password(personDTO.getPassword())
                .build();
        Person persistedPerson = personService.save(person);
        return ResponseEntity.status(HttpStatus.CREATED).body(persistedPerson);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Person>> findAll() {
        List<Person> personList = personService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(personList);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Optional<Person>> findById(@Valid @RequestBody Long id) {
        Optional<Person> person = personService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(person);
    }
}
