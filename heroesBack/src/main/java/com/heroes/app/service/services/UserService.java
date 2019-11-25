package com.heroes.app.service.services;

import com.heroes.app.service.models.UserServiceModel;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    boolean register(UserServiceModel user);
}
