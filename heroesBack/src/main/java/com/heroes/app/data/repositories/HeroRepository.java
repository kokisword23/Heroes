package com.heroes.app.data.repositories;

import com.heroes.app.data.models.Hero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface HeroRepository extends JpaRepository<Hero, String> {

    Hero findByName(String name);

    Optional<Hero> findByUserUsername(String name);

    List<Hero> findAllByUserUsernameNot(String name);
}
