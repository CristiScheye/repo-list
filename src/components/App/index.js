import React, { Component } from 'react';
import logo from '../../images/GitHub-Mark-Light-64px.png';
import './index.css';
import RepoList from '../RepoList/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>All The GitHub Repositories</h1>
        </div>
        <div className="App-intro">
          <a  className="App-gh-link" href="https://github.com/CristiScheye" target="_blank">
            <img src={logo} alt="GitHub" className="App-gh-logo"/>
            <h2>CristiScheye</h2>
          </a>
        </div>
        <div className="App-content">
          <RepoList repoData={[{}]}/>
        </div>
      </div>
    );
  }
}

export default App;
