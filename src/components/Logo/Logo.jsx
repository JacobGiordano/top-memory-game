import "./Logo.css";

function Logo({ classString, fileDirectory, fileNameWithExtension }) {
  const classes = classString ? classString : null;
  return (
    <img
      className={classes}
      draggable='false'
      src={`/${fileDirectory}/${fileNameWithExtension}`}
    ></img>
  );
}
export default Logo;
