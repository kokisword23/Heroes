package com.heroes.app.service.services.factories;

import com.heroes.app.data.models.Gender;
import com.heroes.app.data.models.Hero;

public interface HeroFactory {
    Hero create(String name, String gender);
}
