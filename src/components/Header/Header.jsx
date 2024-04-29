import { PropTypes } from "prop-types";
import "./Header.css";

function Header({ children }) {
  return <header className='header'>{children}</header>;
}

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
