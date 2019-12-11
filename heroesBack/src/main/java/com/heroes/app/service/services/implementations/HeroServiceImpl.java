package com.heroes.app.service.services.implementations;

import com.heroes.app.data.models.Hero;
import com.heroes.app.data.models.User;
import com.heroes.app.data.repositories.HeroRepository;
import com.heroes.app.data.repositories.UserRepository;
import com.heroes.app.service.models.HeroServiceModel;
import com.heroes.app.service.services.HeroService;
import com.heroes.app.service.services.factories.HeroFactory;
import com.heroes.app.web.models.HeroCreateModel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public boolean hasHero(String username) {
       return this.heroRepository.findByUserUsername(username).isPresent();
    }
}
