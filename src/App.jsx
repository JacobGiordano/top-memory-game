import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");

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
    const numOfCards = getCardCount();
    for (let i = 0; i < numOfCards; i++) {
      const chosenCharacter = characters[getRandom(0, characters.length - 1)];
      selectedCharacters.push(chosenCharacter);
    }
    console.log(selectedCharacters);
    return selectedCharacters;
  };

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

  return (
    <>
      <div className='card'>
        <p>
          <button onClick={getCharactersForCards}>Get characters</button>
        </p>
      </div>
    </>
  );
}

export default App;
