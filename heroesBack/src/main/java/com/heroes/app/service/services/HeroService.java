package com.heroes.app.service.services;

import com.heroes.app.data.models.Hero;
import com.heroes.app.service.models.HeroServiceModel;
import com.heroes.app.web.models.HeroCreateModel;

public interface HeroService {

    boolean save(HeroCreateModel heroCreateModel, String username);

    HeroServiceModel getByHeroName(String heroName);

    String getHeroName(String username);

    boolean hasHero(String username);
}
