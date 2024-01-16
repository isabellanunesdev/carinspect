package com.isadfrn.carinspection.entities;

import com.isadfrn.carinspection.entities.enums.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Person implements Serializable {

    @Serial
    private static final long serialVersionUID = 5792302260311160325L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(unique = true)
    private String email;
    @Column(unique = true)
    private Integer cpf;
    private Integer phone;
    @Enumerated(EnumType.STRING)
    private Role role;
}
