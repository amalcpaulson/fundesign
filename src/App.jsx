import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import About from './pages/About/about'
import Services from './pages/Services/services'
import Partnership from './pages/Partnership/partnership'
import Project from "./pages/Projects/Projects";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/partnership",
      element: <Partnership />,
    },
    {
      path: "/project",
      element: <Project />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
