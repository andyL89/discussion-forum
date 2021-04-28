/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  const { name, title, body, voteScore, timeStamp, edited, id } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          title: title,
          body: body,
          voteScore: voteScore,
          timeStamp: timeStamp,
          edited: edited,
          id: id
        }
      });
    case 'DELETE_POST':
      let newState = { ...state };
      delete newState[id];
      return newState;
    case 'UPVOTE_POST':
      let upvoteState = { ...state };
      upvoteState[id].voteScore++;
      return upvoteState;
    case 'DOWNVOTE_POST':
      let downvoteState = { ...state };
      downvoteState[id].voteScore--;
      return downvoteState;
  default:
    return state;
  }
};