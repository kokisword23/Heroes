import axios from "axios";
import { getToken} from "../utils/jwt";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Authorization": 'Bearer ' + getToken()
  }
};

const heroService = {
  create: function(hero) {
     localStorage.setItem("hero", hero.name);

    return axios.post(
      "http://localhost:8080/api/heroes/create",
      hero,
      axiosConfig
    );
  }
};

export default heroService;
