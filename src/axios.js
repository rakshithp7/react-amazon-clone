import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-amazon-clone-backend.herokuapp.com/",
});

export default instance;
