import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { RegisterUser } from "../../config/Endpoints";

import Loading from "../../loaders/DefaultLoading.svg";

export const Register = () => {
  const { setAuth } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [warningMsg, setWarningMsg] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      // setAlert("Passwords do not match", "danger");
      console.log("Passwords do not match.");
    } else {
      console.log("Passwords are matching.");
      // register({ name, email, password });
    }
    // fetchLogin(formData);
  };

  const fetchRegister = async (inputData) => {
    const { data } = await axios.post(RegisterUser(), inputData, config);
    setLoading(false);
    if (!data.token) {
      setWarningMsg(data.msg);
    } else {
      setAuth(data.data);
      setSuccessMsg(data.msg);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div
      id="register"
      className="min-h-screen flex flex-grow justify-center items-center"
    >
      <div className="flex flex-col h-screen w-full p-10">
        <div className="mb-2">
          <p className="text-xs font-light text-zinc-400">
            Pages / <span className="font-semibold">register</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0">
          <div className="flex flex-col lg:items-start lg:justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">Register</h1>
              <p className="text-sm">Create a new account.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-zinc-900 text-2xl mt-10 overflow-x-hidden">
          <form className="form" onSubmit={onSubmit}>
            <div className="text-sm mb-2">
              <input
                type="text"
                placeholder="Name"
                className="py-1 px-4 rounded-full outline-none hover:shadow-sm transition-all placeholder:text-zinc-300 placeholder:font-light"
                name="name"
                value={name}
                onChange={onChange}
                required
              />
            </div>
            <div className="text-sm mb-2">
              <input
                type="email"
                placeholder="Email Address"
                className="py-1 px-4 rounded-full outline-none hover:shadow-sm transition-all placeholder:text-zinc-300 placeholder:font-light"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="text-sm mb-2">
              <input
                type="password"
                placeholder="Password"
                className="py-1 px-4 rounded-full outline-none hover:shadow-sm transition-all placeholder:text-zinc-300 placeholder:font-light"
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
              />
            </div>
            <div className="text-sm">
              <input
                type="password"
                placeholder="Confirm password"
                className="py-1 px-4 rounded-full outline-none hover:shadow-sm transition-all placeholder:text-zinc-300 placeholder:font-light"
                name="password"
                value={password2}
                onChange={onChange}
                minLength="6"
              />
            </div>
            <input
              type="submit"
              className="bg-indigo-500 text-zinc-100 px-8 py-1 text-sm mt-5 cursor-pointer hover:bg-indigo-400 rounded-full transition-all"
              value="Login"
            />
          </form>
          {successMsg && (
            <p className="text-sm text-indigo-400">{successMsg}</p>
          )}
          {warningMsg && (
            <p className="text-sm text-indigo-400">{warningMsg}</p>
          )}
          <p className="text-sm text-zinc-400 font-extralight mt-2">
            Already have an account?{" "}
            <Link to="/login">
              <span className="font-normal">Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
