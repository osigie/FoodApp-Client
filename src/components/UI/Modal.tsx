import classes from "./Modal.module.css";
import React, { ReactNode } from "react";
import ReactDom from "react-dom";

interface childProps {
  children: ReactNode;
  onClose?: () => void
}
type backProps = {
  onClose?: () => void;
};

const BackDrop = (props: backProps) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverLays = (props: childProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portElement = document.getElementById("overlays");

const Modal = (props: childProps) => {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop onClose={props.onClose} />,
        portElement as Element
      )}
      {ReactDom.createPortal(
        <ModalOverLays> {props.children} </ModalOverLays>,
        portElement as Element
      )}
    </>
  );
};

export default Modal;
