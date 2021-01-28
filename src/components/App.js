import React from 'react';
import RegionsList from './RegionsList';
import CountriesList from './CountriesList';
import Country from './Country';
import Search from './Search';
import Selection from './Selection';
import {connect} from 'react-redux';

class App extends React.Component {
    render(){
        console.log('app was rendered');
        return (
            <div className="my-container" style={ {margin: "10px 10px 10px 10px"} }>
                <div className="ui grid">
                    <div className="ui row">
                        {/* regions */}
                        <div className="three wide column">
                            <h3>Regions</h3>
                            <RegionsList />
                            {/* search in region */}
                            { this.props.region!=='select region to search' && <Search searchSelected={false} /> }
                        </div>
                        {/* country list */}
                        {this.props.region!=='select region to search' && 
                            (
                                <div className="four wide column">
                                    <h3>Countries</h3>
                                    <CountriesList />
                                </div>
                            ) 
                        }
                        {/* country data */}
                        {this.props.country!=null &&
                            (
                                <div className="five wide column">
                                    <h3>Country Data</h3>
                                    <Country selectedCountry={this.props.country} />
                                </div>
                            )
                        }
                        {/* selected countries */}
                        <div className="four wide column">
                            <h3>Selection of countries</h3>
                            <Selection />
                            {/* search in selected */}
                            { this.props.selection.length!==0 && <Search searchSelected={true} /> }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        country: state.country,
        region: state.region,
        selection: state.selection
    };
}

export default connect(mapStateToProps)(App);