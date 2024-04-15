import Button from "../Button/Button";
import "./Footer.css";
import GitHubLogo from "../../assets/svg/github-mark-white.svg?react";

function Footer({ children, toggleModal, setPlayState }) {
  const handleInfoClick = () => {
    setPlayState("info");
    toggleModal(".info");
  };
  return (
    <footer className='footer'>
      <Button
        classString={"info-btn"}
        text='Info'
        onClick={() => handleInfoClick()}
      >
        ?
      </Button>
      <div className='footer-content'>
        <div className='top-row'>
          <span>
            Background video by{" "}
            <a
              href='https://pixabay.com/videos/nebula-gas-galaxy-space-25047/'
              target='_blank'
            >
              Mikkehouse
            </a>
          </span>
          <span className='personal-info'>
            View this project on{" "}
            <a
              href='https://github.com/JacobGiordano/top-memory-game'
              target='_blank'
            >
              Github
              <GitHubLogo />
            </a>
          </span>
        </div>
        <div className='bottom-row'>
          <span className='attribution'>
            Data provided by{" "}
            <a href='http://marvel.com' target='_blank'>
              Marvel
            </a>
            . © 2014{" "}
            <a href='http://marvel.com' target='_blank'>
              Marvel
            </a>
            {". "}
            All images, logos, and characters belong to and are copywritten by{" "}
            <a href='http://marvel.com' target='_blank'>
              Marvel
            </a>
            {". "}
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
