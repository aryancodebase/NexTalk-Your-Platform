import { useAuth } from "@clerk/react";
import Loader from "./Loader";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <p>
        <Loader text="Authenticating..."/>
      </p>
    );
  }
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
