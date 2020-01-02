import React from 'react';

import Email from './Email';

class Name extends React.Component {
  state = {
    loading: true
  };

  render() {
    return (
      <div>
        { this.props.comment.name }
        { !this.state.loading && <Email comment={ this.props.comment } /> }
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }
}

export default Name;
