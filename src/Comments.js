import React from 'react';

import Comment from './Comment';

class Comments extends React.Component {
  state = {
    comments: null,
    loading: true
  }

  render() {
    const { loading, comments } = this.state;

    if (loading) {
      return <h1>Carregando...</h1>;
    }

    return (
      <ul>
        { comments.map((comment) => <Comment key={ comment.id } comment={ comment }/>) }
      </ul>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => this.setState({ comments: json, loading: false }))
  }
}

export default Comments;
