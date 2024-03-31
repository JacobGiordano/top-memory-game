import Modal from "../Modal/Modal";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import "./TitleScreen.css";

function TitleScreen({ children, handleDifficultyClick, toggleModal }) {
  return (
    <Modal classString='title-screen' toggleModal={toggleModal}>
      {children}
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
