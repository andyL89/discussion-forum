import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledForm = styled.div`
  border: 2px solid black;
  border-radius: 6px;
  background: rgba(255, 255, 255, .9);
  padding: 40px;
  width: 600px;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 225px;
    height: 300px;
    input {
      height: 30px;
      text-align: center;
      border: 1px solid black;
      border-radius: 5px;
    }
    textarea {
      height: 100px;
      width: 590px;
    }
    button {
      cursor: pointer;
      outline: none;
      margin-left: 20%;
      background: white;
      padding-top: 10px;
      padding-bottom: 10px;
      border: 2px solid black;
      width: 130px;
      font-size: 15px;
      font-weight: 900;
      color: black;
      border-radius: 5px;
      &:hover {
        background-color: rgb(255, 220, 0);
      }
    }
  }
`

function ReusableForm(props) {
  return (
    <>
      <StyledForm>
        <form onSubmit={props.formSubmissionHandler}>
          <input
            type='text'
            name='name'
            defaultValue= {props.name}
            placeholder='Username'
          />
          <input
            type='text'
            name='title'
            defaultValue={props.title}
            placeholder='Title' />
          <textarea
            name='body'
            defaultValue={props.body}
            placeholder='Body Text of Post' />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </StyledForm>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;