// Libraries
import React, { useEffect, useState } from 'react';

// Api calls
import { customersApi } from '../../api';

// Components
import { Header } from '../../components/Header';
import { CustomersTable } from './components/CustomersTable';
import { LoginGraph } from './components/LoginGraph';

// Style
import './DashboardPage.scss';

function DashboardPage() {

  // State
  const [ customers, setCustomers ] = useState([]);

  /**
   * 
   */
  useEffect(async () => {

    // Get all customers api call
    let allCustomers = await customersApi.getAllCustomers();

    setCustomers(allCustomers);
  }, []);

  /**
   *
   */
  return (
    <div>
      <Header />
      <CustomersTable 
        customers={customers}
      />
      <LoginGraph />
    </div>
  );
}

export default DashboardPage;