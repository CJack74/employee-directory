import React from "react";
import axios from "axios";
// import EmployeeData from "./EmployeeData";

// react functional/class based component ALL 
// NEED A RENDER function 
// render(){ return some shit here }


class Employee extends React.Component {
    state = {
        employeeRecords: [],
    };
    componentDidMount = () => {
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
                this.setState({employeeRecords:employdata });
                
            })
            .catch(err=> console.log(err));
    };

    render(){
        return <div> data goes ehre </div> 
    }

    renderTableData() {
        console.log("state employeeRecords: ",this.state.employeeRecords);
        this.state.employeeRecords.map(function(employees){
            console.log(employees);
            return this.state.employeeRecords.map((employdata, id) => {

                const { name, email, cell, dob} = employdata //destructed
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{cell}</td>
                        <td>{dob}</td>
                    </tr>
                )
        })   
        //work on variable to store data then push to table 
        
        

        })
    }
};


export default Employee;