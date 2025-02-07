import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h3>An Error Occured</h3>
      <p>{error.message}</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Error;
