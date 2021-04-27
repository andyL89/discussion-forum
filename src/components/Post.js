import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.title} - {props.name}</h3>
        <p>{props.body}</p>
        <button> Upvote </button>
          {props.voteScore}
        <button> Downvote </button>
        <hr/>
      </div>
    </>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  voteScore: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
};

export default Post;