import "./Modal.css";

function Modal({ children, classString, toggleModal }) {
  const closeModal = (e) => {
    const modal = e.target.closest("dialog");
    if (e.target === modal) {
      toggleModal(modal.classList);
    }
  };

  const classes = classString ? classString : null;
  return (
    <dialog className={classes} onClick={(e) => closeModal(e)}>
      <div className='modal-content'>{children}</div>
    </dialog>
  );
}
export default Modal;
