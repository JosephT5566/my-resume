import './App.scss';
import '../assets/fonts/jf-openhuninn-1.1/jf-openhuninn-1.1.ttf';

import React from 'react';
import { CurrentIndexStore } from '../contexts/IndexContext';

import Main from './Main';
import Navigation from './Navigation';

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <CurrentIndexStore>
                    <Navigation />
                    <Main />
                </CurrentIndexStore>
            </div>
        );
    }
}

export default App;
