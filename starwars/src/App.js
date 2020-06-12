import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {jediArchives} from './constant/APIURL'
import GlobalStyles from './components/GlobalStyles'
import Character from './components/Character'
import './App.css';

const App = () => {

  const [characterData, setCharacterData]= useState([]);
  
  useEffect(()=> {
    axios.get(`${jediArchives}`)
    .then((res) => {
      console.log(res);
      setCharacterData(res.data.results);
      console.log(res.data.results);
    })

    .catch((error) => {
      console.log(`You were the Chosen One! It was said you would destroy the Sith, not join them! Bring balance to the force, not leave it in darkness! ${error} `);
    });
  }, []);

  return (
    <div className="App">
      
      <h1 className="Header">Jedi Archives</h1>
      <GlobalStyles/>
      <Character characterData={characterData}/>
    </div>
  );
}

export default App;
