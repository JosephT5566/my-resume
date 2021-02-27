import React from 'react';

import './styles.scss';

const projectSkill = () => {
    return (
        <div id="skillsContainer">
            <h1>技能</h1>
            <div className="content">
                <div className="section">
                    <h2>參與專案</h2>
                    <div className="list">
                        <p>光學式捲帶料件記數系統</p>
                        <p>Memory controller testing pattern 維護</p>
                        <p>Memory controller MpTool 開發</p>
                        <p>SoC system 開發與維護</p>
                        <p>AI on chip system 前期規劃</p>
                        <p>測試機台資料庫監控App開發</p>
                    </div>
                </div>
                <div className="section">
                    <h2>能力</h2>
                    <div className="list">
                        <p>影像處理演算法設計與應用</p>
                        <p>C#應用程式設計</p>
                        <p>韌體系統開發</p>
                        <p>網頁前端設計</p>
                        <p>資料庫管理與應用</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default projectSkill;
