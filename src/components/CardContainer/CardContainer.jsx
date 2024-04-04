import Card from "../Card/Card";
import "./CardContainer.css";
import { motion, AnimatePresence } from "framer-motion";

function CardContainer({ characterData, handleCardClick }) {
  let cards = null;
  if (characterData[0]) {
    cards = characterData.map((character, i) => (
      <Card
        key={i}
        characterData={character}
        handleCardClick={handleCardClick}
        mapIndex={i}
      ></Card>
    ));
  }
  return (
    <div className='character-card-container'>
      <AnimatePresence>{cards}</AnimatePresence>
    </div>
  );
}
export default CardContainer;
