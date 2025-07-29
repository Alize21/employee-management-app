import { addUser, getUser, updateUser, deleteUser } from "./api/user";
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    addUser('12345678', 'sangkayu123', 'employee')
      .then(setUser)
      .catch((err) => {
        setUser({ msg: err.message, error: err.status });
      })
  }, []);
  console.log(user);
    return (
      <>
        <h1>Welcome to Employee Management App</h1>
        <h2>User Data:</h2>
        {user ? <p>Message : {user.msg} <br/> Error status : {user.error ? user.error.toString() : 'status ok'}</p> : <p>loading...</p>}

      </>
    )
}
export default App