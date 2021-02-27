import React, { useState } from 'react';
import { ClickAwayListener } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './education.scss';

export default function Education() {
    const [expanded, setExpanded] = useState('');

    const handleClickAwayPanel1 = () => {
        setExpanded((prev) => {
            return prev === 'panel1' ? false : prev;
        });
    };

    const handleClickAwayPanel2 = () => {
        setExpanded((prev) => {
            return prev === 'panel2' ? false : prev;
        });
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div id="educationContainer">
            <h1>學歷</h1>
            <ClickAwayListener onClickAway={handleClickAwayPanel1}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary className="accordionSummary" expandIcon={<ExpandMoreIcon fontSize="large" />}>
                        <div className="accordionTitle">國立中興大學 (NCHU), 碩士, 2014 ~ 2016</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="transitionPanel">
                            <div className="title">
                                <h3>電機所 · 系統與控制組</h3>
                                <h3>指導教授：許舜斌</h3>
                            </div>
                            <h4>論文：光學式捲帶料件記數系統</h4>
                            <p className="subtitle">
                                在設計的測試環境上，利用清晰的捲帶盤影像，透過初步的影像處理運算，再配合設計的演算法實現元件的估算與記數。
                            </p>
                            <p>孰悉影像處理演算法</p>
                            <p>透過 Matlab 驗證，再轉至 C++ 開發</p>
                            <p>透過 Qt 建立簡單使用者介面</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </ClickAwayListener>
            <ClickAwayListener onClickAway={handleClickAwayPanel2}>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary className="accordionSummary" expandIcon={<ExpandMoreIcon fontSize="large" />}>
                        <div className="accordionTitle">國立嘉義大學 (NCYU), 學士, 2010 ~ 2014</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="transitionPanel">
                            <h3>電機工程學系</h3>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </ClickAwayListener>
        </div>
    );
}
