import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const ViewApplications = () => {
  const [applications, setApplications] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchApplications = async () => {
      const res = await axios.get(
        `http://localhost:9000/applications/job/${id}`
      );

      setApplications(res.data.data);
    };
    fetchApplications();
  }, [id]);

  const handleStatusChange = async (e, application) => {
    const status = e.target.value;

    const res = await axios.patch(
      `http://localhost:9000/applications/${application._id}`,
      {
        status,
      }
    );

    if (res.data.data.acknowledged) {
      toast.success(res.data.message);
    }
  };

  return (
    <section className="py-[80px]">
      <div className="container mx-auto">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Applicant</th>
                <th>Linkedin</th>
                <th>Github</th>
                <th>Resume</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications?.map((application) => (
                <tr key={application._id}>
                  <th>{application._id}</th>
                  <th>{application.applicant}</th>
                  <td>{application.linkedIn}</td>
                  <td>{application.github}</td>
                  <td>{application.resume}</td>
                  <td>
                    <select
                      name="status"
                      className="select w-[150px]"
                      defaultValue="updateStatus"
                      onChange={(e) =>
                        handleStatusChange(e, application)
                      }
                    >
                      <option disabled={true} value="updateStatus">
                        Update status
                      </option>
                      <option value="pending">Pending</option>
                      <option value="interview">Interview</option>
                      <option value="hired">Hired</option>
                      <option value="reject">Reject</option>
                    </select>
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

export default ViewApplications;
