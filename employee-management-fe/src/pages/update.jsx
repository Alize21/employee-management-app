import FormGetLayout from "../components/layouts/FormGetLayout";
import { updateUser, getUser } from "../api/user";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const UpdatePage = () => {
  const navigate = useNavigate();

  if (!Cookies.get("token")) {
    return <Navigate to="/login" replace />;
  }

  const [error, setError] = useState(null);
  const [formError, setFormError] = useState(null);
  const [user, setUser] = useState(null);
  const [value, setValue] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getUser()
      .then(setUser)
      .catch((err) => {
        setError({ msg: err.message, error: err.status });
      });
  }, []);

  const targetUser = user ? user.find((u) => u._id === id) : null;
  useEffect(() => {
    if (targetUser) {
      setValue({
        username: targetUser.username,
        role: targetUser.role,
      });
    }
  }, [targetUser]);

  const formFields = [
    {
      component: "input",
      type: "text",
      label: "New username",
      name: "username",
      id: "username",
      value: value.username || "",
      required: true,
      onChange: (e) => setValue({ ...value, username: e.target.value }),
    },
    {
      component: "select",
      options: ["employee", "admin"],
      label: "New role",
      name: "role",
      id: "role",
      value: value.role || "",
      required: true,
      onChange: (e) => setValue({ ...value, role: e.target.value }),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await updateUser(id, value.username, value.role);
      navigate("/");
    } catch (err) {
      const errorMessage = err.message || "An error occurred while updating the user.";
      setFormError(errorMessage);
    }
  };
  return (
    <div>
      {error ? (
        <p className="text-red-500">{error.msg} </p>
      ) : user === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Update Page</h1>
          <FormGetLayout handleSubmit={handleSubmit} error={formError} formFields={formFields}>
            Update data
          </FormGetLayout>
        </>
      )}
    </div>
  );
};

export default UpdatePage;
