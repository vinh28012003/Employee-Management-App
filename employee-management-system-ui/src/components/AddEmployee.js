import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {
    //Method use to navigate to the List
    const navigate = useNavigate();
    //Add employee const use to create a blue print for employee's data
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });
    //handle change use to assemble input data in to the blueprint
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value});
    };
    //saveEmployee called to ask the service to send the data to backend
    const saveEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/employeeList");
        }).catch((error) => {
            console.log(error);
        });
    }
    //Reset textbox
    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
        });
    };
  return (
    <div className="flex max-w-2xl shadow mx-auto border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-3xl tracking-wider">
                <h1>
                    Add New Employee
                </h1>
            </div>
            <div className="item-center justify-center h-14 w-full my-2">
                <label className="block text-gray-700 text-sm font-normal">
                    First Name
                </label>
                <input 
                type="text" 
                name="firstName"
                value={employee.firstName} 
                onChange={(e) => handleChange(e)}
                className="h-8 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="item-center justify-center h-14 w-full my-2">
                <label className="block text-gray-700 text-sm font-normal">
                    Last Name
                    </label>
                <input 
                type="text"
                name="lastName"
                value = {employee.lastName}
                onChange={(e) => handleChange(e)}
                className="h-8 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="item-center justify-center h-14 w-full my-2">
                <label className="block text-gray-700 text-sm font-normal">
                    Email
                </label>
                <input 
                type="text"
                name="emailId"
                value={employee.emailId}
                onChange={(e) => handleChange(e)}
                className="h-8 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="item-center justify-center h-9 w-full my-4 space-x-4 pt-4">
                <button 
                onClick={saveEmployee}
                className="rounded text-white font-semibold bg-green-500 hover:bg-green-600 py-2 px-6">
                    Save
                </button>
                <button 
                className="rounded text-white font-semibold bg-red-500 hover:bg-red-600 py-2 px-6 "
                onClick={reset}>
                    Clear
                </button>
            </div>
            
        </div>     
    </div>
  )
}

export default AddEmployee