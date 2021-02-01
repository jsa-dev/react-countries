import React from 'react';
import RegionsList from './RegionsList';
import Selection from './Selection';

class App extends React.Component {
    render(){
        console.log('app rendered!');
        return (
            <div className="my-container" style={{margin: "10px"}}>
                <div className="ui grid">
                    <div className="ui row">
                        {/* regions */}
                        <div className="ten wide column">
                            <h3>Regions</h3>
                            <RegionsList />
                        </div>
                        {/* selection of countries */}
                        <div className="six wide column">
                            <h3>Selection of countries</h3>
                            <Selection />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;