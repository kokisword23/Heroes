package com.heroes.app.service.services;

import com.heroes.app.service.models.ItemServiceModel;
import com.heroes.app.web.models.ItemCreateModel;

import java.util.List;

public interface ItemService {
    List<ItemServiceModel> getItemsForUser(String username);

    void addToUserById(String id, String username);

    boolean create(ItemCreateModel serviceModel);

    List<ItemServiceModel> getAll();
}
