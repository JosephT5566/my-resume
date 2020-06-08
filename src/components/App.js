import React from 'react';
import ReactDom from 'react-dom';

import ResumeCard from './ResumeCard';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <ResumeCard/>
            </div>
        );
    }
}

export default App;