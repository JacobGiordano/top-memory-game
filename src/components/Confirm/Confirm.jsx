import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Modal from "../Modal/Modal";
import "./Confirm.css";

function Confirm({ toggleModal }) {
  const confirmChoice = (e, callback) => {
    const clicked = e.target.dataset.response;
    console.log(clicked);
    callback;
  };
  return (
    <Modal classString='confirm-choice' toggleModal={toggleModal}>
      <h2>Confirm choice?</h2>
      <ButtonGroup>
        <Button
          text='Cancel'
          classString={"cancel"}
          onClick={(e) => confirmChoice(e, toggleModal(".confirm-choice"))}
          dataAttrs={{ "data-response": "cancel" }}
        ></Button>
        <Button
          text='Ok'
          classString={"ok"}
          onClick={(e) => confirmChoice(e, toggleModal(".title-screen"))}
          dataAttrs={{ "data-response": "ok" }}
        ></Button>
      </ButtonGroup>
    </Modal>
  );
}
export default Confirm;
