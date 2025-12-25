import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../pages/LoadingSpinner";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user, loading);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return <>{children}</>;
};

export default PrivateRouter;
