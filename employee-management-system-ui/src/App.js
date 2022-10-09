
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar  from "./components/NavBar"
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    //routes use to create UI fragments for each using purpose
  <>
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route index element={<EmployeeList/>}/>
        <Route path="/" element={<EmployeeList/>}></Route>
        <Route path="/employeeList" element = {<EmployeeList/>}/>
        <Route path="/addEmployee" element = {<AddEmployee/>}/>
        <Route path="/editEmployee/:id" element = {<UpdateEmployee/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
