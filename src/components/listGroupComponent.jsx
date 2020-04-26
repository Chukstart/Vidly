import React from "react";
import { genres } from "../services/fakeGenreService";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onFilter
}) => {
  return (
    <ul className="list-group mt-3">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          onClick={() => onFilter(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
export default ListGroup;
