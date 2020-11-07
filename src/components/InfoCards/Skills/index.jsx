import React from 'react';

import './styles.scss';

const projectSkill = () => {
    return (
        <div id="skillsContainer">
            <div className="content">
                <div className="section">
                    <h1>參與專案</h1>
                    <div className="list">
                        <li>光學式捲帶料件記數系統</li>
                        <li>Memory controller testing pattern 維護</li>
                        <li>Memory controller MpTool 開發</li>
                        <li>SoC system 開發與維護</li>
                        <li>AI on chip system 前期規劃</li>
                        <li>測試機台資料庫監控App開發</li>
                    </div>
                </div>
                <div className="section">
                    <h1>技能</h1>

                    <div className="list">
                        <li>影像處理演算法設計與應用</li>
                        <li>C#應用程式設計</li>
                        <li>韌體系統開發</li>
                        <li>網頁前端設計</li>
                        <li>資料庫管理與應用</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default projectSkill;
