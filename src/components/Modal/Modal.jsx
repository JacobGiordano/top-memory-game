import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./Modal.css";

function Modal({ children, classString, toggleModal, noToggle }) {
  const classes = classString ? classString : null;

  const closeModal = (e) => {
    const modal = e.target.closest("dialog");
    if (e.target === modal) {
      toggleModal(modal.classList);
    }
  };

  useEffect(() => {
    const classSelectors = classString.split(" ").join(".");
    const selector = `.${classSelectors}`;
    document.querySelector(selector).showModal();
  }, []);

  return (
    <motion.dialog
      className={classes}
      onClick={!noToggle ? (e) => closeModal(e) : null}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        velocity: 5,
      }}
    >
      <div className='modal-content'>{children}</div>
    </motion.dialog>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  classString: PropTypes.string,
  toggleModal: PropTypes.func,
  noToggle: PropTypes.bool,
};

export default Modal;
