package com.heroes.app.service.services.factories.base;

import com.heroes.app.config.annotations.Factory;
import com.heroes.app.data.models.Gender;
import com.heroes.app.data.models.Hero;
import com.heroes.app.service.services.factories.HeroFactory;

@Factory
public class HeroFactoryImpl implements HeroFactory {
    @Override
    public Hero create(String name, String gender) {
        Hero hero = new Hero();
        hero.setName(name);
        hero.setGender(Gender.valueOf(gender));
        hero.setAttack(1);
        hero.setDefence(1);
        hero.setLevel(1);
        hero.setStamina(1);
        hero.setStrength(1);
        return hero;
    }
}
