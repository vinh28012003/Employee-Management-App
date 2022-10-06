package com.vinhtran.employeesystemapi.services;


import com.vinhtran.employeesystemapi.entity.EmployeeEntity;
import com.vinhtran.employeesystemapi.model.Employee;
import com.vinhtran.employeesystemapi.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

//Contains Business Logic
//The Service will call from the repository(DB) after being called by the Controller(API)
@Service
public class EmployeeServicesImpl implements EmployeeService{


    private EmployeeRepository employeeRepository;
    public EmployeeServicesImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }
}
