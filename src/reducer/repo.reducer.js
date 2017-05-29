import * as types from '../actions/types';

const initialState = {
    readMe: '',
    loading: false,
    error: null
};

function repoReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  return newState;
}

export default repoReducer;