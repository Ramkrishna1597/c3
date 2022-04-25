import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import"../App.css"

export const EmployeeList = () => {
  const [employeesList, setEmployeesList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await fetch("http://localhost:8080/employee");
    data = await data.json();
    setEmployeesList(data);
  }

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}

      {employeesList.map((e) => {
        return (
          <div className="employee_card" key={e.employee_id}>
              <div>
            <Link to={`/employees/${e.employee_id}`}>
              <img className="employee_image" src={e.image} />
              <h3>{e.employee_name}</h3>
              <p className="employee_title">{e.title}</p>
            </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

