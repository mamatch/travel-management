package com.djoumatch.travelmanagement.bus;

import com.djoumatch.travelmanagement.bus.Bus;
import com.djoumatch.travelmanagement.bus.BusService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/bus")
public class BusController {
    private final BusService busService;

    @GetMapping
    public List<Bus> getALlBuses(){
        return busService.getAllBuses();
    }

    @PostMapping
    public void addBus(@Valid @RequestBody Bus bus){
        busService.addBus(bus);
    }

    @GetMapping("/{id}")
    public Bus getById(@PathVariable String id){
        return busService.findBusById(id).orElse(null);
    }
}
