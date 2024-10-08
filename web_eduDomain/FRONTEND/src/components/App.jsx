import "../styles/App.scss";
import { Analytics } from "@vercel/analytics/react";
import Home from "../pages/Home.tsx";
import Patrimoine from "../pages/Patrimoine.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Support from "../pages/Support.jsx";
import Formation from "../pages/Formation.jsx";
import Faqs from "../pages/Faqs.jsx";

import {
  RouterProvider,
  createBrowserRouter,
  ScrollRestoration,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />
        <Home />
      </>
    ),
  },
  {
    path: "/faqs",
    element: (
      <>
        <ScrollRestoration />
        <Faqs />
      </>
    ),
  },
  {
    path: "/patrimoine",
    element: (
      <>
        <ScrollRestoration />
        <Patrimoine />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <ScrollRestoration />
        <Contact />
      </>
    ),
  },
  {
    path: "/support",
    element: (
      <>
        <ScrollRestoration />
        <Support />
      </>
    ),
  },
  {
    path: "/formation",
    element: (
      <>
        <ScrollRestoration />
        <Formation />
      </>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}>
        <Analytics />
      </RouterProvider>
    </>
  );
};

export default App;
