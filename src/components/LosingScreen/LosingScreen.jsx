import { PropTypes } from "prop-types";
import Modal from "../Modal/Modal";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import "./LosingScreen.css";

function LosingScreen({ toggleModal, handlePlayAgainClick }) {
  const handleOnClick = (e) => {
    toggleModal(".you-lose", "reset");
  };

  return (
    <Modal classString='you-lose no-toggle' toggleModal={toggleModal}>
      <div className='img-wrapper'>
        <img
          className='losing-img'
          src='http://i.annihil.us/u/prod/marvel/i/mg/9/80/5756f101dda9f.jpg'
          alt=''
        />
      </div>
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

LosingScreen.propTypes = {
  toggleModal: PropTypes.func,
  handlePlayAgainClick: PropTypes.func,
};

export default LosingScreen;
