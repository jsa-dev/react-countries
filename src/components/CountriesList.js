import React from 'react';
import {connect} from 'react-redux';
import {addCountry, selectCountry} from '../actions';

class CountriesList extends React.Component{
    // so users can't add the same country several times
    beforeAdd = (country) => {
        if (!this.props.selection.includes(country)){
            this.props.addCountry(country);
        }
    }

    renderList(){
        if (this.props.countryList.length==0){
            return(
                <div className="ui vertical menu">
                    <a className="item">Please select a region first.</a>
                </div>
            );
        }
        if(this.props.searchCountryList.length!=0){
            // Prioritize search results over listing countries from region
            return this.props.searchCountryList.map((country)=>{
                return (
                    <div>
                        <a style={{display: 'inline-block'}} onClick={() => this.props.selectCountry(country)} className="item">{country.name}</a>
                        <i class="plus icon" onClick={() => this.beforeAdd(country)}></i>
                    </div>
                )
            })
        } 
        return this.props.countryList.map((country)=>{
            return (
                <div>
                    <a style={{display: 'inline-block'}} onClick={() => this.props.selectCountry(country)} className="item">{country.name}</a>
                    <i class="plus icon" onClick={() => this.beforeAdd(country)}></i>
                </div>
            )
        })
    }
    
    render(){
        return (
            <div className="ui vertical menu">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selection: state.selection,
        searchCountryList: state.searchCountryList,
        countryList: state.countryList,
    };
}

export default connect(mapStateToProps, {
    addCountry,
    selectCountry
})(CountriesList);