import React from 'react'

const Character = props => {
    return (
        <div>
            {props.characterData.map( character =>
                <div>
                    <h2>{character.name}</h2>
                    <p>Birthyear: {character.birth_year}</p>
                    <p>Homeworld: {character.homworld}</p>
                    <p>Films: {character.films}</p>
                    <p></p>


                </div>)}

        </div>
    )

}

export default Character
