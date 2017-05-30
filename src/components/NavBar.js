import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {updateTextInput} from '../actions/actions';

function NavBar (props) {
    return (
        <nav className="navbar navbar-inverse navbar-static-top w-100">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">GitHub Search</a>
                </div>
                <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Repository Name" onChange={handleChange} value={props.textInput}/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={handleSubmit}>
                        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </button>
                </form>
            </div>
        </nav>
    );

    function handleChange (e) {
        props.updateTextInput(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        if (props.textInput) {
            const searchTerm = props.textInput.replace('.', '-');
            browserHistory.push(`/${searchTerm}`);
        }
    }
}

function mapStateToProps (state) {
    return {
        textInput: state.search.textInput
    };
}

function mapDispatchToProps (dispatch) {
  return {
    updateTextInput: function (e) {
        dispatch(updateTextInput(e));
    }
  };
}

NavBar.propTypes = {
	textInput: React.PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
