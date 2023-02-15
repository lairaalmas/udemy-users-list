import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.Button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
