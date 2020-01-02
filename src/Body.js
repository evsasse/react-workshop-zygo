import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <p className="mb-0 mt-3">
        { this.props.comment.body }
        <button className="btn btn-sm btn-outline-danger trash">
          <i className="far fa-trash-alt" />
        </button>
      </p>
    );
  }
}

export default Body;
