import "./Modal.css";

function Modal({ children }) {
  return (
    <div className='modal'>
      Modal
      <div>{children}</div>
    </div>
  );
}
export default Modal;
