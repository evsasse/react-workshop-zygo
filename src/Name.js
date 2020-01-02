import React from 'react';

import Email from './Email';

class Name extends React.Component {
  state = {
    loading: true,
    setTimeoutId: null,
  };

  componentDidMount() {
    const setTimeoutId = setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);

    this.setState({ setTimeoutId });
  }

  componentWillUnmount() {
    const { setTimeoutId } = this.state;
    if(setTimeoutId) {
      clearTimeout(setTimeoutId)
    }
  }

  render() {
    return (
      <div>
        <h5>{ this.props.comment.name }</h5>
        { this.state.loading ? (
          <i className="fas fa-atom fa-spin" />
        ) : (
          <Email
            deleteComment={this.props.deleteComment}
            comment={ this.props.comment }
          />
        ) }
      </div>
    );
  }
}

export default Name;
