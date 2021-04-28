import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import styled from 'styled-components';
import Button from './defaults/Button';

const StyledButton = styled(Button)`
  cursor: pointer;
  outline: none;
  background: white;
  margin-top: 10px;
  margin-left: 45.5%;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 2px solid black;
  width: 130px;
  font-size: 15px;
  font-weight: 900;
  color: black;
  border-radius: 5px;
  &:hover {
    background-color: rgb(255, 220, 0);
  }
`

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({ selectedPost: selectedPost });
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, name, title, body, voteScore, timeStamp, edited } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      name: name,
      title: title,
      body: body,
      voteScore: voteScore,
      timeStamp: timeStamp,
      edited: edited,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, name, title, body, voteScore, timeStamp, edited } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      name: name,
      title: title,
      body: body,
      voteScore: voteScore,
      timeStamp: timeStamp,
      edited: edited
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleUpvotingPost = (id) => {
    const { dispatch } = this.props;
    const chosenPost = this.props.masterPostList[id];
    const action = {
      type: 'UPVOTE_POST',
      id: id
    }
    dispatch(action);
    if (this.setState.selectedPost != null) {
      this.setState({selectedPost: chosenPost})
    } else {
        this.setState.selectedState = null;
    }
  };

  handleDownvotingPost = (id) => {
    const { dispatch } = this.props;
    const chosenPost = this.props.masterPostList[id];
    const action = {
      type: 'DOWNVOTE_POST',
      id: id
    }
    dispatch(action);
    if (this.setState.selectedPost != null) {
      this.setState({selectedPost: chosenPost})
    } else {
      this.setState.selectedState = null;
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditPostForm post = {this.state.selectedPost}
                              onEditPost = {this.handleEditingPostInList} />
                              buttonText = 'Return to Forum';

    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post = {this.state.selectedPost}
                              onClickingDelete = {this.handleDeletingPost}
                              onClickingEdit = {this.handleEditClick}
                              onClickingUpvote = {this.handleUpvotingPost}
                              onClickingDownvote = {this.handleDownvotingPost} />
                              buttonText = 'Return to Forum';

    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation = {this.handleAddingNewPostToList} />
                              buttonText = 'Return to Forum';

    } else {
      currentlyVisibleState = <PostList postList = {this.props.masterPostList}
                              onPostSelection = {this.handleChangingSelectedPost}
                              onClickingUpvote = {this.handleUpvotingPost}
                              onClickingDownvote = {this.handleDownvotingPost} />;
                              buttonText = 'Create new Post';
    }
    return (
      <>
        {currentlyVisibleState}
        <StyledButton onClick = {this.handleClick} text = {buttonText}/>
      </>
    );
  }

}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {

  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;