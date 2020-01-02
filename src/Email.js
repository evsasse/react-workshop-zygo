import React from "react";

import Body from "./Body";

class Email extends React.Component {
  state = {
    loading: true,
    setTimeoutId: null
  };

  componentDidMount() {
    const setTimeoutId = setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);

    this.setState({ setTimeoutId });
  }

  componentWillUnmount() {
    const { setTimeoutId } = this.state;
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }
  }

  render() {
    return (
      <div>
        <div className="small text-muted">{this.props.comment.email}</div>
        {this.state.loading ? (
          <i className="fas fa-atom fa-spin" />
        ) : (
          <Body
            deleteComment={this.props.deleteComment}
            comment={this.props.comment}
          />
        )}
      </div>
    );
  }
}

export default Email;
