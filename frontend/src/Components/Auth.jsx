import React, { useState } from "react";
import './Auth.css'
import axios from "axios";

export default function Auth() {
  const [isLogin, setIsLogin] = useState();
  const [LoginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [SignUpForm, setSignUpForm] = useState({
    full_name: "",
    country: "",
    email: "",
    password: "",
  });

  function HandleLoginEmail(e) {
    setLoginForm({
      ...LoginForm,
      email: e.target.value,
    });
  }

  function HandleLoginPassword(e) {
    setLoginForm({
      ...LoginForm,
      password: e.target.value,
    });
  }

  function HandleSignUpFullName(e) {
    setSignUpForm({
      ...SignUpForm,
      full_name: e.target.value,
    });
  }

  function HandleSignUpCountry(e) {
    setSignUpForm({
      ...SignUpForm,
      country: e.target.value,
    });
  }

  function HandleSignUpEmail(e) {
    setSignUpForm({
      ...SignUpForm,
      email: e.target.value,
    });
  }

  function HandleSignUpPassword(e) {
    setSignUpForm({
      ...SignUpForm,
      password: e.target.value,
    });
  }

  async function HandleSignUpSubmit(e) {
    try {
      e.preventDefault();

      const result = await axios.post("http://localhost:3000/api/signup", {
        full_name: SignUpForm.full_name,
        country: SignUpForm.country,
        email: SignUpForm.email,
        password: SignUpForm.password,
      });

      console.log(result.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  async function HandleLoginSubmit(e) {
    try {
      e.preventDefault();

      const result = await axios.post("http://localhost:3000/api/login", {
        email: LoginForm.email,
        Inputpassword: LoginForm.password,
      },{
        withCredentials: true
      });

      console.log(result.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="d-flex flex-column rounded-4 shadow auth-div"
      // style={{
      //   backgroundColor: "#ffffff",
      //   width: "100%",
      //   // maxWidth: "420px",
      //   padding: "40px",
      //   fontFamily: "Times New Roman",
      // }}
    >
      {isLogin ? (
        <h2 className="text-center" style={{ color: "#1d4ed8" }}>
          Login
        </h2>
      ) : (
        <h2 className="text-center" style={{ color: "#1d4ed8" }}>
          Create Account
        </h2>
      )}

      {isLogin ? (
        <p className="text-center" style={{ color: "#212529" }}>
          Access your account
        </p>
      ) : (
        <p className="text-center" style={{ color: "#212529" }}>
          Start tracking your tasks
        </p>
      )}

      {isLogin ? (
        <form className="d-flex flex-column gap-3" onSubmit={HandleLoginSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="rounded p-2 w-100 outline-none"
            style={{ border: "1px solid #64748b", backgroundColor: "#f8fafc" }}
            onChange={HandleLoginEmail}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="rounded p-2 w-100"
            style={{ border: "1px solid #64748b", backgroundColor: "#f8fafc" }}
            onChange={HandleLoginPassword}
            required
          />
          <button
            type="submit"
            class="btn w-100 text-light p-2 fw-bolder"
            style={{ backgroundColor: "#1d4ed8" }}
          >
            Login
          </button>
        </form>
      ) : (
        <form className="d-flex flex-column gap-3" onSubmit={HandleSignUpSubmit}>
          <input
            name="full_name"
            type="text"
            placeholder="Full Name"
            className="rounded p-2 w-100 outline-none"
            style={{ border: "1px solid #64748b", backgroundColor: "#f8fafc" }}
            onChange={HandleSignUpFullName}
            required
          />
          <select
            class="form-select"
            id="state"
            className="rounded p-2 w-100 outline-none"
            required=""
            style={{ border: "1px solid #64748b", backgroundColor: "#f8fafc" }}
            onChange={HandleSignUpCountry}
            name="country"
          >
            {" "}
            <option value="">Select Country</option>
            <option>India</option> <option>USA</option> <option>UK</option>{" "}
            <option>Germany</option>{" "}
          </select>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="rounded p-2 w-100 outline-none"
            style={{ border: "1px solid #64748b", backgroundColor: "#f8fafc" }}
            onChange={HandleSignUpEmail}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="rounded p-2 w-100"
            style={{ border: "1px solid #64748b", backgroundColor: "#f8fafc" }}
            onChange={HandleSignUpPassword}
            required
          />
          <button
            type="submit"
            class="btn w-100 text-light p-2 fw-bolder"
            style={{ backgroundColor: "#1d4ed8" }}
          >
            Sign Up
          </button>
        </form>
      )}

      {isLogin ? (
        <p className="text-center mt-3 mb-0">
          Don't have an account?{" "}
          <span style={{ color: "#1d4ed8", cursor: 'pointer' }} onClick={()=>{setIsLogin(false)}}>Sign Up</span>
        </p>
      ) : (
        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <span style={{ color: "#1d4ed8", cursor: 'pointer' }} onClick={()=>{ setIsLogin(true) }}>Login</span>
        </p>
      )}
    </div>
  );
}
