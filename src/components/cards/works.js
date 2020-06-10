import './works.css';

import React from 'react';
import { CSSTransition } from 'react-transition-group';

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        return (
            <div id="worksContainer">
                <div className="content">
                    <h1>工作經歷</h1>
                    <p>
                        <i className="circle icon"></i>
                        <span
                            onClick={this.handleClick} // or we can use arrow funcion directly
                            style={{ fontSize: '22px' }}
                        >
                            憶正科技 (MemoRight), 應用工程師, Oct 2016 ~ Mar 2017
                            <CSSTransition
                                classNames="memoRight cardTransition"
                                in={this.state.visible}
                                timeout={300}
                                unmountOnExit
                            >
                                <div className="transitionPanel">
                                    Memory controller test with Magnum system
                                </div>
                            </CSSTransition>
                        </span>
                    </p>
                    <p>
                        <i className="circle icon"></i>
                        <span
                            onClick={this.handleClick}
                            style={{ fontSize: '22px' }}
                        >
                            晶兆科技 (Big-Inno), 應用工程師, May 2017 ~ Sep 2018
                            <CSSTransition
                                classNames="biginno cardTransition"
                                in={this.state.visible}
                                timeout={300}
                                unmountOnExit
                            >
                                <div className="transitionPanel">
                                    Memory controller test with Magnum system 
                                    <br/>
                                    MP application development in C#
                                </div>
                            </CSSTransition>
                        </span>
                    </p>
                    <p>
                        <i className="circle icon"></i>
                        <span
                            onClick={this.handleClick}
                            style={{ fontSize: '22px' }}
                        >
                            富智銓科技, 韌體工程師, Sep 2018 ~ Mar 2020
                            <CSSTransition
                                classNames="socle cardTransition"
                                in={this.state.visible}
                                timeout={300}
                                unmountOnExit
                            >
                                <div className="transitionPanel">
                                    Driver development
                                    <br/>
                                    Driver unit test with Ceedling
                                    <br/>
                                    Embedded system maintaining
                                </div>
                            </CSSTransition>
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Works;
