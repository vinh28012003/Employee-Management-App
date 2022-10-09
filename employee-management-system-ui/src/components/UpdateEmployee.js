import React, {useState, useEffect} from "react";
import { useLocation, useNavigate} from "react-router-dom";
import EmployeeService from '../services/EmployeeService';
const UpdateEmployee = () => {
    const navigate = useNavigate();
    const loct= useLocation();
    const [employee, setEmployee] = useState({
        id: loct.state.id,
        firstName: "",
        lastName: "",
        emailId: "",
    });
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value});
    };
    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, loct.state.id).then((response)=>{
            navigate("/employeeList")
        }).catch((error) =>{
            console.log(error);
        });
    };
    const cancelChange = (e) =>{
        e.preventDefault();
        try {
            navigate("/employeeList");
        } catch (error){
            console.log(error);
        }
    }
    useEffect(() => {
        const fetchData =  async () => {
            try{
                const response =  await EmployeeService.getEmployeeById(loct.state.id);
                setEmployee(response.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchData();
    },[loct.state.id]);
    
  return (
    <div className="flex max-w-2xl shadow mx-auto border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-3xl tracking-wider">
                <h1>
                    Update Employee
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
                onClick={updateEmployee}
                className="rounded text-white font-semibold bg-green-500 hover:bg-green-600 py-2 px-6">
                    Update
                </button>
                <button 
                onClick={cancelChange}
                className="rounded text-white font-semibold bg-red-500 hover:bg-red-600 py-2 px-6 "
                >
                    Cancel
                </button>
            </div>
        </div>     
    </div>
  )
};

export default UpdateEmployee
