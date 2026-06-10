import './App.scss';
import '../assets/fonts/jf-openhuninn-1.1/jf-openhuninn-1.1.ttf';

import React from 'react';
import { CurrentIndexStore } from '../contexts/IndexContext';
import { PositionStore } from '../contexts/PositionContext';

import Main from './Main';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <PositionStore>
                    <CurrentIndexStore>
                        <Navigation />
                        <div id="content">
                            <Main />
                            <Footer />
                        </div>
                    </CurrentIndexStore>
                </PositionStore>
            </div>
        );
    }
}

export default App;
