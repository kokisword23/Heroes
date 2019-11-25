package com.heroes.app.service.services;

import com.heroes.app.service.models.RoleServiceModel;

public interface RoleService {

    void seedRolesInDB();

    RoleServiceModel findRole(String role);
}
