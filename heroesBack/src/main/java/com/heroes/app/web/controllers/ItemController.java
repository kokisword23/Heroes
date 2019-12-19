package com.heroes.app.web.controllers;

import com.heroes.app.service.models.ItemServiceModel;
import com.heroes.app.service.services.ItemService;
import com.heroes.app.web.models.HeroCreateModel;
import com.heroes.app.web.models.ItemCreateModel;
import com.heroes.app.web.models.ItemViewModel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping(value = "/api/items", produces = "application/json")
public class ItemController {

    private final ItemService itemService;
    private final ModelMapper modelMapper;

    @Autowired
    public ItemController(ItemService itemService, ModelMapper modelMapper) {
        this.itemService = itemService;
        this.modelMapper = modelMapper;
    }

    @PostMapping(value = "/create", consumes = "application/json")
    @PreAuthorize("hasAuthority('Admin')")
    public ResponseEntity save(@RequestBody ItemCreateModel itemModel) throws URISyntaxException {
        boolean result =  itemService.create(itemModel);

        return ResponseEntity.created(new URI("/api/items/create")).body(result);
    }

    @GetMapping(value = "/merchant")
    @PreAuthorize("isAuthenticated()")
    public List<ItemServiceModel> merchant(Principal principal){
        return this.itemService.getItemsForUser(principal.getName());
    }

    @PostMapping(value = "/merchant/{id}")
    public void buyItem(@PathVariable String id, Principal principal) {
        itemService.addToUserById(id, principal.getName());
    }
}
