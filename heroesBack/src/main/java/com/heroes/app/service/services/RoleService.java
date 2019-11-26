package com.heroes.app.service.services;

import com.heroes.app.service.models.RoleServiceModel;

import java.util.Set;

public interface RoleService {

    void seedRolesInDB();

    RoleServiceModel finByAuthority(String role);

    Set<RoleServiceModel> findAllRoles();
}
