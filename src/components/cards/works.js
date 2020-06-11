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
                <div className="comment">
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
                                    <li>孰悉 eMMC Spec</li>
                                    <li>在 MAGNUM system 上開發及維護測試記憶體控制器的testing pattern (C)</li>
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
                                    <li>在 MAGNUM system 上開發及維護測試記憶體控制器的testing pattern (C)</li>
                                    <li>協助開發 eMMC MP Tool (C#)</li>
                                    <li>在 Linux 系統上撰寫 shell script 設計開發工具</li>
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
                            鴻海, 韌體工程師, Sep 2018 ~ Mar 2020
                            <CSSTransition
                                classNames="foxconn cardTransition"
                                in={this.state.visibleWork3}
                                timeout={300}
                                unmountOnExit
                            >
                                <div className="transitionPanel">
                                    <li>用 TDD 的方式開發 Unit test 來維護 SoC driver</li>
                                    <li>參與韌體開發流程</li>
                                    <li>Embedded system driver 的開發與維護</li>
                                    <li>孰悉 ARM Cortex-m4 Spec 以及用在 Embedded system 上的指令與特性</li>
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
