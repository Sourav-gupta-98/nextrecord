"use client";
import React, { useState } from "react";

const Addinput = ({ add }) => {
  const [title, settitle] = useState("");
  const [message, setmessage] = useState("");
  const [date, setdate] = useState("");

  const addData = () => {
    add(title, message, date);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Title"
        className="form-control mt-2"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Message"
        className="form-control mt-2"
        value={message}
        onChange={(e) => setmessage(e.target.value)}
      ></textarea>
      <input
        type="date"
        placeholder="Title"
        className="form-control mt-2"
        value={date}
        onChange={(e) => setdate(e.target.value)}
      />
      <button
        className="btn btn-sm btn-outline-primary w-100  mt-2"
        onClick={addData}
      >
        Add Record
      </button>
    </>
  );
};

export default Addinput;
