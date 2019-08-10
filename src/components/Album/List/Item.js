import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AlbumListItem = ({ album }) => (
  <div>
    <section>
      <div>
        <img url={album.image} />
      </div>
      <div>
        <Link to={`/album/${album.id}`}>{album.title}</Link>
        <p>{album.artist}</p>
      </div>
    </section>
  </div>
);

AlbumListItem.propTypes = {
  album: PropTypes.object.isRequired // eslint-disable-line
};

export default AlbumListItem;
