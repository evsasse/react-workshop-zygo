import React from 'react';

import Body from './Body';

class Email extends React.Component {
  state = {
    loading: true
  };

  render() {
    return (
      <div>
        <div className="small text-muted">{ this.props.comment.email }</div>
        { this.state.loading ? (
          <i className="fas fa-atom fa-spin" />
        ) : (
          <Body comment={ this.props.comment } />
        ) }
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
