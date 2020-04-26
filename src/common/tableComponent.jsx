import React from "react";
import TableHeader from "../common/tableHeaderComponent";

import TableBody from "../common/tableBodyComponent";

const Table = ({ sortColumn, onSort, columns, data, onDelete, onLiked }) => {
  return (
    <table className="table">
      <TableHeader sortColumn={sortColumn} onSort={onSort} columns={columns} />
      <TableBody
        columns={columns}
        data={data}
        onLiked={onLiked}
        onDelete={onDelete}
      />
    </table>
  );
};

export default Table;
