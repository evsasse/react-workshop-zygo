import React from 'react';

import Name from './Name';

class Comment extends React.Component {
  render() {
    return <li><Name comment={ this.props.comment } /></li>;
  }
}

export default Comment;
