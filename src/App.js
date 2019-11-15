import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import styled from 'styled-components'

const StyledLink = styled.a`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
`;


export default function App() {
  return (
    <main>
      <Header />
      <LinkDiv>
        <StyledLink><Link to='/'>Home</Link></StyledLink>
        <StyledLink><Link to='/characters'>Character List</Link></StyledLink>
      </LinkDiv>

      <Route exact path='/' component={ WelcomePage }/>
      <Route path='/characters' component={ CharacterList }/>
    </main>
  );
}
