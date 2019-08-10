import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import AlbumList from "@src/components/Album/List";

import withAuth from "@src/utils/withAuth";

import { actGetList } from "@src/redux/actions/albumActions";

class AlbumListContainer extends React.Component {
  static initFetch = store => {
    return [store.dispatch(actGetList())];
  };

  componentDidMount() {
    const { getAlbums } = this.props;
    getAlbums();
  }

  render() {
    const { albums } = this.props;
    return <AlbumList albums={albums} />;
  }
}

AlbumListContainer.propTypes = {
  getAlbums: PropTypes.func.isRequired,
  albums: PropTypes.array // eslint-disable-line
};

const mapStateToProps = state => ({
  albums: state.albumReducer.list
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(actGetList())
});

export default compose(
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AlbumListContainer);
