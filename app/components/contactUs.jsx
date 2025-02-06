"use client";
import emailjs from "@emailjs/browser";
import { sendEmail } from "../utils/emailService";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "./emailSent";

export default function ContactUs() {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {  
    setLoading(true)  
    try {
      await sendEmail({
        from_name: data?.name,
        message: data?.message,
        reply_to: data?.email,
      });
      setOpen(true);
      reset()
    } catch (error) {
      console.log("error from email sender", error);

      alert("Failed to send email");
    }
    setLoading(false)  
  };
  return (
    <div className="contactUs" id="contact">
      <div className="contactUs__title">
        Got some questions?
        <span>Reach out</span> to us
      </div>
      <div className="contactUs__subtitle">
        Don't hesitate to reach you to us with any questions you might have.
        Don't hesitate to reach you to us with any questions you might have
      </div>
      <form className="contactUs__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          required
        />
        <input
          type="email"
          placeholder="Enter email"
          {...register("email")}
          required
        />
        <textarea
          name=""
          id=""
          placeholder="Enter message"
          {...register("message")}
          required
        ></textarea>
        <button type="submit">{loading ? "Loading..." : "Contact us"}</button>
      </form>

      <Modal open={open} setOpen={setOpen} />

    </div>
  );
}
