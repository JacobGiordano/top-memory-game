import "./Button.css";

function Button({ children, classString, text, dataAttrs, onClick }) {
  const classes = classString ? classString : null;
  return (
    <button className={classes} onClick={onClick} title={text} {...dataAttrs}>
      {children ? children : text}
    </button>
  );
}
export default Button;
