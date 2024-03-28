import Modal from "../Modal/Modal";
import "./LoadingScreen.css";
import Logo from "../../assets/svg/marvel.svg?react";

function LoadingScreen({ children, toggleModal }) {
  return (
    <Modal classString='loading-screen' toggleModal={toggleModal}>
      <Logo />
      <img src='' alt='' className='logo-bg-img' />
    </Modal>
  );
}
export default LoadingScreen;
