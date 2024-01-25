"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { sendemail } from "@/actions/send-email";
import { useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { TbSend, TbSendOff } from "react-icons/tb";

const formSchema = z.object({
  message: z.string().min(1, {
    message: "Please input your message.",
  }),
  email: z.string().email(),
  subject: z.string().min(1, {
    message: "Please input subject.",
  }),
});

export function EmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      subject: "",
    },
  });

  const [emailSent, setEmailSent] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const { error, success } = await sendemail(values);
    if (error) return form.setError("message", { message: String(error) });
    form.reset();
    setEmailSent(true);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {emailSent ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <CheckCircle2 className="w-10 h-10" />
            <p className="font-semibold">Email Sent!</p>
            <Button
              onClick={() => {
                setEmailSent(false);
                form.reset();
              }}
            >
              Send another
            </Button>
          </div>
        ) : (
          <>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Send <Mail className="ml-2" />
            </Button>
          </>
        )}
      </form>
    </Form>
  );
}
