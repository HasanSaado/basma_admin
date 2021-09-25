// Libraries
import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";

function CustomersTable({ customers, average }) {

  // State
  const [ customerList, setCustomerList ] = useState([]);
  
  /**
   * 
   */
  useEffect(() => {
    setCustomerList(Object.values(customers));
  }, [customers]);

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
  return (

    <div className="container mt-5">
      <MUIDataTable
        title={"Customers List"}
        data={customerList}
        columns={columns}
        options={options}
      />
      <div className="my-3 text-end row">
        <div>Last 24 hours: {average.last24}</div>
        <div>Last month: {average.lastMonth}</div>
        <div>Last three month: {average.lastThreeMonth}</div>
      </div>
    </div>
  );
}

export default CustomersTable;