import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:8080/api/food';

class FoodService {
  create(data) {
    return axios.post(API_URL + '', data, {
      headers: authHeader()
    });
  }
}

export default new FoodService();