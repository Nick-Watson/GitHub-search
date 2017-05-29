import {combineReducers} from 'redux';
import searchReducer from './search.reducer';
import repoReducer from './repo.reducer';

export default combineReducers({
  search: searchReducer,
  repo: repoReducer
});