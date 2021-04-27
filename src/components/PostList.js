import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";


function PostList(props) {
  return (
    <>
      <hr />
      {Object.values(props.postList).map((post) =>
        <Post
          whenPostClicked={props.onPostSelection}
          name={post.name}
          title={post.title}
          body={post.body}
          voteScore={post.voteScore}
          id={post.id}
          key={post.id} />
      )}
    </>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;