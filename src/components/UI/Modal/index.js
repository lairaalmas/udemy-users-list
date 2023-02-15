import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Button from "../Button";
import Card from "../Card";

const Backdrop = (props) => {
  return <div className={styles.Modal__backdrop} onClick={props.hideModal} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideModal={props.hideModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          hideModal={props.hideModal}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
