package com.heroes.app.web.models;

import com.heroes.app.data.models.Slot;

public class ItemViewModel {

    private String name;
    private Slot slot;

    public ItemViewModel() {
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
}
