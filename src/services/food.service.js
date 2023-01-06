import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:8080/api/food';

class FoodService {
  create(data) {
    return axios.post(API_URL + '', data, {
      headers: authHeader()
    });
  }

  getAll() {
    return axios.get(API_URL, {
      headers: authHeader()
    });
  }

  getFoodById(data) {
    return axios.get(API_URL + `/${{data}}`, {
      headers: authHeader()
    })
  }
}

export default new FoodService();