import React from "react";

import Name from "./Name";

class Comment extends React.Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <Name
            deleteComment={this.props.deleteComment}
            comment={this.props.comment}
          />
        </div>
      </div>
    );
  }
}

export default Comment;
