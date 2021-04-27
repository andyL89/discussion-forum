import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledList = styled.div`
  background: rgba(255, 255, 255, .8);
  width: 60%;
  margin: auto;
  border-radius: 5px;
`

function PostList(props) {
  return (
    <>
      <StyledList>
        {Object.values(props.postList).map((post) =>
          <Post
            whenPostClicked={props.onPostSelection}
            whenUpvoteClicked={props.onClickingUpvote}
            whenDownvoteClicked={props.onClickingDownvote}
            name={post.name}
            title={post.title}
            body={post.body}
            voteScore={post.voteScore}
            id={post.id}
            key={post.id} />
        )}
      </StyledList>
    </>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func,
  onClickingUpvote: PropTypes.func,
  onClickingDownvote: PropTypes.func
};

export default PostList;