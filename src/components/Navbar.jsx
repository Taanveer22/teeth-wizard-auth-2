import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, handleUserLogout } = useContext(AuthContext);

  // console.log(user);
  const handleUserLogoutClick = () => {
    // == firebase log out ==
    handleUserLogout()
      .then(() => {
        toast.success("Logout complete");
      })
      .catch(() => {
        toast.error("logout failed");
      });
  };

  const links = (
    <div className="flex flex-col sm:flex-row gap-4">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-success" : "btn btn-sm btn-error"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/treatments"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-success" : "btn btn-sm btn-error"
          }
        >
          Treatments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-success" : "btn btn-sm btn-error"
          }
        >
          Appointments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-success" : "btn btn-sm btn-error"
          }
        >
          Profile
        </NavLink>
      </li>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 shadow"
            >
              {links}
            </ul>
          </div>
          <h1 className="btn btn-ghost text-xl">Teeth Wizard</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <div className="flex gap-2 items-center">
              <p>{user.email}</p>
              <button onClick={handleUserLogoutClick} className="btn btn-error">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-success">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
