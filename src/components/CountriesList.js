import React from 'react';
import {connect} from 'react-redux';
import {addCountry} from '../actions';
import Search from './Search';
import Country from './Country';

class CountriesList extends React.Component{
    state={ country: null, searchList: [] };

    buildSearchList = (filteredResults) => {
        this.setState({searchList: filteredResults})
    }

    beforeAdd = (country) => {
        if (!this.props.selection.includes(country)){
            this.props.addCountry(country);
        }
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
                return (
                    <div>
                        <a style={{display: 'inline-block'}} onClick={() => this.onCountrySelect(country)} className="item">{country.name}</a>
                        <i class="plus icon" onClick={() => this.beforeAdd(country)}></i>
                    </div>
                )
            })
        }
        // Lists countries from selected region
        return this.props.countryList.map((country)=>{
            return (
                <div>
                    <a style={{display: 'inline-block'}} onClick={() => this.onCountrySelect(country)} className="item">{country.name}</a>
                    <i class="plus icon" onClick={() => this.beforeAdd(country)}></i>
                </div>
            )
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