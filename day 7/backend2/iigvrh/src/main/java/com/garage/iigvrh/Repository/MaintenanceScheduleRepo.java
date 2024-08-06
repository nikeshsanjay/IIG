package com.garage.iigvrh.Repository;

import com.garage.iigvrh.Models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface MaintenanceScheduleRepo extends JpaRepository<MaintenanceSchedule, Long> {
}