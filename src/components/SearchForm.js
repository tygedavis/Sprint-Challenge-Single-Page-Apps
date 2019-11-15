import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  console.log('This is props on SearchForm ',props.character);

  useEffect(() => {
      const results = props.character.filter(name => {
        //console.log('This is name ', name.name)
        name.name.toLowerCase().includes(searchTerm.toLowerCase())})
        setSearchResults(results)
        //console.log('This is results ', results)
        //console.log('This is searchTerm', searchTerm)
    }, [searchTerm]);
  

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  //console.log('this is the new search results', searchResults);

  //console.log('This is search term ', searchTerm)

  return (
    <section className="search-form">
     <label/>
     <input 
        id='name' 
        type='text' 
        name='search' 
        placeholder='Search Characters'
        onChange={handleChange}
        value={searchTerm}
      />
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