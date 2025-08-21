import FormGetLayout from "../components/layouts/FormGetLayout";
import { updateUser } from "../api/user";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const UpdatePage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { id } = useParams();

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
      <FormGetLayout handleSubmit={handleSubmit} error={error}>
        Update data
      </FormGetLayout>
    </div>
  );
};

export default UpdatePage;
