import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ClickAwayListener } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './works.scss';

export default function Works() {
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

    const handleClickAwayPanel3 = () => {
        setExpanded((prev) => {
            return prev === 'panel3' ? false : prev;
        });
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div id="worksContainer">
            <h1>工作經歷</h1>

            <ClickAwayListener onClickAway={handleClickAwayPanel1}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary className="accordionSummary" expandIcon={<ExpandMoreIcon fontSize="large" />}>
                        <div className="accordionTitle">憶正科技 (MemoRight), 應用工程師, Oct 2016 ~ Mar 2017</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="transitionPanel">
                            <p>孰悉 eMMC Spec</p>
                            <p>在 MAGNUM system 上開發及維護測試記憶體控制器的testing pattern (C)</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </ClickAwayListener>
            <ClickAwayListener onClickAway={handleClickAwayPanel2}>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary className="accordionSummary" expandIcon={<ExpandMoreIcon fontSize="large" />}>
                        <div className="accordionTitle">晶兆科技 (Big-Inno), 應用工程師, May 2017 ~ Sep 2018</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="transitionPanel">
                            <p>在 MAGNUM system 上開發及維護測試記憶體控制器的testing pattern (C)</p>
                            <p>協助開發 eMMC MP Tool (C#)</p>
                            <p>在 Linux 系統上撰寫 shell script 設計開發工具</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </ClickAwayListener>
            <ClickAwayListener onClickAway={handleClickAwayPanel3}>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary className="accordionSummary" expandIcon={<ExpandMoreIcon fontSize="large" />}>
                        <div className="accordionTitle">鴻海, 韌體工程師, Sep 2018 ~ Mar 2020</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="transitionPanel">
                            <p>用 TDD 的方式開發 Unit test 來維護 SoC driver</p>
                            <p>參與韌體開發流程</p>
                            <p>Embedded system driver 的開發與維護</p>
                            <p>孰悉 ARM Cortex-m4 Spec 以及用在 Embedded system 上的指令與特性</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </ClickAwayListener>
        </div>
    );
}
