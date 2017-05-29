import * as types from '../actions/types';

const initialState = {
    textInput: '',
    results: [],
    loading: false,
    error: null
};

function searchReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.UPDATE_TEXT_INPUT) {
    newState.textInput = action.data;
  }

  if (action.type === types.FETCH_REPOS_REQUEST) {
    newState.loading = true;
  }

  if (action.type === types.FETCH_REPOS_SUCCESS) {
    newState.results = action.data.items;
    newState.textInput = '';
    newState.loading = false;
  }

  if (action.type === types.FETCH_REPOS_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }

  return newState;
}

export default searchReducer;