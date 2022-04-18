import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div>
      <div className="mx-auto my-5 login-form p-5 rounded">
        <Form>
          <h3 className="text-center mb-4 fw-bold">Login From</h3>
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
          Dont have an account?
          <Link
            to="/signUp"
            className="primary-color border-0 bg-white fw-bold login-link ms-2"
          >
            Sign Up
          </Link>
        </p>

        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="form-divider"></div>
          <small className="mx-3">Or</small>
          <div className="form-divider"></div>
        </div>
        <div className="d-grid col-12 mx-auto">
          <button className="google-btn primary-font py-2 rounded fs-6">
            <FcGoogle className="fs-4 me-4"></FcGoogle>
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
