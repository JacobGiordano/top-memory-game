import { PropTypes } from "prop-types";
import "./Scoreboard.css";

function Scoreboard({ score, highScore }) {
  return (
    <div className='scoreboard'>
      <div className='score'>
        <span>Score: {score}</span>
      </div>
      <div className='separator'>|</div>
      <div className='high-score'>
        <span>High Score: {highScore}</span>
      </div>
    </div>
  );
}

Scoreboard.propTypes = {
  score: PropTypes.string,
  highScore: PropTypes.string,
};

export default Scoreboard;
