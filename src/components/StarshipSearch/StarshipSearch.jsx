import { useState } from 'react';

const StarshipSearch = (props) => {

    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
        setValue(event.target.value)

    }

    const handleSubmit = (event) => {

        console.log(`starshipsearch.jsx event value: ${value}`)
        event.preventDefault();
        props.searchShips(value);

    }
    
    const formStyle = {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
    }

    return (
        <>
            <h2>Search</h2>
            <form onSubmit={handleSubmit} style={formStyle} >
                <label htmlFor="">Search Term:</label>
                <input type="text" onChange={handleInputChange} value={value}></input>
                <button type="submit">Search</button>
            </form>
        </>

    )
}

export default StarshipSearch;