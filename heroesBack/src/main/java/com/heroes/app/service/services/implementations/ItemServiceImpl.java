package com.heroes.app.service.services.implementations;

import com.heroes.app.data.models.Hero;
import com.heroes.app.data.models.Item;
import com.heroes.app.data.repositories.HeroRepository;
import com.heroes.app.data.repositories.ItemRepository;
import com.heroes.app.service.models.ItemServiceModel;
import com.heroes.app.service.services.ItemService;
import com.heroes.app.web.models.ItemCreateModel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemsRepository;
    private final HeroRepository heroesRepository;
    private final ModelMapper mapper;

    @Autowired
    public ItemServiceImpl(ItemRepository itemsRepository, HeroRepository heroesRepository, ModelMapper mapper) {
        this.itemsRepository = itemsRepository;
        this.heroesRepository = heroesRepository;
        this.mapper = mapper;
    }

    @Override
    public List<ItemServiceModel> getItemsForUser(String username) {
        return itemsRepository.findAll()
                .stream()
                .map(item -> {
                    ItemServiceModel serviceModel = mapper.map(item, ItemServiceModel.class);
                    if (item.getHeroes() != null) {
                        Hero hero = item.getHeroes()
                                .stream()
                                .filter(h -> h.getUser().getUsername().equals(username))
                                .findAny()
                                .orElse(null);

                        serviceModel.setOwned(hero != null);
                    }
                    return serviceModel;
                })
                .collect(Collectors.toList());
    }

    @Override
    public void addToUserById(String id, String username) {
        Optional<Hero> heroResult = heroesRepository.findByUserUsername(username);
        if (heroResult.isEmpty()) {
            throw new NullPointerException("User does not have a hero");
        }

        Optional<Item> itemResult = itemsRepository.findById(id);
        if (itemResult.isEmpty()) {
            throw new NullPointerException("Item does not exists");
        }

        Hero hero = heroResult.get();
        Item item = itemResult.get();

        boolean hasItem = false;
        for (Item currItem: hero.getItems() ) {
            if (currItem.getSlot() == item.getSlot()) {
                hasItem = true;
                break;
            }
        }

        if (!hasItem) {
            hero.getItems().add(item);
            hero.setStrength(hero.getStrength() + item.getStrength());
            hero.setStamina(hero.getStamina() + item.getStamina());
            hero.setAttack(hero.getAttack() + item.getAttack());
            hero.setDefence(hero.getDefence() + item.getDefence());

            heroesRepository.saveAndFlush(hero);
        }
    }

    @Override
    public boolean create(ItemCreateModel serviceModel) {
        try {
            itemsRepository.save(this.mapper.map(serviceModel, Item.class));
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public List<ItemServiceModel> getAll() {
        return itemsRepository.findAll()
                .stream()
                .map(item -> mapper.map(item, ItemServiceModel.class))
                .collect(Collectors.toList());
    }
}
