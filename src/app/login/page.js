import Logininput from "@/components/Logininput";
import Link from "next/link";
import React from "react";

const page = () => {
  async function userlogin(email1, password1) {
    "use server";
    // console.log("server");
    console.log(email1, password1);
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <span>Login</span>
        </div>
        <div className="card-body">
          <Logininput loginform={userlogin} />
        </div>
        <div className="card-footer">
          <span>If you are a new user </span>
          <Link href="/register" className="">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
