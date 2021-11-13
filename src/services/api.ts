import axios from "axios";

const api = axios.create({
  baseURL: "https://test-birdie-backend.herokuapp.com/",
});

export default api;
