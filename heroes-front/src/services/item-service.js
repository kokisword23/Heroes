import axios from "axios";
import { getToken} from "../utils/jwt";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Authorization": 'Bearer ' + getToken()
  }
};

const itemService = {
  create: function(item) {
    return axios.post(
      "http://localhost:8080/api/items/create",
      item,
      axiosConfig
    );
  },

  getItem: function(itemName) {
    return axios.get(`http://localhost:8080/api/items/${itemName}`, axiosConfig);
  },
  
  getAll: function() {
    console.log(axiosConfig);
    return axios.get(`http://localhost:8080/api/items/merchant`, axiosConfig);
  },

  addItemToUser: function(id) {
    return axios.post(`http://localhost:8080/api/items/merchant/${id}`,"", axiosConfig);
  }
}; 

export default itemService;
