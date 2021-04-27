import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPostForm(props){
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({name: event.target.name.value,
                              title: event.target.title.value,
                              body: event.target.body.value,
                              voteScore: 0,
                              id: v4()});
  }
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Post" />
    </>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;