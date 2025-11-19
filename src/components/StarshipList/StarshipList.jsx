import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = (props) => {

    return (
        <div>
            <h2>Starships</h2>
            <p>Number of results: {props.displayedStarships.length} </p>
            <StarshipCard starshipData={props.displayedStarships.data} /> 
        </div>
        
    )
}

export default StarshipList;