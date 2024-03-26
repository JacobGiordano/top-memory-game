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
export default Button;
