// Endpoints
const endpoints = {
  allLogins: 'http://localhost:8000/api/login/index/',
};

/**
 *
 */
async function getAllLogins() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let result = await fetch(endpoints.allLogins, requestOptions)
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
  getAllLogins
}