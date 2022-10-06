package com.vinhtran.employeesystemapi.model;

import lombok.Data;

//Template represent data related to users to interact with UI
@Data
public class Employee {
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
