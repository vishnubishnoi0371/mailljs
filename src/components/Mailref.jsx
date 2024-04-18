import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const Mailref = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .sendForm("service_3vjr5hg", "template_k8k39cs", e.target, {
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
    <div className=" min-h-screen flex justify-center items-center flex-col ">
      <div className="max-w-[320px] p-5 border-[2px] border-black">
        <form className="mail_card mx-auto" onSubmit={sendEmail}>
          <label>Name</label>
          <input
            className="mb-6 border-[2px] border-black"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            className="mb-6 border-[2px] border-black"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message</label>
          <textarea className="border-[2px] mb-6 border-black" name="message" />
          <input
            className=" border-[2px] border-black text-white bg-black"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Mailref;
