import React, { Component } from 'react';
import Eye from 'react-icons/lib/go/eye';
import Star from 'react-icons/lib/go/star';
import RepoForked from 'react-icons/lib/go/repo-forked';
import './index.css';

const icons = {
  eye: Eye,
  star: Star,
  fork: RepoForked
}

class MetricDisplay extends Component {
  static defaultProps = {
    value: 0
  };

  static propTypes = {
    icon: React.PropTypes.oneOf(['eye', 'star', 'fork']),
    value: 0
  };

  render() {
    return (
      <div className="MetricDisplay">
        <span className="MetricDisplay-icon">{React.createElement(icons[this.props.icon])}</span>
        <span className="MetricDisplay-value">{this.props.value}</span>
      </div>
    );
  }
}


export default MetricDisplay;
