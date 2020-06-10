import './works.css';

import React from 'react';
import { CSSTransition } from 'react-transition-group';

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleWork1: false,
            visibleWork2: false,
            visibleWork3: false
        };
        this.handleClickWork1 = this.handleClickWork1.bind(this);
        this.handleClickWork2 = this.handleClickWork2.bind(this);
        this.handleClickWork3 = this.handleClickWork3.bind(this);
    }

    handleClickWork1() {
        this.setState({ visibleWork1: !this.state.visibleWork1 });
        this.setState({ visibleWork2: false });
        this.setState({ visibleWork3: false });
    }

    handleClickWork2() {
        this.setState({ visibleWork1: false });
        this.setState({ visibleWork2: !this.state.visibleWork2 });
        this.setState({ visibleWork3: false });
    }

    handleClickWork3() {
        this.setState({ visibleWork1: false });
        this.setState({ visibleWork2: false });
        this.setState({ visibleWork3: !this.state.visibleWork3 });
    }

    render() {
        return (
            <div id="worksContainer">
                <div className="content">
                    <h1>工作經歷</h1>
                    <p>
                        <i className="circle icon"></i>
                        <span
                            onClick={this.handleClickWork1} // or we can use arrow funcion directly
                            style={{ fontSize: '22px' }}
                        >
                            憶正科技 (MemoRight), 應用工程師, Oct 2016 ~ Mar 2017
                            <CSSTransition
                                classNames="memoRight cardTransition"
                                in={this.state.visibleWork1}
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
                            onClick={this.handleClickWork2}
                            style={{ fontSize: '22px' }}
                        >
                            晶兆科技 (Big-Inno), 應用工程師, May 2017 ~ Sep 2018
                            <CSSTransition
                                classNames="biginno cardTransition"
                                in={this.state.visibleWork2}
                                timeout={300}
                                unmountOnExit
                            >
                                <div className="transitionPanel">
                                    Memory controller test with Magnum system
                                    <br />
                                    MP application development in C#
                                </div>
                            </CSSTransition>
                        </span>
                    </p>
                    <p>
                        <i className="circle icon"></i>
                        <span
                            onClick={this.handleClickWork3}
                            style={{ fontSize: '22px' }}
                        >
                            鴻海集團, 韌體工程師, Sep 2018 ~ Mar 2020
                            <CSSTransition
                                classNames="foxconn cardTransition"
                                in={this.state.visibleWork3}
                                timeout={300}
                                unmountOnExit
                            >
                                <div className="transitionPanel">
                                    Driver development
                                    <br />
                                    Driver unit test with Ceedling
                                    <br />
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
