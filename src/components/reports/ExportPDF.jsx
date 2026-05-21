import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

function ExportPDF({
  employees,
}) {

  const generatePDF = () => {

    const doc = new jsPDF();

    /* Title */
    doc.setFontSize(22);

    doc.text(
      "Employee Attendance Report",
      14,
      20
    );

    /* Table */
    autoTable(doc, {

      startY: 35,

      head: [[
        "Name",
        "Department",
        "Role",
        "Status",
        "Salary",
      ]],

      body: employees.map(
        (employee) => [

          employee.name,

          employee.department,

          employee.role,

          employee.status,

          `₹ ${employee.salary}`,
        ]
      ),
    });

    /* Save */
    doc.save(
      "employee-report.pdf"
    );
  };

  return (

    <button
      onClick={generatePDF}
      className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
    >
      Export PDF
    </button>

  );
}

export default ExportPDF;