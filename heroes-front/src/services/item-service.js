import axios from "axios";
import { getToken} from "../utils/jwt";

function getAxiosConfig() {
  return {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Authorization": 'Bearer ' + getToken()
    }
  };
}


const itemService = {
  create: function(item) {
    return axios.post(
      "http://localhost:8080/api/items/create",
      item,
      getAxiosConfig()
    );
  },

  getItem: function(itemName) {
    return axios.get(`http://localhost:8080/api/items/${itemName}`, getAxiosConfig());
  },
  
  getAll: function() {
    return axios.get(`http://localhost:8080/api/items/merchant`, getAxiosConfig());
  },

  addItemToUser: function(id) {
    return axios.post(`http://localhost:8080/api/items/merchant/${id}`,"", getAxiosConfig());
  }
}; 

export default itemService;
