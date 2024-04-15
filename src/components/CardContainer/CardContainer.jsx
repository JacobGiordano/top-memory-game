import "./CardContainer.css";
import "./Card.css";
import { motion, AnimatePresence } from "framer-motion";

function CardContainer({ characterData, handleCardClick }) {
  const cardAnimations = {
    initialCard: (cardDelay) => ({
      opacity: 0,
      y: -100,
      background: "rgba(255, 255, 255, 1)",
      border: "1px solid #fff",
      boxShadow: "0 0 4rem 4rem rgba(255, 255, 255, 1)",
      transition: {
        delay: cardDelay,
      },
    }),
    enterCard: {},
    animateCard: (cardDelay) => ({
      opacity: 1,
      y: 0,
      background: "rgba(0,0,0, .75)",
      border: "none",
      boxShadow: "0 0 1px 1px rgba(0, 0, 0, 1)",
      transition: {
        delay: cardDelay,
      },
    }),
    exitCard: (cardDelay) => ({
      opacity: 0,
      y: -100,
      background: "rgba(255, 255, 255, 1)",
      border: "1px solid #fff",
      boxShadow:
        "0 0 1px 1px rgba(255, 255, 255, 1), 0 0 .25rem .25rem rgba(255, 255, 255, 1)",
      transition: {
        delay: cardDelay,
      },
    }),
  };

  const whiteCoverAnimations = {
    initialCover: {
      display: "block",
      position: "absolute",
      background: "#fff",
      width: "100%",
      height: "100%",
      opacity: 1,
    },
    animateCover: (cardDelay) => ({
      display: "none",
      opacity: 0,
      transition: {
        delay: cardDelay * 1.5,
      },
    }),
    exitCover: (cardDelay) => ({
      display: "block",
      opacity: 1,
      transition: {
        delay: cardDelay * 0.35,
      },
    }),
  };

  return (
    <div className='character-card-container'>
      {characterData[0] &&
        characterData.map((character, i) => {
          const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
          const cardDelay = 0.075 * i * Math.random();
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
                  variants={cardAnimations}
                  custom={cardDelay}
                  initial='initialCard'
                  animate='animateCard'
                  exit='exitCard'
                >
                  <motion.span
                    key={`white-cover-${i}`}
                    variants={whiteCoverAnimations}
                    custom={cardDelay}
                    initial='initialCover'
                    animate='animateCover'
                    exit='exitCover'
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
