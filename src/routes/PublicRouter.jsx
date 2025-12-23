import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Treatments from "../pages/Treatments";
import Appointments from "../pages/Appointments";
import Profile from "../pages/Profile";
import ServiceCardDetails from "../components/ServiceCardDetails";

const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("/service.json");
          const data = await res.json();

          const res2 = await fetch("/feedback.json");
          const data2 = await res2.json();
          return { data, data2 };
        },
      },
      {
        path: "/treatments",
        element: <Treatments></Treatments>,
        loader: async () => {
          const res = await fetch("/service.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/appointments",
        element: <Appointments></Appointments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: <ServiceCardDetails></ServiceCardDetails>,
        loader: async ({params}) => {
          // all data load
          const res = await fetch("/service.json");
          const data = await res.json();
          // return data;
          // single data load
          const singleData = data.find((element) => element.id == params.id);
          return singleData;
        },
      },
    ],
  },
]);

export default PublicRouter;
