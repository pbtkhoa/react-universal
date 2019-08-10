import album from "@src/services/album";

export const GET_ALBUM_LIST = "GET_ALBUM_LIST";
export const GET_ALBUM_DETAIL = "GET_ALBUM_DETAIL";

export const actGetList = () => dispatch =>
  album.getList().then(albums =>
    dispatch({
      type: GET_ALBUM_LIST,
      albums
    })
  );

export const actGetDetail = id => dispatch =>
  album.getDetail(id).then(data =>
    dispatch({
      type: GET_ALBUM_DETAIL,
      album: data
    })
  );
