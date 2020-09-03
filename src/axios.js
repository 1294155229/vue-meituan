import axios from "axios";
axios.defaults.baseURL = "http://api.duyiedu.com/api/meituan";
axios.interceptors.request.use((config) => {
  config.appkey = "1294155229_1580179765723";
  console.log(config);
  return config;
});
export default axios;
