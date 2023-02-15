import Card from "../../UI/Card";

import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.UserList}>
      <ul>
        {props.users.length > 0 ? (
          props.users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            );
          })
        ) : (
          <p>The list is empty...</p>
        )}
      </ul>
    </Card>
  );
};

export default UserList;
