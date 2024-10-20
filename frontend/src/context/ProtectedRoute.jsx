import { Children } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/index" />;
  }
  return children;
};

export default ProtectedRoute;
