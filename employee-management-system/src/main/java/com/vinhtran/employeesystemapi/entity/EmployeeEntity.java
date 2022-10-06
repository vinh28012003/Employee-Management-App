package com.vinhtran.employeesystemapi.entity;

import lombok.Data;

import javax.persistence.*;
//Where we want to save data toward the database
@Entity
@Data
@Table(name= "employee")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
