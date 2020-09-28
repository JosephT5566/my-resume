import './App.scss';
import '../assets/fonts/jf-openhuninn-1.1/jf-openhuninn-1.1.ttf';

import React from 'react';
import { CurrentIndexStore } from '../contexts/IndexContext';

import Main from './Main';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <CurrentIndexStore>
                    <Navigation />
                    <div id="content">
                        <Main />
                        <Footer />
                    </div>
                </CurrentIndexStore>
            </div>
        );
    }
}

export default App;
