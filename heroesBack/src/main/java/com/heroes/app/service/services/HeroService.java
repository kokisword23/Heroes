package com.heroes.app.service.services;

import com.heroes.app.data.models.Hero;
import com.heroes.app.service.models.HeroServiceModel;

public interface HeroService {

    boolean save(HeroServiceModel heroServiceModel);

    HeroServiceModel getByHeroName(String heroName);

}
