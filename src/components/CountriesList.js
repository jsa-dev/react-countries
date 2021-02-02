import React from 'react';
import {connect} from 'react-redux';
import {addCountry} from '../actions';
import Search from './Search';
import Country from './Country';

class CountriesList extends React.Component{
    state={ country: null, searchList: [] };

    // clear searchlist when region is changed
    componentDidUpdate(prevProps) {
        if ( prevProps.region!==this.props.region) {
            this.setState({searchList: []});
        }
    }

    buildSearchList = (filteredResults) => {
        this.setState({searchList: filteredResults})
    }

    onCountrySelect = (country) => {
        this.setState({country: country});
    }

    renderList(){
        if (this.props.countryList.length===0){
            return(
                <div className="ui vertical menu">
                    <a className="item">Please select a region first.</a>
                </div>
            );
        }
        // Prioritize search results over listing countries from region
        if(this.state.searchList.length!==0){
            return this.state.searchList.map((country)=>{
                // don't display add country button when country already selected
                if( !(this.props.selection.map(country => country.name)).includes(country.name) ){
                    return (
                        <div key={country.numericCode}>
                            <a style={{display: 'inline-block'}} onClick={() => this.onCountrySelect(country)} className="item">{country.name}</a>
                            <i className="plus icon" onClick={() => this.props.addCountry(country)}></i>
                        </div>
                    )
                } else {
                    return (
                        <div key={country.numericCode}>
                            <a style={{display: 'inline-block'}} onClick={() => this.onCountrySelect(country)} className="item">{country.name}</a>
                        </div>
                    )
                }
            })
        }
        // Lists countries from selected region
        return this.props.countryList.map((country)=>{
            if( !(this.props.selection.map(country => country.name)).includes(country.name) ){
                return (
                    <div key={country.numericCode}>
                        <a style={{display: 'inline-block'}} onClick={() => this.onCountrySelect(country)} className="item">{country.name}</a>
                        <i className="plus icon" onClick={() => this.props.addCountry(country)}></i>
                    </div>
                )
            } else {
                return (
                    <div key={country.numericCode}>
                        <a style={{display: 'inline-block'}} onClick={() => this.onCountrySelect(country)} className="item">{country.name}</a>
                    </div>
                )
            }
        })
    }
    
    render(){
        return (
            <div className="ui two column grid">
                <div className="column ui vertical menu">
                    {/* search */}
                    { this.props.region!=='' && 
                        <Search 
                            searchSelected={false} 
                            countries={this.props.countryList} 
                            buildSearchList={this.buildSearchList} 
                            onCountrySelect={this.onCountrySelect}
                        />
                    }
                    {this.renderList()}
                </div>
                <div className="column">
                    {/* country data */}
                    { this.state.country!=null && <Country selectedCountry={this.state.country} />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selection: state.selection,
    };
}

export default connect(mapStateToProps, {addCountry})(CountriesList);