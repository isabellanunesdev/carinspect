package com.isadfrn.carinspection.entities.dto;

import com.isadfrn.carinspection.entities.enums.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PersonDTO {
    private Long id;

    @NotNull(message = "Name is required")
    private String name;

    @NotNull(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotNull(message = "CPF is required")
    private Integer cpf;

    @NotNull(message = "Phone is required")
    private Integer phone;

    private Role role = Role.USER;
}
