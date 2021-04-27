import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;

  const currentState = {
    1: {name: 'User1',
    title: 'Unpopular Opinion',
    body: 'Music is dumb',
    voteScore: 0,
    id: 1 },
    2: {name: 'User2',
    title: 'Popular Opinion',
    body: 'Movies ROCK!',
    voteScore: 0,
    id: 2 }
  }

  const postData = {
    name: 'User1',
    title: 'A post about something',
    body: 'Blah Blah Blah amiright?',
    voteScore: 0,
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { name, title, body, voteScore, id } = postData;
    action = {
      type: 'ADD_POST',
      name: name,
      title: title,
      body: body,
      voteScore: voteScore,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        title: title,
        body: body,
        voteScore: voteScore,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {name: 'User2',
      title: 'Popular Opinion',
      body: 'Movies ROCK!',
      voteScore: 0,
      id: 2 }
    });
  });

  test('Should successfully upvote a post by 1', () => {
    action = {
      type: 'UPVOTE_POST',
      id:2
    };
    expect(postListReducer(currentState, action)).toEqual({
      1: {name: 'User1',
      title: 'Unpopular Opinion',
      body: 'Music is dumb',
      voteScore: 0,
      id: 1 },
      2: {name: 'User2',
      title: 'Popular Opinion',
      body: 'Movies ROCK!',
      voteScore: 1,
      id: 2 }
    });
  });

  test('Should successfully downvote a post by 1', () => {
    action = {
      type: 'DOWNVOTE_POST',
      id:1
    };
    expect(postListReducer(currentState, action)).toEqual({
      1: {name: 'User1',
      title: 'Unpopular Opinion',
      body: 'Music is dumb',
      voteScore: -1,
      id: 1 },
      2: {name: 'User2',
      title: 'Popular Opinion',
      body: 'Movies ROCK!',
      voteScore: 1,
      id: 2 }
    });
  });

});