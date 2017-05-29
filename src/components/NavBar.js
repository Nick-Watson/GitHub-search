import React from 'react';

function NavBar () {
    return (
        <nav className="navbar navbar-inverse navbar-static-top w-100">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">GitHub Search</a>
                </div>
                <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Repository Name"/>
                    </div>
                    <button type="submit" className="btn btn-default">
                        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;