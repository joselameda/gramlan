import axios from 'axios';
import { apiUrl } from '../config/paths';
import { userInfo } from '../mockData';

class Api {
  static async fetchBrands() {
    const response = await userInfo;
    return response.data;
  }
}

export default Api;
