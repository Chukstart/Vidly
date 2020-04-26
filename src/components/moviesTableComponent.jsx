import React, { Component } from "react";
import Like from "../common/likeComponent";
import Table from "../common/tableComponent";
import { Link } from "react-router-dom";
class MoviesTable extends Component {
  render() {
    const { sortColumn, movies, onLiked, onDelete, onSort } = this.props;
    const columns = [
      {
        path: "title",
        label: "Title",
        content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "like",
        content: movie => (
          <Like liked={movie.liked} movie={movie} onLiked={onLiked} />
        )
      },
      {
        key: "delete",
        content: movie => (
          <button
            onClick={() => onDelete(movie._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        )
      }
    ];
    return (
      <Table
        sortColumn={sortColumn}
        onSort={onSort}
        columns={columns}
        data={movies}
        onLiked={onLiked}
        onDelete={onDelete}
      />
    );
  }
}

export default MoviesTable;
