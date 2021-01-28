import React from 'react';

const Country = ({selectedCountry}) => {
    if (selectedCountry==null){
        return (
            <div className="ui segment">
                <div>Please select a country first.</div>
            </div>
        );
    }

    const currencies = selectedCountry.currencies.map((currency)=> {
        return `${currency.code} ${currency.name} ${currency.symbol} `;
    }) 

    const languages = selectedCountry.languages.map((language) => {
        return `${language.name} `;
    })

    return (
        <div className="ui segment">
            <h3>{selectedCountry.name}</h3>
            <div><strong>Capital: </strong>{selectedCountry.capital}</div>
            <div><strong>Alpha-3 code: </strong>{selectedCountry.alpha3Code}</div>
            <div><strong>Top level domain: </strong>{selectedCountry.topLevelDomain}</div>
            <div><strong>Calling codes: </strong>{selectedCountry.callingCodes}</div>
            <div><strong>Alternative spellings: </strong>{selectedCountry.altSpellings}</div>
            <div><strong>Region: </strong>{selectedCountry.region}</div>
            <div><strong>Subregion: </strong>{selectedCountry.subregion}</div>
            <div><strong>Population </strong>{selectedCountry.population}</div>
            <div><strong>Demonym: </strong>{selectedCountry.demonym}</div>
            <div><strong>Area: </strong>{selectedCountry.area}</div>
            <div><strong>Timezones: </strong>{selectedCountry.timezones}</div>
            <div><strong>Borders: </strong>{selectedCountry.borders}</div>
            <div><strong>Native name: </strong>{selectedCountry.nativeName}</div>
            <div><strong>Currency: </strong>{currencies}</div>
            <div><strong>Languages: </strong>{languages}</div>
        </div>
    );
}

export default Country;