import axios from "../axios";
export default {
  userLogin(params) {
    return axios.get("/login", params);
  },
};
