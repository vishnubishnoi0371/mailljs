import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3vjr5hg", "template_k8k39cs", form.current, {
        publicKey: "i46m5s1cZf6tzqpJP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} className="mail_card mx-auto" onSubmit={sendEmail}>
      <label>Name</label>
      <input className=" mb-6" type="text" name="name" />
      <label>Email</label>
      <input className=" mb-6" type="email" name="username" />
      <label>Message</label>
      <textarea name="message" />
      <input className="btn" type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
