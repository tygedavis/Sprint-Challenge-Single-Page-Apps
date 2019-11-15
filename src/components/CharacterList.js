import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/character/')//This grabs the data
      .then(res => {
        console.log("This is console logging 'res' from axios ", res.data);
      })
      .catch(err => {
        console.log('There was an error in the axios call ', err);
      })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
