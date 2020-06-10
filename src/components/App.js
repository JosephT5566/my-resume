import './App.css';
import '../assets/fonts/jf-openhuninn-1.1/jf-openhuninn-1.1.ttf';

import React from 'react';
import ReactDom from 'react-dom';

import ResumeCard from './ResumeCard';
import PersonalInfo from './cards/personalInfo';
import Expertise from './cards/expertise';
import Works from './cards/works';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <ResumeCard>
                    <PersonalInfo />
                </ResumeCard>
                <ResumeCard>
                    <Expertise />
                </ResumeCard>
                <ResumeCard>
                    <Works />
                </ResumeCard>
            </div>
        );
    }
}

export default App;
