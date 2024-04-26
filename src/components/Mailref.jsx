import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const Mailref = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validateInputs = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if there are no errors
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      console.log("Invalid inputs:", errors);
      return;
    }

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
          setShowPopup(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="cntr min-h-screen flex justify-center items-center flex-col">
      <h1>Email.js</h1>
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
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <label>Email</label>
          <input
            className="mb-6 border-[2px] border-black"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <label>Message</label>
          <textarea
            className="border-[2px] mb-6 border-black"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
          <input
            className="border-[2px] btn border-black text-white bg-black"
            type="submit"
            value="Send"
          />
        </form>
        {showPopup && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md">
              <p>Email sent successfully!</p>
              <button
                className="border-[2px] btn border-black text-black bg-white ml-2 mt-4"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mailref;
