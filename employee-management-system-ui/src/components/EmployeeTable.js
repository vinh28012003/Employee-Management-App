import React from 'react'
import {  useNavigate } from 'react-router-dom';


const EmployeeTable = ({employee, deleteEmployee}) => {
    const navigate = useNavigate();
    const editEmployee = (e, id) => {
        
        e.preventDefault();
        navigate("/editEmployee/{id}", {state: {id: id}});
        
        
    };
  return (
    <tr key={employee.id}>
        <td className="text-left px-2 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{employee.firstName}</div>
        </td>
        <td className="text-left px-2 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{employee.lastName}</div>
        </td>
        <td className="text-left px-2 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{employee.emailId}</div>
        </td>
        <td className="text-center px-2 py-4 whitespace-nowrap font-medium text-sm">
            <a 
            onClick={(e,id) => editEmployee(e, employee.id)} 
            className="text-indigo-600 hover:text-indigo-800 px-1 hover:cursor-pointer">Edit</a>
            <a  
            onClick={(e,id) => deleteEmployee(e, employee.id)}
            className="text-indigo-600 hover:text-indigo-800 px-1 hover:cursor-pointer"
            >Dellete</a>
        </td>
    </tr>
  )
}

export default EmployeeTable
