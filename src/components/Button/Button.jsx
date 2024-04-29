import { PropTypes } from "prop-types";
import "./Button.css";

function Button({ children, classString, dataAttrs, onClick, text, value }) {
  const classes = classString ? classString : null;
  return (
    <button
      className={classes}
      onClick={onClick}
      title={text}
      {...dataAttrs}
      value={value}
    >
      {children ? children : text}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  classString: PropTypes.string,
  dataAttrs: PropTypes.object,
  onClick: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.string,
};

export default Button;
