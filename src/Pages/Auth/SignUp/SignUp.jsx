import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="mx-auto my-5 login-form p-5 rounded">
        <Form>
          <h3 className="text-center mb-4">Sign Up Here</h3>
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
        <p className="mb-0 mt-3 fw-bold text-muted">
          Forgot Password?
          <button className="primary-color border-0 bg-white fw-bold">
            Click Here
          </button>
        </p>
        <p className="fw-bold text-muted">
          You already have an account ?
          <Link to="/login" className="primary-color border-0 bg-white fw-bold">
            Log In
          </Link>
        </p>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="form-divider"></div>
          <small className="mx-3">Or</small>
          <div className="form-divider"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
