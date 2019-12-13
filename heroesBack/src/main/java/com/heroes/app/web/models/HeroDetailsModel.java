package com.heroes.app.web.models;

import com.heroes.app.data.models.Gender;
import com.heroes.app.service.models.UserServiceModel;

import java.util.List;

public class HeroDetailsModel {

    private String name;
    private Gender gender;
    private int level;
    private int stamina;
    private int strength;
    private int attack;
    private int defence;
    private List<ItemViewModel> items;
    private UserServiceModel user;

    public HeroDetailsModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public int getStamina() {
        return stamina;
    }

    public void setStamina(int stamina) {
        this.stamina = stamina;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getAttack() {
        return attack;
    }

    public void setAttack(int attack) {
        this.attack = attack;
    }

    public int getDefence() {
        return defence;
    }

    public void setDefence(int defence) {
        this.defence = defence;
    }

    public List<ItemViewModel> getItems() {
        return items;
    }

    public void setItems(List<ItemViewModel> items) {
        this.items = items;
    }

    public UserServiceModel getUser() {
        return user;
    }

    public void setUser(UserServiceModel user) {
        this.user = user;
    }
}
