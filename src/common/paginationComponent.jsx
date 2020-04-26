import React, { Component } from "react";
import _ from "lodash";
class Pagination extends Component {
  render() {
    const { pageSize, itemsCount, currentPage, onPaginate } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map(p => (
            <li
              key={p}
              className={currentPage === p ? "page-item active" : "page-item"}
            >
              <a onClick={() => onPaginate(p)} className="page-link">
                {p}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
