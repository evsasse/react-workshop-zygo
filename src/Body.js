import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <p className="mb-0 mt-3">
        { this.props.comment.body }

        <button
          onClick={ () => this.props.deleteComment(this.props.comment.id) }
          className="btn btn-sm btn-outline-danger trash"
        >
          <i className="far fa-trash-alt" />
        </button>
      </p>
    );
  }
}

export default Body;
