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
    <div className="">
      <form
        ref={form}
        className="max-w-[320px] p-5 border-[2px] border-black"
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input
          className=" mb-6 border-[2px] border-black"
          type="text"
          name="name"
        />
        <label>Email</label>
        <input
          className=" mb-6 border-[2px] border-black"
          type="email"
          name="username"
        />
        <label>Message</label>
        <textarea className="border-[2px] border-black" name="message" />
        <input
          className="btn w-full text-white bg-black"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default ContactUs;
