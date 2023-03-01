package com.djoumatch.travelmanagement.bus;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table
@Entity
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @NotBlank
    @Column(nullable = false, unique = true)
    private String registrationNumber;
    @NotNull
    @Enumerated(EnumType.STRING)
    private BusType type;


}
