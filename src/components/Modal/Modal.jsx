import { useEffect } from "react";
import "./Modal.css";

function Modal({ children, classString, toggleModal, noToggle }) {
  const classes = classString ? classString : null;

  const closeModal = (e) => {
    const modal = e.target.closest("dialog");
    if (e.target === modal) {
      toggleModal(modal.classList);
    }
  };

  useEffect(() => {
    const classSelectors = classString.split(" ").join(".");
    const selector = `.${classSelectors}`;
    document.querySelector(selector).showModal();
  }, []);

  return (
    <dialog
      className={classes}
      onClick={!noToggle ? (e) => closeModal(e) : null}
    >
      <div className='modal-content'>{children}</div>
    </dialog>
  );
}
export default Modal;
