import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Privacy from "../components/Privacy";

const Root = () => {
  return (
    // Wrapper with flex column and full viewport height
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar></Navbar>
      </nav>
      <div>
        <Privacy></Privacy>
      </div>
      {/* Main content fills remaining space */}
      <main className="grow w-11/12 mx-auto my-8">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
