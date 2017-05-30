import React from 'react';
import {Component} from 'react';
import NavBar from './NavBar';
import '../css/main.css';

class App extends Component {
    render () {
        let page = this.props.children;
        if (!this.props.children) page = <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="no results" id='home-pic'/>;
        return (
            <div className='app-containter'>
                <NavBar/>
                {page}
            </div>
        );
    }
}

App.propTypes = {
	children: React.PropTypes.object
};
export default App;