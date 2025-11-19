const StarshipCard = (props) => {

    const listStyle = {
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        width: '100%',
        padding: '0',

    }

    const cardStyle = {
        listStyleType: 'none',
        border: '1px solid white',
        background: 'gray',
        borderRadius: '10px',
        width: '30%',
        padding: '10px'
    }
    
    

    return (
        <ul style={listStyle}>
            {props.starshipData.map((ship, index) => (
                <li key={index} style={cardStyle}>
                    <h2>{ship.name}</h2>
                    <p>Class: {ship.starship_class}</p>
                    <p>Manufacturer: {ship.manufacturer}</p>
                    <p>Model: {ship.model}</p>
                </li>
            ))}
        </ul>
    )
}

export default StarshipCard;