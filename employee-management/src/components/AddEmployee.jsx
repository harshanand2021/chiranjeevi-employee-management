import axios from "axios";
import { useEffect, useState } from "react";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category: "",
    image: "",
  });
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/auth/category").then((result) => {
      if (result.data.Status) {
        setCategory(result.data.Result);
      } else {
        alert(result.data.Error);
      }
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/auth/add_employee',employee)
    .then(result => console.log(result.data))
    .catch(error => console.log(error))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="employeeName" className="form-label">
              Employee Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="empName"
              name="empName"
              placeholder="Enter Name"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="employeeEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="empEmail"
              name="empEmail"
              placeholder="abc@xyz.com"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control rounded-0"
              id="password"
              name="password"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="empSalary"
              name="empSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.salary })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="address">Employee Address</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="empAddress"
              name="empAddress"
              placeholder="123 Main Street"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.address })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="image">Employee Image</label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="empImage"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, image: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="form-select"
              onChange={(e) =>
                setEmployee({ ...employee, category: e.target.value })
              }
            >
              {category.map((c) => {
                return <option key={c.id}>{c.name}</option>;
              })}
            </select>
          </div>

          <div className="col-12">
            <button className="btn btn-primary w-100">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
