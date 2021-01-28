import React from 'react';
import restcountries from '../apis/restcountries';
import {connect} from 'react-redux';
import {setRegion, setCountryList, updateCountryList} from '../actions';

class RegionsList extends React.Component{
    onRegionSelect = async (region) => {
        if (this.props.region!==region){
            const response = await restcountries.get(`/region/${region}`);
            this.props.setRegion(region);
            this.props.setCountryList(response.data);
            // stops CountriesList from continuing to show filtered results on region change
            this.props.updateCountryList([]);
        }
    }

    render(){
        return (
            <div className="ui vertical menu">
                <a onClick={() => this.onRegionSelect('africa')} className="item">Africa</a>
                <a onClick={() => this.onRegionSelect('americas')}className="item" >Americas</a>
                <a onClick={() => this.onRegionSelect('asia')}className="item" >Asia</a>
                <a onClick={() => this.onRegionSelect('europe')}className="item" >Europe</a>
                <a onClick={() => this.onRegionSelect('oceania')}className="item" >Oceania</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countryList: state.countryList,
        region: state.region,
        searchCountryList: state.searchCountryList
    };
}

export default connect(mapStateToProps, {
    setRegion,
    setCountryList,
    updateCountryList
})(RegionsList);