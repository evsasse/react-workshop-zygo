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
      <div className="my-5">
        <div>
          { comments.map((comment) => <Comment key={ comment.id } comment={ comment }/>) }
        </div>
        <div class="text-center">
          <button className="btn btn-sm btn-primary mx-2">
            Anterior
          </button>
          <button className="btn btn-sm btn-primary mx-2">
            Próximo
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => this.setState({ comments: json.slice(0,3), loading: false }))
  }
}

export default Comments;
