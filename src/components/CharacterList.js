import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';
import styled from 'styled-components'

const CharacterDiv = styled.div`
    margin: 5px 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/character/')//This grabs the data
      .then(res => {
        console.log("This is console logging 'res' from axios ", res.data); //Gives back two arrays: 'Info' (page count) and 'results' (information on each character)
        setCharacter(res.data.results); //This is the information of each charcter
      })
      .catch(err => {
        console.log('There was an error in the axios call ', err);
      })
  }, []);

  console.log('This is character ', character)

  return (
    <CharacterDiv>
      {character.map((person, index) => { //For every character we want to make a new card.
        return <CharacterCard key={index} name={person.name} status={person.status} species={person.species}/>
      })}
    </CharacterDiv>
  );
}
