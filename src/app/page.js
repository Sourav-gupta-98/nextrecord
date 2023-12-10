/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// import Image from 'next/image'
// import styles from './page.module.css'
import Header from "@/components/Header";
import { useEffect, useState } from "react";

import { Container, Table } from "react-bootstrap";

export default function Home() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function get() {
      let data1 = await fetch("api/record");
      data1 = await data1.json();
      console.log(data1);
      setdata(data1.result);
    }
    get();
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Table className="">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Title</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{item.title}</td>
                  <td>{item.Message}</td>
                  <td>{item.Date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
