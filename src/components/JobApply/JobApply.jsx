import React from "react";
import { useParams } from "react-router";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId: id,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    const res = await axios.post(
      "http://localhost:9000/applications",
      application
    );

    if (res.data.data.acknowledged) {
      toast.success(res.data.message);
    }
  };

  return (
    <div className="py-[80px]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-primary mb-5 text-center">
          Apply for job
        </h2>
        <form onSubmit={handleSubmit}>
          {" "}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 max-w-xl mx-auto">
            <legend className="fieldset-legend">Page details</legend>

            <label className="label">Linked profile</label>
            <input
              type="url"
              name="linkedin"
              className="input w-full"
              placeholder="linkedin.com/in/jhon-doe"
            />

            <label className="label">Github profile</label>
            <input
              type="url"
              name="github"
              className="input w-full"
              placeholder="github.com/jhon-doe"
            />

            <label className="label">Resume</label>
            <input
              type="url"
              name="resume"
              className="input w-full"
              placeholder="resume.com"
            />
            <button className="btn btn-primary mt-3">Apply</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
