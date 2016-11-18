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
          this.props.repoData.map((data, idx) => {
            return React.createElement(this.props.ListCell,
              Object.assign({key: `RepoListItem-${idx}`}, data))
          })
        }
      </ul>
    );
  }
}


export default RepoList;
