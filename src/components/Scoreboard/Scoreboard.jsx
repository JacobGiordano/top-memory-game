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
export default Scoreboard;
