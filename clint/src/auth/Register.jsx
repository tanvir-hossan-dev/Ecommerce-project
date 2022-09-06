import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { regiserUser } from "../Redux/features/User/userSlice";
import Input from "./Input";
import Submitbtn from "./Submitbtn";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(initialState);

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { name, email, password } = inputs;
    e.preventDefault();
    dispatch(regiserUser({ name, email, password }));
    setInputs(initialState);
  };

  return (
    <div className="mt-6">
      <div className="container_bg shadow relative">
        <div className="absolute  left-2/4 h-2/3 top-24 bg-indigo-600" style={{ width: "1px" }}></div>
        <div className="grid grid-cols-2">
          <div className="px-24 pt-16 pb-24">
            <h2 className=" font-sans text-4xl">Create Account</h2>
            <form className="mt-6" onSubmit={handleSubmit}>
              <Input
                handleOnChange={handleOnChange}
                name="name"
                type="text"
                label="Name"
                placeholder="Enter Your Name"
                value={inputs.name}
              />
              <Input
                handleOnChange={handleOnChange}
                name="email"
                type="email"
                label="Email Address"
                placeholder="Enter Your E-mail"
                value={inputs.email}
              />
              <Input
                handleOnChange={handleOnChange}
                name="password"
                type="password"
                label="Password"
                placeholder="Enter Your Password"
                value={inputs.password}
              />
              <Input
                handleOnChange={handleOnChange}
                name="confirmPassword"
                type="password"
                label="Confirm password"
                placeholder="Enter Your Confirm Password"
                value={inputs.confirmPassword}
              />

              <Submitbtn text="Sign Up" />
            </form>
          </div>
          <div className="p-24 mt-12">
            <h2 className=" font-sans text-3xl ">Sing In</h2>
            <p className="mt-2" style={{ color: "gray" }}>
              Login to mange orders
            </p>
            <Link
              to="/auth/login"
              type="submit"
              className="mt-4 group relative flex w-3/4 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
