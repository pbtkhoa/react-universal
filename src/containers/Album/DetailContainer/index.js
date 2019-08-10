import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import AlbumDetail from "@src/components/Album/Detail";

import withAuth from "@src/utils/withAuth";

import { actGetDetail } from "@src/redux/actions/albumActions";

class AlbumDetailContainer extends React.Component {
  static initFetch = (store, { param }) => {
    return [store.dispatch(actGetDetail(param))];
  };

  componentDidMount() {
    const { match, getAlbum } = this.props;
    getAlbum(match.params.id);
  }

  render() {
    const { album } = this.props;
    return album ? <AlbumDetail album={album} /> : null;
  }
}

AlbumDetailContainer.propTypes = {
  match: PropTypes.object, // eslint-disable-line
  getAlbum: PropTypes.func.isRequired,
  album: PropTypes.object.isRequired // eslint-disable-line
};

const mapStateToProps = state => ({
  album: state.albumReducer.detail
});

const mapDispatchToProps = dispatch => ({
  getAlbum: id => dispatch(actGetDetail(id))
});

export default compose(
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AlbumDetailContainer);
