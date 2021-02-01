import React from 'react';
import {connect} from 'react-redux';
import {removeCountry} from '../actions';
import Country from './Country';
import Search from './Search';

class Selection extends React.Component {
    state={ selectedCountry: null, searchList: []};

    buildSearchList = (filteredResults) => {
        this.setState({searchList: filteredResults})
    }

    onCountrySelect = (country) => {
        this.setState({selectedCountry: country});
    }
    
    selectList() {
        if(this.props.selection.length===0){
            return <div>No countries selected yet.</div>;
        } 
        // display search filtered coutries
        if (this.state.searchList.length!==0){
            return this.state.searchList.map((country)=>{
                return (
                    <div key={country.numericCode}>
                        <a style={{display: 'inline-block'}} onClick={() => this.onCountrySelect(country)} className="item">{country.name}</a>
                        {/* <i className="delete icon" onClick={() => this.props.removeCountry(country)}></i> */}
                    </div>
                );
            }); 
        }
        // display selection
        else {
            return this.props.selection.map((country)=>{
                return (
                    <div key={country.numericCode}>
                        <a style={{display: 'inline-block'}} onClick={() => this.onCountrySelect(country)} className="item">{country.name}</a>
                        <i className="delete icon" onClick={() => this.props.removeCountry(country)}></i>
                    </div>
                );
            });
        }
    }

    render(){
        return (
            <div className="ui two column centered grid">
                <div className="ui vertical menu column">
                    { this.props.selection.length!==0 && 
                        <Search 
                            searchSelected={true} 
                            buildSearchList={this.buildSearchList} 
                            onCountrySelect={this.onCountrySelect}
                        /> 
                    }
                    {this.selectList()}
                </div>
                <div className="column">
                    { this.state.selectedCountry!==null && <Country selectedCountry={this.state.selectedCountry}/>}
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

export default connect(mapStateToProps, {
    removeCountry
})(Selection);