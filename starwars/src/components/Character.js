import React from "react";

const Character = (props) => {
  return (
    <div>
      {props.characterData.map((character) => (
        <div>
          <h2>{character.name}</h2>
          <p>Birthyear: {character.birth_year}</p>
          <p>Homeworld: {character.homworld}</p>
          <p>Height: {character.height}</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Gender: {character.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default Character;
