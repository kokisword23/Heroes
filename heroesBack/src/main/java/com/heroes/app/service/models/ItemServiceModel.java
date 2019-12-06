package com.heroes.app.service.models;

import com.heroes.app.data.models.Slot;

import java.util.List;

public class ItemServiceModel {

    private String name;
    private Slot slot;
    private int stamina;
    private int strength;
    private int attack;
    private int defence;
    private List<HeroServiceModel> heroes;

    public ItemServiceModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Slot getSlot() {
        return slot;
    }

    public void setSlot(Slot slot) {
        this.slot = slot;
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

    public List<HeroServiceModel> getHeroes() {
        return heroes;
    }

    public void setHeroes(List<HeroServiceModel> heroes) {
        this.heroes = heroes;
    }
}
