import "../styles/App.scss";

import Home from "./Pages/Home/Home.tsx";
import Patrimoine from "./Pages/Patrimoine/Patrimoine.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Support from "./Pages/Support/Support.jsx";
import Formation from "./Pages/Formation/Formation.jsx";

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
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
