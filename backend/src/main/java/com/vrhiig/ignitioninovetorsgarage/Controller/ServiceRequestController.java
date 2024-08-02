package com.vrhiig.ignitioninnovatorsgarage.Controller;

import com.vrhiig.ignitioninnovatorsgarage.Models.ServiceRequest;
import com.vrhiig.ignitioninnovatorsgarage.Service.ServiceRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/service-requests")
public class ServiceRequestController {

    @Autowired
    private ServiceRequestService serviceRequestService;

    @GetMapping
    public List<ServiceRequest> getAllServiceRequests() {
        return serviceRequestService.getAllServiceRequests();
    }

    @GetMapping("/{id}")
    public ServiceRequest getServiceRequestById(@PathVariable Long id) {
        return serviceRequestService.getServiceRequestById(id);
    }

    @PostMapping
    public ServiceRequest createServiceRequest(@RequestBody ServiceRequest serviceRequest) {
        return serviceRequestService.createServiceRequest(serviceRequest);
    }

    @PutMapping("/{id}")
    public ServiceRequest updateServiceRequest(@PathVariable Long id, @RequestBody ServiceRequest serviceRequest) {
        return serviceRequestService.updateServiceRequest(id, serviceRequest);
    }

    @DeleteMapping("/{id}")
    public void deleteServiceRequest(@PathVariable Long id) {
        serviceRequestService.deleteServiceRequest(id);
    }
}
