import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  return (
    <div className="bg-accent p-5 border border-slate-300 rounded-lg">
      <div className="flex gap-x-5">
        <div>
          <img className="w-12" src={job.company_logo} alt="" />
        </div>
        <div>
          <h3 className="text-md text-secondary font-medium">
            {job.company}
          </h3>
          <p className="text-[13px] text-secondary">{job.location}</p>
        </div>
      </div>
      <div>
        <h3>{job.title}</h3>
        <div className="flex text-[12px] text-secondary gap-x-4">
          <p>{job.jobType}</p>
          <p>{job.applicationDeadline}</p>
        </div>
        <p className="my-5">{job.description}</p>
        <Link
          to={`/job-detail/${job._id}`}
          className="btn btn-outline btn-primary"
        >
          See details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
