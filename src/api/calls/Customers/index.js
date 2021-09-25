// Endpoints
const endpoints = {
  allCustomers: 'http://localhost:8000/api/customer/index/',
  averageCustomer: 'http://localhost:8000/api/customer/averageCustomer/',
  
};

/**
 *
 */
async function getAllCustomers() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let result = await fetch(endpoints.allCustomers, requestOptions)
    .then(response =>
      response.json()
    )

    // Error
    .catch((error) => {
      console.error('Error:', error);
    });

  return result;
}
/**
 *
 */
 async function getAverage() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let result = await fetch(endpoints.averageCustomer, requestOptions)
    .then(response =>
      response.json()
    )

    // Error
    .catch((error) => {
      console.error('Error:', error);
    });

  return Object(result);
}
export default {
  getAllCustomers,
  getAverage
}