import React from "react";
import styled from 'styled-components'

const CharacterDiv = styled.div`
    margin: 5px 10px;
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;
    width: 200px;
    padding: 5px;
`;

export default function CharacterCard(props) {
  return (
    <CharacterDiv>
      <h2>Name: {props.name}</h2>
      <h3>Species: {props.species}</h3>
      <p>Dead or Alive? {props.status}</p>
    </CharacterDiv>
  );
}