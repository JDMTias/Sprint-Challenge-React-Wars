import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState([]);
  const URL = "https://swapi.py4e.com/api/people ";

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setCharacterData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(`You broke it! ${error}`);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div style={{display: 'flex', direction: 'row', width:'100%', flexWrap: 'wrap',  justifyContent: 'center'}}>
        <Character characterData={characterData}/>
      </div>
    </div>
  );
};

export default App;
