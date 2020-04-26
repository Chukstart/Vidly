import React from "react";

const Like = props => {
  let classes =
    props.liked === true ? "clickable fa fa-heart" : "clickable fa fa-heart-o";

  return (
    <i
      className={classes}
      aria-hidden="true"
      onClick={() => props.onLiked(props.movie._id)}
    />
  );
};

export default Like;
