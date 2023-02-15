import styles from "./Modal.module.css";
import Button from "../Button";
import Card from "../Card";

const Modal = (props) => {
  return (
    <div className={styles.Modal__backdrop} onClick={props.hideModal}>
      <Card className={styles.Modal}>
        <header className={styles.Modal__header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.Modal__content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.Modal__actions}>
          <Button type="button" onClick={props.hideModal}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
