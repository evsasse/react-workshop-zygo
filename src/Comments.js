import React from 'react';

import Comment from './Comment';

class Comments extends React.Component {
  state = {
    comments: null,
    loading: true,
    pageNumber: 0
  }

  changePage(number) {
    this.setState({ pageNumber: number });
  }

  render() {
    const { loading, comments, pageNumber } = this.state;

    if (loading) {
      return <h1>Carregando...</h1>;
    }

    const pageSize = 3;
    const pageStart = pageNumber * pageSize;
    const pageEnd = pageStart + pageSize;
    const pageComments = comments.slice(pageStart, pageEnd);
    const lastPage = parseInt(comments.length / pageSize);

    return (
      <div className="my-5">
        <div>
          { pageComments.map((comment) => <Comment key={ comment.id } comment={ comment }/>) }
        </div>
        <div className="text-center">
          <button
            disabled={ pageNumber === 0 }
            onClick={ () => this.changePage(pageNumber - 1) }
            className="btn btn-sm mx-2 btn-primary"
          >
            Anterior
          </button>
          { pageNumber + 1 }
          /
          { lastPage + 1 }
          <button
            disabled={ pageNumber === lastPage }
            onClick={ () => this.changePage(pageNumber + 1) }
            className="btn btn-sm btn-primary mx-2"
          >
            Próximo
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => this.setState({ comments: json.slice(0, 10), loading: false }))
  }
}

export default Comments;
