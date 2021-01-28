import React from 'react';
import {connect} from 'react-redux';
import {removeCountry, selectCountry} from '../actions';

class Selection extends React.Component {
    selectList() {
        if(this.props.selection.length==0){
            return <div>No countries selected yet.</div>;
        } else {
        return this.props.selection.map((country)=>{
            return (
                <div>
                    <a style={{display: 'inline-block'}} onClick={() => this.props.selectCountry(country)} className="item">{country.name}</a>
                    <i class="delete icon" onClick={() => this.props.removeCountry(country)}></i>
                </div>
            );
        });
    }
    }

    render(){
        return (
            <div className="ui vertical menu">
                {this.selectList()}
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
    removeCountry,
    selectCountry
})(Selection);