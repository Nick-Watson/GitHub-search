import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import RepoCard from './RepoCard';
import {fetchRepos} from '../actions/actions';


class ResultsPage extends Component {

    componentDidMount () {
        this.props.fetchRepos(this.props.params.searchTerm);
    }
    
    componentWillReceiveProps (nextProps) {
		if (nextProps.params.searchTerm !== this.props.params.searchTerm) {
			this.props.fetchRepos(nextProps.params.searchTerm);
		}
	}

    render () {
        if (this.props.loading) return (<div className='results-page-container'>Loading..</div>);
        if (this.props.results.length === 0) return (<div className='results-page-container'>No Results</div>);
        return (
            <div className='results-page-container'>
                <h2>Results</h2>
                {this.props.results.map((repo, i) => {
                    return <RepoCard key={i} {...repo}/>;
                })}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        loading: state.search.loading,
        results: state.search.results,
    };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchRepos: function (searchTerm) {
        dispatch(fetchRepos(searchTerm));
    }
  };
}

ResultsPage.propTypes = {
	fetchRepos: React.PropTypes.func,
    params: React.PropTypes.object,
    results: React.PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);


