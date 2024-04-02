import "./Modal.css";

function Modal({ children, classString, toggleModal, noToggle }) {
  const closeModal = (e) => {
    const modal = e.target.closest("dialog");
    if (e.target === modal) {
      toggleModal(modal.classList);
    }
  };

  const classes = classString ? classString : null;
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
