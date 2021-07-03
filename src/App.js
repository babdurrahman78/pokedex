import "./App.css";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import InfiniteScroll from "react-infinite-scroll-component";

import { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [poke, setPoke] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPoke([...poke, ...data.results]);
        setUrl(data.next);
        console.log(poke);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={poke.length}
      next={fetchData}
      hasMore={true}
      scrollThreshold={1}
      loader={<p>loading...</p>}
    >
      <div className="App">
        <Navbar />
        <div className="pokemon-list">
          {poke.map((poke, index) => (
            <Card poke={poke} index={index + 1} key={index} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default App;
