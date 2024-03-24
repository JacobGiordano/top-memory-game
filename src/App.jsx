import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import CardContainer from "./components/CardContainer/CardContainer";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Modal from "./components/Modal/Modal";
import BgVideo from "./components/BgVideo/BgVideo";
import TitleScreen from "./components/TitleScreen/TitleScreen";
import WinningScreen from "./components/WinningScreen/WinningScreen";
import LosingScreen from "./components/LosingScreen/LosingScreen";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Fetching character data
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const url = `https://gateway.marvel.com:443/v1/public/events/270/characters?limit=100&apikey=${
        import.meta.env.VITE_API_KEY
      }`;
      await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then(function (res) {
          setCharacters(res.data.results);
        });
    };
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }

    return () => {
      controller.abort;
    };
  }, []);

  // Card creation
  useEffect(() => {
    const controller = new AbortController();
    const createCards = () => {
      getCharactersForCards();
    };

    createCards(characters);

    return () => {
      controller.abort;
    };
  }, [difficulty]);

  // Get random number within specified range
  const getRandom = (min, max) => {
    const minRoundedUp = Math.ceil(min);
    const maxRoundedDown = Math.floor(max);
    return Math.floor(
      Math.random() * (maxRoundedDown - minRoundedUp + 1) + minRoundedUp
    );
  };

  // Get the required number of cards based on difficulty
  const getCardCount = (difficulty) => {
    let numOfCards = 0;
    switch (difficulty) {
      case "hard":
        numOfCards = 12;
        break;
      case "medium":
        numOfCards = 8;
        break;
      case "easy":
        numOfCards = 4;
        break;
      default:
        numOfCards = 4;
        break;
    }
    return numOfCards;
  };

  // Get random characters for cards
  const getCharactersForCards = () => {
    let selectedCharacters = [];
    const numOfCards = getCardCount(difficulty);
    for (let i = 0; i < numOfCards; i++) {
      const chosenCharacter = characters[getRandom(0, characters.length - 1)];
      if (
        (chosenCharacter &&
          chosenCharacter.thumbnail.path.includes("image_not_available")) ||
        (chosenCharacter && selectedCharacters.includes(chosenCharacter))
      ) {
        i--;
      } else {
        selectedCharacters.push(chosenCharacter);
      }
    }

    setSelectedCharacters(selectedCharacters);
  };

  // Check to see if the original array and the shuffled array are the same
  const arrayIsTheSame = (originalArray, shuffledArray) => {
    if (originalArray.length === shuffledArray.length) {
      for (let i = 0; i < shuffledArray.length; i++) {
        if (originalArray[i] !== shuffledArray[i]) return false;
      }
    }
    return true;
  };

  // Shuffle the order of an array's entries
  const shuffleArray = (array) => {
    const shuffledArray = [];
    const usedIndecies = [];

    let i = 0;
    while (i < array.length) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!usedIndecies.includes(randomIndex)) {
        shuffledArray.push(array[randomIndex]);
        usedIndecies.push(randomIndex);
        i++;
      }
    }

    if (!arrayIsTheSame(array, shuffledArray)) {
      setSelectedCharacters(shuffledArray);
      return;
    }

    shuffleArray(array);
  };

  // Keep Score
  const keepScore = (characterName) => {
    setClickedCards([...clickedCards, characterName]);
    setScore(score + 1);
    if (highScore <= score) setHighScore(highScore + 1);
  };

  // Check for win condition
  const gameState = (characterName) => {
    let game = {};
    if (
      selectedCharacters &&
      !clickedCards.includes(characterName) &&
      score === selectedCharacters.length - 1
    ) {
      game.status = "win";
    } else if (clickedCards.includes(characterName)) {
      game.status = "lose";
    }
    return game;
  };

  // Handle Card Clicks
  const handleCardClick = (e) => {
    const characterName =
      e.target.closest(".character-card").dataset.characterName;
    const game = gameState(characterName);
    if (game && (game.status === "win" || game.status === "lose")) {
      if (game.status === "win") {
        keepScore(characterName);
      }
      toggleModal(`.you-${game.status}`);
      return;
    }
    keepScore(characterName);
    shuffleArray(selectedCharacters);
  };

  // Handle Difficulty Click
  const handleDifficultyClick = (e) => {
    setDifficulty(e.target.dataset["difficulty"]);
    handleResetClick();
    getCharactersForCards();
    toggleModal(e.target.closest("dialog").classList);
  };

  // Handle Reset Click
  const handleResetClick = () => {
    setScore(0);
    setClickedCards([]);
  };

  // Handle Play Again Click
  const handlePlayAgainClick = (e) => {
    handleResetClick();
    getCharactersForCards();
    toggleModal(e.target.closest("dialog").classList);
  };

  // Toggle modal
  const toggleModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    [...document.querySelectorAll("dialog")].map((dialog) =>
      dialog !== modal ? dialog.close() : null
    );
    if (modal) {
      if (modal.open) {
        modal.close();
      } else {
        modal.showModal();
        console.log(`Opened '.${modal.classList}'`);
      }
    }
  };

  return (
    <>
      <Header>
        <Scoreboard score={score} highScore={highScore} />
        <Button text='Reset' onClick={handleResetClick}></Button>
        <Button
          onClick={() => toggleModal(".title-screen")}
          text='Title screen'
        />
        <Button onClick={() => toggleModal(".you-win")} text='You win' />
        <Button onClick={() => toggleModal(".you-lose")} text='You lose' />
      </Header>
      <Main>
        <div>
          <p>
            <Button text='Get characters' onClick={getCharactersForCards} />
          </p>
          <p>
            <Button text='Shuffle characters' onClick={handleCardClick} />
          </p>
        </div>
        <CardContainer
          characterData={selectedCharacters}
          handleCardClick={handleCardClick}
        />
        <TitleScreen
          handleDifficultyClick={handleDifficultyClick}
          toggleModal={toggleModal}
        />
        <WinningScreen
          toggleModal={toggleModal}
          handlePlayAgainClick={handlePlayAgainClick}
        />
        <LosingScreen
          toggleModal={toggleModal}
          handlePlayAgainClick={handlePlayAgainClick}
        />
      </Main>
      <Footer></Footer>
      <BgVideo />
    </>
  );
}

export default App;
