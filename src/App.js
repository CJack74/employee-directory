import React, {useState, useEffect} from "react";
import axios from "axios";

//import "./App.css"
// import Employee from "./pages/Employee";
import Table from "./components/Table"
// import "./index.css";

function App() {

  const [employeesRecords, setEmployeeRecords] = useState([])


  useEffect( () => {
    axios.get("https://randomuser.me/api/?results=25&nat=us")
        .then((records) => {
            //console.log(records);
            //console.log("records +++++++++++++++")
            let employdata = records.data.results;
            // let employRecordsInfo = [];
            // console.log(employdata);
            // console.log("employdata+++++++++++++++++");
            employdata = employdata.map( item => ({
                id: item.id.value,
                name: item.name.first +" "+ item.name.last,
                email: item.email,
                dob: item.dob,
                cell: item.cell
            }))
            setEmployeeRecords(employdata)
            
        })
        .catch(err=> console.log(err));
}, [])

  return (
    <div className="App">
      <header className="jumbotron">
        Employee Directory
      </header>
     
      <Table employeeRecords={employeesRecords} />
      {/* employeeRecords={ this.state.employeeRecords } */}
    </div>
  );
}

export default App;
