import Card from "../Card/Card";
import "./CardContainer.css";

function CardContainer({ characterData, handleCardClick }) {
  let cards = null;
  if (characterData[0]) {
    cards = characterData.map((character, i) => (
      <Card
        key={i}
        characterData={character}
        handleCardClick={handleCardClick}
      ></Card>
    ));
  }
  return <div className='character-card-container'>{cards}</div>;
}
export default CardContainer;
