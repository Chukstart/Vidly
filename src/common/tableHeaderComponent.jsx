import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    const { sortColumn: srtColumn, onSort } = this.props;

    const sortColumn = { ...srtColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };
  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <i aria-hidden="true" className="fa fa-sort-asc" />;
    return <i aria-hidden="true" className="fa fa-sort-desc" />;
  };
  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              className="clickable"
              onClick={() => this.raiseSort(column.path)}
              key={column.path || column.key}
            >
              {column.label} {this.renderSortIcon(column)}{" "}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
