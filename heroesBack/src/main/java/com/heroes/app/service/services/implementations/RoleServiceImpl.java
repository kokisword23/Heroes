package com.heroes.app.service.services.implementations;

import com.heroes.app.data.models.Role;
import com.heroes.app.data.repositories.RoleRepository;
import com.heroes.app.service.models.RoleServiceModel;
import com.heroes.app.service.services.RoleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository, ModelMapper modelMapper) {
        this.roleRepository = roleRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public void seedRolesInDB() {
        if (this.roleRepository.count() == 0) {
            this.roleRepository.save(new Role("USER"));
            this.roleRepository.save(new Role("ADMIN"));
        }
    }

    @Override
    public RoleServiceModel findRole(String role) {
        return this.modelMapper.map(this.roleRepository.getByAuthority(role), RoleServiceModel.class);
    }
}
