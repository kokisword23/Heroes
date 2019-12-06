package com.heroes.app.service.services.implementations;

import com.heroes.app.data.models.Hero;
import com.heroes.app.data.repositories.HeroRepository;
import com.heroes.app.service.models.HeroServiceModel;
import com.heroes.app.service.services.HeroService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HeroServiceImpl implements HeroService {

    private final HeroRepository heroRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public HeroServiceImpl(HeroRepository heroRepository, ModelMapper modelMapper) {
        this.heroRepository = heroRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public boolean save(HeroServiceModel heroServiceModel) {
        try {
            this.heroRepository.save(this.modelMapper.map(heroServiceModel, Hero.class));
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public HeroServiceModel getByHeroName(String heroName) {
        return this.modelMapper.map(this.heroRepository.findByName(heroName), HeroServiceModel.class);
    }
}
