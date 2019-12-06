package com.heroes.app.web.controllers;

import com.heroes.app.service.models.HeroServiceModel;
import com.heroes.app.service.services.HeroService;
import com.heroes.app.web.models.HeroCreateModel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping(value = "/api/heroes", consumes = "application/json", produces = "application/json")
public class HeroController {

    private final HeroService heroService;
    private final ModelMapper modelMapper;

    @Autowired
    public HeroController(HeroService heroService, ModelMapper modelMapper) {
        this.heroService = heroService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/create")
    public ResponseEntity save(@RequestBody HeroCreateModel heroModel) throws URISyntaxException {
       boolean result =  heroService.save(modelMapper.map(heroModel, HeroServiceModel.class));

        return ResponseEntity.created(new URI("/heroes/create")).body(result);
    }
}
