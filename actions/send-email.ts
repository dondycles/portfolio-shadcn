"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
type Values = {
  email: string;
  subject: string;
  message: string;
};
export const sendemail = async (values: Values) => {
  if (!values) return { error: "No Data At All" };
  if (!values.email) return { error: "No Data At Email" };
  if (!values.subject) return { error: "No Data At Subject" };
  if (!values.message) return { error: "No Data At Message" };
  try {
    resend.emails.send({
      from: values.email as string,
      to: "johnrod.dondoyano@gmail.com",
      subject: values.subject,
      text: values.message,
    });
  } catch (error) {
    console.log(error);
  }
};
