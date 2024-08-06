package com.garage.iigvrh.Repository;

import com.garage.iigvrh.Models.*;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByEmail(String username);

    
}