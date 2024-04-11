import Modal from "../Modal/Modal";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import "./TitleScreen.css";
import Logo from "../Logo/Logo";
import MarvelLogo from "../../assets/svg/marvel.svg?react";

function TitleScreen({ handleDifficultyClick }) {
  return (
    <Modal classString='title-screen no-toggle' noToggle={true}>
      <div className='marvel-logo-wrapper'>
        <MarvelLogo />
        <div className='marvel-logo-bg'></div>
      </div>
      <Logo
        classString={"title-screen-logo"}
        fileDirectory={"images"}
        fileNameWithExtension={"Secret-Wars_1984-1985.webp"}
      />
      <ButtonGroup>
        <Button
          text='Easy'
          dataAttrs={{ "data-difficulty": "easy" }}
          onClick={handleDifficultyClick}
        ></Button>
        <Button
          text='Medium'
          dataAttrs={{ "data-difficulty": "medium" }}
          onClick={handleDifficultyClick}
        ></Button>
        <Button
          text='Hard'
          dataAttrs={{ "data-difficulty": "hard" }}
          onClick={handleDifficultyClick}
        ></Button>
      </ButtonGroup>
      <div className='link-wrapper'>
        <a
          href='https://www.marvel.com/comics/series/2063/secret_wars_1984_-_1985?byZone=marvel_site_zone&offset=0&byType=comic_series&dateStart=&dateEnd=&orderBy=release_date+desc&byId=2063&limit=20&count=14&originalReleaseStart=1984-5-01&originalReleaseEnd=2007-3-01'
          target='_blank'
        >
          What is "Secret Wars"?
        </a>
      </div>
    </Modal>
  );
}
export default TitleScreen;
