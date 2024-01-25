"use server";

import { Resend } from "resend";

const resend = new Resend("re_JjaVp37V_3WpvkNcJLh554ovxZDmzA2B4");

export const sendemail = async (values: any) => {
  console.log(values);
  try {
    resend.emails.send({
      from: values.email as string,
      to: "johnrod.dondoyano@gmail.com",
      subject: values.subject,
      text: values.message as string,
    });
  } catch (error) {
    console.log(error);
  }
};
