import React from 'react';

import PersonalInfo from './cards/personalInfo';
import Expertise from './cards/expertise';
import Works from './cards/works';

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
                    <Expertise/>
                </ResumeCard>
                <ResumeCard>
                    <Works/>
                </ResumeCard>
            </div>
        );
    }
}

export default ResumeCardList;
