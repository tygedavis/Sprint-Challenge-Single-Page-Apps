import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const SearchBarDiv = styled.div`
  display: flex;
  justify-content:center;
  margin: 20px auto;
`;

export default function SearchForm(props) {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //console.log('This is props on SearchForm ',props.character);

  useEffect(() => {
      const results = props.character.filter(name => {
        //console.log('This is name ', name.name)
        return name.name.toLowerCase().includes(searchTerm.toLowerCase())})

        setSearchResults(results)
        console.log('This is results ', results)
        console.log('This is searchTerm inside of "results" function ', searchTerm)
    }, [searchTerm]);

    // (item) => item.results   <--- implicit return, yay!!!
    // const stuff = (item) => {  <-- these curly braces {} break the implicit return, so you need to EXPLICITLY return something
    //   setThing(item)
    //   setOtherThing(item+4)
    //   return item + 10  //<---- what the function gives back
    // }

    // const stuff2 = thing.forEach(whatever)
    // const stuff3 = thing.map()

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  console.log('this is the new search results after "results" function ', searchResults);

  console.log('This is searchTerm outside of "results" function ', searchTerm)

  return (
    <section className="search-form">
      <SearchBarDiv>
        <label/>
        <input 
            id='name' 
            type='text' 
            name='search' 
            placeholder='Search Characters'
            onChange={handleChange}
            value={searchTerm}
          />
      </SearchBarDiv>
     <div>
       <ul>
         {searchResults.map(name => (
           <li key={name.name}>Name: {name.name} | Species: {name.species} | Dead of Alive: {name.status}</li>
         ))}
       </ul>
     </div>
    </section>
  );
}