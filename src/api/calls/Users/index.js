// Endpoints
const endpoints = {
	login: 'http://127.0.01:8000/api/auth/login',
  logout: 'http://127.0.0.1:8000/api/auth/logout'
};

/**
 *
 */
async function adminLogin(fields) {
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json'    },
    body: JSON.stringify(fields)
  };

  let result = await fetch(endpoints.login, requestOptions)
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
async function adminLogout(fields) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(fields)
  };

  let result = await fetch(endpoints.logout, requestOptions)
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
  adminLogin,
  adminLogout
}
