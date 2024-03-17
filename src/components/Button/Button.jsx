function Button({ children, classString, text, onClick }) {
  const classes = classString ? classString : null;
  return (
    <button className={classes} onClick={onClick} title={text}>
      {children ? children : text}
    </button>
  );
}
export default Button;
