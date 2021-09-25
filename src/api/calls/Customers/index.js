// Endpoints
const endpoints = {
  allCustomers: 'http://localhost:8000/api/customer/index/',
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

export default {
  getAllCustomers
}