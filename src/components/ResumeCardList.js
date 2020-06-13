import React from 'react';

import PersonalInfo from './cards/personalInfo';
import Expertise from './cards/expertise';
import Works from './cards/works';
import Education from './cards/education';
import Intro from './cards/intro';
import Collection from './cards/collection';
import ProjectSkill from './cards/projectSkill';

class ResumeCard extends React.Component {
    render() {
        return <div className="ui segment">{this.props.children}</div>;
    }
}

class ResumeCardList extends React.Component {
    render() {
        return (
            <div>
                <ResumeCard>
                    <PersonalInfo/>
                </ResumeCard>
                <ResumeCard>
                    <Works/>
                </ResumeCard>
                <ResumeCard>
                    <Education/>
                </ResumeCard>
                <ResumeCard>
                    <Expertise/>
                </ResumeCard>
                <ResumeCard>
                    <ProjectSkill/>
                </ResumeCard>
                <ResumeCard>
                    <Intro/>
                </ResumeCard>
                <ResumeCard>
                    <Collection/>
                </ResumeCard>
            </div>
        );
    }
}

export default ResumeCardList;
