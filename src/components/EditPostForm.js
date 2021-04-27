import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditPostForm (props) {
  const { post } = props;
  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({name: event.target.name.value, title: event.target.title.value, body: event.target.body.value, id: post.id});
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