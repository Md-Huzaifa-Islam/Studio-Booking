import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/Custom";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    // return <Loading />;
    return <p>loading</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
