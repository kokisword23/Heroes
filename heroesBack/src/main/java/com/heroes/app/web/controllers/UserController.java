package com.heroes.app.web.controllers;

import com.heroes.app.service.models.UserServiceModel;
import com.heroes.app.service.services.UserService;
import com.heroes.app.web.models.UserRegisterModel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping(value = "/api/users", consumes = "application/json", produces = "application/json")
public class UserController {

    private final UserService userService;
    private final ModelMapper modelMapper;

    @Autowired
    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody UserRegisterModel userRegisterModel) throws URISyntaxException {
        boolean result = this.userService
                .register(this.modelMapper.map(userRegisterModel, UserServiceModel.class));

        return ResponseEntity.created(new URI("/users/register")).body(result);
    }
}
