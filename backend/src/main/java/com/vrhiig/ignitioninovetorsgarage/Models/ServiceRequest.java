package com.vrhiig.ignitioninnovatorsgarage.Models;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class ServiceRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vehicleType;
    private String description;
    private LocalDateTime requestDate;

    @ManyToOne
    private User user;
}
