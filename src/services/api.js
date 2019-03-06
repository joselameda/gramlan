import axios from 'axios';
import { apiUrl } from '../config/paths';

class Api {
  static async fetchBrands() {
    const response = await axios.get(`${apiUrl}/brands`);
    return response.data.data;
  }
}

export default Api;
