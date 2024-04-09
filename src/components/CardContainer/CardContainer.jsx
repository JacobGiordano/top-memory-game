import Card from "../Card/Card";
import "./CardContainer.css";
import { motion, AnimatePresence } from "framer-motion";

function CardContainer({ characterData, handleCardClick }) {
  return (
    <div className='character-card-container'>
      {characterData[0] &&
        characterData.map((character, i) => {
          const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
          const cardDelay = 0.07 * i * Math.random();
          console.log(character, cardDelay);
          return (
            <AnimatePresence key={i} mode='wait'>
              <div
                className='character-card-wrapper'
                key={`${character.name}-${i}`}
              >
                <motion.button
                  className='character-card'
                  data-character-name={character.name}
                  onClick={handleCardClick}
                  key={`card-wrapper-${i}`}
                  initial={{
                    opacity: 0,
                    y: -100,
                    boxShadow: "0 0 .25rem .25rem rgba(255, 255, 255, .5)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    boxShadow: "none",
                    transition: {
                      delay: cardDelay,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -100,
                    transition: {
                      delay: cardDelay,
                    },
                  }}
                >
                  <motion.span
                    key={`white-cover-${i}`}
                    initial={{
                      display: "block",
                      position: "absolute",
                      background: "#fff",
                      border: "2px solid white",
                      width: "100%",
                      height: "100%",
                      opacity: 1,
                    }}
                    animate={{
                      display: "none",
                      opacity: 0,
                      border: "2px solid white",
                      transition: {
                        delay: cardDelay * 1.5,
                      },
                    }}
                    exit={{
                      display: "block",
                      opacity: 1,
                      border: "2px solid white",
                      transition: {
                        delay: cardDelay * 1.5,
                      },
                    }}
                  ></motion.span>
                  <img
                    src={imageUrl}
                    alt={character.name}
                    className='character-card-image'
                    draggable='false'
                  />
                  <div className='character-card-name'>{character.name}</div>
                </motion.button>
              </div>
            </AnimatePresence>
          );
        })}
    </div>
  );
}
export default CardContainer;
