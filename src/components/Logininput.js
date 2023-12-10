"use client";
import React, { useState } from "react";

const Logininput = ({ loginform }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const login = () => {
    if (email !== "" && password !== "") {
      //   console.log("server1", email);
      loginform(email, password);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Email"
        className="form-control"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Your Password"
        className="form-control mt-3"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button
        className="btn btn-sm btn-outline-success w-100 mt-3"
        onClick={login}
      >
        Login
      </button>
    </>
  );
};

export default Logininput;
