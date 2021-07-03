import "./App.css";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
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
          <Card poke={poke} index={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;
