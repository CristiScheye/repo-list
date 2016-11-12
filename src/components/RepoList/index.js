import React, { Component, PropTypes } from 'react';
import RepoListItem from '../RepoListItem/'
import './index.css';

class RepoList extends Component {
  static defaultProps = {
    repoData: [],
    ListCell: RepoListItem
  };

  static propTypes = {
    repoData: PropTypes.array,
    ListCell: PropTypes.element
  };

  render() {
    return (
      <ul className="RepoList">
        {
          this.props.repoData.map((data) => {
            return React.createElement(this.props.ListCell, data)
          })
        }
      </ul>
    );
  }
}


export default RepoList;
