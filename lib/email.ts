"use server";

import { EmailTemplate } from "@/components/ui/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schemas";
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    // Send "Thank you for reaching out" email first
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: emailFormData.email,
      subject: 'Thank you for reaching out!',
      html: `<p>Hi ${emailFormData.firstName},<br/>We received your message and will get back to you shortly.</p>`
    });


    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: 'eylstocks@gmail.com',
      subject: 'New Contact Form Submission',
      html: `<p>Name: ${emailFormData.firstName}<br/>Email: ${emailFormData.email}<br/>Message: ${emailFormData.message}</p>`
      });

      if (error) {
        throw error;
    }

    // Store the message in Supabase
    const { error: dbError } = await supabase
      .from('messages')
      .insert([{ name: emailFormData.firstName, email: emailFormData.email, message: emailFormData.message }]);

    if (dbError) {
      throw dbError;
    }
  } catch (e) {
    console.error("Error sending email or storing message:", e);
    throw e;
  }
};

