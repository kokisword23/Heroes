package com.heroes.app.service.services.implementations;

import com.heroes.app.data.models.Role;
import com.heroes.app.data.repositories.RoleRepository;
import com.heroes.app.service.models.RoleServiceModel;
import com.heroes.app.service.services.RoleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

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
            this.roleRepository.saveAndFlush(new Role("USER"));
            this.roleRepository.saveAndFlush(new Role("ADMIN"));
        }
    }

    @Override
    public RoleServiceModel finByAuthority(String role) {
        return this.modelMapper.map(this.roleRepository.findByAuthority(role), RoleServiceModel.class);
    }

    @Override
    public Set<RoleServiceModel> findAllRoles() {
        return this.roleRepository.findAll()
                .stream()
                .map(r -> this.modelMapper.map(r, RoleServiceModel.class))
                .collect(Collectors.toSet());
    }
}
