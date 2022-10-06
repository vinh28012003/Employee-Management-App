package com.vinhtran.employeesystemapi.repository;

import com.vinhtran.employeesystemapi.entity.EmployeeEntity;
import com.vinhtran.employeesystemapi.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
