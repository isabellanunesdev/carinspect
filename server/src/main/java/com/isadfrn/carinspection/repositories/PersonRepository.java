package com.isadfrn.carinspection.repositories;

import com.isadfrn.carinspection.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> { }
