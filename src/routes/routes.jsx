import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetail from "../components/JobDetail/JobDetail";
import JobApply from "../components/JobApply/JobApply";
import PrivateRoute from "./PrivateRoute";
import MyApplications from "../components/MyApplications/MyApplications";
import AddJob from "../components/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/job-detail/:id",
        element: <JobDetail />,
      },
      {
        path: "/apply-job/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/view-applications/:id",
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
