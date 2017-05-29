import * as types from '../actions/types';

const initialState = {
    readMe: '',
    loading: false,
    error: null
};

function repoReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.FETCH_README_REQUEST) {
    newState.loading = true;
  }

  if (action.type === types.FETCH_README_SUCCESS) {
    let readMeString = new Buffer(String(action.data.content), 'base64').toString();
    newState.readMe = readMeString;
    newState.loading = false;
  }

  if (action.type === types.FETCH_README_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }

  return newState;
}

export default repoReducer;