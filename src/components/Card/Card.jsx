import "./Card.css";
import { motion, AnimatePresence } from "framer-motion";

function Card({ characterData, handleCardClick, mapIndex }) {
  const imageUrl = `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`;
  const cardDelay = 0.1 * mapIndex * Math.random();

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: -100,
      boxShadow: "0 0 .25rem .25rem rgba(255, 255, 255, .5)",
    },
    animate: {
      opacity: 1,
      y: 0,
      boxShadow: "none",
      transition: {
        delay: cardDelay,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        delay: cardDelay,
      },
    },
  };

  const imgCoverVariants = {
    initial: {
      display: "block",
      position: "absolute",
      background: "#fff",
      border: "2px solid white",
      width: "100%",
      height: "100%",
      opacity: 1,
    },
    animate: {
      display: "none",
      opacity: 0,
      border: "2px solid white",
      transition: {
        delay: cardDelay * 1.5,
      },
    },
    exit: {
      display: "block",
      opacity: 1,
      border: "2px solid white",
      transition: {
        delay: cardDelay * 1.5,
      },
    },
  };

  return (
    <div className='character-card-wrapper'>
      <AnimatePresence key={`${characterData.name}-${mapIndex}`}>
        <motion.button
          className='character-card'
          data-character-name={characterData.name}
          onClick={handleCardClick}
          variants={fadeInAnimationVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          key={`card-wrapper-${mapIndex}`}
        >
          <AnimatePresence key={`${characterData.name}-${mapIndex}`}>
            <motion.span
              variants={imgCoverVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              key={`white-cover-${mapIndex}`}
            ></motion.span>
          </AnimatePresence>
          <img
            src={imageUrl}
            alt={characterData.name}
            className='character-card-image'
            draggable='false'
          />
          <div className='character-card-name'>{characterData.name}</div>
        </motion.button>
      </AnimatePresence>
    </div>
  );
}
export default Card;
