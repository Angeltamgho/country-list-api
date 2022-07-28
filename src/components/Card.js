import React from 'react';

const Card = ({ country }) => {
    const CountryName = country.translations.fra.official;
    return (
        <li className="card">
            <img src={country.flags.svg} alt={CountryName} />
            <div className="infos">
                < h2 > {CountryName}</h2 >
                <h4>{country.capital}</h4>
                <p>Pop : {country.population.toLocaleString()}</p>
            </div >
        </li >
    );
};

export default Card;