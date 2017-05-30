import React from 'react';
import {connect} from 'react-redux';
import {fetchReadMe} from '../actions/actions';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

function RepoCard (props) {

    function handleClick (e) {
        e.preventDefault();
        props.fetchReadMe(props.owner.login, props.name);
    }

    let readMe = <ReactMarkdown source={props.readMe}/>;
    if (props.loading) readMe = <p>Loading..</p>;
    let time = moment(props.updated_at).fromNow();
    return (
        <div className="repo-info">
            <div className='repo-name'><a href={props.html_url} target='blank'>{props.owner.login}/{props.name}</a></div>
            <div className='repo-desc'>{props.description}</div>
            <div className='repo-update'>Updated {time}</div>
            <div className='repo-lang'>{props.language}</div>
            <button type="button" id='repo-link'className="btn btn-primary btn-xs" data-toggle="modal" data-target="#exampleModalLong" onClick={handleClick}>Quick View</button>

            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div id="repo-details">
                                <p><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Watchers: {props.watchers_count}</p>
                                <p><span className="glyphicon glyphicon-star" aria-hidden="true"></span> Stars: {props.stargazers_count}</p>
                                <p><span className="glyphicon glyphicon-cloud-download" aria-hidden="true"></span> Forks: {props.forks_count}</p>
                                <p><span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Issues: {props.open_issues_count}</p>
                            </div>
                            <div id="readMe">{readMe}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function mapStateToProps (state) {
    return {
        loading: state.repo.loading,
        repos: state.search.byId,
        readMe: state.repo.readMe
    };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchReadMe: function (owner, name) {
        dispatch(fetchReadMe(owner, name));
    },
  };
}

RepoCard.propTypes = {
	fetchReadMe: React.PropTypes.func,
    owner: React.PropTypes.object,
    name: React.PropTypes.string,
    readMe: React.PropTypes.string,
    loading: React.PropTypes.bool,
    updated_at: React.PropTypes.string,
    html_url: React.PropTypes.string,
    description: React.PropTypes.string,
    language: React.PropTypes.string,
    watchers_count: React.PropTypes.number,
    stargazers_count: React.PropTypes.number,
    forks_count: React.PropTypes.number,
    open_issues_count: React.PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoCard);

