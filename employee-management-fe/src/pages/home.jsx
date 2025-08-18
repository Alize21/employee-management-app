import TableGetLayout from "../components/layouts/TableGetLayout";
import Table from "../components/fragments/Table";
import { getUser } from "../api/user";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const columns = ["username", "role"];

  useEffect(() => {
    getUser()
      .then(setUser)
      .catch((err) => {
        setUser({ msg: err.message, error: err.status });
      });
  }, []);

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
