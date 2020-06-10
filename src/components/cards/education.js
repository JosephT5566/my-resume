import './education.css';

import React from 'react';
import { CSSTransition } from 'react-transition-group';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleEdu1: false,
            visibleEdu2: false,
        };
        this.handleClickEdu1 = this.handleClickEdu1.bind(this);
        this.handleClickEdu2 = this.handleClickEdu2.bind(this);
    }

    handleClickEdu1() {
        this.setState({ visibleEdu1: !this.state.visibleEdu1 });
        this.setState({ visibleEdu2: false });
    }

    handleClickEdu2() {
        this.setState({ visibleEdu1: false });
        this.setState({ visibleEdu2: !this.state.visibleEdu2 });
    }

    render() {
        return (
            <div id="educationContainer">
                <div className="content">
                    <h1>學歷</h1>
                    <p>
                        <i className="circle icon"></i>
                        <span
                            onClick={this.handleClickEdu1} // or we can use arrow funcion directly
                            style={{ fontSize: '22px' }}
                        >
                            國立中興大學 (NCHU), 碩士, 2014 ~ 2016
                            <CSSTransition
                                classNames="nchu cardTransition"
                                in={this.state.visibleEdu1}
                                timeout={300}
                                unmountOnExit
                            >
                                <div className="transitionPanel">
                                    電機工程 · 系統與控制
                                    <br />
                                    論文：光學式捲帶料件記數系統 | 指導教授：許舜斌
                                    <br />
                                    利用清晰的影像，透過初步的影像處理運算，再配合設計的演算法、以及設計的測試環境實現元件的估算與記數。
                                </div>
                            </CSSTransition>
                        </span>
                    </p>
                    <p>
                        <i className="circle icon"></i>
                        <span
                            onClick={this.handleClickEdu2}
                            style={{ fontSize: '22px' }}
                        >
                            國立嘉義大學 (NCYU), 學士, 2010 ~ 2014
                            <CSSTransition
                                classNames="ncyu cardTransition"
                                in={this.state.visibleEdu2}
                                timeout={300}
                                unmountOnExit
                            >
                                <div className="transitionPanel">
                                    電機工程
                                </div>
                            </CSSTransition>
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Education;
