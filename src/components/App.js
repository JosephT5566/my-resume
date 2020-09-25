import './App.scss';
import '../assets/fonts/jf-openhuninn-1.1/jf-openhuninn-1.1.ttf';

import React from 'react';

import Main from './Main';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <>
                <div id="app">
                    <Navigation />
                    <div id="content">
                        <Main />
                        <Footer />
                    </div>
                </div>
            </>
        );
    }
}

export default App;
