import Loadable from "react-loadable";
import LoadableProgressContainer from "./containers/common/LoadableProgressContainer";

const Home = Loadable({
  loader: () => import("./containers/HomeContainer"),
  delay: 0,
  loading: LoadableProgressContainer
});

const AlbumList = Loadable({
  loader: () => import("./containers/Album/ListContainer"),
  delay: 0,
  loading: LoadableProgressContainer
});

const AlbumDetail = Loadable({
  loader: () => import("./containers/Album/DetailContainer"),
  delay: 0,
  loading: LoadableProgressContainer
});

const Login = Loadable({
  loader: () => import("./containers/Auth/LoginContainer"),
  delay: 0,
  loading: LoadableProgressContainer
});

export default [
  {
    component: Home,
    path: "/",
    exact: true
  },
  {
    component: AlbumList,
    path: "/album",
    exact: true
  },
  {
    component: AlbumDetail,
    path: "/album/:id",
    exact: true
  },
  {
    component: Login,
    path: "/auth/login",
    exact: true
  }
];
