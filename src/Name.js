import React from 'react';

import Email from './Email';

class Name extends React.Component {
  state = {
    loading: true
  };

  render() {
    return (
      <div>
        <h5>{ this.props.comment.name }</h5>
        { this.state.loading ? (
          <i className="fas fa-atom fa-spin" />
        ) : (
          <Email comment={ this.props.comment } />
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

export default Name;
