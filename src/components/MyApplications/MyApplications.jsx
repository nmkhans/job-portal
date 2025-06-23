import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get(
          `http://localhost:9000/applications?email=${user.email}`,
          { withCredentials: true }
        );

        setApplications(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApplications();
  }, [user]);

  return (
    <div className="py-[80px]">
      <div className="container mx-auto">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Company</th>
                <th>Linkedin</th>
                <th>Github</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody>
              {applications?.map((application) => (
                <tr key={application._id}>
                  <th>{application._id}</th>
                  <th>{application?.job?.company}</th>
                  <td>{application.linkedIn}</td>
                  <td>{application.github}</td>
                  <td>{application.resume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
