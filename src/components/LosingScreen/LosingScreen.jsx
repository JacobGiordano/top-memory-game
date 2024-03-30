import Modal from "../Modal/Modal";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import "./LosingScreen.css";

function LosingScreen({ toggleModal, handlePlayAgainClick }) {
  const handleOnClick = (e) => {
    toggleModal(e.target.closest("dialog").classList);
    toggleModal(".title-screen");
  };

  return (
    <Modal classString='you-lose' toggleModal={toggleModal}>
      <h2>You Lose</h2>
      <ButtonGroup>
        <Button text='Play again' onClick={handlePlayAgainClick}></Button>
        <Button
          text='Change difficulty'
          onClick={(e) => handleOnClick(e)}
        ></Button>
      </ButtonGroup>
    </Modal>
  );
}
export default LosingScreen;
