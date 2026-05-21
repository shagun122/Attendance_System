import * as XLSX from "xlsx";

import { saveAs } from "file-saver";

function ExportExcel({
  employees,
}) {

  const exportToExcel = () => {

    const worksheet =
      XLSX.utils.json_to_sheet(

        employees.map(
          (employee) => ({

            Name:
              employee.name,

            Email:
              employee.email,

            Department:
              employee.department,

            Role:
              employee.role,

            Status:
              employee.status,

            Salary:
              employee.salary,
          })
        )
      );

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Employees"
    );

    const excelBuffer =
      XLSX.write(workbook, {

        bookType: "xlsx",

        type: "array",
      });

    const fileData =
      new Blob(
        [excelBuffer],
        {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        }
      );

    saveAs(
      fileData,
      "employee-report.xlsx"
    );
  };

  return (

    <button
      onClick={exportToExcel}
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
    >
      Export Excel
    </button>

  );
}

export default ExportExcel;