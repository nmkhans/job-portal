import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("http://localhost:9000/jobs");
      const data = await res.json();

      setJobs(data.data);
    };

    fetchJobs();
  }, []);

  return (
    <section className="py-[80px]">
      <div className="container mx-auto">
        <div className="text-3xl font-semibold text-secondary text-center mb-10">
          All Jobs
        </div>
        <div className="grid grid-cols-4 gap-5">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;
