import { useRouteError } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ErrorPage = () => {
  if (!Cookies.get("token")) {
    return <Navigate to="/login" replace />;
  }

  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
