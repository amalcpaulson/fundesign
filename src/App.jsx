import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Project from "./pages/Projects/Projects";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/project",
      element: <Project />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
