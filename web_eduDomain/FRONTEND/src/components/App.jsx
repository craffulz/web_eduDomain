import "../styles/App.scss";
import { Analytics } from "@vercel/analytics/react";
import Home from "../pages/home.tsx";
import Patrimoine from "../pages/patrimoine.jsx";
import Contact from "../pages/contact.jsx";
import Support from "../pages/support.jsx";
import Formation from "../pages/formation.jsx";
import Faqs from "../pages/faqs.jsx";

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
