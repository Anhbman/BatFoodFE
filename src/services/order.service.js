import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:8080/api/order';

class OrderService {
  create(data) {
    return axios.post(API_URL + '', data, {
      headers: authHeader()
    });
  }

  getRequestOrders() {
    return axios.get(API_URL + '/requestOrders', {
      headers: authHeader()
    });
  }

  responseFood(id) {
    return axios.put(API_URL + `/acceptFood/${id}`, {
      headers: authHeader()
    });
  }

}

export default new OrderService();