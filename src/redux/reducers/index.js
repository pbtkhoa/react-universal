import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authReducer from './authReducer';
import albumReducer from './albumReducer';

export default combineReducers({
  form: formReducer,
  loadingBar: loadingBarReducer,
  authReducer,
  albumReducer
});
