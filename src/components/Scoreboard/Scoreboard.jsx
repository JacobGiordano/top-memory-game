import "./Scoreboard.css";
import Button from "../Button/Button";

function Scoreboard({ score, highScore, handleResetClick }) {
  return (
    <div className='scoreboard'>
      <div className='score'>
        <span>Score: {score}</span>
      </div>
      <div className='separator'>|</div>
      <div className='high-score'>
        <span>High Score: {highScore}</span>
      </div>
      <Button text='Reset' onClick={handleResetClick}></Button>
    </div>
  );
}
export default Scoreboard;
