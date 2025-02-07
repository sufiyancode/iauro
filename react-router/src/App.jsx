import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import RootLayout from "./Layout/RootLayout";
import ContactLayout from "./Layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Error from "./components/Error";
import NotFound from "./pages/NotFound";
import JobLayout from "./Layout/JobLayout";
import Job, { JobLoader } from "./pages/Job";
import JobDetails, { JobDetailsLoader } from "./pages/JobDetails";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact/" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobLayout />} errorElement={<Error />}>
          <Route index element={<Job />} loader={JobLoader} />
          <Route
            path=":id"
            element={<JobDetails />}
            loader={JobDetailsLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
