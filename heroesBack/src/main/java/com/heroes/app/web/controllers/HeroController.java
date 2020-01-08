package com.heroes.app.web.controllers;

import com.heroes.app.service.services.HeroService;
import com.heroes.app.web.models.HeroArenaModel;
import com.heroes.app.web.models.HeroCreateModel;
import com.heroes.app.web.models.HeroDetailsModel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/heroes", produces = "application/json")
public class HeroController {

    private final HeroService heroService;
    private final ModelMapper modelMapper;

    @Autowired
    public HeroController(HeroService heroService, ModelMapper modelMapper) {
        this.heroService = heroService;
        this.modelMapper = modelMapper;
    }

    @PostMapping(value = "/create", consumes = "application/json")
    public ResponseEntity save(@RequestBody HeroCreateModel heroModel, Principal principal) throws URISyntaxException {
        boolean result = heroService.save(heroModel, principal.getName());

        return ResponseEntity.created(new URI("/heroes/create")).body(result);
    }

    @GetMapping(value = "/details/{name}")
    public ResponseEntity heroDetails(@PathVariable String name) throws URISyntaxException {
        HeroDetailsModel hero = this.modelMapper.map(this.heroService.getByHeroName(name), HeroDetailsModel.class);
        return ResponseEntity.created(new URI("/heroes/details/" + name)).body(hero);
    }

    @GetMapping(value = "/arena")
    public List<HeroArenaModel> getOpponents(Principal principal) {
        return this.heroService.getOpponents(principal.getName())
                .stream()
                .map(h -> this.modelMapper.map(h, HeroArenaModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping(value = "/arena/{name}")
    public List<HeroDetailsModel> fight(@PathVariable String name, Principal principal) {
        HeroDetailsModel hero = this.modelMapper
                .map(this.heroService.
                        getByUsername(principal.getName()), HeroDetailsModel.class);
        HeroDetailsModel opponent = this.modelMapper
                .map(this.heroService.
                        getByHeroName(name), HeroDetailsModel.class);

        return List.of(hero,opponent);
    }

    @PostMapping(value = "/arena/{name}")
    public String fightConfirm(@PathVariable String name, Principal principal) {
        HeroDetailsModel hero = this.modelMapper
                .map(this.heroService.
                        getByUsername(principal.getName()), HeroDetailsModel.class);
        HeroDetailsModel opponent = this.modelMapper
                .map(this.heroService.
                        getByHeroName(name), HeroDetailsModel.class);

        return this.heroService.getWinner(hero, opponent);
    }
}
