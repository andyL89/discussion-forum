import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Button from './defaults/Button';

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
    background-color: rgb(255, 111, 0);
    color: white;
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
    background-color: rgb(0, 128, 255);
    color: white;
  }
`
const StyledPost = styled.div`
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const StyledVotes = styled.div`
  margin-top: 20px;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
const StyledText = styled.div`
  font-size: 25px;
  font-weight: 700;
`

function Post(props){
  return (
    <>
      <StyledPost onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.title} - {props.name}</h3>
        <p>{props.body}</p>
        <p>{props.timeStamp}</p>
        {props.edited &&
        <p>Last edited: {props.edited} </p>}
      </StyledPost>
      <StyledVotes>
        <StyledDownvote onClick={() => props.whenDownvoteClicked(props.id) } text = "Downvote"/>
            <StyledText> &nbsp;&nbsp;{props.voteScore}&nbsp;&nbsp; </StyledText>
        <StyledUpvote onClick={() => props.whenUpvoteClicked(props.id) } text = "Upvote"/>
      </StyledVotes>
      <hr/>
    </>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  voteScore: PropTypes.number,
  timeStamp: PropTypes.string,
  edited: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
};

export default Post;