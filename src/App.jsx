import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [difficulty, setDifficulty] = useState();

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
          console.log(res.data.results);
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
      characters.map((character) => console.log(character.name));
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
