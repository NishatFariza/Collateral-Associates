import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const deep = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, userGoogle] = useSignInWithGoogle(auth);

  if (error) {
    toast.error("Something Error");
    console.log(error);
  }

  useEffect(() => {
    if (user || userGoogle) {
      deep("/");
    }
  }, [deep, user, userGoogle]);

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (email == "" || password == "" || confirmPassword == "") {
      toast.error("Input field is empty");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password is not matched");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div className="mx-auto my-5 login-form p-5 rounded">
        <Form onSubmit={handleCreateUser}>
          <h3 className="text-center mb-4 fw-bold">Sign Up Here</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold text-dark">Your Name</Form.Label>
            <Form.Control
              onBlur={handleNameBlur}
              type="text"
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold text-dark">Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold text-dark">Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold text-dark">
              Confirm Password
            </Form.Label>
            <Form.Control
              onBlur={handleConfirmPasswordBlur}
              type="password"
              placeholder="Confirm Password"
              required
            />
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
          You already have an account?
          <Link
            to="/login"
            className="primary-color login-link border-0 bg-white fw-bold ms-2"
          >
            Log In
          </Link>
        </p>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="form-divider"></div>
          <small className="mx-3">Or</small>
          <div className="form-divider"></div>
        </div>
        <div className="d-grid col-12 mx-auto">
          <button
            onClick={() => signInWithGoogle()}
            className="google-btn primary-font py-2 rounded fs-6"
          >
            <FcGoogle className="fs-4 me-4"></FcGoogle>
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
