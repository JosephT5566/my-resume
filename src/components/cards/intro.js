import React from 'react';

const intro = () => {
    return (
        <div id="introContainer">
            <div className="comment" style={{ display: 'flex' }}>
                <div
                    className="content intro"
                    style={{ width: '66%', padding: '0 60px 0 0' }}
                >
                    <h1>簡介</h1>
                    我是Joseph曾俊霖，主要經歷為軟/韌體開發，擅長有邏輯地分析與解決問題，喜歡嘗試新的技術與方法。
                    <br />
                    參與過嵌入式系統產品的規劃與開發，在工作上多使用C開發維護driver，在解決問題的過程中，更深入了解系統底層的工作方式。
                    曾經使用C#來開發測試APP，而從中學到的經驗，幫助我在工作之餘與朋友合力開發小型APP。
                    <br />
                    團隊在工作上以Scrum的方式進行，因此十分熟悉Scrum的敏捷開發流程，在開發中也學習到了TDD的開發習慣以維持往後的程式運作品質。
                    <br />
                    在職期間開始自學前端技術，除了架設自己的作品外，也會參與Github上的project。
                    <br />
                    期待往後自己的技術更精進，並持續開發出有趣的作品
                </div>
                <div className="content interest" style={{ width: '33%' }}>
                    <h1>興趣</h1>
                    <li>旅遊</li>
                    <li>攝影</li>
                    <li>滑雪</li>
                    <li>潛水 (OW / AOW)</li>
                    <li>健身</li>
                </div>
            </div>
        </div>
    );
};

export default intro;
