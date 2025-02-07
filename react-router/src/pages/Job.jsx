import React from "react";
import { Link, useLoaderData } from "react-router-dom";
const Job = () => {
  const jobsData = useLoaderData();

  return (
    <div className="jobs">
      {jobsData.map((job) => {
        return (
          <Link to={job.id.toString()} key={job.id}>
            <p>JobId: {job.id} </p>
            <p>Title: {job.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Job;

export const JobLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");

  if (!res.ok) {
    throw Error("Could not found job list.");
  }
  return res.json();
};
