import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, nativeName, numericCode, population, region,flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {
        height: '50px'
    }
    const compStyle = {
        border: '2px solid red',
        borderRadius: '5px',
        margin: '10px',
        padding: '10px',
        width: '600px'
    }
    return (
        <div style={compStyle}>
            <img style={flagStyle} src={flag} alt=""/>
            <h2>{name}</h2>
            <p>{nativeName}</p>
            <p>{numericCode}</p>
            <p>{population}</p>
            <p>{region}</p>
            <button onClick={() => handleAddCountry(props.country)} >Add Country</button>
        </div>
    );
};

export default Country;