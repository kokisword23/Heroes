package com.heroes.app.service.services.implementations;

import com.heroes.app.data.models.Hero;
import com.heroes.app.data.models.User;
import com.heroes.app.data.repositories.HeroRepository;
import com.heroes.app.data.repositories.UserRepository;
import com.heroes.app.service.models.HeroServiceModel;
import com.heroes.app.service.services.HeroService;
import com.heroes.app.service.services.factories.HeroFactory;
import com.heroes.app.web.models.HeroCreateModel;
import com.heroes.app.web.models.HeroDetailsModel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HeroServiceImpl implements HeroService {

    private final HeroRepository heroRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final HeroFactory factory;

    @Autowired
    public HeroServiceImpl(HeroRepository heroRepository, UserRepository userRepository, ModelMapper modelMapper, HeroFactory factory) {
        this.heroRepository = heroRepository;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.factory = factory;
    }

    @Override
    public boolean save(HeroCreateModel heroCreateModel, String username) {
        try {
            Hero hero = this.factory.create(heroCreateModel.getName(), heroCreateModel.getGender());
            User user = this.userRepository.findByUsername(username);
            hero.setUser(user);

            heroRepository.saveAndFlush(hero);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public HeroServiceModel getByHeroName(String heroName) {
        return this.modelMapper.map(this.heroRepository.findByName(heroName), HeroServiceModel.class);
    }

    @Override
    public String getHeroName(String username) {
        Hero hero = this.heroRepository.findByUserUsername(username).orElse(null);
        return hero != null ? hero.getName() : "";
    }

    @Override
    public boolean hasHero(String username) {
        return this.heroRepository.findByUserUsername(username).isPresent();
    }

    @Override
    public List<HeroServiceModel> getOpponents(String heroName) {
        List<Hero> heroes = this.heroRepository.findAllByUserUsernameNot(heroName);

        return heroes.stream().map(h -> this.modelMapper.map(h, HeroServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public HeroServiceModel getByUsername(String username) {
        Hero hero = this.heroRepository.findByUserUsername(username).orElse(null);
        return this.modelMapper.map(hero, HeroServiceModel.class);
    }

    @Override
    public String getWinner(HeroDetailsModel hero, HeroDetailsModel opponent) {
        int heroDmg = hero.getAttack() + hero.getStrength() * 4 -
                (opponent.getDefence() + opponent.getStamina() * 2);
        int opponentDmg = opponent.getAttack() + opponent.getStrength() * 4 -
                (hero.getDefence() + hero.getStamina() * 2);

        if (heroDmg > opponentDmg) {
            levelUp(heroRepository
                    .findByName(hero.getName()).getName());
            return hero.getName();
        } else {
            levelUp(heroRepository
                    .findByName(opponent.getName()).getName());
            return opponent.getName();
        }
    }

    @Override
    public void levelUp(String heroName) {
        Hero hero = heroRepository.findByName(heroName);
        hero.setLevel(hero.getLevel() + 1);
        hero.setStrength(hero.getStrength() + 5);
        hero.setStamina(hero.getStamina() + 5);

        heroRepository.save(hero);
    }
}
