// Libraries
import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";

function CustomersTable({ customers }) {

  // State
  const [ customerList, setCustomerList ] = useState([]);

  /**
   * 
   */
  useEffect(() => {
    setCustomerList(Object.values(customers));
  }, []);

  /**
   * 
   */
  const columns = [
    {
      name: "id",
      label: "id",
      options: {
        filter: true,
        sort: true
      }
    },
    { 
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: true
      }
    },
  ];

  /**
   * 
   */
  const options = {
    selectableRows: false,
    rowsPerPageOptions: [20, 40, 60]
  }

  /**
   * 
   */
  const data = customerList;

  /**
   * 
   */
  return (

    <div className="container mt-5">
      <MUIDataTable
        title={"Customers List"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default CustomersTable;