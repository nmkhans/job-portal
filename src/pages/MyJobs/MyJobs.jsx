import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import axios from "axios";
import { Link } from 'react-router';

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchApplications = async () => {
      const res = await axios.get(
        `http://localhost:9000/jobs/applications/?email=${user.email}`
      );

      setJobs(res.data.data);
    };
    fetchApplications();
  }, [user]);

  return (
    <section className="py-[80px]">
      <div className="container mx-auto">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Company</th>
                <th>Deadline</th>
                <th>Application count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs?.map((job) => (
                <tr key={job._id}>
                  <th>{job._id}</th>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>{job.applicationsCount}</td>
                  <td>
                    <Link to={`/view-applications/${job._id}`}>
                      View applications
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyJobs;
