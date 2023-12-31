import React, { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div class="flex justify-center items-center h-screen">
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-400"></div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
