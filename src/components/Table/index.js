import React from "react";

const Table = ({ employeeRecords }) => {
  console.log(employeeRecords)
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>D.O.B</th>
          <th>Cell</th>
        </tr>
      </thead>
      <tbody>
        {(employeeRecords.length > 0) ?

          employeeRecords.map(function (employee, id) {
            console.log(employee)
            return (
              <tr key={id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.cell}</td>
                <td>{employee.dob.date}, {employee.dob.age}</td>
              </tr>
            )

          })

          : <tr><td colSpan="5">Loading...</td></tr>}
      </tbody>
    </table>
  );
}

export default Table