import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact">
      <h1>Contact </h1>
      <br />
      <div className="contact-buttons">
        <button onClick={() => navigate("/contact/info")}>Info</button>
        <button onClick={() => navigate("/contact/form")}>Form</button>
      </div>
    </div>
  );
};

export default Contact;
