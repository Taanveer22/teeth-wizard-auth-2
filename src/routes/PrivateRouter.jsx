import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../pages/LoadingSpinner";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user, loading);
  const location = useLocation();
  // console.log(location, location.pathname);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user) {
    return (
      <Navigate state={{ from: location.pathname }} to="/login" replace></Navigate>
    );
  }

  return <>{children}</>;
};

export default PrivateRouter;
