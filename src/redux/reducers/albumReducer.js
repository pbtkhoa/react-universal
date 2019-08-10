import { GET_ALBUM_LIST, GET_ALBUM_DETAIL } from "../actions/albumActions";
import initialState from "../initialState";

export default (state = initialState.album, action) => {
  switch (action.type) {
    case GET_ALBUM_LIST:
      return {
        ...state,
        list: action.albums
      };
    case GET_ALBUM_DETAIL:
      return {
        ...state,
        detail: action.album
      };
    default:
      return { ...state };
  }
};
