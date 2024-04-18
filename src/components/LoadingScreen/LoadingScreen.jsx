import "./LoadingScreen.css";
import Logo from "../../assets/svg/marvel.svg?react";

function LoadingScreen() {
  return (
    <dialog className='loading-screen'>
      <Logo />
    </dialog>
  );
}
export default LoadingScreen;
