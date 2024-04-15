import "./LoadingScreen.css";
import Logo from "../../assets/svg/marvel.svg?react";

function LoadingScreen() {
  return (
    <dialog className='loading-screen'>
      <Logo />
      <img src='' alt='' className='logo-bg-img' />
    </dialog>
  );
}
export default LoadingScreen;
