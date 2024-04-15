import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import CardContainer from "./components/CardContainer/CardContainer";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import BgVideo from "./components/BgVideo/BgVideo";
import TitleScreen from "./components/TitleScreen/TitleScreen";
import WinningScreen from "./components/WinningScreen/WinningScreen";
import LosingScreen from "./components/LosingScreen/LosingScreen";
import Confirm from "./components/Confirm/Confirm";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Logo from "./components/Logo/Logo";
import InfoScreen from "./components/InfoScreen/InfoScreen";

function App() {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [playState, setPlayState] = useState("");

  // Fetching character data
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async (endpoint, stateToUpdate) => {
      const url = endpoint;
      await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then(function (res) {
          const data = res.data.results;
          stateToUpdate(data);
        });
    };
    try {
      fetchData(
        `https://gateway.marvel.com:443/v1/public/events/270/comics?limit=100&apikey=${
          import.meta.env.VITE_API_KEY
        }`,
        setComics
      );
      fetchData(
        `https://gateway.marvel.com:443/v1/public/events/270/characters?limit=100&apikey=${
          import.meta.env.VITE_API_KEY
        }`,
        setCharacters
      );
    } catch (error) {
      console.error(error);
    }

    return () => {
      controller.abort;
    };
  }, []);

  // Card creation
  useEffect(() => {
    const createCards = () => {
      getCharactersForCards();
    };

    createCards(characters);
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

  const isCompletelyDifferent = (array) => {
    let status = true;
    for (let i = 0; i < array.length; i++) {
      array[i] === selectedCharacters[i] ? (status = false) : null;
    }
    return status;
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

    if (
      !arrayIsTheSame(array, shuffledArray) &&
      isCompletelyDifferent(shuffledArray)
    ) {
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
        setPlayState("win");
      }
      if (game.status === "lose") {
        setPlayState("lose");
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
    resetGame();
    getCharactersForCards();
    toggleModal(e.target.closest("dialog").classList);
    if (e.target.dataset["difficulty"] === "hard") {
      document.querySelector(".main").classList.remove("expand");
    } else {
      document.querySelector(".main").classList.add("expand");
    }
  };

  // Reset Game
  const resetGame = () => {
    setScore(0);
    setClickedCards([]);
    setPlayState("play");
  };

  // Handle Play Again Click
  const handlePlayAgainClick = (e) => {
    resetGame();
    getCharactersForCards();
    toggleModal(e.target.closest("dialog").classList);
  };

  // Handle Quit Game Click
  const handleQuitClick = () => {
    setPlayState("paused");
    toggleModal(".confirm-choice");
  };

  // Toggle modal
  const toggleModal = (modalSelector, newPlayState) => {
    const modal = document.querySelector(modalSelector);
    [...document.querySelectorAll("dialog")].map((dialog) =>
      dialog !== modal ? dialog.close() : null
    );
    if (modal) {
      if (modal.open) {
        modal.close();
      } else {
        modal.showModal();
      }
      if (newPlayState) {
        setPlayState(newPlayState);
      }
    }
  };

  useEffect(() => {
    const comicEntries = [...new Set(comics)].reverse();
    if (comicEntries.length > 0) {
      for (let i = 1; i <= comicEntries.length; i++) {
        const logoBgImg = document.querySelector(".logo-bg-img");
        setTimeout(function () {
          if (comicEntries[i] && comicEntries[i].images) {
            logoBgImg.src = `${comicEntries[i].images[0].path}.${comicEntries[i].images[0].extension}`;
          }
        }, i * 150);
      }
    }
  }, [comics]);

  useEffect(() => {
    if (characters.length > 0) {
      const delay = setTimeout(() => {
        document.querySelector(".loading-screen") &&
          document.querySelector(".loading-screen").classList.add("fade-out");
        const closeTimer = setTimeout(() => {
          setPlayState("reset");
          document.querySelector(".title-screen") &&
            document.querySelector(".title-screen").showModal();
          clearTimeout(closeTimer);
        }, 1000);
        clearTimeout(delay);
      }, 5500);
    } else {
      document.querySelector(".loading-screen").classList.add("animate");
      document.querySelector(".loading-screen").showModal();
    }

    return () => {
      //
    };
  }, [characters]);

  return (
    <>
      <Header>
        <Logo
          classString={"header-logo"}
          fileDirectory={"images"}
          fileNameWithExtension={"Secret-Wars_1984-1985.webp"}
        />
        <Scoreboard score={score} highScore={highScore} resetGame={resetGame} />
        <Button
          classString='quit-btn'
          text='Quit'
          onClick={handleQuitClick}
        ></Button>
      </Header>
      <Main>
        <CardContainer
          characterData={selectedCharacters}
          handleCardClick={handleCardClick}
        />

        {playState === "reset" && (
          <TitleScreen
            toggleModal={toggleModal}
            handleDifficultyClick={handleDifficultyClick}
          />
        )}
        {playState === "win" && (
          <WinningScreen
            toggleModal={toggleModal}
            handlePlayAgainClick={handlePlayAgainClick}
          />
        )}
        {playState === "lose" && (
          <LosingScreen
            toggleModal={toggleModal}
            handlePlayAgainClick={handlePlayAgainClick}
          />
        )}
        {playState === "paused" && (
          <Confirm
            toggleModal={toggleModal}
            handlePlayAgainClick={handlePlayAgainClick}
          />
        )}
        {playState === "" && <LoadingScreen />}
        {playState === "info" && <InfoScreen toggleModal={toggleModal} />}
      </Main>
      <Footer toggleModal={toggleModal} setPlayState={setPlayState} />
      <BgVideo />
    </>
  );
}

export default App;
