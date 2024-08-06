package com.garage.iigvrh.Repository;

import com.garage.iigvrh.Models.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Long> {

    
}