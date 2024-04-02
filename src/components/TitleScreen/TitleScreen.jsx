import Modal from "../Modal/Modal";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import "./TitleScreen.css";
import Logo from "../Logo/Logo";
import MarvelLogo from "../../assets/svg/marvel.svg?react";

function TitleScreen({ handleDifficultyClick }) {
  return (
    <Modal classString='title-screen no-toggle' noToggle={true}>
      <MarvelLogo />
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
    </Modal>
  );
}
export default TitleScreen;
