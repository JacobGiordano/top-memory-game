import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [difficulty, setDifficulty] = useState("hard");

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
    const createCards = (characters) => {
      getCharactersForCards();
    };

    createCards(characters);

    return () => {
      controller.abort;
    };
  }, [characters, difficulty]);

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
      selectedCharacters.push(chosenCharacter);
    }
    console.log("Unshuffled characters array:");
    console.log(selectedCharacters);
    setSelectedCharacters(selectedCharacters);
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

    setSelectedCharacters(shuffledArray);
    console.log("Shuffled characters array:");
    console.log(shuffledArray);
  };

  // Handle Card Clicks
  const handleCardClick = () => {
    shuffleArray(selectedCharacters);
  };

  return (
    <>
      <Header></Header>
      <div className='card'>
        <p>
          <Button text='Get characters' onClick={getCharactersForCards} />
        </p>
        <p>
          <Button text='Shuffle characters' onClick={handleCardClick} />
        </p>
      </div>
    </>
  );
}

export default App;
