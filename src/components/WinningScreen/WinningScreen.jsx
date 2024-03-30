import Modal from "../Modal/Modal";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import "./WinningScreen.css";

function WinningScreen({ toggleModal, handlePlayAgainClick }) {
  const handleOnClick = (e) => {
    toggleModal(e.target.closest("dialog").classList);
    toggleModal(".title-screen");
  };

  return (
    <Modal classString='you-win' toggleModal={toggleModal}>
      <h2>You Win!</h2>
      <ButtonGroup>
        <Button text='Play again' onClick={handlePlayAgainClick}></Button>
        <Button text='Change difficulty' onClick={handleOnClick}></Button>
      </ButtonGroup>
    </Modal>
  );
}
export default WinningScreen;
