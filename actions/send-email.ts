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
  if (!values.message) return { error: "No Data At Email" };
  if (!values.subject) return { error: "No Data At Subject" };
  if (!values.message) return { error: "No Data At Message" };
  try {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "johnrod.dondoyano@gmail.com",
      subject: values.subject,
      text: values.message,
      reply_to: values.email,
    });
  } catch (error) {
    console.log(error);
    if (error) return { error: error };
  }
  return { success: "Sent!" };
};
