import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Submitbtn from "./Submitbtn";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../Redux/features/auth/authApi";
import { useEffect } from "react";
import Error from "../components/Error/Error";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [login, { isSuccess, error, isError }] = useLoginMutation();
  const [inputs, setInputs] = useState(initialState);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { email, password } = inputs;
    e.preventDefault();

    login({ email, password });
  };

  useEffect(() => {
    if (isSuccess && !isError) {
      setInputs(initialState);
      navigate("/");
    }
  }, [navigate, isSuccess, isError]);

  return (
    <div className="mt-6">
      <div className="container_bg shadow relative">
        <div className="absolute   left-2/4 h-2/3 top-24 bg-indigo-600" style={{ width: "1px" }}></div>
        <div className="grid grid-cols-2">
          <div className="p-24">
            <h2 className=" font-sans text-4xl">Sign In</h2>
            <p className="mt-4">
              <span style={{ color: "gray" }}>New User?</span>{" "}
              <span className="font-medium" style={{ color: "gray" }}>
                Create Account
              </span>
            </p>
            <form className="mt-6" onSubmit={handleSubmit}>
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

              <Submitbtn text="Sign In" />
            </form>
            {isError && <Error message={error?.data?.Message} />}
          </div>
          <div className="p-24 mt-12">
            <h2 className=" font-sans text-3xl ">Create Account</h2>
            <p className="mt-2" style={{ color: "gray" }}>
              Create Account to mange orders
            </p>
            <Link
              to="/auth/register"
              type="submit"
              className="mt-4 group relative flex w-3/4 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
