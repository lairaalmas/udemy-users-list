import { useState, useRef } from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge <= 0) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          hideModal={errorHandler}
        />
      )}
      <Card className={styles.Form}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="nameField">Username:</label>
          <input id="nameField" type="text" ref={nameInputRef} />
          <label htmlFor="ageField">Age (Years):</label>
          <input id="ageField" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
