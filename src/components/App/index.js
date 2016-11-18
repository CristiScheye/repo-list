import React, { Component, PropTypes } from 'react';
import logo from '../../images/GitHub-Mark-Light-64px.png';
import './index.css';
import RepoList from '../RepoList/'

// fetch polyfill for ie and safari
import 'whatwg-fetch';

class App extends Component {
  static defaultProps = {
    username: 'CristiScheye'
  };

  static propTypes = {
    username: PropTypes.string
  };

  constructor (props) {
    super(props);
    this.state = {
      error: null,
      repos: []
    }
  }

  componentDidMount () {
    fetch('https://api.github.com/users/cristischeye/repos')
    .then(res => {
      return res.json()
    })
    .then(json => {
      this.setState({repos: this.convertRepoData(json)})
    })
    .catch(error => {
      this.setState({error})
    });
  };

  convertRepoData (ghRes) {
    const convertedRepoData = ghRes.map(repo => {
      return {
        name: repo.name,
        description: repo.description,
        watchCount: repo.watchers_count,
        starCount: repo.stargazers_count,
        forkCount: repo.forks_count,
        url: repo.html_url
      }
    });

    return convertedRepoData.sort((a,b) => {
      return b.watchCount - a.watchCount;
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>All The GitHub Repositories</h1>
        </div>
        <div className="App-intro">
          <a
            className="App-gh-link"
            href={`https://github.com/${this.props.username}`}
            target="_blank">
            <img src={logo} alt="GitHub" className="App-gh-logo"/>
            <h2>{this.props.username}</h2>
          </a>
        </div>
        <div className="App-content">
          {
            this.state.error
            ? <p>Sorry, there was an error loading the GitHub repos for {this.props.username}</p>
            : <RepoList repoData={this.state.repos} />
          }
        </div>
      </div>
    );
  }
}

export default App;
