import axios from "axios";
import { getToken } from "../utils/jwt";

function getAxiosConfig() {
  return {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Authorization": 'Bearer ' + getToken()
    }
  };
}

const heroService = {
  create: function(hero) {
    localStorage.setItem("hero", hero.name);

    return axios.post(
      "http://localhost:8080/api/heroes/create",
      hero,
      getAxiosConfig()
    );
  },

  getHeroName: function () {
    return localStorage.getItem('hero');
  },

  getHero: function(heroName) {
    return axios.get(`http://localhost:8080/api/heroes/details/${heroName}`, getAxiosConfig());
  },

  getOpponents: function () {
    return axios.get("http://localhost:8080/api/heroes/arena", getAxiosConfig());
  },

  fight: function (heroName) {
    return axios.get(`http://localhost:8080/api/heroes/arena/${heroName}`, getAxiosConfig());
  },
  winner: function(heroName) {
    return axios.post(`http://localhost:8080/api/heroes/arena/${heroName}`,"", getAxiosConfig());
  }
};

export default heroService;
