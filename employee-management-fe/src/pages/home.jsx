import TableGetLayout from "../components/layouts/TableGetLayout";
import Table from "../components/fragments/Table";
import Button from "../components/elements/Button";
import { getUser, deleteUser } from "../api/user";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [user, setUser] = useState(null);

  const handleClick = async (id) => {
    try {
      await deleteUser(id);
      setUser((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (err) {
      setUser({ msg: err.message, error: err.status });
    }
  };

  useEffect(() => {
    getUser()
      .then(setUser)
      .catch((err) => {
        setUser({ msg: err.message, error: err.status });
      });
  }, []);

  const columns = [
    { key: "username", label: "Username" },
    { key: "role", label: "Role" },
    {
      key: "action",
      label: "Action",
      render: (item) => (
        <div className="flex justify-center gap-1">
          <Button color="green" type="button">
            Update
          </Button>
          <Button type="button" handleClick={() => handleClick(item._id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      {user === null ? (
        <p>Loading...</p>
      ) : user.msg ? (
        <p>
          Message: {user.msg} <br /> Error status: {user.error.toString()}
        </p>
      ) : (
        <TableGetLayout title="Welcome to Employee Management App">
          <Table columns={columns} user={user} color={"bg-slate-400"} />
        </TableGetLayout>
      )}

      <div className="flex justify-center mt-4">
        <Link to="/insert">insert new data</Link>
      </div>
    </>
  );
};

export default HomePage;
