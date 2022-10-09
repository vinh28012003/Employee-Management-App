import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    //method use to save send data to backend from input
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    //method use to fetch data from backend
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    //method use to ask backend to remove a certain employee data
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/"+id);
    }
    
    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+id);
    }
    updateEmployee(employee,id){
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
        
    }
}

export default new EmployeeService();