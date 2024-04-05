import Card from "../Card/Card";
import "./CardContainer.css";

function CardContainer({ characterData, handleCardClick }) {
  return (
    <div className='character-card-container'>
      {characterData[0] &&
        characterData.map((character, i) => (
          <Card
            key={i}
            characterData={character}
            handleCardClick={handleCardClick}
            mapIndex={i}
          ></Card>
        ))}
    </div>
  );
}
export default CardContainer;
