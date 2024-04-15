import Modal from "../Modal/Modal";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import "./WinningScreen.css";

function WinningScreen({ toggleModal, handlePlayAgainClick }) {
  const handleOnClick = () => {
    toggleModal(".you-win", "reset");
  };

  return (
    <Modal classString='you-win no-toggle' toggleModal={toggleModal}>
      <div className='img-wrapper'>
        <img
          className='winning-img'
          src='http://i.annihil.us/u/prod/marvel/i/mg/3/e0/51dc771c73749.jpg'
          alt=''
        />
      </div>
      <h2>You Win!</h2>
      <ButtonGroup>
        <Button text='Play again' onClick={handlePlayAgainClick}></Button>
        <Button text='Change difficulty' onClick={handleOnClick}></Button>
      </ButtonGroup>
    </Modal>
  );
}
export default WinningScreen;
