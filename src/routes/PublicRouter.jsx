import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Treatments from "../pages/Treatments";
import Appointments from "../pages/Appointments";
import Profile from "../pages/Profile";

const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/treatments",
        element: <Treatments></Treatments>,
      },
      {
        path: "/appointments",
        element: <Appointments></Appointments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default PublicRouter;
