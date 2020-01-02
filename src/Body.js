import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <div>
        { this.props.comment.body }
      </div>
    );
  }
}

export default Body;
