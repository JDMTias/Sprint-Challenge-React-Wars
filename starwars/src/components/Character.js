import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

const Character = (props) => {
  return (
    <div>
      {props.characterData.map((character) => (
        <div>
          <Card style={{marginTop:'10%', backgroundColor: 'lightgrey'}}>
              <CardTitle>{character.name}</CardTitle>
              <CardText>Birthyear: {character.birth_year}</CardText>
              <CardText>Hair Color: {character.hair_color}</CardText>
              <CardText>Eye Color: {character.eye_color}</CardText>
              <CardText>Gender: {character.gender}</CardText>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Character;
