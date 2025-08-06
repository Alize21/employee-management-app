import { addUser, getUser, updateUser, deleteUser } from "./api/user";
import { useState, useEffect } from "react";
import HomePage from "./pages/home";

function App() {
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
      <HomePage data={user} columns={columns} />
    </>
  );
}
export default App;

{
  /* {user ? <p>Message : {user.msg} <br/> Error status : {user.error ? user.error.toString() : 'status ok'}</p> : <p>loading...</p>} */
}
