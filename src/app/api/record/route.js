import { connectionSrt } from "@/lib/db";
import { record } from "@/lib/model/Record";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionSrt);
  let data = await record.find();
  console.log(data);
  return NextResponse.json({ result: data });
}

export async function POST(req, res) {
  return NextResponse.json({ req, res });

  await mongoose.connect(connectionSrt);
  let data = await record.insertMany({
    title: title,
    Message: message,
    Date: date,
  });
  return NextResponse.json({ result: "success" });
}
