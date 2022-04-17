import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="mx-auto my-5 login-form p-5 rounded">
        <Form>
          <h1>Login From</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <button className="border-0 rounded login-btn text-white fw-bold">
            Log in
          </button>
        </Form>
        <p>
          Forgot Password?
          <button className="primary-color border-0 bg-white fw-bold">
            Click Here
          </button>
        </p>
        <p>
          Dont have an account ?
          <button className="primary-color border-0 bg-white fw-bold">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
