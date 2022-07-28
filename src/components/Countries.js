import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';


const Countries = () => {

    ///etat state use
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState('');
    const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    //comportement
    //setdata to state
    //le useEffect se joue lorsaue le composant est monte
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));

    }, []);

    const handleCountryNber = (event) => {
        setRangeValue(event.target.value);

    }

    const handleContinent = (e) => {
        setSelectedRadio(e.target.id)
    }
    return (
        <div className='countries'>
            <h1>🌍PAYS</h1>
            <br />
            {/* //filter */}
            <ul className='radio-container'>
                <ul className="bar-filter"><input value={rangeValue} onChange={handleCountryNber} type="range" min='1' max={data.length} /></ul>

                <ul>
                    {continents.map((continent, index) => (
                        <li key={index}>
                            <input
                                name='continentRadio'
                                onChange={handleContinent}
                                checked={continent === selectedRadio}
                                type="radio" id={continent} />
                            <label htmlFor={continent}> {continent} </label>
                        </li>
                    ))}
                </ul>
            </ul>
            {selectedRadio && <button onClick={() => setSelectedRadio("")}>vider le filtre</button>}
            {/* //Afficher les pays */}
            <ul className='content'>{data
                .filter((country) => country.continents[0].includes(selectedRadio))
                .sort((a, b) => b.population - a.population)
                .slice(0, rangeValue)
                .map((country, index) => (
                    <Card key={index} country={country} />
                ))}</ul>
        </div>
    );
};

export default Countries;
