import React from 'react';

class ResumeCard extends React.Component {
    render() {
        return (
            <div className="ui segment">
                {this.props.children}
            </div>
        );
    }
}

export default ResumeCard;