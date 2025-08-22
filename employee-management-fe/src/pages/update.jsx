import FormGetLayout from "../components/layouts/FormGetLayout";
import { updateUser } from "../api/user";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const UpdatePage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { id } = useParams();
  const formFields = [
    {
      component: "input",
      type: "text",
      label: "New username",
      name: "username",
      id: "username",
      value: null,
      required: true,
    },
    {
      component: "select",
      options: ["employee", "admin"],
      label: "New role",
      name: "role",
      id: "role",
      value: null,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, role } = e.target;

    try {
      const res = await updateUser(id, username.value, role.value);
      navigate("/");
    } catch (err) {
      const errorMessage = err.message || "An error occurred while updating the user.";
      setError(errorMessage);
    }
  };
  return (
    <div>
      <h1>Update Page</h1>
      <FormGetLayout handleSubmit={handleSubmit} error={error} formFields={formFields}>
        Update data
      </FormGetLayout>
    </div>
  );
};

export default UpdatePage;
