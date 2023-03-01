package com.djoumatch.travelmanagement.bus;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class BusService {
    private final BusRepository busRepository;

    public List<Bus> getAllBuses(){
        return busRepository.findAll();
    }

    public Optional<Bus> findBusById(String id){
        return busRepository.findById(id);
    }

    public void addBus(Bus bus){
        busRepository.save(bus);
    }
}
