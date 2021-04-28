import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Check that initial state of postListReducer matches root reducer', () => {
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_POST action works for postListReducer and root reducer', () => {
    const action = {
      type: 'ADD_POST',
      name: 'User1',
      title: 'Unpopular Opinion',
      body: 'Music is dumb',
      voteScore: 0,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterPostList: {},
      formVisibleOnPage: false
    });
  });

});