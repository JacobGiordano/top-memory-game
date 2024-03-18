import Card from "../Card/Card";
import "./CardContainer.css";

function CardContainer({ characterData }) {
  let cards = null;
  if (characterData[0]) {
    cards = characterData.map((character, i) => (
      <Card key={i} characterData={character}></Card>
    ));
  }
  return <div className='card-container'>{cards}</div>;
}
export default CardContainer;
