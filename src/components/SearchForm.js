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
         {searchResults.map(name => (  //WE NEED TO PASS IN THE API TO NAME
           <li key={name.name}>{name.name}</li>
         ))}
       </ul>
     </div>
    </section>
  );
}