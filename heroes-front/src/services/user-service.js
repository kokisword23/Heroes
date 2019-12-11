import axios from "axios";
import { getToken, saveToken } from "../utils/jwt";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*"
  }
};

const userService = {
  register: function(user) {
    return axios.post(
      "http://localhost:8080/api/users/register",
      user,
      axiosConfig
    );
  },

  login: function(user) {
    if (getToken()) {
      axiosConfig.headers["Authorization"] = "Bearer " + getToken();
    }

    return axios
      .post("http://localhost:8080/login", user, axiosConfig)
      .then((data, status, request) => {
        saveToken(data.data);
      });
  },
  

  logout: function() {
     localStorage.clear();
  }
};

export default userService;
