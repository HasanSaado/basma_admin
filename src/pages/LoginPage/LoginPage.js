// Libraries
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Api calls
import { usersApi } from '../../api';

// Style
import './LoginPage.scss';

function LoginPage() {
  const history = useHistory();
  // State
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')) {
      history.push('/dashboard');
    }
  }, [])

  /**
   *
   */
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let result = await usersApi.adminLogin({
      email: email,
      password: password
    });

    if(result.token) {
      localStorage.setItem('token', result.token)
      window.location.reload(false);
    } else {
      alert('Error');
    }
  }

  /**
   *
   */
  return (
    <div className="container login-form">
      <div className="py-5">
        <img 
          src="/logo.svg" 
          className="login-logo"
        />
      </div>
      <Form 
        onSubmit={handleSubmit}
        className="w-50"
      >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            value={password}
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button 
          variant="danger" 
          type="submit"
          disabled={!validateForm()}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
