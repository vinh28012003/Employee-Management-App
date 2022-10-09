import React, {useState, useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import EmployeeTable from './EmployeeTable';
const EmployeeList = () => {
    //Navigate method use to navigate to add employee UI
    const navigate = useNavigate();
    //loading method use to await for data fetch
    const [loading, setLoading] =useState(true);
    //employees method use to store fetched data and display
    const [employees, setEmployees] = useState(null);

    //useEffect method is to process and fetch data from backend
    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data);
            } catch (error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    //Method use to delete employee when user asked and remove the space contains removed data
    const deleteEmployee=(e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((res)=>{
            if (employees) {
                setEmployees((prevElement) =>{
                    return prevElement.filter((employee) => employee.id !== id);
                });
            }
        });
    };
  return (
    <div className="container mx-auto my-8">
        <div className="h-12">
            <button 
            className = "rounded bg-slate-700 text-white px-6 py-2 font-semibold" 
            onClick={()=>navigate("/addEmployee")}
            >Add Employee
            </button>
        </div>
        <div className="flex shawdow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="text-left px-1 font-medium text-gray-">First Name</th>
                        <th className="text-left px-1">Last Name</th>
                        <th className="text-left px-1">Email ID</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                {/*define if stop loading, display fetched data*/}
                {!loading &&( 
                <tbody>
                    {/*display the feteched data using map() method*/}                    
                    {employees.map((employee) => (
                        <EmployeeTable employee={employee} key={employee.id} deleteEmployee = {deleteEmployee}></EmployeeTable>
                    ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
        
    
  );
}

export default EmployeeList
