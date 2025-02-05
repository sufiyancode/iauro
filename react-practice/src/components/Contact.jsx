import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Contact = () => {
  const phone = useContext(AppContext);
  return <div>Contact: {phone}</div>;
};

export default Contact;
