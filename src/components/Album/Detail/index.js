import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import img from "@src/assets/img/img.jpg";

const AlbumDetail = ({ album }) => (
  <div>
    <section>
      <img src={img} style={{ width: "200px" }} alt="img" />
      <div>
        <img url={album.image} alt={album.title} />
      </div>
      <div>
        <p>{album.title}</p>
        <p>{album.artist}</p>
      </div>
      <Link to="/album">Back</Link>
    </section>
  </div>
);

AlbumDetail.propTypes = {
  album: PropTypes.object.isRequired // eslint-disable-line
};

export default AlbumDetail;
