function AddEmployee() {
  return (

    <div className="dashboard">

      <h1>Add Employee</h1>

      <form className="employee-form">

        <input type="text" placeholder="Employee Name" />

        <input type="text" placeholder="Department" />

        <input type="email" placeholder="Email" />

        <button type="submit">
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default AddEmployee;