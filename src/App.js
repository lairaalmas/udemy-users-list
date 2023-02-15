import { useState } from "react";

import Modal from "./components/UI/Modal";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

import styles from "./App.module.css";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (newName, newAge) => {
    setUserList((prev) => [
      ...prev,
      { name: newName, age: newAge, id: Math.random().toString() },
    ]);
  };

  return (
    <div className={styles.App}>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
