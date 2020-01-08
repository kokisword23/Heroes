package com.heroes.app.service.services;

import com.heroes.app.data.models.Hero;
import com.heroes.app.service.models.HeroServiceModel;
import com.heroes.app.web.models.HeroCreateModel;
import com.heroes.app.web.models.HeroDetailsModel;

import java.util.List;

public interface HeroService {

    boolean save(HeroCreateModel heroCreateModel, String username);

    HeroServiceModel getByHeroName(String heroName);

    HeroServiceModel getByUsername(String username);

    String getHeroName(String username);

    boolean hasHero(String username);

    List<HeroServiceModel> getOpponents(String heroName);

    String getWinner(HeroDetailsModel hero, HeroDetailsModel opponent);

    void levelUp(String heroName);
}
