import React from 'react';
import {Component} from 'react';
import NavBar from './NavBar';


class App extends Component {
    render () {
        return (
            <div className='app-containter'>
                <NavBar/>
                GitHub Search
            </div>
        );
    }
}

export default App;