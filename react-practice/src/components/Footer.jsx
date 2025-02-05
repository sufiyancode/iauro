import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const phone = useContext(AppContext);

  return (
    <div>
      Footer
      <> Phone: {phone} </>
    </div>
  );
};

export default Footer;
