import * as types from './types';
import axios from 'axios';

export function updateTextInput (str) {
  return {
    type: types.UPDATE_TEXT_INPUT,
    data: str
  };
}

export function fetchRepos (searchTerm) {
  const url = `https://api.github.com/search/repositories?q=${searchTerm}`;

  return function (dispatch) {
    dispatch(fetchReposRequest());
    axios.get(url)
      .then(res => {
        dispatch(fetchReposSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchReposError(err));
      });
  };
}

export function fetchReposRequest () {
  return {
    type: types.FETCH_REPOS_REQUEST
  };
}

export function fetchReposSuccess (repos) {
  return {
    type: types.FETCH_REPOS_SUCCESS,
    data: repos
  };
}

export function fetchReposError (err) {
  return {
    type: types.FETCH_REPOS_ERROR,
    data: err
  };
}