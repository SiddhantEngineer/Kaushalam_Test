import { Children } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/index" />;
  }
  return children;
}

export default ProtectedRoute;
