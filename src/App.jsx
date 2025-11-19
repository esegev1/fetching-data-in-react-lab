import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import StarshipCard from "./components/StarshipCard/StarshipCard";
import StarshipList from "./components/StarshipList/StarshipList";
import { useState, useEffect } from 'react';
import { index } from './services/starshipService';
import './app.css'


const App = () => {

  const [starshipData, setStarshipData] = useState({
    data: [],
    length: 0,
  })

  const [displayedStarships, setDisplayedStarships] = useState({
    data: [],
    length: 0,
  })

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        console.log(`intitial set up`)

        const data = await index();
        console.log(`intitial set up ${JSON.stringify(data)}`)
        //set both state variables to fetched data
        setStarshipData({data: data, length: data.length});
        console.log(`starshipData: ${JSON.stringify(starshipData)}`)
        setDisplayedStarships({data: data, length: data.length});
      } catch (error) {
        console.error(`Error loading starships: ${error}`);
      }
    };

    fetchStarships();
  }, []);

  const searchShips = async (searchString) => {
    console.log(`app.js searching for ${searchString}`);
    const searchResults = await index(searchString);
    console.log(`searchResults: ${searchResults.length}`);
    setDisplayedStarships({data: searchResults, length: searchResults.length});
  }



  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch searchShips={searchShips} />
      <StarshipList displayedStarships={displayedStarships} />
    </>
  );
}

export default App