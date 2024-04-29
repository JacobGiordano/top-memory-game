import { PropTypes } from "prop-types";
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

Logo.propTypes = {
  classString: PropTypes.string,
  fileDirectory: PropTypes.string,
  fileNameWithExtension: PropTypes.string,
};

export default Logo;
