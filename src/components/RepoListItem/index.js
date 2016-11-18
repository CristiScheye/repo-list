import React, { Component, PropTypes } from 'react';
import MetricDisplay from '../MetricDisplay/'
import './index.css';

class RepoListItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    watchCount: PropTypes.number.isRequired,
    starCount: PropTypes.number.isRequired,
    forkCount: PropTypes.number.isRequired
  };

  render() {
    return (
      <li className="RepoListItem">
        <div>
          <a
            className="RepoListItem-name"
            href={this.props.url}
            target="_blank">
              {this.props.name}
          </a>
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
