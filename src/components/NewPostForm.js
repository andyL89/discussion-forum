import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPostForm(props){
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    const timestamp = Date.now();
    const formattedTimeStamp = (new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
    props.onNewPostCreation({name: event.target.name.value,
                              title: event.target.title.value,
                              body: event.target.body.value,
                              voteScore: 0,
                              timeStamp: formattedTimeStamp,
                              edited: null,
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