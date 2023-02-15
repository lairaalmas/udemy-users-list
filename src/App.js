import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (newName, newAge) => {
    setUserList((prev) => [
      ...prev,
      { name: newName, age: newAge, id: Math.random().toString() },
    ]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
