import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTableComponent from "./moviesTableComponent";
import Pagination from "../common/paginationComponent";
import ListGroup from "./listGroupComponent";
import { paginate } from "../utils/paginate";
// import { filter  filteredMovies } from "../utils/filter";
import SearchBox from "./searchBox";
import _ from "lodash";
import { Link } from "react-router-dom";
import { deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
class Movie extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    searchQuery: "",
    genres: [],
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount = () => {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  };

  getPagedData = (
    allmovies,
    sortColumn,
    pageSize,
    searchQuery,
    selectedGenre,
    currentPage
  ) => {
    let filteredMovies = allmovies;

    if (searchQuery)
      filteredMovies = allmovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filteredMovies = allmovies.filter(m => m.genre._id === selectedGenre._id);
    // const filteredMovies = filter(currentGenre, allmovies);
    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const movies = paginate(sorted, currentPage, pageSize);
    return { filteredMovies, movies };
  };

  handleDelete = id => {
    const newMovies = deleteMovie(id);

    this.setState({ movies: newMovies });
  };
  handleLike = id => {
    const movies = this.state.movies.map(m => {
      if (m._id === id) {
        if (!m.liked) {
          m.liked = true;
          return m;
        } else {
          m.liked = false;
          return m;
        }
      }
      return m;
    });
    this.setState({ movies });
  };
  handlePaginate = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  handleSort = path => {
    this.setState({ sortColumn: path });
  };
  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  render() {
    const {
      sortColumn,
      pageSize,
      currentPage,
      movies: allmovies,
      searchQuery,
      selectedGenre
    } = this.state;
    if (this.state.movies.length === 0)
      return <h2>There are no movies in the database</h2>;
    const { filteredMovies, movies } = this.getPagedData(
      allmovies,
      sortColumn,
      pageSize,
      searchQuery,
      selectedGenre,
      currentPage
    );

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            selectedItem={this.state.selectedGenre}
            items={this.state.genres}
            onFilter={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link to="/movies/new" className="btn btn-primary mt-3">
            New Movie
          </Link>
          <h2 className="mt-3 mb-2">
            Showing
            <span className="badge badge-primary">{movies.length}</span>
            movies in the database
          </h2>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTableComponent
            sortColumn={this.state.sortColumn}
            onSort={this.handleSort}
            onLiked={this.handleLike}
            movies={movies}
            onDelete={this.handleDelete}
          />
          <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            itemsCount={filteredMovies.length}
            movies={filteredMovies.movies}
            onPaginate={this.handlePaginate}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
