import React from "react";

const ContactForm = () => {
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div>
      <form style={formStyle}>
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <input type="text" placeholder="Message" style={inputStyle} />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
