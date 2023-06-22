import axios from "axios";

const API_URL = "http://localhost:4000";

const getAll = async () => {
  const res = await axios.get(API_URL + "/genres");
  return res.data;
};

const genresService = {
  getAll,
};

export default genresService;
