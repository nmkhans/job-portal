import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

const JobDetail = () => {
  const [job, setJob] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`http://localhost:9000/job/${id}`);
      const data = await res.json();

      setJob(data.data);
    };

    fetchJob();
  }, [id]);

  return (
    <div className="py-[80px]">
      <div className="container mx-auto">
        <div className="card card-side bg-base-100 shadow-sm">
          <div className="card-body items-start">
            <figure>
              <img
                className="w-12 h-12"
                src={job?.company_logo}
                alt="Movie"
              />
              <h4>{job.company}</h4>
            </figure>
            <h2 className="card-title">{job.title}</h2>
            <p>
              {job.jobType} {job.applicationDeadline}
            </p>
            <p>{job.description}</p>
            <p>
              Salary range: {job.salaryRange?.min} -{" "}
              {job.salaryRange?.max} {job?.salaryRange?.currency}
            </p>
            <div>
              {job.requirements?.map((req, i) => (
                <span key={i} className="badge badge-ghost">
                  {req}
                </span>
              ))}
            </div>
            <div className="card-actions justify-end">
              <Link
                to={`/apply-job/${job._id}`}
                className="btn btn-primary"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
