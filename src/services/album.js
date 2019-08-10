import axios from "@src/configs/axios";

class AlbumService {
  /**
   * Albums
   */
  getList = () => {
    return axios
      .get("http://5d4b03c900dbb1001487973b.mockapi.io/albums")
      .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)));
  };

  /**
   * Album
   */
  getDetail = id => {
    return axios
      .get(`http://5d4b03c900dbb1001487973b.mockapi.io/albums/${id}`)
      .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)));
  };
}

export default new AlbumService();
