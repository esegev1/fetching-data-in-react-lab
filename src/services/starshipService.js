const BASE_URL = `https://swapi.dev/api/starships/`;

const index = async (searchString) => {
    try {
        console.log(`searching for ${searchString}...`);
        const updatedSrchStr = searchString ? `?search=${searchString}` : '';

        const res = await fetch(`${BASE_URL}${updatedSrchStr}`);

        //handle non ok messages
        if(!res.ok) {
            throw new Error(`failed to fetch starships`);
        }

        //parse and return data
        const data = await res.json();
        return data.results;

    } catch (error) {
        console.error(`Error fetching starships: ${error}`)
    }
}

export { index }


// const starshipList = () => {
//     fetch("https://swapi.info/api/starships/")
//         .then((res) => res.json())
//         .then((json) => console.log(json))
//         .catch((error) => console.error(error))
// }