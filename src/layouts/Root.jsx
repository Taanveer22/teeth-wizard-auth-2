import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="w-11/12 mx-auto my-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
