package com.vrhiig.ignitioninnovatorsgarage.Service;

import com.vrhiig.ignitioninnovatorsgarage.Models.ServiceRequest;
import com.vrhiig.ignitioninnovatorsgarage.Repository.ServiceRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceRequestService {

    @Autowired
    private ServiceRequestRepository serviceRequestRepository;

    public List<ServiceRequest> getAllServiceRequests() {
        return serviceRequestRepository.findAll();
    }

    public ServiceRequest getServiceRequestById(Long id) {
        return serviceRequestRepository.findById(id).orElse(null);
    }

    public ServiceRequest createServiceRequest(ServiceRequest serviceRequest) {
        return serviceRequestRepository.save(serviceRequest);
    }

    public ServiceRequest updateServiceRequest(Long id, ServiceRequest serviceRequest) {
        ServiceRequest existingServiceRequest = serviceRequestRepository.findById(id).orElse(null);
        if (existingServiceRequest != null) {
            existingServiceRequest.setVehicleType(serviceRequest.getVehicleType());
            existingServiceRequest.setDescription(serviceRequest.getDescription());
            existingServiceRequest.setRequestDate(serviceRequest.getRequestDate());
            existingServiceRequest.setUser(serviceRequest.getUser());
            return serviceRequestRepository.save(existingServiceRequest);
        }
        return null;
    }

    public void deleteServiceRequest(Long id) {
        serviceRequestRepository.deleteById(id);
    }
}
