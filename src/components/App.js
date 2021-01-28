import React from 'react';
import RegionsList from './RegionsList';
import CountriesList from './CountriesList';
import Country from './Country';
import Search from './Search';
import Selection from './Selection';
import {connect} from 'react-redux';

class App extends React.Component {
    render(){
        return (
            <div className="my-container" style={ {margin: "10px 10px 10px 10px"} }>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="three wide column">
                            <h3>Regions</h3>
                            <RegionsList />
                            <Search searchSelected={false} />
                        </div>
                        <div className="four wide column">
                            <h3>Countries</h3>
                            <CountriesList />
                        </div>
                        <div className="five wide column">
                            <h3>Country Data</h3>
                            <Country selectedCountry={this.props.country} />
                        </div>

                        <div className="four wide column">
                            <h3>Selection of countries</h3>
                            <Selection />
                            <Search searchSelected={true} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        country: state.country
    };
}

export default connect(mapStateToProps)(App);