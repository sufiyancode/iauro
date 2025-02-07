import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div className="job-details">
      <h3>Title: {data[0].title} </h3>
      <p>Salary: {data[0].salary}</p>
      <p>Description: {data[0].description}</p>
    </div>
  );
};

export default JobDetails;

export const JobDetailsLoader = async ({ params }) => {
  const { id } = params;

  const JobDetails = await fetch("http://localhost:5000/jobs/?id=" + id);
  return JobDetails.json();
};
