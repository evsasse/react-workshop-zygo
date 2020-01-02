import React from 'react';

import Body from './Body';

class Email extends React.Component {
  state = {
    loading: true
  };

  render() {
    return (
      <div>
        { this.props.comment.email }
        { !this.state.loading && <Body comment={ this.props.comment } /> }
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }
}

export default Email;
