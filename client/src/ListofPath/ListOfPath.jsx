import Home from "../Pages/Home/Home";
import SavedJobs from "../Pages/SavedJobs/SavedJobs";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Jobs from "../Pages/Jobs/Jobs";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import JobDetail from "../Pages/JobDetail/JobDetail";
import ApplicationForm from "../Pages/ApplicationForm/ApplicationForm";
import Profille from "../Pages/Profile/Profille";
import ForgotPassword from "../components/forgotPassword/ForgotPassword";
import Blog from "../Pages/Latest News & Blog/Blog";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";

export const Path = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/savedjobs",
    component: <SavedJobs />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/contact-us",
    component: <ContactUs />,
  },
  {
    path: "/jobs",
    component: <Jobs />,
  },
  {
    path: "/login",
    component: <SignIn />,
  },
  {
    path: "/signup",
    component: <SignUp />,
  },
  {
    path: "/jobdetail",
    component: <JobDetail />,
  },
  {
    path: "/appilcation-form",
    component: <ApplicationForm />,
  },
  {
    path: "/profile",
    component: <Profille />,
  },
  {
    path: "/forget",
    component: <ForgotPassword />,
  },
  {
    path: "/blog/:id",
    component: <Blog />,
  },
  {
    path: "/resetpassword",
    component: <ResetPassword />
  }
];
