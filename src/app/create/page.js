import Addinput from "@/components/Addinput";
import Header from "@/components/Header";
import { connectionSrt } from "@/lib/db";
import { record } from "@/lib/model/Record";
import mongoose from "mongoose";
import { redirect } from "next/navigation";
import React from "react";
import { Card, CardBody, CardHeader, Container } from "react-bootstrap";

const page = () => {
  const addData = async (title, message, date) => {
    "use server";
    await mongoose.connect(connectionSrt);
    let data = await record.insertMany({
      title: title,
      Message: message,
      Date: date,
    });
    redirect("/");
  };

  return (
    <div>
      <Header />
      <Container>
        <Card>
          <CardHeader>
            <span>Add Record</span>
          </CardHeader>
          <CardBody>
            <Addinput add={addData} />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default page;
