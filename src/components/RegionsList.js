import React from 'react';
import restcountries from '../apis/restcountries';
import CountriesList from './CountriesList';

class RegionsList extends React.Component{
    state={ region: '', countryList: [] };

    onRegionSelect = async (region) => {
        if (this.state.region!==region){
            const response = await restcountries.get(`/region/${region}`);
            this.setState({ region: region, countryList: response.data});

        }
    }

    render(){
        return (
            <div className="ui grid">
                <div className="one wide ui vertical menu">
                    <a onClick={() => this.onRegionSelect('africa')} className="item">Africa</a>
                    <a onClick={() => this.onRegionSelect('americas')}className="item" >Americas</a>
                    <a onClick={() => this.onRegionSelect('asia')}className="item" >Asia</a>
                    <a onClick={() => this.onRegionSelect('europe')}className="item" >Europe</a>
                    <a onClick={() => this.onRegionSelect('oceania')}className="item" >Oceania</a>
                </div>
                <div className="ten wide column">
                    {/* country list */}
                    {this.state.region!=='' && 
                        (
                        <div className="">
                            <CountriesList region={this.state.region} countryList={this.state.countryList}/>
                        </div>
                        ) 
                    }
                </div>
            </div>
        );
    }
}

export default RegionsList;