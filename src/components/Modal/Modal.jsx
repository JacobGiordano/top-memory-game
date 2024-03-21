import "./Modal.css";

function Modal({ children }) {
  return (
    <dialog className='modal'>
      Modal
      <div>{children}</div>
    </dialog>
  );
}
export default Modal;
