import './works.css';

import React from 'react';
import { ReactTransitionGroup, ReactCssTransitionGroup } from 'react-transition-group';

const works = () => {
    return (
        <div id="worksContainer">
            <div className="content">
                <h1>工作經歷</h1>
                <p>
                    <i className="circle icon"></i>
                    <span style={{ fontSize: '22px' }}>
                        憶正科技 (MemoRight), 應用工程師, Oct 2016 ~ Mar 2017
                    </span>
                </p>
                <p>
                    <i className="circle icon"></i>
                    <span style={{ fontSize: '22px' }}>
                        晶兆科技 (Big-Inno), 應用工程師, May 2017 ~ Sep 2018
                    </span>
                </p>
                <p>
                    <i className="circle icon"></i>
                    <span style={{ fontSize: '22px' }}>
                        富智銓科技, 韌體工程師, Sep 2018 ~ Mar 2020
                    </span>
                </p>
            </div>
        </div>
    );
};

export default works;
