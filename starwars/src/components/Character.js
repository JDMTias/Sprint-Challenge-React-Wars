import React from 'react'
// import Box from './container'


export default function Character(props) {

   return (
       <div>
           {props.characterData.map((character)=>(
              <div>
                  <h2>{character.name}</h2>
                  <p>Birthyear:{character.birth_year}</p>
                  <p>Hair: {character.hair_color}</p>
                  <p>Eyes: {character.eye_color}</p>
                  <p>Gender: {character.gender}</p>
              </div> 
           ))};
       </div>
   ); 


};