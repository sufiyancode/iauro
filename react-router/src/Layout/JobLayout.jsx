import React from "react";
import { Outlet } from "react-router-dom";

const JobLayout = () => {
  return (
    <div>
      Job Openings
      <h2>List of Job Openinigs in our company </h2>
      <Outlet />
    </div>
  );
};

export default JobLayout;
