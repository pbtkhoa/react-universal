import React from "react";
import PropTypes from "prop-types";

import AlBumListItem from "./Item";

const AlBumList = ({ albums }) => (
  <div>{albums && albums.map(album => <AlBumListItem album={album} key={album.id} />)}</div>
);

AlBumList.propTypes = {
  albums: PropTypes.array // eslint-disable-line
};

export default AlBumList;
