import React, { Component, PropTypes } from 'react';
import MetricDisplay from '../MetricDisplay/'
import './index.css';

class RepoListItem extends Component {
  static defaultProps = {
    name: 'My Favorite Repo',
    description: 'Some beautiful code',
    url: 'http://www.lipsum.com/',
    watchCount: 10,
    starCount: 123,
    forkCount: 9
  };

  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    watchCount: PropTypes.number,
    starCount: PropTypes.number,
    forkCount: PropTypes.number
  };

  render() {
    return (
      <li className="RepoListItem">
        <div>
          <a className="RepoListItem-name" href={this.props.url} >{this.props.name}</a>
          <p className="RepoListItem-description">{this.props.description}</p>
        </div>
        <div className="RepoListItem-metrics">
          <MetricDisplay icon="eye" value={this.props.watchCount} />
          <MetricDisplay icon="star" value={this.props.starCount} />
          <MetricDisplay icon="fork" value={this.props.forkCount} />
        </div>
      </li>
    );
  }
}


export default RepoListItem;
