import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const PostCard = styled.div`
  margin: auto;
  max-width: 500px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  h1 {
    margin-top: 0px;
  }
  button {
    cursor: pointer;
    outline: none;
    background: white;
    padding-top: 5px;
    padding-bottom: 5px;
    border: 2px solid black;
    width: 100px;
    font-size: 15px;
    font-weight: 900;
    color: black;
    border-radius: 5px;
  }
`

function PostDetail(props){
  const { post, onClickingDelete, onClickingUpvote, onClickingDownvote  } = props;

  return (
    <PostCard>
      <h1>{post.title}</h1>
      <h3>{post.name}</h3>
      <p>{post.body}</p>
      <p>{post.voteScore}</p>
      <button onClick={() => onClickingUpvote(post.id) }>Upvote</button>
      <button onClick={() => onClickingDownvote(post.id) }>Downvote</button>
      <button onClick={ props.onClickingEdit }>Edit</button>
      <button onClick={()=> onClickingDelete(post.id) }>Delete</button>
    </PostCard>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingUpvote: PropTypes.func,
  onClickingDownvote: PropTypes.func
};

export default PostDetail;