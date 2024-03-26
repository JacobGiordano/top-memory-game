import Modal from "../Modal/Modal";
import "./LoadingScreen.css";

function LoadingScreen({ children, toggleModal }) {
  return (
    <Modal classString='loading-screen' toggleModal={toggleModal}>
      <div>Loading…</div>
    </Modal>
  );
}
export default LoadingScreen;
