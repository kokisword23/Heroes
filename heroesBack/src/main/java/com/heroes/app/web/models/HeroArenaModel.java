package com.heroes.app.web.models;

import com.heroes.app.data.models.Gender;

public class HeroArenaModel {

    private String heroName;
    private Gender gender;
    private int level;

    public HeroArenaModel() {
    }

    public String getHeroName() {
        return heroName;
    }

    public void setHeroName(String heroName) {
        this.heroName = heroName;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }
}
