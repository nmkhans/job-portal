import React from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const AddJob = () => {
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    data.status = "active";

    data.requirements = data.requirements
      .split(",")
      .map((r) => r.trim());

    data.responsibilities = data.responsibilities
      .split(",")
      .map((r) => r.trim());

    const { min, max, currency, ...restData } = data;

    restData.salaryRange = { min, max, currency };

    const res = await axios.post(
      "http://localhost:9000/jobs",
      restData
    );

    if (res.data.data.acknowledged) {
      toast.success(res.data.message);
    }
  };

  return (
    <div className="py-[80px]">
      <div className="container mx-auto">
        <div>
          <h3 className="text-center text-3xl font-semibold text-primary my-5">
            Add a Job
          </h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4 mx-auto">
              <div>
                <label className="label inline-block mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="input w-full"
                  placeholder="Job title"
                />
              </div>

              <div>
                <label className="label inline-block mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="input w-full"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="label inline-block mb-2">
                  Logo
                </label>
                <input
                  type="url"
                  name="company_logo"
                  className="input w-full"
                  placeholder="Company logo"
                  defaultValue="https://cdnlogo.com/logos/r/85/react.svg"
                />
              </div>

              <div>
                <label className="label inline-block mb-2">
                  Job type
                </label>
                <div className="filter">
                  <input
                    className="btn filter-reset"
                    type="radio"
                    name="jobType"
                    aria-label="All"
                  />
                  <input
                    className="btn"
                    type="radio"
                    name="jobType"
                    aria-label="on-site"
                    value="on-site"
                  />
                  <input
                    className="btn"
                    type="radio"
                    name="jobType"
                    aria-label="remote"
                    value="remote"
                  />
                  <input
                    className="btn"
                    type="radio"
                    name="jobType"
                    aria-label="hybrid"
                    value="hybrid"
                  />
                </div>
              </div>

              <div>
                <label className="label inline-block mb-2">
                  Job category
                </label>
                <select
                  defaultValue="Pick a color"
                  className="select block w-full"
                  name="category"
                >
                  <option disabled={true}>Job category</option>
                  <option value="engineer">Engineer</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                </select>
              </div>

              <div>
                <label className="label inline-block mb-2">
                  Application deadline
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  className="input w-full"
                  placeholder="Deadline"
                />
              </div>

              <div>
                <label className="label inline-block mb-2">
                  Minimum salary
                </label>
                <input
                  type="number"
                  name="min"
                  className="input w-full"
                  placeholder="1"
                />
              </div>

              <div>
                <label className="label inline-block mb-2">
                  Maximum salary
                </label>
                <input
                  type="number"
                  name="max"
                  className="input w-full"
                  placeholder="9999999"
                />
              </div>

              <div>
                <label className="label inline-block mb-2">
                  Salary currency
                </label>
                <input
                  type="text"
                  name="currency"
                  className="input w-full"
                  placeholder="BDT/USD/CAD"
                />
              </div>

              <div>
                <label className="label inline-block mb-2">
                  Company description
                </label>
                <textarea
                  type="text"
                  name="description"
                  className="textarea w-full h-14"
                  placeholder="Description"
                ></textarea>
              </div>

              <div>
                <label className="label inline-block mb-2">
                  Job requirements
                </label>
                <textarea
                  name="requirements"
                  className="textarea w-full h-14"
                  placeholder="Job requirements(separate by comma)"
                ></textarea>
              </div>

              <div>
                <label className="label inline-block mb-2">
                  Job responsibilities
                </label>
                <textarea
                  name="responsibilities"
                  className="textarea w-full h-14"
                  placeholder="Job responsibilities(separate by comma)"
                ></textarea>
              </div>

              <div>
                <label className="label inline-block mb-2">
                  HR name
                </label>
                <input
                  type="text"
                  name="hr_name"
                  className="input w-full"
                  placeholder="mr. hr"
                />
              </div>

              <div>
                <label className="label inline-block mb-2">
                  HR email
                </label>
                <input
                  type="text"
                  name="hr_email"
                  className="input w-full"
                  placeholder="hr@gmail.com"
                  defaultValue={user?.email}
                />
              </div>

              <button className="btn btn-secondary mt-4">
                Add job
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
