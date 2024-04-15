import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Modal from "../Modal/Modal";
import "./Confirm.css";

function Confirm({ toggleModal }) {
  const handleCancelClick = () => {
    toggleModal(".confirm-choice", "play");
  };
  const handleConfirmClick = () => {
    toggleModal(".confirm-choice", "reset");
  };
  return (
    <Modal classString='confirm-choice' toggleModal={toggleModal}>
      <h2>Confirm choice?</h2>
      <ButtonGroup>
        <Button
          text='Cancel'
          classString={"cancel"}
          onClick={handleCancelClick}
          dataAttrs={{ "data-response": "cancel" }}
        ></Button>
        <Button
          text='Ok'
          classString={"ok"}
          onClick={handleConfirmClick}
          dataAttrs={{ "data-response": "ok" }}
        ></Button>
      </ButtonGroup>
    </Modal>
  );
}
export default Confirm;
