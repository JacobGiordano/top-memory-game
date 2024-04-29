import { PropTypes } from "prop-types";
import Modal from "../Modal/Modal";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import "./InfoScreen.css";
function InfoScreen({ toggleModal }) {
  const handleCloseClick = () => {
    toggleModal(".info", "play");
  };
  return (
    <Modal classString='info' toggleModal={toggleModal}>
      <h2>Game Info</h2>
      <ul>
        <li>Click each character card without selecting the same one twice.</li>
        <li>
          Start a new game or change the difficulty by clicking &quot;Quit&quot;
          in the upper-right.
        </li>
        <li>
          Open this screen again by clicking the &quot;?&quot; in the
          lower-right.
        </li>
      </ul>
      <ButtonGroup>
        <Button text='Close' onClick={handleCloseClick} />
      </ButtonGroup>
    </Modal>
  );
}

InfoScreen.propTypes = {
  toggleModal: PropTypes.func,
};

export default InfoScreen;
