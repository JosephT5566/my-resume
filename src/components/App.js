import './App.css';
import '../assets/fonts/jf-openhuninn-1.1/jf-openhuninn-1.1.ttf';

import React from 'react';

import ResumeCardList from './ResumeCardList';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <ResumeCardList/>
            </div>
        );
    }
}

export default App;
