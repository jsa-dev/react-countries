import React from 'react';
import {connect} from 'react-redux';

class Search extends React.Component {
    state = { term: '', currentSearch: []};

    onTermSubmit = (term, searchSelected) => {
        // searches for countries in current region
        if(searchSelected===false){
            var searchBag = this.props.countries;
        // searches for countries in current selection
        } else {
            var searchBag = this.props.selection;
        }
        // common to both
        const filteredResults = searchBag.filter(
            (country) => {
                return country.name.toLowerCase().includes(term.toLowerCase());
            }
        );
        
        if(term.length==0){
            // Make it go back to the original listing source when search box is empty
            this.props.buildSearchList([]);
        } else {
            this.props.buildSearchList(filteredResults);
            this.setState({currentSearch: filteredResults});
        }

        if (filteredResults.length===0 && term.length!==0){
            alert('Nothing found!');
        }
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
        this.onTermSubmit(event.target.value, this.props.searchSelected);
    }

    onFormSubmit = e => {
        e.preventDefault();
        if (this.state.currentSearch.length!==0)
            this.props.onCountrySelect(this.state.currentSearch[0]);
    }

    render(){
        return (
            <div className="saerch-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search countries: </label>
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
    };
}

export default connect(mapStateToProps)(Search);