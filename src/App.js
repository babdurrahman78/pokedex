import "./App.css";
import Navbar from "./components/Navbar.js";
import { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [page, setPage] = useState(0);
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPoke([...poke, ...data.results]);
        setUrl(data.next);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="pokemon-list">
        {poke.map((poke, index) => (
          <a href="#" className="card" key={index}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={poke.name}
            />
            <p><b>{poke.name}</b></p> 
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
