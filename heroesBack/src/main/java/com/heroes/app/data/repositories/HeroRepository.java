package com.heroes.app.data.repositories;

import com.heroes.app.data.models.Hero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HeroRepository extends JpaRepository<Hero, String> {

    Hero findByName(String name);
}
