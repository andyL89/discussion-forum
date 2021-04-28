import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditPostForm (props) {
  const { post } = props;
  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    const timestamp = Date.now();
    const editedTimeStamp = (new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
    props.onEditPost({name: event.target.name.value, title: event.target.title.value, body: event.target.body.value, timeStamp: post.timeStamp, voteScore: post.voteScore, edited: editedTimeStamp, id: post.id});
  }
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post" />
    </>
  );
}

EditPostForm.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func
};

export default EditPostForm;