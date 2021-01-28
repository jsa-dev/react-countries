import React from 'react';
import SearchLabel from './SearchLabel';
import {connect} from 'react-redux';
import {updateCountryList, selectCountry} from '../actions';

class Search extends React.Component {
    state = { term: ''};

    onTermSubmit = (term, searchSelected) => {
        // searches for countries in current region
        if(searchSelected==false){
            var searchBag = this.props.countryList;
            var message = "Please select a region firtst"; // NOT NECESSARY IF SEARCH IS NOT VISIBLE
        // searches for countries in current selection
        } else {
            var searchBag = this.props.selection;
            var message = "Please choose add a selection of countries to search first." // NOT NECESSARY IF SEARCH IS NOT VISIBLE
        }
        // method proper
        if(searchBag.length==0)
            alert(message);
        const filteredResults = searchBag.filter(
            (country) => {
                return country.name.toLowerCase().includes(term.toLowerCase());
            }
        );

        this.props.updateCountryList(filteredResults);
        //console.log(this.props.searchCountryList);

        if (filteredResults.length==0 && term.length!=0){
            alert('Nothing found!');
        }
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
        this.onTermSubmit(event.target.value, this.props.searchSelected);
    }

    onFormSubmit = e => {
        e.preventDefault();
        if(this.props.searchCountryList)
            return this.props.selectCountry(this.props.searchCountryList[0]);
        if (this.props.countryList)
            return this.props.selectCountry(this.props.countryList[0]);
    }

    render(){
        return (
            <div className="saerch-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <SearchLabel region={this.props.region} searchSelected={this.props.searchSelected}/>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            // onChange={(e) => this.setState({ term: e.target.value })}
                            />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selection: state.selection,
        searchCountryList: state.searchCountryList,
        countryList: state.countryList,
        region: state.region
    };
}

export default connect(mapStateToProps, {
    updateCountryList,
    selectCountry
})(Search);