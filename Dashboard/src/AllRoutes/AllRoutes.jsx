import React from "react";

import Dashboard from "../Pages/Dashboard/Dashboard";

import UseContainer from "../Pages/UserContainer/UserContainer";

import CreateBlogs from "../Components/Categories/CreateCategories";
import Login from "../Pages/Login/Login";
import Jobs from "../Pages/Jobs/Jobs";
import CreateJobs from "../Pages/Jobs/CreateJobs";
import Categories from "../Pages/Categories/Categories";
export const AdminRoutes = [
  {
    path: "/",
    component: <Login />,
  },
  {
    path: "/dashboard",
    component: (
      <UseContainer activePage={<Dashboard />} headerTitle={"Dashboard"} />
    ),
  },

  {
    path: "/categories",
    component: (
      <UseContainer
        activePage={<Categories />}
        headerTitle={"Categories"}
        buttons={[
          {
            content: "Add Categories",
            Path: "/add/categories",
          },
        ]}
      />
    ),
  },
  {
    path: "/add/categories",
    component: (
      <UseContainer
        activePage={<CreateBlogs />}
        disableTitleBar={true}
        headerTitle={"Add Categories"}
        buttons={[]}
      />
    ),
  },
  {
    path: "/jobs",
    component: (
      <UseContainer
        activePage={<Jobs />}
        headerTitle={"Jobs"}
        buttons={[
          {
            content: "Create Job",
            Path: "/create/job",
          },
        ]}
      />
    ),
  },
  {
    path: "/create/job",
    component: (
      <UseContainer
        activePage={<CreateJobs />}
        disableTitleBar={true}
        headerTitle={"Create Job"}
        buttons={[]}
      />
    ),
  },
];
