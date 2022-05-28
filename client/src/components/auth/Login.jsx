import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoginUser } from "../../config/Endpoints";

import Loading from "../../loaders/DefaultLoading.svg";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    fetchLogin(formData);
  };

  const fetchLogin = async (inputData) => {
    const { data } = await axios.post(LoginUser(), inputData, config);
    console.log(data);
    setLoading(false);
  };

  return (
    <div
      id="login"
      className="min-h-screen flex flex-grow justify-center items-center"
    >
      <div className="flex flex-col h-screen w-full p-10">
        <div className="mb-2">
          <p className="text-xs font-light text-zinc-400">
            Pages / <span className="font-semibold">login</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0">
          <div className="flex flex-col lg:items-start lg:justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-sm">Please log into your account.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-zinc-900 text-2xl mt-10 overflow-x-hidden">
          <form className="form" onSubmit={onSubmit}>
            <div className="text-base mb-2">
              <input
                type="email"
                placeholder="Email Address"
                className="py-1 px-4 rounded-full outline-none hover:shadow-sm transition-all placeholder:text-zinc-300"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="text-base">
              <input
                type="password"
                placeholder="Password"
                className="py-1 px-4 rounded-full outline-none hover:shadow-sm transition-all placeholder:text-zinc-300"
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
              />
            </div>
            <input
              type="submit"
              className="bg-indigo-500 text-zinc-100 px-8 py-1 text-base mt-5 cursor-pointer hover:bg-indigo-400 rounded-full transition-all"
              value="Login"
            />
          </form>
          <p className="text-base text-zinc-400 font-extralight mt-2">
            Don't have an account?{" "}
            <Link to="/register">
              <span className="font-normal">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
