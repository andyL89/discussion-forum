import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Button from './defaults/Button';

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
const StyledDownvote = styled(Button)`
  cursor: pointer;
  outline: none;
  background: white;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 2px solid black;
  width: fit-content;
  font-size: 15px;
  font-weight: 900;
  color: black;
  border-radius: 5px;
  &:hover {
    background-color: rgb(255, 0, 0);
    color: white;
  }
`
const StyledUpvote = styled(Button)`
  cursor: pointer;
  outline: none;
  background: white;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 2px solid black;
  width: fit-content;
  font-size: 15px;
  font-weight: 900;
  color: black;
  border-radius: 5px;
  &:hover {
    background-color: rgb(0, 128, 255);
    color: white;
  }
`

function PostDetail(props){
  const { post, onClickingDelete, onClickingUpvote, onClickingDownvote } = props;

  return (
    <PostCard>
      <h1>{post.title}</h1>
      <h3>{post.name}</h3>
      <p>{post.body}</p>
      <p>Score: {post.voteScore}</p>
      <p>Time Posted: {post.timeStamp}</p>
      {post.edited &&
        <p>Last edited: {post.edited} </p>}
      <StyledDownvote onClick={() => onClickingDownvote(post.id) } text = "Downvote"/>
      <StyledUpvote onClick={() => onClickingUpvote(post.id) } text = "Upvote"/>
      <button onClick={ props.onClickingEdit }>Edit</button>
      <button onClick={() => onClickingDelete(post.id) }>Delete</button>
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