import "./Scoreboard.css";

function Scoreboard({ score, highScore }) {
  return (
    <div className='score-board'>
      <div className='score'>
        <span>Score: {score}</span>
      </div>
      <div className='high-score'>
        <span>High Score: {highScore}</span>
      </div>
    </div>
  );
}
export default Scoreboard;
