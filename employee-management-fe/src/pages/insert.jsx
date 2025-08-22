import { addUser } from "../api/user";
import { useNavigate, Link } from "react-router-dom";
import FormGetLayout from "../components/layouts/FormGetLayout";
import Button from "../components/elements/Button";
import { useState } from "react";

const InsertPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const formFields = [
    {
      component: "input",
      type: "text",
      label: "Username",
      name: "username",
      id: "username",
      value: null,
      required: true,
    },
    {
      component: "input",
      type: "password",
      label: "Password",
      name: "password",
      id: "password",
      value: null,
      required: true,
    },
    {
      component: "select",
      options: ["employee", "admin"],
      label: "Role",
      name: "role",
      id: "role",
      value: null,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, role } = e.target;

    try {
      const res = await addUser(username.value, password.value, role.value);
      navigate("/");
    } catch (err) {
      // TODO create flash message
      const errorMessage = err.message || "An error occurred while adding the user.";
      setError(errorMessage);
    }
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-lg my-5 font-bold">Insert Page</h1>
      <p className="text-md font-semibold">This is the insert page where you can add new entries.</p>
      <div className="p-10">
        <FormGetLayout handleSubmit={handleSubmit} error={error} formFields={formFields}>
          Insert new user
        </FormGetLayout>
      </div>
      <Link to="/">
        <Button type="button">Go Home</Button>
      </Link>
    </div>
  );
};

export default InsertPage;
