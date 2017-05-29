import React from 'react';
import moment from 'moment';

function RepoCard (props) {

    let time = moment(props.updated_at).fromNow();
    return (
        <div className="repo-info">
            <div className='repo-name'>{props.owner.login}/{props.name}</div>
            <div className='repo-desc'>{props.description}</div>
            <div className='repo-update'>Updated {time}</div>
            <div className='repo-lang'>{props.language}</div>
            <div><a href={props.html_url} target='blank'>GitHub Link</a></div>
        </div>
    );
}

export default RepoCard;
