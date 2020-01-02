import React from "react";

import Comment from "./Comment";

const pageSize = 4;

class Comments extends React.Component {
  state = {
    comments: [],
    loading: true,
    pageNumber: 0,
    error: null,
  };

  changePage(number) {
    this.setState({ pageNumber: number });
  }

  deleteComment(id) {
    const { pageNumber, comments } = this.state;

    const newComments = comments.filter(comment => comment.id !== id);
    const newPageNumber = Math.min(pageNumber, this.lastPageNumber(newComments));

    this.setState({ comments: newComments, pageNumber: newPageNumber });
  }

  lastPageNumber(comments) {
    return parseInt((comments.length - 1) / pageSize);
  }

  componentDidMount() {
    fetch("https://react-workshop-zygo-api.herokuapp.com/")
      .then(response => response.json())
      .then(json => this.setState({ comments: json.slice(0,10), loading: false }))
  }

  render() {
    const { loading, comments, pageNumber, error } = this.state;

    if (loading) {
      return (
        <h3 className="text-center my-5">
          <i className="fas fa-atom fa-spin fa-4x" />
          <br />
          <br />
          Carregando...
        </h3>
      );
    }

    if (error) {
      return <h3 className="text-center my-5">Erro ao carregar :(</h3>;
    }

    if (comments.length === 0) {
      return <h3 className="text-center my-5">Nenhum comentário</h3>;
    }

    const pageStart = pageNumber * pageSize;
    const pageEnd = pageStart + pageSize;
    const pageComments = comments.slice(pageStart, pageEnd);
    const lastPage = this.lastPageNumber(comments);

    return (
      <div className="my-5">
        <div className="row">
          {pageComments.map(comment => (
            <div
              key={comment.id}
              className="col-12 col-lg-6"
            >
              <Comment
                deleteComment={this.deleteComment.bind(this)}
                comment={comment}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            disabled={pageNumber === 0}
            onClick={() => this.changePage(pageNumber - 1)}
            className="btn btn-sm mx-2 btn-primary"
          >
            Anterior
          </button>

          <div className="btn btn-sm btn-outline-primary">
            {pageNumber + 1} / {lastPage + 1}
          </div>

          <button
            disabled={pageNumber === lastPage}
            onClick={() => this.changePage(pageNumber + 1)}
            className="btn btn-sm btn-primary mx-2"
          >
            Próximo
          </button>
        </div>
      </div>
    );
  }
}

export default Comments;
