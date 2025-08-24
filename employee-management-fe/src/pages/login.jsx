import FormGetLayout from "../components/layouts/FormGetLayout";
import Button from "../components/elements/Button";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api/auth";
import Cookies from "js-cookie";

const LoginPage = () => {
  if (Cookies.get("token")) {
    return <Navigate to="/" replace />;
  }

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const formFields = [
    {
      component: "input",
      type: "text",
      label: "Username",
      name: "username",
      id: "username",
      required: true,
    },
    {
      component: "input",
      type: "password",
      label: "Password",
      name: "password",
      id: "password",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = e.target;

    try {
      const { token, role } = await loginUser(username.value, password.value);
      //   setToken(res.token);
      Cookies.set("token", token, { expires: 2 });
      navigate("/");
    } catch (err) {
      // TODO create flash message
      const errorMessage = err.message || "An error occurred while logging in.";
      setError(errorMessage);
    }
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-lg my-5 font-bold">Login Page</h1>
      <div className="p-10">
        <FormGetLayout handleSubmit={handleSubmit} error={error} formFields={formFields}>
          Login to your account
        </FormGetLayout>
      </div>
      <Link to="/">
        <Button type="button">Go Home</Button>
      </Link>
    </div>
  );
};

export default LoginPage;
