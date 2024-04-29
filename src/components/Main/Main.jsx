import { PropTypes } from "prop-types";
import "./Main.css";

function Main({ children }) {
  return (
    <main className='main expand'>
      <div className='inner-main-container'>{children}</div>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
